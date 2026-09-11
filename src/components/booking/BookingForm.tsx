"use client";

import { useEffect, useState, type FormEvent } from "react";
import {
  collection,
  doc,
  onSnapshot,
  query,
  runTransaction,
  serverTimestamp,
  where,
} from "firebase/firestore";
import emailjs from "@emailjs/browser";
import { db } from "@/lib/firebase";
import { salon } from "@/data/salon";
import { emailjsConfig } from "@/data/firebase-config";
import { formatDateLabel, getSlotsForDate } from "@/lib/schedule";

function toIsoDate(date: Date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function todayIsoDate() {
  return toIsoDate(new Date());
}

function shiftDate(dateIso: string, days: number) {
  const [year, month, day] = dateIso.split("-").map(Number);
  return toIsoDate(new Date(year, month - 1, day + days));
}

type SubmitState = "idle" | "submitting" | "error" | "slot-taken";

export function BookingForm() {
  const [date, setDate] = useState(todayIsoDate());
  const [takenSlots, setTakenSlots] = useState<Set<string>>(new Set());
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [confirmedSlot, setConfirmedSlot] = useState<string | null>(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState<string>(salon.pricing[0]?.label ?? "");
  const [message, setMessage] = useState("");
  const [state, setState] = useState<SubmitState>("idle");

  const daySlots = getSlotsForDate(date);

  useEffect(() => {
    const slotsQuery = query(collection(db, "slots"), where("date", "==", date));

    const unsubscribe = onSnapshot(slotsQuery, (snapshot) => {
      const taken = new Set<string>();
      snapshot.forEach((docSnapshot) => {
        const data = docSnapshot.data();
        if (data.status !== "declined") {
          taken.add(data.time);
        }
      });
      setTakenSlots(taken);
    });

    return () => unsubscribe();
  }, [date]);

  function openSlot(slot: string) {
    setSelectedSlot(slot);
    setState("idle");
    setFirstName("");
    setLastName("");
    setEmail("");
    setService(salon.pricing[0]?.label ?? "");
    setMessage("");
  }

  function closeModal() {
    setSelectedSlot(null);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selectedSlot) return;

    setState("submitting");

    const time = selectedSlot;
    const bookingRef = doc(collection(db, "bookings"));
    const slotRef = doc(db, "slots", `${date}_${time}`);
    const name = `${firstName} ${lastName}`.trim();

    try {
      await runTransaction(db, async (transaction) => {
        const slotSnapshot = await transaction.get(slotRef);

        if (slotSnapshot.exists() && slotSnapshot.data().status !== "declined") {
          throw new Error("SLOT_TAKEN");
        }

        transaction.set(bookingRef, {
          name,
          email,
          service,
          date,
          time,
          message,
          status: "pending",
          createdAt: serverTimestamp(),
        });

        transaction.set(slotRef, {
          date,
          time,
          status: "pending",
          bookingId: bookingRef.id,
        });
      });

      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        { name, email, service, date, time, message },
        { publicKey: emailjsConfig.publicKey }
      );

      setSelectedSlot(null);
      setConfirmedSlot(time);
    } catch (error) {
      if (error instanceof Error && error.message === "SLOT_TAKEN") {
        setSelectedSlot(null);
        setState("slot-taken");
      } else {
        console.error("Booking submission failed", error);
        setState("error");
      }
    }
  }

  return (
    <div>
      {confirmedSlot && (
        <div className="mb-8 border border-white/10 bg-ink-soft px-6 py-5 text-center">
          <p className="text-lg text-paper">
            Demande envoyée pour {formatDateLabel(date)} à {confirmedSlot}.
          </p>
          <p className="mt-2 text-sm text-paper/70">
            Vous allez recevoir un email de confirmation rapidement. Vous
            pouvez aussi appeler le salon au{" "}
            <a href={salon.phone.href} className="hover:text-barber-red">
              {salon.phone.display}
            </a>{" "}
            pour prévenir que vous avez réservé et accélérer les choses.
          </p>
        </div>
      )}

      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => setDate((current) => shiftDate(current, -1))}
          disabled={date <= todayIsoDate()}
          className="rounded-sm border border-paper/30 px-4 py-2 text-sm text-paper transition-colors hover:border-barber-red disabled:opacity-30"
          aria-label="Jour précédent"
        >
          ←
        </button>

        <div className="grid gap-2 text-center">
          <p className="text-lg capitalize text-paper">{formatDateLabel(date)}</p>
          <input
            type="date"
            min={todayIsoDate()}
            value={date}
            onChange={(event) => setDate(event.target.value)}
            className="border border-white/15 bg-ink px-3 py-1.5 text-sm text-paper focus:border-barber-red focus:outline-none"
          />
        </div>

        <button
          type="button"
          onClick={() => setDate((current) => shiftDate(current, 1))}
          className="rounded-sm border border-paper/30 px-4 py-2 text-sm text-paper transition-colors hover:border-barber-red"
          aria-label="Jour suivant"
        >
          →
        </button>
      </div>

      {state === "slot-taken" && (
        <p className="mt-6 text-center text-sm text-barber-red">
          Ce créneau vient d&apos;être pris, choisissez-en un autre.
        </p>
      )}

      {daySlots.length === 0 ? (
        <p className="mt-10 text-center text-paper/60">
          Le salon est fermé ce jour-là. Choisissez une autre date.
        </p>
      ) : (
        <div className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-4">
          {daySlots.map((slot) => {
            const isTaken = takenSlots.has(slot);

            return (
              <button
                key={slot}
                type="button"
                disabled={isTaken}
                onClick={() => openSlot(slot)}
                className={`border px-3 py-3 text-sm transition-colors ${
                  isTaken
                    ? "slot-hatched cursor-not-allowed border-barber-red/40 text-paper/40"
                    : "border-white/20 text-paper hover:border-barber-red hover:bg-barber-red/10"
                }`}
              >
                {slot}
              </button>
            );
          })}
        </div>
      )}

      {selectedSlot && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 px-4">
          <div className="w-full max-w-md border border-white/10 bg-ink-soft px-6 py-7 sm:px-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs tracking-[0.2em] text-barber-red uppercase">
                  {formatDateLabel(date)}
                </p>
                <p className="mt-1 text-2xl text-paper">{selectedSlot}</p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                aria-label="Fermer"
                className="text-paper/60 hover:text-paper"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm text-paper/80">
                  Nom
                  <input
                    required
                    type="text"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    className="border border-white/15 bg-ink px-4 py-3 text-paper focus:border-barber-red focus:outline-none"
                  />
                </label>

                <label className="grid gap-2 text-sm text-paper/80">
                  Prénom
                  <input
                    required
                    type="text"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    className="border border-white/15 bg-ink px-4 py-3 text-paper focus:border-barber-red focus:outline-none"
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm text-paper/80">
                Email
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="border border-white/15 bg-ink px-4 py-3 text-paper focus:border-barber-red focus:outline-none"
                />
              </label>

              <label className="grid gap-2 text-sm text-paper/80">
                Prestation
                <select
                  required
                  value={service}
                  onChange={(event) => setService(event.target.value)}
                  className="border border-white/15 bg-ink px-4 py-3 text-paper focus:border-barber-red focus:outline-none"
                >
                  {salon.pricing.map((item) => (
                    <option key={item.id} value={item.label}>
                      {item.label} — {item.price}€
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2 text-sm text-paper/80">
                Message (optionnel)
                <textarea
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  rows={3}
                  className="border border-white/15 bg-ink px-4 py-3 text-paper focus:border-barber-red focus:outline-none"
                />
              </label>

              {state === "error" && (
                <p className="text-sm text-barber-red">
                  Une erreur est survenue, réessayez ou appelez directement le
                  salon.
                </p>
              )}

              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={state === "submitting"}
                  className="flex-1 rounded-sm bg-barber-red px-6 py-3 text-sm tracking-[0.15em] text-paper uppercase transition-colors hover:bg-barber-red/85 disabled:opacity-60"
                >
                  {state === "submitting" ? "Envoi..." : "Confirmer"}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-sm border border-paper/40 px-6 py-3 text-sm tracking-[0.15em] text-paper uppercase transition-colors hover:border-paper"
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

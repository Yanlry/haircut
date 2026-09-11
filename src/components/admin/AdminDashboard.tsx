"use client";

import { useEffect, useMemo, useState } from "react";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  deleteDoc,
  doc,
  Timestamp,
} from "firebase/firestore";
import { signOut } from "firebase/auth";
import emailjs from "@emailjs/browser";
import { auth, db } from "@/lib/firebase";
import { emailjsConfig } from "@/data/firebase-config";
import { formatDateLabel } from "@/lib/schedule";

type BookingStatus = "pending" | "confirmed" | "declined";

type Booking = {
  id: string;
  name: string;
  email: string;
  service: string;
  date: string;
  time: string;
  message: string;
  status: BookingStatus;
  createdAt: Timestamp | null;
};

type Filter = "pending" | "confirmed" | "declined" | "all";

const filterLabels: Record<Filter, string> = {
  pending: "En attente",
  confirmed: "Confirmées",
  declined: "Refusées",
  all: "Toutes",
};

const statusBadgeStyles: Record<BookingStatus, string> = {
  pending: "bg-paper/10 text-paper/80",
  confirmed: "bg-emerald-400/15 text-emerald-400",
  declined: "bg-barber-red/15 text-barber-red",
};

const statusBorderStyles: Record<BookingStatus, string> = {
  pending: "border-l-paper/40",
  confirmed: "border-l-emerald-400",
  declined: "border-l-barber-red",
};

const statusLabels: Record<BookingStatus, string> = {
  pending: "En attente",
  confirmed: "Confirmée",
  declined: "Refusée",
};

export function AdminDashboard() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<Filter>("pending");

  useEffect(() => {
    const bookingsQuery = query(
      collection(db, "bookings"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(bookingsQuery, (snapshot) => {
      setBookings(
        snapshot.docs.map((docSnapshot) => {
          const data = docSnapshot.data();
          return {
            id: docSnapshot.id,
            name: data.name ?? "",
            email: data.email ?? "",
            service: data.service ?? "",
            date: data.date ?? "",
            time: data.time ?? "",
            message: data.message ?? "",
            status: (data.status as BookingStatus) ?? "pending",
            createdAt: data.createdAt ?? null,
          };
        })
      );
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const counts = useMemo(
    () => ({
      all: bookings.length,
      pending: bookings.filter((b) => b.status === "pending").length,
      confirmed: bookings.filter((b) => b.status === "confirmed").length,
      declined: bookings.filter((b) => b.status === "declined").length,
    }),
    [bookings]
  );

  const visibleBookings = bookings.filter(
    (booking) => filter === "all" || booking.status === filter
  );

  async function updateStatus(booking: Booking, status: BookingStatus) {
    await updateDoc(doc(db, "bookings", booking.id), { status });
    await updateDoc(doc(db, "slots", `${booking.date}_${booking.time}`), {
      status,
    });

    if (booking.email) {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.statusTemplateId,
        {
          to_email: booking.email,
          name: booking.name,
          service: booking.service,
          date: booking.date,
          time: booking.time,
          status: status === "confirmed" ? "confirmée" : "refusée",
        },
        { publicKey: emailjsConfig.publicKey }
      );
    }
  }

  async function removeBooking(booking: Booking) {
    const confirmed = window.confirm(
      `Supprimer définitivement la demande de ${booking.name} ?`
    );
    if (!confirmed) return;

    await deleteDoc(doc(db, "bookings", booking.id));
    await deleteDoc(doc(db, "slots", `${booking.date}_${booking.time}`));
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-display text-4xl tracking-wide">
          Demandes de réservation
        </h1>
        <button
          type="button"
          onClick={() => signOut(auth)}
          className="rounded-sm border border-paper/40 px-4 py-2 text-xs tracking-[0.15em] text-paper uppercase transition-colors hover:border-paper"
        >
          Se déconnecter
        </button>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {(Object.keys(filterLabels) as Filter[]).map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setFilter(key)}
            className={`rounded-full px-4 py-2 text-xs tracking-[0.1em] uppercase transition-colors ${
              filter === key
                ? "bg-barber-red text-paper"
                : "border border-white/15 text-paper/70 hover:border-paper/40"
            }`}
          >
            {filterLabels[key]} ({counts[key]})
          </button>
        ))}
      </div>

      {loading && <p className="mt-10 text-paper/60">Chargement...</p>}

      {!loading && visibleBookings.length === 0 && (
        <p className="mt-10 text-paper/60">Aucune demande dans cette catégorie.</p>
      )}

      <div className="mt-8 grid gap-4">
        {visibleBookings.map((booking) => (
          <div
            key={booking.id}
            className={`border border-white/10 border-l-4 bg-ink-soft p-6 ${statusBorderStyles[booking.status]}`}
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-lg font-medium text-paper">{booking.name}</p>
                {booking.email && (
                  <a
                    href={`mailto:${booking.email}`}
                    className="text-sm text-paper/60 hover:text-barber-red"
                  >
                    {booking.email}
                  </a>
                )}
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs tracking-[0.1em] uppercase ${statusBadgeStyles[booking.status]}`}
              >
                {statusLabels[booking.status]}
              </span>
            </div>

            <div className="mt-5 grid gap-2 border-t border-white/10 pt-5 text-sm">
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="text-paper/45">Créneau</span>
                <span className="font-medium text-paper">
                  {formatDateLabel(booking.date)} à {booking.time}
                </span>
              </div>
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="text-paper/45">Prestation</span>
                <span className="text-paper">{booking.service}</span>
              </div>
              {booking.message && (
                <div className="mt-1 border-t border-white/10 pt-3 text-paper/70 italic">
                  « {booking.message} »
                </div>
              )}
            </div>

            <div className="mt-5 flex gap-3">
              {booking.status === "pending" ? (
                <>
                  <button
                    type="button"
                    onClick={() => updateStatus(booking, "confirmed")}
                    className="rounded-sm bg-barber-red px-5 py-2 text-xs tracking-[0.15em] text-paper uppercase transition-colors hover:bg-barber-red/85"
                  >
                    Accepter
                  </button>
                  <button
                    type="button"
                    onClick={() => updateStatus(booking, "declined")}
                    className="rounded-sm border border-paper/40 px-5 py-2 text-xs tracking-[0.15em] text-paper uppercase transition-colors hover:border-paper"
                  >
                    Refuser
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => removeBooking(booking)}
                  className="rounded-sm border border-paper/40 px-5 py-2 text-xs tracking-[0.15em] text-paper uppercase transition-colors hover:border-barber-red hover:text-barber-red"
                >
                  Supprimer
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

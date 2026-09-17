import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { BookingForm } from "@/components/booking/BookingForm";
import { salon, siteUrl, RESERVATION_ENABLED } from "@/data/salon";

export const metadata: Metadata = {
  title: "Réservation | Haircut Lille",
  description:
    "Demandez un créneau au salon Haircut à Lille : coupe homme, barbe, coupe enfant.",
  alternates: {
    canonical: `${siteUrl}/reservation`,
  },
};

export default function ReservationPage() {
  return (
    <>
      <Header />
      <main className="bg-ink text-paper">
        <section className="px-4 pb-20 pt-32 sm:px-6 md:pb-28 md:pt-40">
          <div className="mx-auto max-w-2xl">
            <p className="text-xs tracking-[0.28em] text-barber-red uppercase">
              Réservation
            </p>
            <h1 className="mt-4 font-display text-5xl tracking-wide sm:text-6xl">
              Demandez votre créneau.
            </h1>
            <div className="mt-5 h-[3px] w-16 barber-stripe" />
            <p className="mt-8 text-base leading-relaxed text-paper/76 sm:text-lg">
              Choisissez un créneau libre dans le calendrier ci-dessous, le
              salon vous confirme la demande rapidement. Pour une urgence,
              appelez directement.
            </p>
          </div>
        </section>

        <section className="px-4 pb-24 sm:px-6 md:pb-32">
          <div className="mx-auto max-w-3xl">
            {RESERVATION_ENABLED ? (
              <BookingForm />
            ) : (
              <div className="border border-white/10 p-8 text-center">
                <p className="text-lg leading-relaxed text-paper/85">
                  La réservation en ligne est momentanément indisponible.
                  Merci de nous appeler directement pour prendre rendez-vous.
                </p>
                <a
                  href={salon.phone.href}
                  className="mt-6 inline-block rounded-sm bg-barber-red px-8 py-3 text-sm tracking-[0.15em] text-paper uppercase transition-colors hover:bg-barber-red/85"
                >
                  Appeler le salon
                </a>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

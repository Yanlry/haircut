import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { BookingForm } from "@/components/booking/BookingForm";
import { siteUrl } from "@/data/salon";

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
            <BookingForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

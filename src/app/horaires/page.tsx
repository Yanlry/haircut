import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { salon, siteUrl } from "@/data/salon";

export const metadata: Metadata = {
  title: "Horaires | Haircut Lille",
  description:
    "Horaires du salon Haircut à Lille : ouvert du mardi au samedi, dimanche matin, fermé le lundi.",
  alternates: {
    canonical: `${siteUrl}/horaires`,
  },
};

export default function HorairesPage() {
  return (
    <>
      <Header />
      <main className="bg-ink text-paper">
        <section className="px-4 pb-20 pt-32 sm:px-6 md:pb-28 md:pt-40">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs tracking-[0.28em] text-barber-blue uppercase">
              Horaires
            </p>
            <h1 className="mt-4 font-display text-5xl tracking-wide sm:text-6xl">
              Quand passer au salon.
            </h1>
            <div className="mt-5 h-[3px] w-16 barber-stripe" />
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-paper/74 sm:text-lg">
              Les horaires du salon Haircut à Lille. Pour confirmer une
              disponibilité, vous pouvez appeler directement le salon.
            </p>
          </div>
        </section>

        <section className="bg-ink-soft px-4 py-20 sm:px-6 md:py-28">
          <div className="mx-auto max-w-4xl">
            <div className="border border-white/10 bg-ink px-5 py-6 sm:px-8 sm:py-8">
              <dl className="grid gap-4">
                {salon.hours.map((item) => (
                  <div
                    key={item.day}
                    className="grid grid-cols-[1fr_auto] items-baseline gap-6 border-b border-white/8 pb-4 last:border-b-0 last:pb-0"
                  >
                    <dt className="text-lg text-paper/70">{item.day}</dt>
                    <dd
                      className={`font-mono text-lg ${
                        item.time === "Fermé" ? "text-paper/45" : "text-paper"
                      }`}
                    >
                      {item.time}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={salon.phone.href}
                  className="rounded-sm bg-barber-red px-8 py-3 text-center text-sm tracking-[0.15em] text-paper uppercase transition-colors hover:bg-barber-red/85"
                >
                  Appeler le salon
                </a>
                <Link
                  href="/salon"
                  className="rounded-sm border border-paper/50 px-8 py-3 text-center text-sm tracking-[0.15em] text-paper uppercase transition-colors hover:border-paper hover:bg-paper hover:text-ink"
                >
                  Notre adresse
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

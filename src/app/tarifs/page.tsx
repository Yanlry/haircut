import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { clientPhotos, salon, siteUrl } from "@/data/salon";

export const metadata: Metadata = {
  title: "Tarifs | Haircut Lille",
  description:
    "Tarifs du salon Haircut à Lille : coupe homme, barbe, coupe enfant et formule coupe + barbe.",
  alternates: {
    canonical: `${siteUrl}/tarifs`,
  },
};

export default function TarifsPage() {
  return (
    <>
      <Header />
      <main className="bg-ink text-paper">
        <section className="px-4 pb-20 pt-32 sm:px-6 md:pb-28 md:pt-40">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-xs tracking-[0.28em] text-barber-red uppercase">
                Tarifs
              </p>
              <h1 className="mt-4 font-display text-5xl tracking-wide sm:text-6xl">
                Les prestations du salon.
              </h1>
              <div className="mt-5 h-[3px] w-16 barber-stripe" />
              <p className="mt-8 max-w-xl text-base leading-relaxed text-paper/74 sm:text-lg">
                Une grille simple pour choisir rapidement votre prestation :
                coupe, barbe, enfant ou formule complète.
              </p>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={clientPhotos[0].src}
                alt={clientPhotos[0].alt}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-ink-soft px-4 py-20 sm:px-6 md:py-28">
          <div className="mx-auto max-w-6xl">
            <ul className="grid gap-4 md:grid-cols-2">
              {salon.pricing.map((item) => (
                <li
                  key={item.id}
                  className="border border-white/10 bg-ink px-6 py-7"
                >
                  <div className="mb-6 h-[3px] w-14 barber-stripe" />
                  <div className="flex items-end justify-between gap-5">
                    <h2 className="text-xl tracking-wide text-paper">
                      {item.label}
                    </h2>
                    <p className="font-mono text-3xl text-barber-red">
                      {item.price}&nbsp;€
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

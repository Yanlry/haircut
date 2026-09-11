import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import {
  addressLine,
  clientPhotos,
  salon,
  salonHighlights,
  salonImages,
  siteUrl,
} from "@/data/salon";

export const metadata: Metadata = {
  title: "Le salon | Haircut Lille",
  description:
    "Découvrez Haircut, salon coiffeur barbier à Lille, son ambiance et ses réalisations clients.",
  alternates: {
    canonical: `${siteUrl}/salon`,
  },
};

export default function SalonPage() {
  return (
    <>
      <Header />
      <main className="bg-ink text-paper">
        <section className="px-4 pb-20 pt-32 sm:px-6 md:pb-28 md:pt-40">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs tracking-[0.28em] text-barber-blue uppercase">
                Le salon
              </p>
              <h1 className="mt-4 font-display text-5xl tracking-wide sm:text-6xl">
                Un barbier de quartier, une finition soignée.
              </h1>
              <div className="mt-5 h-[3px] w-16 barber-stripe" />
              <p className="mt-8 max-w-xl text-base leading-relaxed text-paper/76 sm:text-lg">
                Situé au {addressLine}, Haircut accueille hommes et enfants
                dans une ambiance directe, simple et professionnelle.
              </p>
            </div>

            <div className="relative min-h-[34rem] overflow-hidden">
              <Image
                src={salonImages.exterior}
                alt={`Extérieur du salon ${salon.name} à Lille`}
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-ink-soft px-4 py-20 sm:px-6 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-4 md:grid-cols-3">
              {salonHighlights.map((highlight) => (
                <div key={highlight} className="border border-white/10 p-6">
                  <div className="mb-5 h-[3px] w-12 barber-stripe" />
                  <p className="text-lg leading-relaxed text-paper">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-24 sm:px-6 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12">
              <p className="text-xs tracking-[0.28em] text-barber-red uppercase">
                Galerie
              </p>
              <h2 className="mt-4 font-display text-4xl tracking-wide sm:text-5xl">
                Clients, coupes et détails du salon.
              </h2>
              <div className="mt-5 h-[3px] w-16 barber-stripe" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {clientPhotos.map((photo) => (
                <div
                  key={photo.src}
                  className="relative aspect-[4/3] overflow-hidden bg-ink-soft"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import {
  addressLine,
  clientPhotos,
  mapsUrl,
  salon,
  salonHighlights,
  salonImages,
  siteUrl,
} from "@/data/salon";

export const metadata: Metadata = {
  title: "Le salon | Haircut Lille",
  description:
    "Adresse, téléphone, ambiance et réalisations clients du salon Haircut, coiffeur barbier à Lille.",
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
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-xs tracking-[0.28em] text-barber-red uppercase">
                Notre adresse
              </p>
              <h1 className="mt-4 font-display text-5xl tracking-wide sm:text-6xl">
                Venez au salon.
              </h1>
              <div className="mt-5 h-[3px] w-16 barber-stripe" />

              <div className="mt-10 grid gap-7 border-y border-white/10 py-8">
                <div>
                  <p className="text-xs tracking-[0.2em] text-paper/45 uppercase">
                    Adresse
                  </p>
                  <p className="mt-3 text-xl leading-relaxed">
                    {salon.address.street}
                    <br />
                    {salon.address.postalCode} {salon.address.city}
                  </p>
                </div>

                <div>
                  <p className="text-xs tracking-[0.2em] text-paper/45 uppercase">
                    Téléphone
                  </p>
                  <p className="mt-3 text-xl">
                    <a href={salon.phone.href} className="hover:text-barber-red">
                      {salon.phone.display}
                    </a>
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={salon.phone.href}
                  className="rounded-sm bg-barber-red px-8 py-3 text-center text-sm tracking-[0.15em] text-paper uppercase transition-colors hover:bg-barber-red/85"
                >
                  Appeler
                </a>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Itinéraire vers ${addressLine}`}
                  className="rounded-sm border border-paper/50 px-8 py-3 text-center text-sm tracking-[0.15em] text-paper uppercase transition-colors hover:border-barber-blue hover:text-barber-blue"
                >
                  Itinéraire
                </a>
              </div>
            </div>

            <div className="relative min-h-[34rem] overflow-hidden">
              <Image
                src={salonImages.facade}
                alt={`Façade du salon ${salon.name} à Lille`}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-ink-soft px-4 py-24 sm:px-6 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div className="grid grid-cols-[0.82fr_1fr] gap-4 sm:gap-5">
                <div className="relative min-h-96 overflow-hidden">
                  <Image
                    src={salonImages.interior}
                    alt="Intérieur du salon Haircut à Lille"
                    fill
                    sizes="(min-width: 1024px) 36vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <div className="grid gap-4 sm:gap-5">
                  {clientPhotos.slice(0, 2).map((photo) => (
                    <div key={photo.src} className="relative min-h-44 overflow-hidden">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(min-width: 1024px) 36vw, 45vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs tracking-[0.28em] text-barber-blue uppercase">
                  Le salon
                </p>
                <h2 className="mt-4 font-display text-4xl tracking-wide sm:text-5xl">
                  Une adresse de quartier.
                </h2>
                <div className="mt-5 h-[3px] w-16 barber-stripe" />

                <p className="mt-8 text-base leading-relaxed text-paper/78 sm:text-lg">
                  Haircut est un salon de coiffure et de barbier situé au{" "}
                  {addressLine}. Vous y êtes accueilli pour une coupe homme, un
                  entretien de barbe, une coupe enfant ou une prestation coupe et
                  barbe, dans un cadre pensé pour les hommes de tous âges.
                </p>
                <p className="mt-6 text-base leading-relaxed text-paper/78 sm:text-lg">
                  Ici, l&apos;ambiance reste directe et chaleureuse : on vient pour
                  ressortir net, avec une finition propre et un service efficace.
                </p>
              </div>
            </div>

            <div className="mt-16 grid gap-4 md:grid-cols-3">
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

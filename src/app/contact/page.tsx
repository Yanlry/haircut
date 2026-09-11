import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import {
  addressLine,
  mapsUrl,
  salon,
  salonImages,
  siteUrl,
} from "@/data/salon";

export const metadata: Metadata = {
  title: "Contact | Haircut Lille",
  description:
    "Adresse, téléphone et itinéraire du salon Haircut, coiffeur barbier à Lille.",
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-ink text-paper">
        <section className="px-4 pb-20 pt-32 sm:px-6 md:pb-28 md:pt-40">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-xs tracking-[0.28em] text-barber-red uppercase">
                Contact
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
      </main>
      <Footer />
    </>
  );
}

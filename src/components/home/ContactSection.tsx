import Image from "next/image";
import Link from "next/link";
import { salon, addressLine, mapsUrl } from "@/data/salon";
import { salonImages } from "@/data/salon";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-ink px-4 py-24 sm:px-6 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <div>
          <p className="text-xs tracking-[0.28em] text-barber-red uppercase">
            Contact
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-wide text-paper sm:text-5xl">
            Passez au salon ou appelez directement.
          </h2>
          <div className="mt-5 h-[3px] w-16 barber-stripe" />

          <div className="mt-10 grid gap-6 border-y border-white/10 py-8 sm:grid-cols-2">
            <div>
              <p className="text-xs tracking-[0.2em] text-paper/45 uppercase">
                Adresse
              </p>
              <p className="mt-3 text-lg leading-relaxed text-paper">
                {salon.address.street}
                <br />
                {salon.address.postalCode} {salon.address.city}
              </p>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] text-paper/45 uppercase">
                Téléphone
              </p>
              <p className="mt-3 text-lg text-paper">
                <a href={salon.phone.href} className="hover:text-barber-red">
                  {salon.phone.display}
                </a>
              </p>
            </div>
          </div>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-paper/72">
            Pour une coupe, une barbe ou une formule complète, le plus simple
            est d&apos;appeler le salon avant de passer.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={salon.phone.href}
              className="rounded-sm bg-barber-red px-8 py-3 text-center text-sm tracking-[0.15em] text-paper uppercase transition-colors hover:bg-barber-red/85"
            >
              Appeler le salon
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
            <Link
              href="/contact"
              className="rounded-sm border border-white/15 px-8 py-3 text-center text-sm tracking-[0.15em] text-paper/85 uppercase transition-colors hover:border-paper hover:text-paper"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="relative min-h-[28rem] overflow-hidden">
          <Image
            src={salonImages.facade}
            alt={`Façade du salon ${salon.name} à Lille`}
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

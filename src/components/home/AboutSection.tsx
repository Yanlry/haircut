import Image from "next/image";
import Link from "next/link";
import { addressLine, clientPhotos, salonHighlights, salonImages } from "@/data/salon";

export function AboutSection() {
  return (
    <section
      id="salon"
      className="scroll-mt-20 bg-ink-soft px-4 py-24 sm:px-6 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
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
          <h2 className="mt-4 font-display text-4xl tracking-wide text-paper sm:text-5xl">
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

          <ul className="mt-8 grid gap-3">
            {salonHighlights.map((highlight) => (
              <li
                key={highlight}
                className="border-l-2 border-barber-red pl-4 text-sm tracking-wide text-paper/80 uppercase"
              >
                {highlight}
              </li>
            ))}
          </ul>

          <Link
            href="/salon"
            className="mt-9 inline-block rounded-sm bg-paper px-7 py-3 text-sm tracking-[0.15em] text-ink uppercase transition-colors hover:bg-barber-red hover:text-paper"
          >
            Découvrir le salon
          </Link>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { clientPhotos } from "@/data/salon";

export function GallerySection() {
  return (
    <section className="bg-ink px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs tracking-[0.28em] text-barber-red uppercase">
              Réalisations
            </p>
            <h2 className="mt-4 font-display text-4xl tracking-wide text-paper sm:text-5xl">
              Des coupes vues au salon.
            </h2>
            <div className="mt-5 h-[3px] w-16 barber-stripe" />
          </div>

          <Link
            href="/salon"
            className="w-fit rounded-sm border border-paper/45 px-7 py-3 text-sm tracking-[0.15em] text-paper uppercase transition-colors hover:border-paper hover:bg-paper hover:text-ink"
          >
            Voir le salon
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {clientPhotos.slice(0, 6).map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-[4/3] overflow-hidden bg-ink-soft"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

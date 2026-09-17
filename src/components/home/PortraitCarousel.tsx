import Image from "next/image";
import { clientCarouselPhotos } from "@/data/salon";

export function PortraitCarousel() {
  const photos = [...clientCarouselPhotos, ...clientCarouselPhotos];

  return (
    <div className="mt-14">
      <p className="text-sm tracking-[0.15em] text-paper/60 uppercase">
        Voici quelques autres de nos réalisations
      </p>

      <div
        className="relative mt-6 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <div className="marquee-track flex w-max gap-4">
          {photos.map((photo, index) => (
            <div
              key={`${photo.src}-${index}`}
              className="relative aspect-[3/4] h-72 flex-none overflow-hidden bg-ink-soft sm:h-80"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 640px) 240px, 200px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

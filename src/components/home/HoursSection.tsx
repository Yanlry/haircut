import Link from "next/link";
import { salon } from "@/data/salon";

export function HoursSection() {
  return (
    <section
      id="horaires"
      className="scroll-mt-20 bg-ink-soft px-4 py-24 sm:px-6 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="text-xs tracking-[0.28em] text-barber-blue uppercase">
            Horaires
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-wide text-paper sm:text-5xl">
            Ouvert presque toute la semaine.
          </h2>
          <div className="mt-5 h-[3px] w-16 barber-stripe" />
          <p className="mt-8 max-w-md text-base leading-relaxed text-paper/72 sm:text-lg">
            Retrouvez les horaires du salon avant de passer pour une coupe, une
            barbe ou une formule complète.
          </p>
          <Link
            href="/horaires"
            className="mt-8 inline-block rounded-sm border border-paper/45 px-7 py-3 text-sm tracking-[0.15em] text-paper uppercase transition-colors hover:border-paper hover:bg-paper hover:text-ink"
          >
            Voir les horaires
          </Link>
        </div>

        <div className="border border-white/10 bg-ink px-5 py-6 sm:px-8 sm:py-8">
          <div className="mb-6 flex items-center justify-between gap-4 border-b border-white/10 pb-5">
            <p className="font-display text-3xl tracking-wide text-paper">
              Horaires
            </p>
            <div className="h-[3px] w-16 barber-stripe" />
          </div>

          <dl className="grid gap-4">
            {salon.hours.map((item) => (
              <div
                key={item.day}
                className="grid grid-cols-[1fr_auto] items-baseline gap-6 border-b border-white/8 pb-4 last:border-b-0 last:pb-0"
              >
                <dt className="text-base text-paper/68">{item.day}</dt>
                <dd
                  className={`font-mono text-base ${
                    item.time === "Fermé" ? "text-paper/45" : "text-paper"
                  }`}
                >
                  {item.time}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

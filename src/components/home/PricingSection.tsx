import Link from "next/link";
import { salon } from "@/data/salon";

export function PricingSection() {
  return (
    <section
      id="tarifs"
      className="scroll-mt-20 bg-ink px-4 py-24 sm:px-6 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="text-xs tracking-[0.28em] text-barber-red uppercase">
            Tarifs
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-wide text-paper sm:text-5xl">
            Des prix simples.
          </h2>
          <div className="mt-5 h-[3px] w-16 barber-stripe" />
          <p className="mt-8 max-w-md text-base leading-relaxed text-paper/72 sm:text-lg">
            Les prestations essentielles du salon, sans détour : coupe, barbe,
            enfant et formule coupe + barbe.
          </p>
          <Link
            href="/tarifs"
            className="mt-8 inline-block rounded-sm border border-paper/45 px-7 py-3 text-sm tracking-[0.15em] text-paper uppercase transition-colors hover:border-paper hover:bg-paper hover:text-ink"
          >
            Voir la page tarifs
          </Link>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {salon.pricing.map((item) => (
            <li
              key={item.id}
              className="border border-white/10 bg-ink-soft px-5 py-6"
            >
              <div className="mb-5 h-[3px] w-12 barber-stripe" />
              <div className="flex items-end justify-between gap-5">
                <span className="text-lg tracking-wide text-paper sm:text-xl">
                  {item.label}
                </span>
                <span className="font-mono text-2xl text-barber-red">
                  {item.price}&nbsp;€
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

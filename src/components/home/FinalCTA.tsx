import Link from "next/link";
import { salon } from "@/data/salon";

export function FinalCTA() {
  return (
    <section className="border-y-2 border-transparent bg-ink-soft px-4 py-20 text-center sm:px-6">
      <div className="mx-auto h-[3px] w-16 barber-stripe" />

      <h2 className="mt-8 font-display text-3xl tracking-wide text-paper sm:text-4xl">
        Besoin d&apos;une coupe&nbsp;?
      </h2>

      <p className="mt-4 text-base text-paper/70">
        {salon.name} — {salon.address.street}, {salon.address.city}
      </p>

      <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
        <a
          href={salon.phone.href}
          className="inline-block rounded-sm bg-barber-red px-10 py-3 text-sm tracking-[0.15em] text-paper uppercase transition-colors hover:bg-barber-red/85"
        >
          Appeler le salon
        </a>
        <Link
          href="/contact"
          className="inline-block rounded-sm border border-paper/45 px-10 py-3 text-sm tracking-[0.15em] text-paper uppercase transition-colors hover:border-paper hover:bg-paper hover:text-ink"
        >
          Contact
        </Link>
      </div>
    </section>
  );
}

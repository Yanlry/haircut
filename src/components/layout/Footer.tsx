import Link from "next/link";
import { salon, addressLine } from "@/data/salon";
import { navLinks } from "@/data/salon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink-soft px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 text-center text-sm text-paper/70">
        <p className="font-display text-xl tracking-wide text-paper">
          {salon.name}
        </p>
        <nav aria-label="Navigation de pied de page">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs tracking-[0.16em] uppercase">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-barber-red">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p>{addressLine}</p>
        <p>
          <a href={salon.phone.href} className="hover:text-barber-red">
            {salon.phone.display}
          </a>
        </p>
        <nav aria-label="Informations légales">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-paper/50">
            <li>
              <Link href="/mentions-legales" className="hover:text-barber-red">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link
                href="/politique-de-confidentialite"
                className="hover:text-barber-red"
              >
                Politique de confidentialité
              </Link>
            </li>
            <li>
              <Link href="/cgv" className="hover:text-barber-red">
                Conditions de réservation
              </Link>
            </li>
          </ul>
        </nav>
        <p className="mt-4 text-xs text-paper/40">
          © {year} {salon.name}
        </p>
      </div>
    </footer>
  );
}

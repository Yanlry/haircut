import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { addressLine, salon, siteUrl } from "@/data/salon";

export const metadata: Metadata = {
  title: "Mentions légales | Haircut Lille",
  description: "Mentions légales du site du salon Haircut à Lille.",
  alternates: {
    canonical: `${siteUrl}/mentions-legales`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

function ToComplete({ children }: { children: React.ReactNode }) {
  return (
    <span className="border-b border-dashed border-barber-red/60 text-barber-red">
      {children}
    </span>
  );
}

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main className="bg-ink text-paper">
        <section className="px-4 pb-16 pt-32 sm:px-6 md:pb-20 md:pt-40">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs tracking-[0.28em] text-barber-red uppercase">
              Informations légales
            </p>
            <h1 className="mt-4 font-display text-5xl tracking-wide sm:text-6xl">
              Mentions légales.
            </h1>
            <div className="mt-5 h-[3px] w-16 barber-stripe" />
            <p className="mt-6 text-sm text-paper/60">
              Certaines informations ci-dessous sont marquées{" "}
              <ToComplete>à compléter</ToComplete> : elles doivent être
              fournies par l&apos;exploitant du salon avant la mise en ligne
              définitive du site.
            </p>
          </div>
        </section>

        <section className="bg-ink-soft px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto grid max-w-3xl gap-12 text-base leading-relaxed text-paper/80">
            <div>
              <h2 className="font-display text-2xl tracking-wide text-paper">
                1. Éditeur du site
              </h2>
              <div className="mt-4 h-[2px] w-10 barber-stripe" />
              <p className="mt-5">
                Le présent site est édité par : <ToComplete>nom et prénom de l&apos;exploitant, ou dénomination sociale si le salon est exploité en société</ToComplete>.
              </p>
              <ul className="mt-4 grid gap-2">
                <li>
                  Forme juridique : <ToComplete>ex. entreprise individuelle, auto-entrepreneur, EURL, SASU…</ToComplete>
                </li>
                <li>
                  Numéro SIREN / SIRET : <ToComplete>à compléter</ToComplete>
                </li>
                <li>
                  Numéro de TVA intracommunautaire (le cas échéant) : <ToComplete>à compléter</ToComplete>
                </li>
                <li>
                  Siège / adresse d&apos;exploitation : {addressLine}
                </li>
                <li>
                  Téléphone :{" "}
                  <a href={salon.phone.href} className="text-paper hover:text-barber-red">
                    {salon.phone.display}
                  </a>
                </li>
                <li>
                  Adresse email de contact : <ToComplete>à compléter</ToComplete>
                </li>
                <li>
                  Directeur de la publication : <ToComplete>nom du responsable du salon</ToComplete>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl tracking-wide text-paper">
                2. Hébergement du site
              </h2>
              <div className="mt-4 h-[2px] w-10 barber-stripe" />
              <p className="mt-5">
                Le site est hébergé par GitHub, Inc. — 88 Colin P. Kelly Jr
                Street, San Francisco, CA 94107, États-Unis
                (GitHub&nbsp;Pages).
              </p>
              <p className="mt-4">
                Les données de réservation (prise de rendez-vous) sont
                stockées et traitées par Google Ireland Limited via le
                service Firebase (base de données Firestore), et les emails
                de confirmation sont envoyés via le service EmailJS. Pour
                plus de détails, voir la{" "}
                <a
                  href="/politique-de-confidentialite"
                  className="text-paper underline hover:text-barber-red"
                >
                  politique de confidentialité
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl tracking-wide text-paper">
                3. Propriété intellectuelle
              </h2>
              <div className="mt-4 h-[2px] w-10 barber-stripe" />
              <p className="mt-5">
                L&apos;ensemble des éléments présents sur ce site (textes,
                photographies, logo, charte graphique) est protégé au titre
                du droit d&apos;auteur et reste la propriété exclusive du
                salon {salon.name} ou de ses concédants. Toute reproduction,
                représentation, modification ou adaptation, totale ou
                partielle, sans autorisation préalable écrite, est
                interdite.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl tracking-wide text-paper">
                4. Liens hypertextes
              </h2>
              <div className="mt-4 h-[2px] w-10 barber-stripe" />
              <p className="mt-5">
                Le site peut contenir des liens vers des sites tiers (Google
                Maps, réseaux sociaux…). {salon.name} n&apos;exerce aucun
                contrôle sur ces sites et décline toute responsabilité quant
                à leur contenu.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl tracking-wide text-paper">
                5. Limitation de responsabilité
              </h2>
              <div className="mt-4 h-[2px] w-10 barber-stripe" />
              <p className="mt-5">
                Le salon met tout en œuvre pour proposer des informations
                exactes et à jour (horaires, tarifs, disponibilités). Ces
                informations peuvent toutefois évoluer sans préavis. En cas
                de doute, il est recommandé de contacter directement le
                salon par téléphone avant de se déplacer.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl tracking-wide text-paper">
                6. Droit applicable
              </h2>
              <div className="mt-4 h-[2px] w-10 barber-stripe" />
              <p className="mt-5">
                Les présentes mentions légales sont soumises au droit
                français. En cas de litige, et à défaut de résolution
                amiable, les tribunaux français seront seuls compétents.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

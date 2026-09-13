import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { addressLine, salon, siteUrl } from "@/data/salon";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Haircut Lille",
  description:
    "Politique de confidentialité et gestion des cookies du site du salon Haircut à Lille.",
  alternates: {
    canonical: `${siteUrl}/politique-de-confidentialite`,
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

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Header />
      <main className="bg-ink text-paper">
        <section className="px-4 pb-16 pt-32 sm:px-6 md:pb-20 md:pt-40">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs tracking-[0.28em] text-barber-red uppercase">
              Confidentialité &amp; cookies
            </p>
            <h1 className="mt-4 font-display text-5xl tracking-wide sm:text-6xl">
              Politique de confidentialité.
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
                1. Responsable du traitement
              </h2>
              <div className="mt-4 h-[2px] w-10 barber-stripe" />
              <p className="mt-5">
                Le responsable du traitement des données collectées sur ce
                site est <ToComplete>nom / dénomination sociale de l&apos;exploitant du salon</ToComplete>
                , exploitant le salon {salon.name}, {addressLine}.
              </p>
              <p className="mt-4">
                Pour toute question relative à vos données personnelles,
                vous pouvez contacter le salon par téléphone au{" "}
                <a href={salon.phone.href} className="text-paper hover:text-barber-red">
                  {salon.phone.display}
                </a>{" "}
                ou par email à <ToComplete>adresse email à compléter</ToComplete>.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl tracking-wide text-paper">
                2. Données collectées et finalités
              </h2>
              <div className="mt-4 h-[2px] w-10 barber-stripe" />
              <p className="mt-5">
                Lorsque vous utilisez le formulaire de réservation en ligne,
                les données suivantes sont collectées : nom, prénom, adresse
                email, prestation choisie, date et créneau demandés, ainsi
                qu&apos;un message facultatif. Ces informations sont
                utilisées exclusivement pour :
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>gérer et confirmer votre demande de rendez-vous ;</li>
                <li>
                  vous contacter en cas de besoin concernant votre réservation
                  (annulation, modification de créneau…).
                </li>
              </ul>
              <p className="mt-4">
                Aucune donnée collectée via le formulaire de réservation
                n&apos;est utilisée à des fins commerciales, publicitaires ou
                revendue à des tiers.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl tracking-wide text-paper">
                3. Base légale et durée de conservation
              </h2>
              <div className="mt-4 h-[2px] w-10 barber-stripe" />
              <p className="mt-5">
                Le traitement de ces données repose sur l&apos;exécution de
                mesures précontractuelles prises à votre demande (organiser
                votre rendez-vous). Les données de réservation sont
                conservées pendant <ToComplete>durée à compléter, par ex. 12 mois après le rendez-vous</ToComplete>, puis
                supprimées ou archivées conformément aux obligations légales
                du salon (comptabilité, garanties…).
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl tracking-wide text-paper">
                4. Destinataires des données
              </h2>
              <div className="mt-4 h-[2px] w-10 barber-stripe" />
              <p className="mt-5">
                Les données de réservation sont accessibles au personnel du
                salon en charge de la prise de rendez-vous, ainsi qu&apos;aux
                prestataires techniques suivants, qui agissent en tant que
                sous-traitants :
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>
                  <span className="text-paper">Google Firebase</span>{" "}
                  (Google Ireland Limited) : hébergement de la base de
                  données des réservations et des créneaux.
                </li>
                <li>
                  <span className="text-paper">EmailJS</span> : envoi des
                  emails de confirmation de rendez-vous.
                </li>
                <li>
                  <span className="text-paper">GitHub Pages</span> (GitHub,
                  Inc.) : hébergement des pages du site.
                </li>
              </ul>
              <p className="mt-4">
                Ces prestataires peuvent être situés en dehors de l&apos;Union
                européenne (notamment aux États-Unis) ; le cas échéant, ce
                transfert s&apos;appuie sur les garanties prévues par ces
                prestataires (clauses contractuelles types ou équivalent).
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl tracking-wide text-paper">
                5. Vos droits
              </h2>
              <div className="mt-4 h-[2px] w-10 barber-stripe" />
              <p className="mt-5">
                Conformément au Règlement Général sur la Protection des
                Données (RGPD) et à la loi Informatique et Libertés, vous
                disposez d&apos;un droit d&apos;accès, de rectification,
                d&apos;effacement, de limitation, d&apos;opposition et de
                portabilité sur vos données personnelles.
              </p>
              <p className="mt-4">
                Pour exercer ces droits, contactez le salon par téléphone ou
                par email (coordonnées ci-dessus). Vous disposez également du
                droit d&apos;introduire une réclamation auprès de la
                Commission Nationale de l&apos;Informatique et des Libertés
                (CNIL) — www.cnil.fr.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl tracking-wide text-paper">
                6. Cookies et stockage local
              </h2>
              <div className="mt-4 h-[2px] w-10 barber-stripe" />
              <p className="mt-5">
                Ce site n&apos;utilise pas de cookies publicitaires ni
                d&apos;outils de mesure d&apos;audience (type Google
                Analytics). Il utilise uniquement le stockage local de votre
                navigateur (<span className="font-mono text-sm text-paper">localStorage</span>) pour
                mémoriser votre choix concernant la bannière de consentement
                aux cookies, afin de ne pas vous la présenter à chaque
                visite. Cette information reste stockée uniquement sur votre
                appareil et n&apos;est jamais transmise au salon.
              </p>
              <p className="mt-4">
                Le service de réservation en ligne (Firebase) peut également
                déposer des cookies ou identifiants techniques strictement
                nécessaires à son fonctionnement (maintien de la connexion à
                la base de données pendant la prise de rendez-vous). Ces
                éléments techniques ne nécessitent pas de consentement au
                titre de la réglementation applicable.
              </p>
              <p className="mt-4">
                Vous pouvez à tout moment supprimer les données stockées
                localement via les paramètres de votre navigateur.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

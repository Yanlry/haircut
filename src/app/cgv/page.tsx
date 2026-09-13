import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { addressLine, salon, siteUrl } from "@/data/salon";

export const metadata: Metadata = {
  title: "Conditions générales de réservation | Haircut Lille",
  description:
    "Conditions générales de réservation en ligne du salon Haircut à Lille.",
  alternates: {
    canonical: `${siteUrl}/cgv`,
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

export default function CgvPage() {
  return (
    <>
      <Header />
      <main className="bg-ink text-paper">
        <section className="px-4 pb-16 pt-32 sm:px-6 md:pb-20 md:pt-40">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs tracking-[0.28em] text-barber-red uppercase">
              Conditions générales
            </p>
            <h1 className="mt-4 font-display text-5xl tracking-wide sm:text-6xl">
              Conditions de réservation.
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
                1. Objet
              </h2>
              <div className="mt-4 h-[2px] w-10 barber-stripe" />
              <p className="mt-5">
                Les présentes conditions générales encadrent la prise de
                rendez-vous en ligne pour les prestations de coiffure et de
                barbier proposées par le salon {salon.name}, {addressLine}
                . Le site permet uniquement de réserver un créneau ; le
                règlement des prestations s&apos;effectue sur place, au
                salon, au moment de la prestation.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl tracking-wide text-paper">
                2. Prestations et tarifs
              </h2>
              <div className="mt-4 h-[2px] w-10 barber-stripe" />
              <p className="mt-5">
                Les prestations proposées et leurs tarifs indicatifs sont
                consultables sur la page{" "}
                <a
                  href="/tarifs"
                  className="text-paper underline hover:text-barber-red"
                >
                  Tarifs
                </a>{" "}
                du site. Ces tarifs sont exprimés en euros et peuvent être
                modifiés à tout moment par le salon ; le tarif applicable est
                celui affiché en salon le jour de la prestation.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl tracking-wide text-paper">
                3. Prise de rendez-vous
              </h2>
              <div className="mt-4 h-[2px] w-10 barber-stripe" />
              <p className="mt-5">
                La réservation d&apos;un créneau via le formulaire en ligne
                constitue une demande de rendez-vous. Un email de
                confirmation est envoyé automatiquement à l&apos;adresse
                renseignée. Le salon se réserve la possibilité de contacter
                le client par téléphone ou par email pour confirmer,
                modifier ou annuler un rendez-vous en cas
                d&apos;indisponibilité imprévue.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl tracking-wide text-paper">
                4. Annulation et modification
              </h2>
              <div className="mt-4 h-[2px] w-10 barber-stripe" />
              <p className="mt-5">
                Le client peut annuler ou modifier son rendez-vous en
                contactant le salon au{" "}
                <a href={salon.phone.href} className="text-paper hover:text-barber-red">
                  {salon.phone.display}
                </a>{" "}
                , idéalement au moins <ToComplete>délai à compléter, par ex. 24 heures</ToComplete> avant
                l&apos;heure prévue, afin de permettre au salon de proposer ce
                créneau à un autre client.
              </p>
              <p className="mt-4">
                En cas d&apos;absence non signalée (« no-show ») ou
                d&apos;annulations répétées de dernière minute, le salon se
                réserve le droit de <ToComplete>politique à compléter, ex. refuser une réservation en ligne ultérieure et demander une confirmation téléphonique</ToComplete>.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl tracking-wide text-paper">
                5. Retard
              </h2>
              <div className="mt-4 h-[2px] w-10 barber-stripe" />
              <p className="mt-5">
                En cas de retard important, le salon peut être contraint de
                réduire la durée de la prestation ou de proposer un autre
                créneau, afin de ne pas retarder les rendez-vous suivants.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl tracking-wide text-paper">
                6. Responsabilité
              </h2>
              <div className="mt-4 h-[2px] w-10 barber-stripe" />
              <p className="mt-5">
                Le salon s&apos;engage à réaliser les prestations avec soin et
                professionnalisme. Le client est invité à signaler toute
                allergie, sensibilité ou contre-indication avant la
                réalisation d&apos;une prestation.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl tracking-wide text-paper">
                7. Données personnelles
              </h2>
              <div className="mt-4 h-[2px] w-10 barber-stripe" />
              <p className="mt-5">
                Les informations transmises lors de la réservation sont
                traitées conformément à la{" "}
                <a
                  href="/politique-de-confidentialite"
                  className="text-paper underline hover:text-barber-red"
                >
                  politique de confidentialité
                </a>{" "}
                du site.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl tracking-wide text-paper">
                8. Droit applicable et litiges
              </h2>
              <div className="mt-4 h-[2px] w-10 barber-stripe" />
              <p className="mt-5">
                Les présentes conditions sont soumises au droit français. En
                cas de litige, une solution amiable sera recherchée en
                priorité entre le client et le salon avant toute action
                judiciaire.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

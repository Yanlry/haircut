import { assetPath, siteAssetUrl, siteUrl } from "@/lib/site-paths";

const phoneDisplay = "06 52 62 14 06";
const phoneE164 = "+33652621406";
const siteImagePath = "/images/salon/salon-exterieur.png";

// L'employé qui gère les réservations est absent pour le moment : le
// client ne veut pas de demandes de réservation en ligne qui resteraient
// sans réponse. Les boutons "Réserver" sont masqués (le code du
// formulaire reste en place). Repasser à true pour les réactiver.
export const RESERVATION_ENABLED = false;

export const salon = {
  name: "Haircut",
  tagline: "Coiffeur • Barbier à Lille",
  address: {
    street: "77 rue Alphonse Mercier",
    postalCode: "59800",
    city: "Lille",
    country: "France",
  },
  phone: {
    display: phoneDisplay,
    href: `tel:${phoneE164}`,
    e164: phoneE164,
  },
  pricing: [
    { id: "coupe-homme", label: "Coupe Homme", price: 15 },
    { id: "barbe", label: "Barbe", price: 10 },
    { id: "coupe-enfant", label: "Coupe Enfant -10 ans", price: 12 },
    { id: "coupe-barbe", label: "Coupe + Barbe", price: 20 },
  ],
  hours: [
    { day: "vendredi", time: "10:00–19:30" },
    { day: "samedi", time: "10:00–19:30" },
    { day: "dimanche", time: "10:00–13:00" },
    { day: "lundi", time: "Fermé" },
    { day: "mardi", time: "10:00–19:30" },
    { day: "mercredi", time: "10:00–19:30" },
    { day: "jeudi", time: "10:00–19:30" },
  ],
} as const;

export const salonHighlights = [
  "Coupes hommes cheveux court ou long",
  "Barbe, contours et entretien au rasoir",
  "vous y etes la bienvenue dans une ambiance chaleureuse",
] as const;

export const salonImages = {
  facade: assetPath("/images/salon/salon-exterieur.png"),
  interior: assetPath("/images/salon/salon.png"),
  exterior: assetPath("/images/salon/salon-exterieur.png"),
  logo: assetPath("/images/HAIRCUT.png"),
} as const;

export const clientPhotos = [
  {
    src: assetPath("/images/salon/clients/9391e830-f39c-481a-ad97-a1537b3d2b15.png"),
    alt: "Coupe courte homme avec contours travaillés",
  },
  {
    src: assetPath("/images/salon/clients/310be967-5365-44a1-a366-30199c9ad896.png"),
    alt: "Coupe texturée réalisée dans le salon Haircut",
  },
  {
    src: assetPath("/images/salon/clients/3f42de26-804d-4169-af57-5944998ffd3b.png"),
    alt: "Finition de coupe homme au salon Haircut Lille",
  },
  {
    src: assetPath("/images/salon/clients/5831d1ef-e974-4e2e-b54f-6c7ee8d79c1b.png"),
    alt: "Dégradé homme précis réalisé chez Haircut",
  },
  {
    src: assetPath("/images/salon/clients/5e9e87b4-493e-41fc-9b59-33c85dd531c2.png"),
    alt: "Client installé pour une coupe dans le salon Haircut",
  },
  {
    src: assetPath("/images/salon/clients/f80e0656-144b-4603-9ac1-e2c630e58eff.png"),
    alt: "Finition client après passage au salon Haircut",
  },
] as const;

const carouselFileNames = [
  "IMG_3628.jpg",
  "IMG_3629.jpg",
  "IMG_3630.JPG",
  "IMG_3631.JPG",
  "IMG_3632.JPG",
  "IMG_3633.JPG",
  "IMG_3634.JPG",
  "IMG_3635.JPG",
  "IMG_3636.JPG",
  "IMG_3637.JPG",
  "IMG_3638.JPG",
  "IMG_3639.JPG",
  "IMG_3640.JPG",
  "IMG_3641.JPG",
  "IMG_3642.JPG",
  "IMG_3643.JPG",
  "IMG_3644.JPG",
  "IMG_3645.JPG",
  "IMG_3646.JPG",
  "IMG_3647.JPG",
  "IMG_3648.JPG",
  "IMG_3649.JPG",
] as const;

export const clientCarouselPhotos = carouselFileNames.map((fileName, index) => ({
  src: assetPath(`/images/salon/clients/caroussel/${fileName}`),
  alt: `Réalisation coupe et style au salon Haircut Lille ${index + 1}`,
}));

export const addressLine = `${salon.address.street}, ${salon.address.postalCode} ${salon.address.city}`;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  addressLine
)}`;

export { siteUrl };

export const siteImageUrl = siteAssetUrl(siteImagePath);

export const priceRange = (() => {
  const prices = salon.pricing.map((item) => item.price);
  return `${Math.min(...prices)}€–${Math.max(...prices)}€`;
})();

export const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/horaires", label: "Horaires" },
  { href: "/salon", label: "Le salon" },
] as const;

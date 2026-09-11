import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google";
import { salon, addressLine, siteUrl, priceRange } from "@/data/salon";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
});

const title = "Haircut | Coiffeur & Barbier à Lille";
const description =
  "Haircut, coiffeur et barbier situé au 77 rue Alphonse Mercier à Lille. Coupe homme, barbe, coupe enfant et coupe + barbe.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: salon.name,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/haircut-video-poster.webp",
        width: 1920,
        height: 1080,
        alt: "Haircut - Coiffeur Barbier à Lille",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/haircut-video-poster.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: salon.name,
  image: `${siteUrl}/images/haircut-video-poster.webp`,
  telephone: salon.phone.e164,
  priceRange,
  address: {
    "@type": "PostalAddress",
    streetAddress: salon.address.street,
    postalCode: salon.address.postalCode,
    addressLocality: salon.address.city,
    addressCountry: "FR",
  },
  url: siteUrl,
  description: addressLine,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink text-paper">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

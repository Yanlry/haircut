import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroVideo } from "@/components/home/HeroVideo";
import { PricingSection } from "@/components/home/PricingSection";
import { AboutSection } from "@/components/home/AboutSection";
import { GallerySection } from "@/components/home/GallerySection";
import { HoursSection } from "@/components/home/HoursSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroVideo />
        <PricingSection />
        <AboutSection />
        <GallerySection />
        <HoursSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

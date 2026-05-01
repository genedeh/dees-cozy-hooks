import { AboutSection } from "../components/AboutSection";
import { CategoriesSection } from "../components/CategoriesSection";
import { ContactSection } from "../components/ContactSection";
import { HeroSection } from "../components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <CategoriesSection />
      <ContactSection />
    </main>
  );
}

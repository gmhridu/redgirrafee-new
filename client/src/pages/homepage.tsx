import { HeroSection } from "@/components/sections/HeroSection";
import { FeatureHighlightSection } from "@/components/sections/FeatureHighlightSection";
import { MainContentSection } from "@/components/sections/MainContentSection";
import { TailoredSuccessSection } from "@/components/sections/TailoredSuccessSection";

import { ContentSection } from "@/components/sections/ContentSection";
import { LayoutSection } from "@/components/sections/LayoutSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { UserTestimonialsSection } from "@/components/sections/UserTestimonialsSection";
import { SubscriptionFormSection } from "@/components/sections/SubscriptionFormSection";
import { CallToActionSection } from "@/components/sections/CallToActionSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { NavigationBar, NavigationItem } from "@/components/NavigationBar";

// Navigation menu items with their corresponding section IDs
const navItems: NavigationItem[] = [
  { label: "Features", sectionId: "features" },
  { label: "Industries", sectionId: "industries" },
  { label: "How It Works", sectionId: "how-it-works" },
  { label: "Pricing", sectionId: "pricing" },
  { label: "Contact", sectionId: "contact" },
];

export default function Homepage() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      // Enhanced smooth scrolling with custom easing
      const startPosition = window.pageYOffset;
      const distance = offsetPosition - startPosition;
      // Optimized duration: faster base speed with reasonable max duration
      const duration = Math.min(Math.abs(distance) * 0.2 + 200, 800); // Much faster scrolling
      let start: number | null = null;

      const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      };

      const animateScroll = (timestamp: number) => {
        if (start === null) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const ease = easeInOutCubic(progress);

        window.scrollTo(0, startPosition + distance * ease);

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    }
  };

  return (
    <div className="bg-white flex flex-col w-full min-h-screen">
      <div className="w-full">
        <NavigationBar navItems={navItems} onNavigate={scrollToSection} />
        <HeroSection />
        <section className="section-fullscreen">
          <div className="container-inner">
            <LayoutSection />
          </div>
        </section>
        <section className="section-fullscreen">
          <div className="container-inner">
            <MainContentSection />
          </div>
        </section>
        <section className="section-fullscreen">
          <div className="container-inner">
            <TailoredSuccessSection />
          </div>
        </section>

        <section className="section-fullscreen">
          <div className="container-inner">
            <ContentSection />
          </div>
        </section>
        <section id="industries" className="section-fullscreen">
          <div className="container-inner">
            <IndustriesSection />
          </div>
        </section>
        <section id="features" className="section-fullscreen">
          <div className="container-inner">
            <FeatureHighlightSection />
          </div>
        </section>
        <section className="section-fullscreen">
          <div className="container-inner">
            <UserTestimonialsSection />
          </div>
        </section>
        <section id="how-it-works" className="section-fullscreen">
          <div className="container-inner">
            <HowItWorksSection />
          </div>
        </section>
        <section id="pricing" className="section-fullscreen">
          <div className="container-inner">
            <CallToActionSection />
          </div>
        </section>
        <section id="contact" className="section-fullscreen">
          <div className="container-inner">
            <SubscriptionFormSection />
          </div>
        </section>
      </div>
      <FooterSection />
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-app-secondary hover:bg-[#3d7a6a] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center btn-touch"
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 10px 25px rgba(74, 139, 123, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

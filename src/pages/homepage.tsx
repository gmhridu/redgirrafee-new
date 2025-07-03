import { NavigationBar, NavigationItem } from '@/components/NavigationBar';
import { FooterSection } from '@/components/sections/FooterSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { IndustriesSection } from '@/components/sections/IndustriesSection';
import { LayoutSection } from '@/components/sections/LayoutSection';
import { MainContentSection } from '@/components/sections/MainContentSection';
import { PricingCardsSection } from '@/components/sections/PricingCardsSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { SophisticatedContactSection } from '@/components/sections/SophisticatedContactSection';
import { StatisticsSection } from '@/components/sections/StatisticsSection';
import { TailoredSuccessSection } from '@/components/sections/TailoredSuccessSection';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';

// Navigation menu items with their corresponding section IDs
const navItems: NavigationItem[] = [
  { label: 'Features', sectionId: 'features' },
  { label: 'Industries', sectionId: 'industries' },
  { label: 'How It Works', sectionId: 'how-it-works' },
  { label: 'Pricing', sectionId: 'pricing' },
  { label: 'Contact', sectionId: 'contact' },
];

export default function Homepage() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Minimal offsets for perfect positioning without gaps
      let customOffset = 0;
      switch (sectionId) {
        case 'industries':
          // Minimal offset for perfect positioning
          customOffset = window.innerWidth >= 1024 ? 20 : 4;
          break;
        case 'features':
          // Minimal offset for perfect positioning
          customOffset = window.innerWidth >= 1024 ? 20 : 10;
          break;
        case 'how-it-works':
          // Minimal offset for perfect positioning
          customOffset = window.innerWidth >= 1024 ? 20 : 10;
          break;
        case 'pricing':
          // Minimal offset for perfect positioning
          customOffset = window.innerWidth >= 1024 ? 20 : 10;
          break;
        default:
          customOffset = 5; // Very minimal offset
      }

      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - customOffset;

      // Use native smooth scrolling for instant response and better performance
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-white flex flex-col w-full min-h-screen">
      <div className="w-full">
        <NavigationBar navItems={navItems} onNavigate={scrollToSection} />
        <HeroSection />
        <LayoutSection />
        <MainContentSection />
        <TailoredSuccessSection />
        <IndustriesSection />
        {/* <FeatureHighlightSection /> */}
        {/* <UserTestimonialsSection /> */}
        {/* test */}
        <HowItWorksSection />
        <StatisticsSection />
        <ProcessSection />
        <PricingCardsSection />
        <SophisticatedContactSection />
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
              type: 'spring',
              stiffness: 400,
              damping: 17,
            }}
            whileHover={{
              scale: 1.1,
              boxShadow: '0 10px 25px rgba(74, 139, 123, 0.3)',
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

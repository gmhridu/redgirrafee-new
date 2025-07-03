import { Button } from '@/components/ui/button';
import { HamburgerMenu } from '@/components/ui/hamburger-menu';
import { Sheet, SheetContent, SheetHeader } from '@/components/ui/sheet';
import { durations } from '@/utils/animations';
import { AnimatePresence, motion } from 'framer-motion';
import { Mail, Phone, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export interface NavigationItem {
  label: string;
  sectionId: string;
}

interface NavigationBarProps {
  navItems: NavigationItem[];
  onNavigate?: (sectionId: string) => void;
  className?: string;
}

export const NavigationBar: React.FC<NavigationBarProps> = ({
  navItems,
  onNavigate,
  className = '',
}) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showFlagDropdown, setShowFlagDropdown] = useState(false);
  const [showMobileFlagDropdown, setShowMobileFlagDropdown] = useState(false);
  const [selectedFlag, setSelectedFlag] = useState(0); // US is default (index 0)
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const flagDropdownRef = useRef<HTMLDivElement>(null);
  const mobileFlagDropdownRef = useRef<HTMLDivElement>(null);

  // Flag data
  const flags = [
    { name: 'United States', code: 'US', flag: '🇺🇸' },
    { name: 'United Kingdom', code: 'UK', flag: '🇬🇧' },
    { name: 'India', code: 'IN', flag: '🇮🇳' },
    { name: 'European Union', code: 'EU', flag: '🇪🇺' },
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      // Check if click is outside mobile menu and not on the menu button
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(target)) {
        // Also check if the click is not on the mobile menu button itself
        if (!mobileMenuButtonRef.current || !mobileMenuButtonRef.current.contains(target)) {
          setShowMobileMenu(false);
        }
      }

      // Check if click is outside flag dropdown
      if (flagDropdownRef.current && !flagDropdownRef.current.contains(target)) {
        setShowFlagDropdown(false);
      }

      // Check if click is outside mobile flag dropdown
      if (mobileFlagDropdownRef.current && !mobileFlagDropdownRef.current.contains(target)) {
        setShowMobileFlagDropdown(false);
      }
    };

    if (showMobileMenu || showFlagDropdown || showMobileFlagDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMobileMenu, showFlagDropdown, showMobileFlagDropdown]);

  const handleMobileMenuClick = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  // Handle flag selection with navigation
  const handleFlagSelection = (index: number) => {
    setSelectedFlag(index);
    setShowFlagDropdown(false);

    // Navigate to India site if IN flag is selected
    if (flags[index].code === 'IN') {
      window.location.href = 'https://redgirraffe.com/in/';
    }
  };

  // Handle mobile flag selection with navigation
  const handleMobileFlagSelection = (index: number) => {
    setSelectedFlag(index);
    setShowMobileFlagDropdown(false);

    // Navigate to India site if IN flag is selected
    if (flags[index].code === 'IN') {
      window.location.href = 'https://redgirraffe.com/in/';
    }
  };

  // Enhanced smooth scroll to section function with instant navigation
  const scrollToSection = (sectionId: string, closeMobileMenu: boolean = false) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const performScroll = () => {
        // Get the current position of the element
        const elementPosition = element.getBoundingClientRect().top;

        // Minimal offsets for perfect positioning without gaps
        let customOffset = 0;
        switch (sectionId) {
          case 'industries':
            // Minimal offset for perfect positioning
            customOffset = window.innerWidth >= 1024 ? 20 : 12;
            break;
          case 'features':
            // Minimal offset for perfect positioning
            customOffset = window.innerWidth >= 1024 ? 20 : 16;
            break;
          case 'how-it-works':
            // Minimal offset for perfect positioning
            customOffset = window.innerWidth >= 1024 ? 20 : 12;
            break;
          case 'pricing':
            // Minimal offset for perfect positioning
            customOffset = window.innerWidth >= 1024 ? 20 : 16;
            break;
          default:
            customOffset = 5; // Very minimal offset
        }

        const offsetPosition = elementPosition + window.pageYOffset - customOffset;

        // Use native smooth scrolling for instant response and better performance
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      };

      if (closeMobileMenu && showMobileMenu) {
        // Close sheet first, then scroll after animation completes
        setShowMobileMenu(false);
        // Wait for sheet animation to complete
        setTimeout(performScroll, 300);
      } else {
        // Instant navigation for desktop
        performScroll();
      }
    }

    // Call optional callback
    if (onNavigate) {
      onNavigate(sectionId);
    }
  };

  return (
    <>
      {/* Navigation Bar - Sticky with Glass Morphism Effect */}
      <div className={`flex items-center justify-center w-full ${className}`}>
        {/* Glass Morphism Background - Stripe-like transparent overlay */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-lg "></div>
        <div className="max-w-none px-4 sm:px-6 lg:px-3 xl:px-4 relative z-10 w-full">
          <div className="flex h-16 sm:h-16 lg:h-20 items-center justify-between w-full max-w-[94%] sm:max-w-[98%] xl:max-w-[96%] mx-auto py-4 sm:py-4 lg:py-6">
            <div className="flex items-center gap-3 lg:gap-8 xl:gap-12">
              {/* Logo - Enhanced for premium synergy */}
              <div className="flex items-center gap-2 sm:gap-3 pl-1 sm:pl-0">
                <div className="font-bold text-slate-900 text-2xl sm:text-2xl lg:text-3xl xl:text-3xl  tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent hover:from-emerald-700 hover:via-slate-900 hover:to-emerald-700 transition-all duration-300 drop-shadow-sm">
                  RedGirraffe
                </div>
              </div>

              {/* Navigation Links - Hidden on mobile and tablet */}
              <div className="hidden lg:flex items-center gap-4 xl:gap-6">
                {navItems.map((item, index) => (
                  <div
                    key={index}
                    className="p-0 h-auto hover:bg-transparent btn-touch"
                    onClick={() => scrollToSection(item.sectionId)}
                  >
                    <div className="font-body-large-body-large-semibold text-sm lg:text-base xl:text-[length:var(--body-large-body-large-semibold-font-size)] text-center tracking-[var(--body-large-body-large-semibold-letter-spacing)] leading-[var(--body-large-body-large-semibold-line-height)] transition-colors cursor-pointer text-slate-800 hover:text-emerald-600 font-medium drop-shadow-sm">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-center gap-1 xl:gap-2">
              {/* Mobile Flag Dropdown and Menu Button - Show only on mobile */}
              <div className="flex lg:hidden items-center gap-2 pr-1 sm:pr-0">
                {/* Mobile Flag Dropdown */}
                <div className="relative" ref={mobileFlagDropdownRef}>
                  <Button
                    variant="ghost"
                    className="w-10 h-10 p-0 rounded-full hover:bg-gray-300 transition-colors btn-touch flex items-center justify-center"
                    onClick={() => setShowMobileFlagDropdown(!showMobileFlagDropdown)}
                  >
                    <span className="text-2xl leading-none">{flags[selectedFlag].flag}</span>
                  </Button>

                  {/* Mobile Flag Dropdown Menu */}
                  <AnimatePresence>
                    {showMobileFlagDropdown && (
                      <>
                        {/* Backdrop */}
                        <motion.div
                          className="fixed inset-0 bg-black/50 z-[9998]"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: durations.fast }}
                          onClick={() => setShowMobileFlagDropdown(false)}
                        />

                        {/* Dropdown */}
                        <motion.div
                          className="fixed top-16 right-4 bg-white border border-abu-stroke rounded-lg shadow-2xl py-2 min-w-[160px] z-[9999]"
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: durations.fast }}
                        >
                          {flags.map((flag, index) => (
                            <motion.button
                              key={index}
                              onClick={() => handleMobileFlagSelection(index)}
                              className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors ${
                                index === selectedFlag ? 'bg-gray-50' : ''
                              }`}
                              whileHover={{ backgroundColor: '#f9fafb' }}
                            >
                              <span className="text-xl">{flag.flag}</span>
                              <span className="font-body-medium-body-medium-regular text-black text-sm">
                                {flag.code}
                              </span>
                            </motion.button>
                          ))}
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>

                <HamburgerMenu
                  isOpen={showMobileMenu}
                  onClick={handleMobileMenuClick}
                  className="btn-touch"
                />
              </div>

              {/* Desktop Buttons - Hidden on mobile */}
              <div className="hidden lg:flex items-center gap-1 xl:gap-2">
                {/* Flag Dropdown */}
                <div className="relative" ref={flagDropdownRef}>
                  <Button
                    variant="ghost"
                    className="w-12 h-12 p-0 rounded-full hover:bg-gray-300 transition-colors btn-touch flex items-center justify-center"
                    onClick={() => setShowFlagDropdown(!showFlagDropdown)}
                  >
                    <span className="text-3xl leading-none">{flags[selectedFlag].flag}</span>
                  </Button>

                  {/* Flag Dropdown Menu */}
                  <AnimatePresence>
                    {showFlagDropdown && (
                      <motion.div
                        className="absolute top-12 right-0 bg-white border border-abu-stroke rounded-lg shadow-lg py-2 min-w-[160px] z-50"
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: durations.fast }}
                      >
                        {flags.map((flag, index) => (
                          <motion.button
                            key={index}
                            onClick={() => handleFlagSelection(index)}
                            className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors ${
                              index === selectedFlag ? 'bg-gray-50' : ''
                            }`}
                            whileHover={{ backgroundColor: '#f9fafb' }}
                          >
                            <span className="text-xl">{flag.flag}</span>
                            <span className="font-body-medium-body-medium-regular text-black text-sm">
                              {flag.code}
                            </span>
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Button
                  variant="outline"
                  className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 border-0 text-white font-semibold px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <span className="text-sm font-medium">Get Demo</span>
                </Button>
                <Button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/40 text-slate-800 hover:text-slate-900 font-semibold px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <span className="text-sm font-medium">Login</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Sheet */}
      <Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
        <SheetContent
          side="left"
          className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-r-0 p-0 w-[280px] sm:w-[320px]"
        >
          <div className="p-6 pb-8 absolute">
            {/* Header with Logo and Close Button */}
            <SheetHeader className="mb-8 flex-row items-center justify-between">
              <img src="/logo.svg" alt="Logo" className="w-40 pl-2" />
              <button
                onClick={() => setShowMobileMenu(false)}
                className="size-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group relative right-[-38px] top-[-33px]"
              >
                <X className="w-5 h-5 text-white group-hover:text-white/80 transition-colors" />
              </button>
            </SheetHeader>

            {/* Navigation Links */}
            <div className="space-y-1 mb-8">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.sectionId, true)}
                  className="w-full text-left py-4 px-4 text-white hover:bg-white/10 rounded-lg transition-colors flex items-center justify-between group"
                >
                  <span className="text-lg font-medium">{item.label}</span>
                  <span className="text-white/40 group-hover:text-white/60 transition-colors">
                    |
                  </span>
                </button>
              ))}
            </div>

            {/* Contact Information */}
            <div className="space-y-4 pt-4 border-t border-white/20">
              <a
                href="tel:+918010191019"
                className="flex items-center gap-3 text-white hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="text-base">(+91) 80-1019-1019</span>
              </a>
              <a
                href="mailto:connect@redgirraffe.com"
                className="flex items-center gap-3 text-white hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="text-base">connect@redgirraffe.com</span>
              </a>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

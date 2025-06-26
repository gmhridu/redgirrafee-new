import { Menu, ChevronDown, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { durations, easings } from "@/utils/animations";

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
  className = "",
}) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showFlagDropdown, setShowFlagDropdown] = useState(false);
  const [selectedFlag, setSelectedFlag] = useState(0); // UK is default (index 0)
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const flagDropdownRef = useRef<HTMLDivElement>(null);

  // Flag data
  const flags = [
    { name: "United Kingdom", code: "UK", flag: "🇬🇧" },
    { name: "India", code: "IN", flag: "🇮🇳" },
    { name: "United States", code: "US", flag: "🇺🇸" },
    { name: "European Union", code: "EU", flag: "🇪🇺" },
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
    };

    if (showMobileMenu || showFlagDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMobileMenu, showFlagDropdown]);

  const handleMobileMenuClick = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  // Handle flag selection with navigation
  const handleFlagSelection = (index: number) => {
    setSelectedFlag(index);
    setShowFlagDropdown(false);

    // Navigate to India site if IN flag is selected
    if (flags[index].code === "IN") {
      window.location.href = "https://redgirraffe.com/in/";
    }
  };

  // Enhanced smooth scroll to section function
  const scrollToSection = (sectionId: string, closeMobileMenu: boolean = false) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Account for sticky navigation height
      const headerOffset = 80;

      const performScroll = () => {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        // Enhanced smooth scrolling with optimized performance
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
      };

      if (closeMobileMenu && showMobileMenu) {
        // Close menu first, then scroll after animation completes
        setShowMobileMenu(false);
        setTimeout(performScroll, 350); // Wait for menu close animation
      } else {
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
      {/* Navigation Bar - Sticky */}
      <div className={`sticky top-0 z-50 flex items-center justify-center w-full bg-app-primary text-white backdrop-blur-sm ${className}`} >
        <div className="container-inner">
          <div className="flex h-16 sm:h-16 lg:h-20 items-center justify-between w-full py-4 sm:py-4 lg:py-6">
            <div className="flex items-center gap-4 lg:gap-12 xl:gap-20">
              {/* Logo with Flag Logos */}
              <div className="flex flex-col items-start gap-1">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="relative w-8 h-8 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg overflow-hidden shadow-md">
                    <div className="w-full h-full flex items-center justify-center text-white font-bold text-lg">
                      R
                    </div>
                  </div>
                  <div className="font-bold text-white text-2xl sm:text-2xl lg:text-2xl tracking-tight">
                    RedGirraffe
                  </div>
                </div>
                {/* Flag Icons Row */}
                <div className="flex items-center gap-2 ml-10 sm:ml-9 lg:ml-10">
                  <div className="w-5 h-3 bg-gradient-to-r from-red-600 via-white to-red-600 rounded-sm shadow-sm border border-white/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-red-500 to-red-600"></div>
                    <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-r from-blue-800 to-blue-900"></div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></div>
                  </div>
                  <div className="w-5 h-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-sm shadow-sm border border-white/20 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-3 h-2 bg-blue-600 rounded-full relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-5 h-3 bg-gradient-to-r from-blue-800 via-white to-red-600 rounded-sm shadow-sm border border-white/20 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-blue-800"></div>
                    <div className="absolute top-1 left-0 w-full h-1 bg-white"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></div>
                  </div>
                  <div className="w-5 h-3 bg-gradient-to-b from-orange-500 via-white to-green-600 rounded-sm shadow-sm border border-white/20 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-orange-500"></div>
                    <div className="absolute top-1 left-0 w-full h-1 bg-white"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-green-600"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-blue-800 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Navigation Links - Hidden on mobile and tablet */}
              <div className="hidden lg:flex items-center gap-6 xl:gap-10">
                {navItems.map((item, index) => (
                  <div
                    key={index}
                    className="p-0 h-auto hover:bg-transparent btn-touch"
                    onClick={() => scrollToSection(item.sectionId)}
                  >
                    <div className="font-body-large-body-large-semibold text-sm lg:text-base xl:text-[length:var(--body-large-body-large-semibold-font-size)] text-center tracking-[var(--body-large-body-large-semibold-letter-spacing)] leading-[var(--body-large-body-large-semibold-line-height)] transition-colors cursor-pointer text-white hover:text-[#00d959]">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-center gap-2 xl:gap-3">
              {/* Mobile Menu Button - Show only on mobile */}
              <Button
                ref={mobileMenuButtonRef}
                variant="ghost"
                className="block lg:hidden w-10 h-10 p-2 btn-touch group"
                onClick={handleMobileMenuClick}
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: showMobileMenu ? 90 : 0 }}
                  transition={{ duration: durations.fast, ease: easings.smooth }}
                >
                  {showMobileMenu ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: durations.fast }}
                    >
                      <X className="w-6 h-6 text-white group-hover:text-app-primary" />
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: durations.fast }}
                    >
                      <Menu className="w-6 h-6 text-white group-hover:text-app-primary" />
                    </motion.div>
                  )}
                </motion.div>
              </Button>

              {/* Desktop Buttons - Hidden on mobile */}
              <div className="hidden lg:flex items-center gap-2 xl:gap-3">
                {/* Flag Dropdown */}
                <div className="relative" ref={flagDropdownRef}>
                  <Button
                    variant="ghost"
                    className="w-10 h-10 p-1.5 rounded-full hover:bg-gray-300 transition-colors btn-touch"
                    onClick={() => setShowFlagDropdown(!showFlagDropdown)}
                  >
                    <span className="text-2xl">{flags[selectedFlag].flag}</span>
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
                  <span className="text-sm font-medium">
                    Get Demo
                  </span>
                </Button>
                <Button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <span className="text-sm font-medium">
                    Login
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            ref={mobileMenuRef}
            className="lg:hidden w-full bg-white border-b border-abu-stroke px-4 py-4 sticky top-[80px] z-40"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: durations.fast }}
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={index}
                  onClick={() => scrollToSection(item.sectionId, true)}
                  className="text-left py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors btn-touch"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: durations.fast,
                    delay: index * 0.1,
                  }}
                >
                  <span className="font-body-large-body-large-semibold text-textblack text-base">
                    {item.label}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

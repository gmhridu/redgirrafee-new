import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Volume2, VolumeX, Maximize, Minimize } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export const HeroSection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = async () => {
    if (containerRef.current) {
      if (!isFullscreen) {
        try {
          await containerRef.current.requestFullscreen();
          setIsFullscreen(true);
        } catch (error) {
          console.log("Fullscreen not supported");
        }
      } else {
        try {
          await document.exitFullscreen();
          setIsFullscreen(false);
        } catch (error) {
          console.log("Exit fullscreen failed");
        }
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    // Auto-play video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(console.log);
    }
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/10 py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container-inner relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Commercial/Platforms Toggle */}
            <motion.div 
              className="inline-flex items-center gap-2"
              variants={itemVariants}
            >
              <Button 
                size="sm"
                className="bg-slate-800 text-white rounded-full px-6 py-2 text-sm font-medium hover:bg-slate-700"
              >
                Commercial
              </Button>
              <Button 
                variant="ghost"
                size="sm"
                className="hover:bg-slate-100 rounded-full px-6 py-2 text-sm font-medium text-slate-600"
              >
                Platforms
              </Button>
              <div className="ml-4 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                Click to change
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight"
              variants={itemVariants}
            >
              RedGirraffe Global
              <br />
              <span className="text-slate-700">Commercial Card</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-lg sm:text-xl text-slate-600 leading-relaxed font-light"
              variants={itemVariants}
            >
              Simplify payments, reduce costs, and unlock smarter cash flow with seamless recurring payouts in 97+ countries.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Button className="bg-slate-800 hover:bg-slate-700 text-white rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                  <ArrowRight className="w-5 h-5" />
                  Request a Demo
                </Button>
              </motion.div>
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Button 
                  variant="outline"
                  className="border-2 border-slate-600 text-slate-600 hover:bg-slate-600 hover:text-white rounded-full px-8 py-4 text-lg font-semibold transition-all duration-300 flex items-center gap-2"
                >
                  <ArrowRight className="w-5 h-5" />
                  Contact Sales
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="pt-4"
              variants={itemVariants}
            >
              <p className="text-lg font-semibold text-slate-700">
                <span className="text-2xl font-bold text-slate-900">$20B+</span> processed annually
              </p>
            </motion.div>
          </motion.div>

          {/* Right Video Section */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div 
              ref={containerRef}
              className={`relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-2 shadow-2xl ${
                isFullscreen ? 'bg-black' : ''
              }`}
            >
              {/* Video Container */}
              <div className="relative bg-black rounded-2xl overflow-hidden aspect-video group">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  muted={isMuted}
                  loop
                  autoPlay
                  playsInline
                  onEnded={() => {
                    if (isFullscreen) {
                      document.exitFullscreen().then(() => {
                        setIsFullscreen(false);
                        if (videoRef.current) {
                          videoRef.current.play();
                        }
                      });
                    }
                  }}
                >
                  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Video Controls Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="w-full p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-3">
                        <motion.button
                          onClick={toggleMute}
                          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-colors duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                        </motion.button>
                        <motion.button
                          onClick={toggleFullscreen}
                          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-colors duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-400 rounded-full opacity-30"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-indigo-400 rounded-full opacity-30"></div>
              <div className="absolute -top-2 -right-8 w-6 h-6 bg-blue-300 rounded-full opacity-40"></div>
              
              {/* Floating Text - Positioned better */}
              <motion.div 
                className="absolute -right-4 top-8 bg-white px-4 py-2 rounded-full shadow-lg text-sm hidden lg:block"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <div className="flex items-center gap-2 text-green-600 font-medium">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  organized
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* WhatsApp Contact Button - Floating */}
        <motion.div
          className="fixed bottom-6 left-6 z-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <motion.a
            href="https://wa.me/your-whatsapp-number"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title="Contact us on WhatsApp"
          >
            <MessageCircle className="w-7 h-7" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

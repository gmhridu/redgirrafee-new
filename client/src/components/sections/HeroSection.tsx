import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Volume2, VolumeX, Maximize, Minimize, Play, Pause, Settings, Square } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

export const HeroSection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isCommercial, setIsCommercial] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
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

  const handleToggleSwitch = () => {
    if (isCommercial) {
      // Switch to Platforms and redirect
      window.location.href = "https://redgirraffe.com/in/b2b-saas";
    } else {
      // Switch to Commercial
      setIsCommercial(true);
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
      const isCurrentlyFullscreen = !!document.fullscreenElement;
      setIsFullscreen(isCurrentlyFullscreen);
      
      // When exiting fullscreen, ensure video returns to muted state and continues playing
      if (!isCurrentlyFullscreen && videoRef.current) {
        videoRef.current.muted = true;
        setIsMuted(true);
        videoRef.current.play().catch(console.log);
      }
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
      
      // Add progress tracking
      const updateProgress = () => {
        if (videoRef.current) {
          const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
          setProgress(currentProgress || 0);
          setCurrentTime(videoRef.current.currentTime);
        }
      };
      
      const updateDuration = () => {
        if (videoRef.current) {
          setDuration(videoRef.current.duration);
        }
      };
      
      videoRef.current.addEventListener('timeupdate', updateProgress);
      videoRef.current.addEventListener('loadedmetadata', updateDuration);
      
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('timeupdate', updateProgress);
        }
      };
    }
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-amber-50 pt-0 pb-16 sm:pb-20 lg:pb-28 overflow-hidden -mt-20">
      {/* Sophisticated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-500/5 to-amber-400/10"></div>
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 right-20 w-72 h-72 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-amber-300 to-orange-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative pt-20 sm:pt-24 md:pt-28 lg:pt-32 w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Content - Wider Layout */}
          <motion.div
            className="lg:col-span-7 xl:col-span-6 space-y-6 sm:space-y-8 order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Commercial/Platforms Slider Switch */}
            <motion.div 
              className="flex flex-col items-start gap-2"
              variants={itemVariants}
            >
              {/* Click to Change Button with Arrow positioned above */}
              <div className="flex items-center gap-1 ml-8">
                <motion.button
                  onClick={handleToggleSwitch}
                  className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1.5 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Click to change
                </motion.button>
              </div>
              
              {/* Arrow pointing down to slider */}
              <div className="text-green-500 text-lg ml-16">▼</div>
              
              {/* Slider Switch Container - Wider */}
              <div className="relative bg-gray-200 rounded-full p-1 shadow-inner w-80 xl:w-96">
                {/* Sliding Background */}
                <motion.div
                  className="absolute top-1 bottom-1 bg-slate-800 rounded-full shadow-md"
                  animate={{
                    left: isCommercial ? "4px" : "50%",
                    width: "calc(50% - 4px)"
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                
                {/* Switch Options */}
                <div className="relative flex">
                  <button
                    onClick={() => setIsCommercial(true)}
                    className={`flex-1 px-6 py-2 text-sm font-medium rounded-full transition-colors duration-300 z-10 ${
                      isCommercial ? 'text-white' : 'text-slate-600'
                    }`}
                  >
                    Commercial
                  </button>
                  <button
                    onClick={() => {
                      if (isCommercial) {
                        window.location.href = "https://redgirraffe.com/in/b2b-saas";
                      } else {
                        setIsCommercial(false);
                      }
                    }}
                    className={`flex-1 px-6 py-2 text-sm font-medium rounded-full transition-colors duration-300 z-10 ${
                      !isCommercial ? 'text-white' : 'text-slate-600'
                    }`}
                  >
                    Platforms
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Main Heading - Enhanced Scale */}
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight tracking-tight text-center lg:text-left"
              variants={itemVariants}
            >
              RedGirraffe Global
              <br />
              <span className="text-slate-700">Commercial Card</span>
            </motion.h1>

            {/* Subtitle - Enhanced Scale */}
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl text-slate-600 leading-relaxed font-light text-center lg:text-left max-w-4xl"
              variants={itemVariants}
            >
              Simplify payments, reduce costs, and unlock smarter cash flow with seamless recurring B2B payments in 97+ countries.
            </motion.p>

            {/* Action Buttons - Enhanced Layout */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start pt-4"
              variants={itemVariants}
            >
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Button className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white rounded-full px-10 py-5 text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
                  <ArrowRight className="w-6 h-6" />
                  Request a Demo
                </Button>
              </motion.div>
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Button 
                  variant="outline"
                  className="bg-white/80 backdrop-blur-sm border-2 border-purple-300 text-slate-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 hover:border-purple-400 hover:text-slate-800 rounded-full px-10 py-5 text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
                >
                  <ArrowRight className="w-6 h-6" />
                  Contact Sales
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats - Enhanced Layout */}
            <motion.div 
              className="pt-6 sm:pt-8"
              variants={itemVariants}
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center">
                <p className="text-xl sm:text-2xl font-semibold text-slate-700 text-center lg:text-left">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 block sm:inline">$20B+</span>
                  <span className="block sm:inline sm:ml-3">processed annually</span>
                </p>
                <div className="hidden sm:block w-px h-12 bg-slate-300"></div>
                <p className="text-lg sm:text-xl font-medium text-slate-600 text-center lg:text-left">
                  <span className="text-2xl sm:text-3xl font-bold text-emerald-600 block sm:inline">97+</span>
                  <span className="block sm:inline sm:ml-2">countries supported</span>
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Video Section - Enhanced Layout */}
          <motion.div 
            className="lg:col-span-5 xl:col-span-6 relative w-full order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div 
              ref={containerRef}
              className={`relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl sm:rounded-3xl p-3 sm:p-4 lg:p-5 shadow-2xl w-full ${
                isFullscreen ? 'bg-black' : ''
              }`}
            >
              {/* Video Container */}
              <div className="relative bg-black rounded-xl sm:rounded-2xl overflow-hidden aspect-video group">
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

                {/* YouTube-style Video Controls - Only visible in fullscreen */}
                {isFullscreen && (
                  <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Progress Bar */}
                    <div className="w-full bg-white/30 h-1 hover:h-2 transition-all duration-200 cursor-pointer group/progress">
                      <div 
                        className="bg-red-600 h-full transition-all duration-100 ease-out relative"
                        style={{ width: `${progress}%` }}
                      >
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-red-600 rounded-full opacity-0 group-hover/progress:opacity-100 transition-opacity duration-200"></div>
                      </div>
                    </div>
                    
                    {/* Control Bar */}
                    <div className="bg-gradient-to-t from-black/90 to-transparent px-4 py-3">
                      <div className="flex items-center justify-between text-white">
                        {/* Left Controls */}
                        <div className="flex items-center gap-3">
                          <motion.button
                            onClick={toggleMute}
                            className="hover:bg-white/20 p-2 rounded transition-colors duration-200"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                          </motion.button>
                          <span className="text-sm font-medium">
                            {formatTime(currentTime)} / {formatTime(duration)}
                          </span>
                        </div>

                        {/* Right Controls */}
                        <div className="flex items-center gap-2">
                          <motion.button
                            className="hover:bg-white/20 p-2 rounded transition-colors duration-200"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Settings className="w-5 h-5" />
                          </motion.button>
                          <motion.button
                            onClick={toggleFullscreen}
                            className="hover:bg-white/20 p-2 rounded transition-colors duration-200"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Square className="w-5 h-5" />
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Video Controls Overlay - Bottom Right */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    <motion.button
                      onClick={toggleMute}
                      className="bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </motion.button>
                    <motion.button
                      onClick={toggleFullscreen}
                      className="bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Enhanced Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-40 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -top-4 -right-12 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-1/2 -left-8 w-10 h-10 bg-gradient-to-br from-indigo-400 to-blue-400 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '3s' }}></div>
              <div className="absolute bottom-10 -right-10 w-6 h-6 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '4s' }}></div>

            </div>

            {/* Additional Content Cards for Space Utilization */}
            <div className="grid grid-cols-2 gap-4 mt-8 lg:mt-12">
              <motion.div
                className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-slate-800 mb-2">97+</div>
                  <div className="text-sm lg:text-base text-slate-600 font-medium">Countries</div>
                </div>
              </motion.div>
              
              <motion.div
                className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-emerald-600 mb-2">24/7</div>
                  <div className="text-sm lg:text-base text-slate-600 font-medium">Support</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Trust Indicators - Bottom Section */}
        <motion.div
          className="mt-16 lg:mt-20 xl:mt-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="text-center mb-8">
            <p className="text-lg text-slate-600 font-medium">Trusted by leading businesses worldwide</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 items-center opacity-60">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex justify-center">
                <div className="bg-slate-200 rounded-lg p-4 w-24 h-12 flex items-center justify-center">
                  <div className="text-slate-400 font-semibold text-sm">LOGO {item}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

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

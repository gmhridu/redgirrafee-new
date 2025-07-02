import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Play } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export const HeroSection = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isCommercial, setIsCommercial] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [hasCompletedCycle, setHasCompletedCycle] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

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
        ease: 'easeOut',
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  const handleToggleSwitch = () => {
    // Simply toggle between Commercial and Platforms without navigation
    setIsCommercial(!isCommercial);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(console.log);
        setIsPlaying(true);
      }
    }
  };

  const toggleFullscreen = async () => {
    if (containerRef.current) {
      if (!isFullscreen) {
        try {
          await containerRef.current.requestFullscreen();
          setIsFullscreen(true);
        } catch (error) {
          console.log('Fullscreen not supported');
        }
      } else {
        try {
          await document.exitFullscreen();
          setIsFullscreen(false);
        } catch (error) {
          console.log('Exit fullscreen failed');
        }
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      const isCurrentlyFullscreen = !!document.fullscreenElement;
      setIsFullscreen(isCurrentlyFullscreen);

      // Reset cycle tracking when entering fullscreen
      if (isCurrentlyFullscreen) {
        setHasCompletedCycle(false);
      }

      // When exiting fullscreen, ensure video continues playing and is muted
      if (!isCurrentlyFullscreen && videoRef.current) {
        videoRef.current.muted = true;
        setIsMuted(true);
        videoRef.current.play().catch(console.log);
        setHasCompletedCycle(false); // Reset cycle tracking
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Auto-play video when component mounts and add event listeners
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(console.log);

      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);

      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);

      return () => {
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
      };
    }
  }, []);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        togglePlayPause();
      } else if (e.code === 'KeyM') {
        e.preventDefault();
        toggleMute();
      }
    };

    if (isFullscreen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isFullscreen, isPlaying, isMuted]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-amber-50 pt-0 pb-16 sm:pb-20 lg:pb-28 overflow-hidden -mt-20">
      {/* Sophisticated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-500/5 to-amber-400/10"></div>

      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 right-20 w-72 h-72 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-amber-300 to-orange-400 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="relative pt-20 sm:pt-24 md:pt-28 lg:pt-40 w-full">
        {/* World-class full-width container - Maximum screen coverage with classy edge margins */}
        <div className="max-w-none px-1 sm:px-2 lg:px-3 xl:px-4 w-full">
          <div className="w-full max-w-[98%] xl:max-w-[96%] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 2xl:gap-16 items-center">
              {/* Left Content - Perfectly synergized with enhanced RedGiraffe logo */}
              <motion.div
                className="space-y-6 sm:space-y-8 order-2 lg:order-1 px-2 lg:px-0"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Commercial/Platforms Slider Switch */}
                <motion.div
                  className="flex flex-col items-start gap-2 relative"
                  variants={itemVariants}
                >
                  {/* Click to Change Button with cursor icon */}
                  <div className="block absolute md:w-[163px] w-[120px] md:h-[45px] h-[30px] md:top-[-45px] top-[-45px] md:left-[260px] left-[230px]">
                    <div className="relative h-[45px]">
                      <Card
                        className="inline-flex items-center justify-center gap-2.5 px-3.5 py-1 absolute top-0 left-[31px] bg-[#00d959] rounded-[55px] overflow-hidden border-none cursor-pointer"
                        onClick={handleToggleSwitch}
                      >
                        <span className="font-body-large-body-large-regular text-[#1b1b1b] text-[length:var(--body-large-body-large-regular-font-size)] text-center tracking-[var(--body-large-body-large-regular-letter-spacing)] leading-[var(--body-large-body-large-regular-line-height)] whitespace-nowrap text-sm sm:text-base ">
                          Click to change
                        </span>
                      </Card>
                      <img
                        className="absolute w-8 h-8 top-[13px] left-0"
                        alt="Cursor"
                        src="/fluent_cursor-20-filled.svg"
                      />
                    </div>
                  </div>

                  {/* Slider Switch Container */}
                  <div className="relative bg-gray-200 rounded-full p-1 shadow-inner w-72">
                    {/* Sliding Background */}
                    <motion.div
                      className="absolute top-1 bottom-1 bg-slate-800 rounded-full shadow-md"
                      animate={{
                        left: isCommercial ? '4px' : '50%',
                        width: 'calc(50% - 4px)',
                      }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
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
                        onClick={() => setIsCommercial(false)}
                        className={`flex-1 px-6 py-2 text-sm font-medium rounded-full transition-colors duration-300 z-10 ${
                          !isCommercial ? 'text-white' : 'text-slate-600'
                        }`}
                      >
                        Platforms
                      </button>
                    </div>
                  </div>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                  className="text-responsive-2xl font-bold text-slate-900 leading-tight tracking-tight text-center lg:text-left"
                  variants={itemVariants}
                >
                  RedGirraffe Global
                  <br />
                  <span className="text-slate-700">Commercial Card</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  className="text-responsive-base text-slate-600 leading-relaxed font-light text-center lg:text-left"
                  variants={itemVariants}
                >
                  Simplify payments, reduce costs, and unlock smarter cash flow with seamless
                  recurring B2B payments in 97+ countries.
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
                  variants={itemVariants}
                >
                  <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                    <Button className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                      <ArrowRight className="w-5 h-5" />
                      Request a Demo
                    </Button>
                  </motion.div>
                  <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                    <Button
                      variant="outline"
                      className="bg-white/80 backdrop-blur-sm border-2 border-emerald-300 text-slate-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 hover:border-emerald-400 hover:text-emerald-700 rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                    >
                      <ArrowRight className="w-5 h-5" />
                      Contact Sales
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Stats */}
                <motion.div className="pt-4" variants={itemVariants}>
                  <p className="text-lg font-semibold text-slate-700">
                    <span className="text-2xl font-bold text-slate-900">$20B+</span> processed
                    annually
                  </p>
                </motion.div>
              </motion.div>

              {/* Right Video Section */}
              <motion.div
                className="relative w-full order-1 lg:order-2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="relative group" ref={containerRef}>
                  <div className="aspect-video w-full bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl shadow-2xl overflow-hidden border-4 border-white/50 backdrop-blur-sm">
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls={isFullscreen}
                      onTimeUpdate={() => {
                        // Auto-exit fullscreen when video completes a cycle
                        if (videoRef.current && isFullscreen && document.fullscreenElement) {
                          const { currentTime, duration } = videoRef.current;
                          // When video is near the end (within 0.5 seconds) and in fullscreen
                          if (duration > 0 && currentTime >= duration - 0.5 && !hasCompletedCycle) {
                            setHasCompletedCycle(true);
                            // Exit fullscreen after a brief delay
                            setTimeout(() => {
                              document.exitFullscreen().catch(console.log);
                              setHasCompletedCycle(false);
                            }, 100);
                          }
                        }
                      }}
                      onEnded={() => {
                        // Fallback for browsers that don't loop properly
                        if (isFullscreen && document.fullscreenElement) {
                          document.exitFullscreen().catch(console.log);
                        }
                      }}
                      onError={e => {
                        console.log('Video error:', e);
                        // Fallback to a different video source
                        if (videoRef.current) {
                          videoRef.current.src =
                            'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
                        }
                      }}
                    >
                      <source
                        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                        type="video/mp4"
                      />
                      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                      {/* Fallback content */}
                      <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-emerald-100 to-teal-100 relative overflow-hidden">
                        {/* Animated background */}
                        <div className="absolute inset-0">
                          <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-200 rounded-full blur-2xl animate-pulse"></div>
                          <div
                            className="absolute bottom-10 right-10 w-40 h-40 bg-teal-200 rounded-full blur-2xl animate-pulse"
                            style={{ animationDelay: '1s' }}
                          ></div>
                        </div>

                        <div className="text-center relative z-10">
                          <motion.div
                            className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <Play className="w-8 h-8 text-white ml-1" />
                          </motion.div>
                          <h3 className="text-lg font-semibold text-slate-800 mb-2">
                            RedGiraffe Demo
                          </h3>
                          <p className="text-slate-600">Global payment solutions</p>
                          <div className="mt-4 flex justify-center space-x-1">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                            <div
                              className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"
                              style={{ animationDelay: '0.2s' }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"
                              style={{ animationDelay: '0.4s' }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </video>
                  </div>

                  {/* Simple overlay for normal view - hover to show controls */}
                  {!isFullscreen && (
                    <div className="absolute inset-0 group/overlay">
                      <div className="absolute inset-0 bg-black/0 group-hover/overlay:bg-black/20 transition-all duration-300">
                        {/* Controls that appear on hover */}
                        <div className="absolute bottom-4 right-4 flex gap-3 opacity-0 group-hover/overlay:opacity-100 transition-opacity duration-300">
                          <button
                            onClick={toggleMute}
                            className="text-white p-3 hover:scale-110 transition-transform duration-200"
                          >
                            {isMuted ? (
                              <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                                />
                              </svg>
                            ) : (
                              <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                                />
                              </svg>
                            )}
                          </button>
                          <button
                            onClick={toggleFullscreen}
                            className="text-white p-3 hover:scale-110 transition-transform duration-200"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-40 animate-pulse"></div>
                <div
                  className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full opacity-40 animate-pulse"
                  style={{ animationDelay: '1s' }}
                ></div>
                <div
                  className="absolute -top-2 -right-8 w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full opacity-50 animate-pulse"
                  style={{ animationDelay: '2s' }}
                ></div>
              </motion.div>
            </div>
          </div>
        </div>
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
    </section>
  );
};

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Play, MessageCircle } from "lucide-react";
import { useState } from "react";

export const HeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

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

  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-green-50/30 py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container-inner relative">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Commercial/Platforms Toggle */}
          <motion.div 
            className="inline-flex items-center gap-2 mb-8"
            variants={itemVariants}
          >
            <Button 
              size="sm"
              className="bg-app-primary text-white rounded-full px-6 py-2 text-sm font-medium"
            >
              Commercial
            </Button>
            <Button 
              variant="ghost"
              size="sm"
              className="hover:bg-gray-100 rounded-full px-6 py-2 text-sm font-medium text-gray-600"
            >
              Platforms
            </Button>
            <div className="ml-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium">
              Click to change
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight tracking-tight"
            variants={itemVariants}
          >
            RedGirraffe Global
            <br />
            <span className="text-gray-700">Commercial Card</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto font-light"
            variants={itemVariants}
          >
            Simplify payments, reduce costs, and unlock smarter cash flow with seamless recurring payouts in 97+ countries.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            variants={itemVariants}
          >
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button className="bg-app-primary hover:bg-app-primary/90 text-white rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                <ArrowRight className="w-5 h-5" />
                Request a Demo
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button 
                variant="outline"
                className="border-2 border-app-secondary text-app-secondary hover:bg-app-secondary hover:text-white rounded-full px-8 py-4 text-lg font-semibold transition-all duration-300 flex items-center gap-2"
              >
                <ArrowRight className="w-5 h-5" />
                Contact Sales
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <p className="text-lg font-semibold text-gray-700">
              <span className="text-2xl font-bold text-gray-900">$20B+</span> processed annually
            </p>
          </motion.div>
        </motion.div>

        {/* Video/Demo Section */}
        <motion.div 
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative bg-gradient-to-r from-green-400 to-green-500 rounded-3xl p-8 shadow-2xl">
            {/* Video Placeholder - Ready for your video */}
            <div className="relative bg-white rounded-2xl aspect-video flex items-center justify-center group cursor-pointer hover:scale-[1.02] transition-transform duration-300">
              {!isVideoLoaded ? (
                <div className="flex flex-col items-center justify-center text-center p-8">
                  <motion.div
                    className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-8 h-8 text-white ml-1" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Watch Demo Video
                  </h3>
                  <p className="text-gray-600">
                    See RedGirraffe in action - your video will be placed here
                  </p>
                </div>
              ) : (
                // Your video will be embedded here
                <video 
                  className="w-full h-full rounded-2xl" 
                  controls 
                  poster="/video-thumbnail.jpg"
                >
                  <source src="/your-demo-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-white rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-white rounded-full opacity-20"></div>
            <div className="absolute -top-2 -right-8 w-6 h-6 bg-yellow-300 rounded-full opacity-30"></div>
            
            {/* Floating Text */}
            <motion.div 
              className="absolute -right-8 top-1/2 transform -translate-y-1/2 bg-white px-6 py-3 rounded-full shadow-lg hidden lg:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="flex items-center gap-2 text-green-600 font-medium">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                organized
              </div>
            </motion.div>
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
            className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
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

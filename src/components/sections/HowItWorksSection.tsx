import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  BarChart3,
  CreditCard,
  Eye,
  Globe,
  Shield,
  Smartphone,
  Sparkles,
  TrendingUp,
  Zap,
} from 'lucide-react';
import { useState } from 'react';

export const HowItWorksSection = () => {
  const [hoveredAdvantage, setHoveredAdvantage] = useState<string | null>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const advantages = [
    {
      category: 'Bank Partnership Advantages',
      features: [
        {
          icon: Shield,
          title:
            'Capture low-risk B2B card spend, reduce fraud with PSP-backed security, and scale globally.',
        },
        {
          icon: TrendingUp,
          title:
            'Increase Revenue Streams: Earn higher transaction fees with secure, high-volume B2B payments.',
        },
        {
          icon: Globe,
          title:
            'Enhanced Reporting: Access detailed analytics to optimize operations and compliance.',
        },
      ],
    },
    {
      category: 'Authorized PSPs Advantages',
      features: [
        {
          icon: Globe,
          title:
            'Leverage our platform to offer secure, scalable payment solutions to enterprises worldwide.',
        },
        {
          icon: TrendingUp,
          title: "Expand Market Reach: Tap into RedGirraffe's global network of 97+ countries.",
        },
        {
          icon: Shield,
          title: 'Reduce Operational Costs: Streamline payment processing with integrated APIs.',
        },
      ],
    },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'End-to-end encryption for all transactions.',
    },
    {
      icon: Eye,
      title: 'Fraud Detection by PSPs',
      description: 'Leverages top-grade security from payment service providers to prevent fraud.',
    },
    {
      icon: BarChart3,
      title: 'Unified Dashboards Live Analytics',
      description: 'Real-time analytics for spend control.',
    },
    {
      icon: Award,
      title: 'ISO 27001 Certified',
      description: 'Globally recognized framework for data security management.',
    },
    {
      icon: CreditCard,
      title: 'PCI DSS Compliance',
      description: 'Adheres to the highest standards for secure card transactions.',
    },
    {
      icon: Zap,
      title: 'AI-Powered Smarts',
      description: 'Smart fraud detection and spend optimization.',
    },
    {
      icon: Globe,
      title: 'ERP & API Ready',
      description: 'Seamless integration with 50+ business tools.',
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Full platform access on your phone.',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  return (
    <section className="relative py-12 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-20" />

        {/* Subtle Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.05) 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Main Container */}
      <div className="max-w-none px-1 sm:px-2 lg:px-3 xl:px-4 w-full">
        <div className="w-full max-w-[98%] xl:max-w-[96%] mx-auto relative">
          {/* Enhanced Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.h2
              className="text-[32px] md:text-[40px] 2xl:text-[45px] 4xl:text-[72px] font-extrabold 4xl:leading-[102.8px] text-center mx-auto mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Powered by{' '}
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
                smart infrastructure
              </span>
            </motion.h2>
            <motion.p
              className="lg:text-lg 2xl:text-2xl font-normal 2xl:leading-[45.6px] text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              More than a card—an intelligent spend management platform.
            </motion.p>
          </motion.div>

          {/* Partnership Advantages */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {advantages.map((advantage, advantageIndex) => {
              const isHovered = hoveredAdvantage === advantage.category;

              return (
                <motion.div key={advantageIndex} className="space-y-8" variants={itemVariants}>
                  {/* Category Header */}
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                      {advantage.category}
                    </h3>
                    <motion.div
                      className="w-20 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: 80 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                  </motion.div>

                  {/* Feature Cards */}
                  <div className="space-y-4">
                    {advantage.features.map((feature, featureIndex) => {
                      const featureKey = `${advantageIndex}-${featureIndex}`;
                      const isFeatureHovered = hoveredAdvantage === featureKey;

                      return (
                        <motion.div
                          key={featureIndex}
                          className="group relative"
                          onMouseEnter={() => setHoveredAdvantage(featureKey)}
                          onMouseLeave={() => setHoveredAdvantage(null)}
                          whileHover={{ scale: 1.03 }}
                          transition={{ duration: 0.3, ease: 'easeOut' }}
                        >
                          <div className="relative bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-xl">
                            {/* Gradient Background on Hover - 3% opacity */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: isFeatureHovered ? 0.03 : 0 }}
                              transition={{ duration: 0.4, ease: 'easeInOut' }}
                            />

                            {/* Content */}
                            <div className="relative flex items-start gap-4">
                              {/* Enhanced Icon Container */}
                              <motion.div
                                className="relative"
                                animate={{
                                  rotate: isFeatureHovered ? -8 : 0,
                                  scale: isFeatureHovered ? 1.1 : 1,
                                }}
                                transition={{ duration: 0.4, ease: 'easeOut' }}
                              >
                                <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
                                  <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{
                                      opacity: isFeatureHovered ? 1 : 0,
                                      scale: isFeatureHovered ? 1 : 0.8,
                                    }}
                                    transition={{ duration: 0.4, ease: 'easeOut' }}
                                  />
                                  <feature.icon className="w-6 h-6 text-green-700 group-hover:text-white relative z-10 transition-colors duration-300" />
                                  {/* Sparkle Effect */}
                                  <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                                </div>
                              </motion.div>

                              {/* Text */}
                              <div className="flex-1">
                                <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium group-hover:text-gray-900 transition-colors duration-300">
                                  {feature.title}
                                </p>
                              </div>
                            </div>

                            {/* Shine Effect */}
                            <motion.div
                              className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: isFeatureHovered ? 1 : 0 }}
                              transition={{ duration: 0.6, ease: 'easeInOut' }}
                            >
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                                initial={{ x: '-200%' }}
                                animate={{ x: isFeatureHovered ? '200%' : '-200%' }}
                                transition={{ duration: 1, ease: 'easeInOut', delay: 0.1 }}
                              />
                            </motion.div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Additional Features Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => {
              const isFeatureHovered = hoveredFeature === index;

              return (
                <motion.div
                  key={index}
                  className="group relative"
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.3, ease: 'easeOut' },
                  }}
                >
                  <div className="relative bg-white p-6 rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-full transition-all duration-500 hover:shadow-lg">
                    {/* Gradient Background Layer - 2% opacity for lighter effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isFeatureHovered ? 0.02 : 0 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                    />

                    {/* Content */}
                    <div className="relative">
                      {/* Enhanced Icon with Light Background */}
                      <motion.div
                        className="mb-4 inline-block"
                        animate={{
                          rotate: isFeatureHovered ? -12 : 0,
                          scale: isFeatureHovered ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                      >
                        <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 inline-flex items-center justify-center shadow-sm">
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{
                              opacity: isFeatureHovered ? 0.8 : 0,
                              scale: isFeatureHovered ? 1 : 0.8,
                            }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                          />
                          <feature.icon className="w-6 h-6 text-green-600 group-hover:text-white relative z-10 transition-colors duration-300" />
                          {/* Icon Glow - Reduced intensity */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl blur-lg"
                            animate={{
                              opacity: isFeatureHovered ? 0.3 : 0,
                              scale: isFeatureHovered ? 1.3 : 1.1,
                            }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                          />
                        </div>
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 group-hover:text-green-700 transition-colors duration-300">
                        {feature.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>

                    {/* Premium Border Glow - Lighter effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isFeatureHovered ? 1 : 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                    >
                      <div className="absolute inset-[-1px] bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl opacity-15 blur-md" />
                    </motion.div>

                    {/* Shine Effect - Lighter */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isFeatureHovered ? 1 : 0 }}
                      transition={{ duration: 0.6, ease: 'easeInOut' }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                        initial={{ x: '-200%' }}
                        animate={{ x: isFeatureHovered ? '200%' : '-200%' }}
                        transition={{ duration: 1, ease: 'easeInOut', delay: 0.1 }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Enhanced Call to Action */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="inline-block"
            >
              <Button className="relative bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-full px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 group overflow-hidden">
                {/* Button Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

                {/* Text and Icon */}
                <span className="relative z-10">Request a Demo</span>
                <motion.div
                  animate={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="relative z-10"
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                  initial={{ x: '-200%' }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 1, ease: 'easeInOut' }}
                />
              </Button>
            </motion.div>

            {/* Supporting Text */}
            <motion.p
              className="mt-4 text-sm text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Transform your B2B payments today
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

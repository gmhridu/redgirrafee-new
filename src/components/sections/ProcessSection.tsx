import { motion } from 'framer-motion';
import { Cog, Rocket, Shield, Sparkles } from 'lucide-react';
import { useState } from 'react';

export const ProcessSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const steps = [
    {
      number: 1,
      title: 'Setup & Approval',
      description:
        'Bank carries out KYC, due diligence and approves card limit. Use ERP or our interface. No code required.',
      features: ['KYC Verification', 'Instant Setup', 'Credit Assessment'],
      icon: Shield,
      gradient: 'from-green-600 to-emerald-600',
      bgGradient: 'from-green-50 to-emerald-50',
    },
    {
      number: 2,
      title: 'Configuration',
      description:
        'Vendors are onboarded, payout types defined, caps configured. AI validates payees, documents and flow logic.',
      features: ['AI Validation', 'Smart Rules', 'Vendor Onboarding'],
      icon: Cog,
      gradient: 'from-emerald-600 to-teal-600',
      bgGradient: 'from-emerald-50 to-teal-50',
    },
    {
      number: 3,
      title: 'Execute & Monitor',
      description:
        'Authorized checkers release payouts. API triggers and card executes. Instant payout. Global FX support. Fully auditable.',
      features: ['Full Audit Trail', 'Global FX', 'Instant Execution'],
      icon: Rocket,
      gradient: 'from-teal-600 to-cyan-600',
      bgGradient: 'from-teal-50 to-cyan-50',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  return (
    <section className="relative pt-4 pb-12 lg:pt-6 lg:pb-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full blur-3xl opacity-20" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full blur-3xl opacity-20" />

        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.02) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      {/* Main Container */}
      <div className="max-w-none px-1 sm:px-2 lg:px-3 xl:px-4 w-full">
        <div className="w-full max-w-[98%] xl:max-w-[96%] mx-auto relative">
          {/* Enhanced Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.h2
              className="text-responsive-xl font-bold text-gray-900 mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              How{' '}
              <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                RedGiraffe works
              </span>
            </motion.h2>
            <motion.p
              className="text-responsive-base text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Simplify your payments in three seamless steps.
            </motion.p>
          </motion.div>

          {/* Modern Animated Timeline - Desktop */}
          <motion.div
            className="hidden lg:block relative mb-16 max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Animated Connection Line */}
            <div className="absolute top-10 left-[15%] right-[15%] h-[2px] bg-gray-200 rounded-full">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: 'left' }}
              />

              {/* Progress Dots on Line */}
              <motion.div
                className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-500 rounded-full"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.7 }}
              />
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-emerald-500 rounded-full"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 1.2 }}
              />
              <motion.div
                className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-teal-500 rounded-full"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 1.7 }}
              />
            </div>

            {/* Modern Step Indicators */}
            <div className="flex justify-between items-center relative">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.3, ease: 'easeOut' }}
                >
                  {/* Gradient Background Glow - Lighter */}
                  <motion.div
                    className={`absolute -inset-2 bg-gradient-to-br ${step.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-10`}
                    animate={{
                      scale: [0.8, 1.1, 0.8],
                      opacity: [0.05, 0.1, 0.05],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.5,
                      ease: 'easeInOut',
                    }}
                  />

                  {/* Modern Icon Container */}
                  <motion.div
                    className={`relative w-20 h-20 bg-gradient-to-br ${step.bgGradient} rounded-2xl shadow-lg flex items-center justify-center group cursor-pointer`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/80 rounded-2xl"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        delay: 0.8 + index * 0.3,
                        type: 'spring',
                        stiffness: 200,
                      }}
                      className="relative z-10"
                    >
                      <step.icon className={`w-10 h-10 text-gray-700`} strokeWidth={1.5} />
                    </motion.div>

                    {/* Corner Accent */}
                    <div
                      className={`absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br ${step.gradient} rounded-full`}
                    />
                  </motion.div>

                  {/* Step Label */}
                  <motion.p
                    className="text-sm font-semibold text-gray-600 mt-4 uppercase tracking-wide"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + index * 0.3 }}
                  >
                    {step.title.split(' ')[0]}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Steps Grid */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steps.map((step, index) => {
              const isHovered = hoveredCard === index;

              return (
                <motion.div
                  key={index}
                  className="relative group"
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.3, ease: 'easeOut' },
                  }}
                >
                  <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full overflow-hidden transition-all duration-500 hover:shadow-lg">
                    {/* Gradient Background Layer - Lighter */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${step.bgGradient} opacity-0`}
                      animate={{ opacity: isHovered ? 0.02 : 0 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                    />

                    {/* Content */}
                    <div className="relative">
                      {/* Icon Container with Animation */}
                      <motion.div
                        className="mb-6"
                        animate={{ rotate: isHovered ? 360 : 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                      >
                        <div
                          className={`w-16 h-16 bg-gradient-to-br ${step.bgGradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <motion.div
                            animate={{ rotate: isHovered ? -360 : 0 }}
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                          >
                            <step.icon
                              className={`w-8 h-8 bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}
                              style={{
                                WebkitTextStroke: isHovered
                                  ? '2px currentColor'
                                  : '1.5px currentColor',
                              }}
                            />
                          </motion.div>
                        </div>

                        {/* Sparkle Effects */}
                        <motion.div
                          className="absolute -top-1 -right-1"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{
                            opacity: isHovered ? 1 : 0,
                            scale: isHovered ? 1 : 0,
                          }}
                          transition={{ duration: 0.4, ease: 'easeOut' }}
                        >
                          <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                        </motion.div>
                      </motion.div>

                      {/* Step Number */}
                      <motion.div
                        className={`text-sm font-semibold mb-3 bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}
                        animate={{ scale: isHovered ? 1.05 : 1 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                      >
                        STEP {step.number}
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                        {step.description}
                      </p>

                      {/* Feature Tags with Borders */}
                      <div className="space-y-3">
                        {step.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            className="bg-white rounded-lg px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200 group-hover:border-green-200 group-hover:bg-green-50/50 transition-all duration-300"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * featureIndex, duration: 0.5 }}
                          >
                            {feature}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Premium Border Glow - Lighter */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                    >
                      <div
                        className={`absolute inset-[-1px] bg-gradient-to-r ${step.gradient} rounded-2xl opacity-10 blur-sm`}
                      />
                    </motion.div>

                    {/* Shine Effect - Lighter */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.6, ease: 'easeInOut' }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12"
                        initial={{ x: '-200%' }}
                        animate={{ x: isHovered ? '200%' : '-200%' }}
                        transition={{ duration: 1, ease: 'easeInOut', delay: 0.1 }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

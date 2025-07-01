import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Building,
  Building2,
  Factory,
  Globe,
  Heart,
  Home,
  Plane,
  Settings,
  Shield,
  Sparkles,
  Zap,
} from 'lucide-react';
import React from 'react';

export const IndustriesSection = () => {
  const industries = [
    {
      icon: Building2,
      title: 'Data Centres',
      description:
        'Optimize infrastructure payments with automated processing and real-time monitoring.',
      fullDescription:
        'Our payment infrastructure seamlessly integrates with global data center operations, enabling automated billing, real-time transaction monitoring, and instant cross-border settlements. Support for multiple currencies and compliance with international regulations ensures smooth operations across all regions.',
      stats: { label: 'Countries', value: '97+' },
      gradient: 'from-blue-600 to-indigo-600',
    },
    {
      icon: Plane,
      title: 'Logistics',
      description: 'Fund shipping and contractor payments globally.',
      fullDescription:
        'Streamline your logistics operations with intelligent payment routing, automated invoice processing, and real-time fund tracking. Our platform supports global shipping networks with instant contractor payments and multi-currency settlements.',
      stats: { label: 'Faster Processing', value: '50%' },
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Support supply chain payments seamlessly.',
      fullDescription:
        'Transform your manufacturing payment processes with our integrated supply chain solution. Enable instant supplier payments, automated invoice reconciliation, and real-time cash flow management across your entire production network.',
      stats: { label: 'Uptime', value: '99.9%' },
      gradient: 'from-green-600 to-emerald-600',
    },
    {
      icon: Settings,
      title: 'Technology',
      description: 'Streamline hardware and software payments with intelligent routing.',
      fullDescription:
        'Built for the modern tech stack, our payment infrastructure supports SaaS subscriptions, hardware procurement, and service provider payments. Features intelligent retry logic, automated dunning, and comprehensive API access for seamless integration.',
      stats: { label: 'API Response', value: '< 100ms' },
      gradient: 'from-cyan-600 to-blue-600',
    },
    {
      icon: Home,
      title: 'Construction',
      description: 'Process contractor and material payments efficiently.',
      fullDescription:
        'Revolutionize construction payments with automated contractor disbursements, material supplier settlements, and progress-based payment releases. Our platform ensures compliance with lien laws and provides comprehensive audit trails.',
      stats: { label: 'Cost Savings', value: '30%' },
      gradient: 'from-orange-600 to-red-600',
    },
    {
      icon: Building,
      title: 'SaaS Companies',
      description: 'Enable global subscription payments with smart retry logic.',
      fullDescription:
        'Purpose-built for subscription businesses, featuring intelligent payment retry, automated dunning sequences, and global payment method support. Reduce churn and maximize revenue with our advanced billing orchestration.',
      stats: { label: 'Processing', value: '24/7' },
      gradient: 'from-indigo-600 to-purple-600',
    },
    {
      icon: Shield,
      title: 'Insurance',
      description: 'Handle premium collections and claim disbursements securely.',
      fullDescription:
        'Secure and compliant payment processing for insurance providers. Automate premium collections, streamline claim payouts, and maintain regulatory compliance with our purpose-built insurance payment infrastructure.',
      stats: { label: 'Compliance', value: '100%' },
      gradient: 'from-teal-600 to-green-600',
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Settle equipment payments with compliance and security.',
      fullDescription:
        'HIPAA-compliant payment processing designed for healthcare providers. Manage equipment purchases, patient billing, and vendor payments with enterprise-grade security and comprehensive audit capabilities.',
      stats: { label: 'HIPAA', value: 'Compliant' },
      gradient: 'from-rose-600 to-pink-600',
    },
  ];

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

  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <section className="relative py-12 lg:py-20 overflow-hidden">
      {/* Premium Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-gray-50" />

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23000' stroke-width='0.1' opacity='0.5'%3E%3Cpath d='M0 0h100v100H0z'/%3E%3Cpath d='M0 50h100M50 0v100'/%3E%3Cpath d='M0 0l100 100M100 0L0 100'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-green-200/20 to-emerald-200/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative max-w-none px-1 sm:px-2 lg:px-3 xl:px-4 w-full">
        <div className="max-w-[98%] xl:max-w-[96%] mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div className="flex items-center justify-center gap-2 mb-6">
              <Globe className="w-6 h-6 text-green-600" />
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                Global Industries
              </span>
            </motion.div>

            <h2 className="text-responsive-xl font-bold text-gray-900 mb-6 leading-tight">
              Industries{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  we serve
                </span>
                <motion.div
                  className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-full"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 0.3 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
              </span>
            </h2>
            <p className="text-responsive-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Tailored payment solutions for diverse business sectors, empowering enterprises across
              the globe with cutting-edge financial infrastructure designed for scale and
              reliability.
            </p>
          </motion.div>

          {/* Industries Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              const isHovered = hoveredIndex === index;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <motion.div
                    className="relative h-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                    whileHover={{
                      scale: 1.03,
                      transition: { duration: 0.3, ease: 'easeOut' },
                    }}
                    animate={{
                      boxShadow: isHovered
                        ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                        : '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                      borderColor: isHovered ? 'transparent' : 'rgb(243 244 246)',
                    }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                  >
                    {/* Enhanced Gradient Background Layer */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${industry.gradient}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isHovered ? 0.02 : 0 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                    />

                    {/* Main Content Container */}
                    <div className="relative h-full p-8 flex flex-col">
                      {/* Enhanced Icon Section */}
                      <div className="mb-6">
                        <motion.div
                          className="relative inline-block"
                          animate={isHovered ? { scale: 1.1, rotate: -8 } : { scale: 1, rotate: 0 }}
                          transition={{ duration: 0.4, ease: 'easeOut' }}
                        >
                          {/* Enhanced Icon Glow Effect */}
                          <motion.div
                            className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} rounded-2xl blur-2xl scale-150`}
                            animate={{ opacity: isHovered ? 0.3 : 0.1 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                          />

                          {/* Icon Container with Better Animation */}
                          <motion.div
                            className="relative w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center overflow-hidden"
                            animate={{
                              boxShadow: isHovered
                                ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                                : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                            }}
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                          >
                            {/* Animated Gradient Background */}
                            <motion.div
                              className={`absolute inset-0 bg-gradient-to-br ${industry.gradient}`}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{
                                opacity: isHovered ? 1 : 0,
                                scale: isHovered ? 1 : 0.8,
                              }}
                              transition={{ duration: 0.4, ease: 'easeOut' }}
                            />

                            {/* Icon with Rotation */}
                            <motion.div
                              animate={{ rotate: isHovered ? 360 : 0 }}
                              transition={{ duration: 0.6, ease: 'easeOut' }}
                              className="relative z-10"
                            >
                              <Icon className="w-8 h-8 text-gray-700 group-hover:text-white transition-colors duration-300" />
                            </motion.div>

                            {/* Multiple Sparkle Effects */}
                            <Sparkles className="absolute top-1 right-1 w-3 h-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
                            <Sparkles className="absolute bottom-1 left-1 w-2 h-2 text-white opacity-0 group-hover:opacity-70 transition-all duration-500 animate-pulse delay-150" />
                          </motion.div>
                        </motion.div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 transition-colors duration-300">
                        {industry.title}
                      </h3>

                      {/* Enhanced Description with Smooth Transition */}
                      <div className="flex-grow relative overflow-hidden">
                        <motion.p
                          className="text-gray-600 text-sm leading-relaxed"
                          initial={{ opacity: 1, y: 0 }}
                          animate={{
                            opacity: isHovered ? 0 : 1,
                            y: isHovered ? -20 : 0,
                          }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          {industry.description}
                        </motion.p>
                        <motion.p
                          className="text-gray-600 text-sm leading-relaxed absolute top-0"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{
                            opacity: isHovered ? 1 : 0,
                            y: isHovered ? 0 : 20,
                          }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          {industry.fullDescription}
                        </motion.p>
                      </div>

                      {/* Enhanced Stats Section */}
                      <motion.div
                        className="mt-6 pt-6 border-t"
                        animate={{
                          borderColor: isHovered ? 'rgb(229 231 235)' : 'rgb(243 244 246)',
                          opacity: isHovered ? 0 : 1,
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="flex items-center justify-between">
                          <motion.div
                            className="flex items-center gap-2"
                            animate={{ x: isHovered ? 4 : 0 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                          >
                            <motion.div
                              animate={{ rotate: isHovered ? 180 : 0 }}
                              transition={{ duration: 0.5, ease: 'easeOut' }}
                            >
                              <Zap className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors duration-300" />
                            </motion.div>
                            <span className="text-xs font-medium text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                              {industry.stats.label}
                            </span>
                          </motion.div>
                          <motion.span
                            className={`text-lg font-bold bg-gradient-to-r ${industry.gradient} bg-clip-text text-transparent`}
                            animate={{ scale: isHovered ? 1.1 : 1 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                          >
                            {industry.stats.value}
                          </motion.span>
                        </div>
                      </motion.div>

                      {/* Enhanced Learn More Indicator */}
                      <motion.div
                        className="absolute bottom-6 right-6"
                        initial={{ opacity: 0, scale: 0.8, x: 20 }}
                        whileHover={{ scale: 1.1 }}
                        animate={
                          isHovered
                            ? { opacity: 1, scale: 1, x: 0 }
                            : { opacity: 0, scale: 0.8, x: 20 }
                        }
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                      >
                        <div
                          className={`relative w-12 h-12 bg-gradient-to-br ${industry.gradient} rounded-full flex items-center justify-center shadow-xl overflow-hidden group`}
                        >
                          {/* Ripple Effect */}
                          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

                          {/* Arrow Icon */}
                          <ArrowRight className="w-6 h-6 text-white relative z-10 transform transition-transform duration-300 group-hover:translate-x-0.5" />

                          {/* Glow Effect */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} blur-lg opacity-50 scale-150`}
                          />
                        </div>
                      </motion.div>
                    </div>

                    {/* Premium Border Glow */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                    >
                      <div
                        className={`absolute inset-[-1px] bg-gradient-to-r ${industry.gradient} rounded-2xl opacity-20 blur-md`}
                      />
                    </motion.div>

                    {/* Enhanced Shine Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.6, ease: 'easeInOut' }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
                        initial={{ x: '-200%' }}
                        animate={{ x: isHovered ? '200%' : '-200%' }}
                        transition={{ duration: 1, ease: 'easeInOut', delay: 0.1 }}
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-lg text-gray-600 mb-8">
              Ready to transform your payment infrastructure?
            </p>
            <Button className="relative bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-full px-8 sm:px-12 py-5 sm:py-6 text-base sm:text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-500 inline-flex items-center gap-3 group overflow-hidden">
              {/* Button Gradient Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Button Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              </div>

              <span className="relative z-10">Request a Demo</span>
              <ArrowRight className="relative z-10 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

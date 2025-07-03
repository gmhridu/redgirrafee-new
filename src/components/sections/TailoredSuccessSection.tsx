import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Banknote,
  Clock,
  CreditCard,
  DollarSign,
  FileText,
  Globe,
  Shield,
  TrendingUp,
  UserCheck,
  Zap,
} from 'lucide-react';

export const TailoredSuccessSection = () => {
  const featureCategories = [
    {
      title: 'For Banks',
      gradient: 'from-green-600 to-emerald-600',
      lightGradient: 'from-green-50 to-emerald-50',
      features: [
        {
          icon: TrendingUp,
          title: 'Low-Risk Growth',
          subtitle: 'Capture B2B card spend',
          gradient: 'from-green-500 to-emerald-500',
          lightGradient: 'from-green-50 to-emerald-50',
        },
        {
          icon: UserCheck,
          title: 'Customer Loyalty',
          subtitle: 'Build stickiness',
          gradient: 'from-emerald-500 to-green-500',
          lightGradient: 'from-emerald-50 to-green-50',
        },
        {
          icon: Shield,
          title: 'Fraud Prevention',
          subtitle: 'Enterprise-grade security',
          gradient: 'from-emerald-500 to-teal-500',
          lightGradient: 'from-emerald-50 to-teal-50',
        },
        {
          icon: Globe,
          title: 'Global Expansion',
          subtitle: 'Pay in 97+ countries',
          gradient: 'from-teal-500 to-cyan-500',
          lightGradient: 'from-teal-50 to-cyan-50',
        },
        {
          icon: Clock,
          title: 'Real-Time Insights',
          subtitle: 'Monitor transactions',
          gradient: 'from-cyan-500 to-blue-500',
          lightGradient: 'from-cyan-50 to-blue-50',
        },
        {
          icon: Zap,
          title: 'Scalable Solutions',
          subtitle: 'Support growth',
          gradient: 'from-green-500 to-lime-500',
          lightGradient: 'from-green-50 to-lime-50',
        },
        {
          icon: null,
          title: '',
          subtitle: '',
          gradient: '',
          lightGradient: '',
          isEmpty: true,
        },
        {
          icon: DollarSign,
          title: 'Cost Efficiency',
          subtitle: 'Reduce fees',
          gradient: 'from-lime-500 to-yellow-500',
          lightGradient: 'from-lime-50 to-yellow-50',
        },
      ],
    },
    {
      title: 'For Cardholding Enterprises',
      gradient: 'from-emerald-600 to-teal-600',
      lightGradient: 'from-emerald-50 to-teal-50',
      features: [
        {
          icon: CreditCard,
          title: 'Bill Discounting',
          subtitle: 'Early payment solutions',
          gradient: 'from-green-500 to-emerald-500',
          lightGradient: 'from-green-50 to-emerald-50',
        },
        {
          icon: Banknote,
          title: 'Cash Flow Boost',
          subtitle: 'Bill discounting benefits',
          gradient: 'from-emerald-500 to-green-500',
          lightGradient: 'from-emerald-50 to-green-50',
        },
        {
          icon: Shield,
          title: 'Enhanced Control',
          subtitle: 'Maker Checker workflows',
          gradient: 'from-emerald-500 to-teal-500',
          lightGradient: 'from-emerald-50 to-teal-50',
        },
        {
          icon: DollarSign,
          title: 'Cost Savings',
          subtitle: 'Lower fees',
          gradient: 'from-teal-500 to-cyan-500',
          lightGradient: 'from-teal-50 to-cyan-50',
        },
        {
          icon: Globe,
          title: 'Global Reach',
          subtitle: '97+ countries',
          gradient: 'from-cyan-500 to-blue-500',
          lightGradient: 'from-cyan-50 to-blue-50',
        },
        {
          icon: TrendingUp,
          title: 'Real-Time Analytics',
          subtitle: 'Support growth',
          gradient: 'from-green-500 to-lime-500',
          lightGradient: 'from-green-50 to-lime-50',
        },
        {
          icon: null,
          title: '',
          subtitle: '',
          gradient: '',
          lightGradient: '',
          isEmpty: true,
        },
        {
          icon: FileText,
          title: 'Compliance Ease',
          subtitle: 'Embedded tax data',
          gradient: 'from-lime-500 to-yellow-500',
          lightGradient: 'from-lime-50 to-yellow-50',
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="features" className="relative pt-4 pb-12 lg:pt-6 lg:pb-20 overflow-hidden">
      {/* Premium Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-emerald-50/20" />

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-none px-1 sm:px-2 lg:px-3 xl:px-4 w-full">
        <div className="max-w-[98%] xl:max-w-[96%] mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[32px] md:text-[40px] 2xl:text-[45px] 4xl:text-[72px] font-extrabold 4xl:leading-[102.8px] text-center mx-auto mb-4 leading-tight">
              Tailored for{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 bg-clip-text text-transparent">
                  Your Success
                </span>
                {/* <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 rounded-full opacity-30"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                /> */}
              </span>
            </h2>
            <p className="lg:text-lg 2xl:text-2xl font-normal 2xl:leading-[45.6px] text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Unlock smarter payments for banks and enterprises with RedGirraffe.
            </p>
          </motion.div>

          {/* Feature Categories Grid */}
          <motion.div
            className="grid lg:grid-cols-2 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featureCategories.map((category, categoryIndex) => (
              <motion.div key={categoryIndex} variants={itemVariants} className="group relative">
                <div className="relative h-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  {/* Card Header - No hover effects on main card */}
                  <div
                    className={`relative bg-gradient-to-r ${category.gradient} px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                    <h3 className="text-base font-extrabold leading-6 text-white text-center relative z-10">
                      {category.title}
                    </h3>
                  </div>

                  {/* Features Grid */}
                  <div className="p-4 sm:p-6 md:p-8">
                    <motion.div
                      className="space-y-4"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {/* First 6 features in responsive grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        {category.features.slice(0, 6).map((feature, featureIndex) => {
                          const Icon = feature.icon;

                          return (
                            <motion.div
                              key={featureIndex}
                              variants={featureVariants}
                              className="group/item relative"
                              whileHover={{ scale: 1.05, y: -4 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className="bg-gray-50/50 rounded-xl p-3 sm:p-4 md:p-5 hover:bg-white hover:shadow-xl transition-all duration-300 h-full border border-transparent hover:border-emerald-200/50 relative overflow-hidden">
                                {/* Gradient Border Effect on Individual Card Hover */}
                                <div
                                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover/item:opacity-5 transition-opacity duration-500 rounded-xl`}
                                />

                                <div className="text-center relative z-10">
                                  <div
                                    className={`relative w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${feature.lightGradient} rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 transform transition-all duration-500 group-hover/item:scale-110 group-hover/item:rotate-3`}
                                  >
                                    <div
                                      className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover/item:opacity-20 rounded-xl transition-opacity duration-500`}
                                    />
                                    {Icon && (
                                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300 relative z-10" />
                                    )}
                                  </div>
                                  <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-1 sm:mb-2 leading-tight group-hover/item:text-transparent group-hover/item:bg-gradient-to-r group-hover/item:from-green-600 group-hover/item:to-emerald-600 group-hover/item:bg-clip-text transition-all duration-300">
                                    {feature.title}
                                  </h4>
                                  <p className="text-gray-600 text-xs sm:text-sm lg:text-lg lg:leading-[28.8px] leading-relaxed group-hover/item:text-gray-700 transition-colors duration-300">
                                    {feature.subtitle}
                                  </p>
                                </div>

                                {/* Premium Shine Effect on Individual Cards */}
                                <div className="absolute inset-0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-700 pointer-events-none">
                                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-200%] group-hover/item:translate-x-[200%] transition-transform duration-1000" />
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>

                      {/* Last 2 features centered */}
                      <div className="flex justify-center gap-3 sm:gap-4">
                        {category.features.slice(7, 8).map((feature, featureIndex) => {
                          const Icon = feature.icon;

                          return (
                            <motion.div
                              key={featureIndex + 7}
                              variants={featureVariants}
                              className="group/item relative w-full md:max-w-[calc(50%-0.5rem)]"
                              whileHover={{ scale: 1.05, y: -4 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className="bg-gray-50/50 rounded-xl p-3 sm:p-4 md:p-5 hover:bg-white hover:shadow-xl transition-all duration-300 h-full border border-transparent hover:border-emerald-200/50 relative overflow-hidden">
                                {/* Gradient Border Effect on Individual Card Hover */}
                                <div
                                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover/item:opacity-5 transition-opacity duration-500 rounded-xl`}
                                />

                                <div className="text-center relative z-10">
                                  <div
                                    className={`relative w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${feature.lightGradient} rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 transform transition-all duration-500 group-hover/item:scale-110 group-hover/item:rotate-3`}
                                  >
                                    <div
                                      className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover/item:opacity-20 rounded-xl transition-opacity duration-500`}
                                    />
                                    {Icon && (
                                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300 relative z-10" />
                                    )}
                                  </div>
                                  <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-1 sm:mb-2 leading-tight group-hover/item:text-transparent group-hover/item:bg-gradient-to-r group-hover/item:from-green-600 group-hover/item:to-emerald-600 group-hover/item:bg-clip-text transition-all duration-300">
                                    {feature.title}
                                  </h4>
                                  <p className="text-gray-600 text-xs sm:text-sm lg:text-lg lg:leading-[28.8px] leading-relaxed group-hover/item:text-gray-700 transition-colors duration-300">
                                    {feature.subtitle}
                                  </p>
                                </div>

                                {/* Premium Shine Effect on Individual Cards */}
                                <div className="absolute inset-0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-700 pointer-events-none">
                                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-200%] group-hover/item:translate-x-[200%] transition-transform duration-1000" />
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button className="relative bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-full px-12 py-6 text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-500 flex items-center gap-3 mx-auto group overflow-hidden">
              {/* Button Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              </div>

              <span className="relative z-10">Request a Demo</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Globe, Shield, TrendingUp, Users, Zap } from 'lucide-react';

export const MainContentSection = () => {
  const features = [
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      description:
        'Enterprise-level encryption and compliance standards protect every transaction with military-grade security protocols.',
      gradient: 'from-green-500 to-emerald-500',
      lightGradient: 'from-green-50 to-emerald-50',
    },
    {
      icon: Zap,
      title: 'Lightning-Fast Processing',
      description:
        'Process payments in milliseconds with our advanced infrastructure, ensuring seamless customer experiences.',
      gradient: 'from-emerald-500 to-teal-500',
      lightGradient: 'from-emerald-50 to-teal-50',
    },
    {
      icon: Globe,
      title: 'Global Market Reach',
      description:
        'Accept payments in 180+ countries with local payment methods and multi-currency support.',
      gradient: 'from-teal-500 to-cyan-500',
      lightGradient: 'from-teal-50 to-cyan-50',
    },
    {
      icon: TrendingUp,
      title: 'Revenue Optimization',
      description:
        'Intelligent routing and dynamic pricing strategies maximize your revenue while minimizing processing costs.',
      gradient: 'from-green-500 to-lime-500',
      lightGradient: 'from-green-50 to-lime-50',
    },
    {
      icon: Users,
      title: 'Customer-First Design',
      description:
        'Intuitive interfaces and seamless checkout experiences drive higher conversion rates and customer satisfaction.',
      gradient: 'from-lime-500 to-green-500',
      lightGradient: 'from-lime-50 to-green-50',
    },
    {
      icon: CheckCircle,
      title: 'Compliance Assurance',
      description:
        'Stay compliant with PCI DSS, GDPR, and regional regulations through automated compliance management.',
      gradient: 'from-emerald-500 to-green-500',
      lightGradient: 'from-emerald-50 to-green-50',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section className="relative py-12 lg:py-20 overflow-hidden">
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
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-responsive-xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="inline-block">Global Recurring B2B Payments,</span>{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Simplified
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-full opacity-30"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </span>
            </h2>
            <p className="text-responsive-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Secure, scalable solutions for businesses of all sizes.
            </p>
          </motion.div>

          {/* Feature Cards Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div key={index} variants={itemVariants} className="group relative">
                  <div className="relative h-full bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent overflow-hidden">
                    {/* Gradient Border Effect on Hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                    />

                    {/* Card Content */}
                    <div className="relative z-10 h-full flex flex-col">
                      {/* Icon and Title */}
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className={`relative w-14 h-14 bg-gradient-to-br ${feature.lightGradient} rounded-2xl flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                        >
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500`}
                          />
                          <Icon className="w-7 h-7 text-gray-700 group-hover:text-gray-900 transition-colors duration-300 relative z-10" />
                        </div>
                        <h3 className="flex-1 text-xl font-semibold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-emerald-600 group-hover:bg-clip-text transition-all duration-300">
                          {feature.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-6">
                        {feature.description}
                      </p>
                    </div>

                    {/* Premium Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
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

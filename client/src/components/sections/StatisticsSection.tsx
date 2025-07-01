import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}

const AnimatedCounter = ({ end, duration = 2000, suffix = '', decimals = 0 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Smooth easing function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = end * easeOutQuart;

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  const displayValue = decimals > 0 ? count.toFixed(decimals) : Math.floor(count);

  return (
    <span ref={counterRef} className="tabular-nums">
      {displayValue}
      {suffix}
    </span>
  );
};

export const StatisticsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const stats = [
    {
      number: 97,
      suffix: '+',
      label: 'Countries Covered',
      description: 'Global payments made simple',
      gradient: 'from-green-600 to-emerald-600',
    },
    {
      number: 99.9,
      suffix: '%',
      decimals: 1,
      label: 'Uptime SLA',
      description: 'Ensures uninterrupted payments',
      gradient: 'from-emerald-600 to-teal-600',
    },
    {
      number: 150,
      suffix: '+',
      label: 'Currencies Supported',
      description: 'Pay in any currency, anywhere',
      gradient: 'from-teal-600 to-cyan-600',
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
    <section className="relative pt-4 pb-12 lg:pt-6 lg:pb-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full blur-3xl opacity-20" />

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
              Scale globally with{' '}
              <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                unmatched reliability
              </span>
            </motion.h2>
            <motion.p
              className="text-responsive-base text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Serving 97+ countries with 99.9% uptime and support for 150+ currencies—RedGiraffe
              processes $20B+ annually with top-tier security.
            </motion.p>
          </motion.div>

          {/* Statistics Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => {
              const isHovered = hoveredCard === index;

              return (
                <motion.div
                  key={index}
                  className="group relative"
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.3, ease: 'easeOut' },
                  }}
                >
                  <div className="relative bg-white p-8 lg:p-10 rounded-2xl shadow-sm border border-gray-100 text-center overflow-hidden h-full transition-all duration-500 hover:shadow-lg">
                    {/* Gradient Background Layer - Lighter */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-[0.01]`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isHovered ? 0.02 : 0 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                    />

                    {/* Content */}
                    <div className="relative">
                      {/* Sparkle Effects */}
                      <motion.div
                        className="absolute -top-2 -right-2"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          opacity: isHovered ? 1 : 0,
                          scale: isHovered ? 1 : 0,
                        }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                      >
                        <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                      </motion.div>
                      <motion.div
                        className="absolute -bottom-2 -left-2"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          opacity: isHovered ? 0.7 : 0,
                          scale: isHovered ? 1 : 0,
                        }}
                        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
                      >
                        <Sparkles className="w-3 h-3 text-yellow-400 animate-pulse" />
                      </motion.div>

                      {/* Number */}
                      <motion.div
                        className={`text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 bg-gradient-to-r ${stat.gradient} bg-clip-text transition-all duration-500`}
                        style={{ color: isHovered ? 'transparent' : '#1f2937' }}
                      >
                        <AnimatedCounter
                          end={stat.number}
                          suffix={stat.suffix}
                          decimals={stat.decimals}
                          duration={2500}
                        />
                      </motion.div>

                      {/* Label */}
                      <motion.div
                        className={`text-lg font-semibold mb-3 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                        animate={{ scale: isHovered ? 1.05 : 1 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                      >
                        {stat.label}
                      </motion.div>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {stat.description}
                      </p>
                    </div>

                    {/* Premium Border Glow - Lighter */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                    >
                      <div
                        className={`absolute inset-[-1px] bg-gradient-to-r ${stat.gradient} rounded-2xl opacity-15 blur-md`}
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
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
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

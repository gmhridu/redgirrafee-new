import { useGradient } from '@/lib/gradients';
import { motion } from 'framer-motion';
import {
  AlertTriangle,
  Clock,
  DollarSign,
  Puzzle,
  Shield,
  TrendingDown,
  Users,
} from 'lucide-react';

export const LayoutSection = () => {
  // Get gradient configuration for this component
  const gradient = useGradient('LayoutSection');
  const problemCards = [
    {
      title: 'Cash Flow Constraints',
      description:
        'Immediate payment needs drain liquidity, limiting flexibility for growth and operations.',
      icon: TrendingDown,
    },
    {
      title: 'Payment Delays',
      description:
        'Slow payment cycles stall critical transactions and disrupt business continuity.',
      icon: Clock,
    },
    {
      title: 'Manual Workflows',
      description: 'Legacy processes lead to errors, delays, and increased operational effort.',
      icon: AlertTriangle,
    },
    {
      title: 'Hidden Costs',
      description:
        'Traditional methods often include opaque fees, poor visibility, and inefficient use of capital.',
      icon: DollarSign,
    },
    {
      title: 'Supplier Friction',
      description:
        'Lack of payment flexibility weakens vendor relationships and reduces negotiation leverage.',
      icon: Users,
    },
    {
      title: 'Disconnected Systems',
      description:
        'Fragmented finance tools cause inefficiencies and limit real-time decision-making.',
      icon: Puzzle,
    },
    {
      title: 'Security Gaps',
      description: 'Inadequate controls expose payments to fraud, errors, and compliance risks.',
      icon: Shield,
    },
  ];

  return (
    <section className="section-spacing bg-gradient-to-br from-rose-50/40 via-pink-50/30 to-orange-50/40 relative overflow-hidden">
      {/* Minimal Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-20 w-72 h-72 bg-gradient-to-br from-red-100 to-orange-100 rounded-full blur-3xl"></div>
      </div>

      {/* Aligned with Hero section margins for perfect consistency */}
      <div className="max-w-none px-1 sm:px-2 lg:px-3 xl:px-4 w-full">
        <div className="w-full max-w-[98%] xl:max-w-[96%] mx-auto relative">
          {/* Header Section with Problem Statement */}
          <div className="text-center mb-16">
            <h2 className="text-responsive-xl font-bold text-slate-900 mb-12 leading-tight">
              Traditional B2B payouts fail —
              <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                {' '}
                and what we fix.
              </span>
            </h2>

            {/* Full Problem Visualization */}
            <motion.div
              className="relative flex items-center justify-center mb-12"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
                {/* Central Problem Core */}
                <motion.div
                  className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white"
                  animate={{
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      '0 25px 50px -12px rgba(239, 68, 68, 0.25)',
                      '0 25px 50px -12px rgba(239, 68, 68, 0.4)',
                      '0 25px 50px -12px rgba(239, 68, 68, 0.25)',
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <div className="text-center">
                    <AlertTriangle className="w-8 h-8 text-white mx-auto mb-2" />
                    <p className="text-sm font-bold text-white">Legacy</p>
                    <p className="text-sm font-bold text-white">Issues</p>
                  </div>
                </motion.div>

                {/* Orbiting Problem Indicators */}
                {[0, 1, 2, 3, 4].map(index => {
                  const angle = (index * 72 + 36) * (Math.PI / 180); // 5 dots evenly spaced, offset to avoid center
                  const radius = 115; // Adjusted radius for smaller circle
                  const center = 160; // Half of 320 (w-64 to w-80)
                  const x = Math.cos(angle) * radius + center;
                  const y = Math.sin(angle) * radius + center;

                  return (
                    <motion.div
                      key={index}
                      className="absolute w-6 h-6 bg-gradient-to-br from-orange-400 to-red-500 rounded-full shadow-lg"
                      style={{
                        left: x - 12,
                        top: y - 12,
                      }}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                        ease: 'easeInOut',
                      }}
                    />
                  );
                })}

                {/* Rotating Problem Ring */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <svg className="w-full h-full" viewBox="0 0 320 320">
                    <circle
                      cx="160"
                      cy="160"
                      r="115"
                      fill="none"
                      stroke="url(#problemGradient)"
                      strokeWidth="2"
                      strokeDasharray="10 5"
                      opacity="0.6"
                    />
                    <defs>
                      <linearGradient id="problemGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ef4444" />
                        <stop offset="100%" stopColor="#f97316" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>

                {/* Problem Label */}
                <motion.div
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 ml-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  The Problem
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Problem Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First 6 cards in 2-column grid */}
            {problemCards.slice(0, 6).map((card, index) => (
              <div key={index} className="relative group">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-slate-300 transition-all duration-300 hover:-translate-y-1"
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(239, 68, 68, 0.4)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow =
                      '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)';
                  }}
                >
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center group-hover:from-red-50 group-hover:to-orange-50 transition-all duration-300">
                      <card.icon className="w-6 h-6 text-slate-600 group-hover:text-red-500 transition-colors duration-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                        {card.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-base md:line-clamp-1">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Border effect below the card */}
                <div className="h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full mt-2 opacity-0 group-hover:opacity-100" />
              </div>
            ))}
          </div>

          {/* 7th card centered below */}
          {problemCards[6] &&
            (() => {
              const lastCard = problemCards[6];
              const LastIcon = lastCard.icon;
              return (
                <div className="mt-6 flex justify-center">
                  <div className="relative group w-full md:w-1/2 lg:w-[calc(50%-12px)]">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-slate-300 transition-all duration-300 hover:-translate-y-1"
                      onMouseEnter={e => {
                        e.currentTarget.style.boxShadow =
                          '0 25px 50px -12px rgba(239, 68, 68, 0.4)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.boxShadow =
                          '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)';
                      }}
                    >
                      <div className="flex items-start gap-5">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center group-hover:from-red-50 group-hover:to-orange-50 transition-all duration-300">
                          <LastIcon className="w-6 h-6 text-slate-600 group-hover:text-red-500 transition-colors duration-300" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                            {lastCard.title}
                          </h3>
                          <p className="text-slate-600 leading-relaxed text-base">
                            {lastCard.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Border effect below the card */}
                    <div className="h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full mt-2 opacity-0 group-hover:opacity-100" />
                  </div>
                </div>
              );
            })()}
        </div>
      </div>
    </section>
  );
};

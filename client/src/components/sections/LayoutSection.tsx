import { motion } from "framer-motion";
import { Clock, AlertTriangle, DollarSign, TrendingDown, Zap, Shield, X } from "lucide-react";

export const LayoutSection = () => {
  const problemCards = [
    {
      title: "Payment Delays",
      description: "40% of transactions take 30+ days, stalling operations.",
      icon: Clock,
    },
    {
      title: "Manual Processes", 
      description: "Lack of automation leads to errors and inefficiencies.",
      icon: AlertTriangle,
    },
    {
      title: "High Costs",
      description: "Traditional methods (e.g., checks, wire transfers) incur high fees.",
      icon: DollarSign,
    },
    {
      title: "Cash Flow Bottlenecks",
      description: "Delayed payouts tie up working capital.",
      icon: TrendingDown,
    },
    {
      title: "Lack of Integration",
      description: "Disconnected systems create inefficiencies.",
      icon: Zap,
    },
    {
      title: "Fraud Risks",
      description: "Limited security controls expose all entities to fraud.",
      icon: Shield,
    },
    {
      title: "Inflexible Terms",
      description: "Rigid payment terms hinder cash flow predictability.",
      icon: AlertTriangle,
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Minimal Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-20 w-72 h-72 bg-gradient-to-br from-red-100 to-orange-100 rounded-full blur-3xl"></div>
      </div>

      <div className="container-inner relative">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-red-600 mb-4 leading-tight">
            The Problem
          </h2>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20">
          {/* Left Side Problems */}
          <div className="space-y-8 lg:w-80 order-2 lg:order-1">
            {problemCards.slice(0, 3).map((card, index) => (
              <motion.div
                key={index}
                className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-300"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center group-hover:from-red-50 group-hover:to-orange-50 transition-all duration-300">
                    <card.icon className="w-6 h-6 text-slate-600 group-hover:text-red-500 transition-colors duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Central Problem Visualization */}
          <motion.div 
            className="relative flex items-center justify-center flex-shrink-0 order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-80 h-80">
              {/* Central Problem Core */}
              <motion.div 
                className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white"
                animate={{ 
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 25px 50px -12px rgba(239, 68, 68, 0.25)",
                    "0 25px 50px -12px rgba(239, 68, 68, 0.4)",
                    "0 25px 50px -12px rgba(239, 68, 68, 0.25)"
                  ]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="text-center">
                  <X className="w-6 h-6 text-white mx-auto mb-1" />
                  <p className="text-xs text-white font-medium">Legacy Issues</p>
                  <p className="text-sm font-bold text-white">Blocking Growth</p>
                </div>
              </motion.div>
              
              {/* Orbiting Problem Indicators */}
              {[0, 1, 2, 3, 4, 5, 6].map((index) => {
                const angle = (index * 51.4) * (Math.PI / 180); // Adjust spacing
                const radius = 120;
                const x = Math.cos(angle) * radius + 160;
                const y = Math.sin(angle) * radius + 160;
                
                return (
                  <motion.div
                    key={index}
                    className="absolute w-5 h-5 bg-gradient-to-br from-orange-400 to-red-500 rounded-full shadow-lg"
                    style={{
                      left: x - 10,
                      top: y - 10,
                    }}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                      ease: "easeInOut"
                    }}
                  />
                );
              })}

              {/* Rotating Problem Ring */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <svg className="w-full h-full" viewBox="0 0 320 320">
                  <circle
                    cx="160" cy="160" r="120"
                    fill="none"
                    stroke="url(#problemGradient)"
                    strokeWidth="2"
                    strokeDasharray="8 4"
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
                className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                The Problem Ecosystem
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side Problems */}
          <div className="space-y-8 lg:w-80 order-3">
            {problemCards.slice(3, 7).map((card, index) => (
              <motion.div
                key={index + 3}
                className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-300"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center group-hover:from-red-50 group-hover:to-orange-50 transition-all duration-300">
                    <card.icon className="w-6 h-6 text-slate-600 group-hover:text-red-500 transition-colors duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
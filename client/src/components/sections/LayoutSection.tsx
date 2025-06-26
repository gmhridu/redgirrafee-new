import { motion } from "framer-motion";
import { AlertTriangle, DollarSign, Clock, Shield, TrendingDown, Zap } from "lucide-react";

export const LayoutSection = () => {
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
        ease: "easeOut",
      },
    },
  };

  const problemCards = [
    {
      title: "Payment Delays",
      description: "40% of transactions take 30+ days, stalling operations.",
      color: "bg-gray-800",
      icon: Clock,
    },
    {
      title: "Manual Processes", 
      description: "Lack of automation leads to errors and inefficiencies.",
      color: "bg-green-100",
      icon: AlertTriangle,
    },
    {
      title: "High Costs",
      description: "Traditional methods (e.g., checks, wire transfers) incur high fees.",
      color: "bg-red-200",
      icon: DollarSign,
    },
    {
      title: "Cash Flow Bottlenecks",
      description: "Delayed payouts tie up working capital.",
      color: "bg-yellow-200",
      icon: TrendingDown,
    },
    {
      title: "Lack of Integration",
      description: "Disconnected systems create inefficiencies.",
      color: "bg-blue-200",
      icon: Zap,
    },
    {
      title: "Fraud Risks",
      description: "Limited security controls expose all entities to fraud.",
      color: "bg-pink-200",
      icon: Shield,
    },
    {
      title: "Inflexible Terms",
      description: "Rigid payment terms hinder cash flow predictability.",
      color: "bg-purple-200",
      icon: AlertTriangle,
    },
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-red-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container-inner relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Traditional B2B payouts fail —
          </h2>
          <p className="text-2xl lg:text-3xl text-green-500 font-medium">
            and what we fix.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Problem Circle Chart */}
          <motion.div 
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-80 h-80">
              {/* Center Circle */}
              <div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center border-8 border-gray-800">
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-1">Legacy Issues</p>
                  <p className="text-lg font-bold text-gray-800">Blocking Growth</p>
                </div>
              </div>
              
              {/* Outer Ring Segments */}
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {/* Dark green segment */}
                <circle
                  cx="50" cy="50" r="40"
                  fill="none"
                  stroke="#1f2937"
                  strokeWidth="8"
                  strokeDasharray="25 75"
                  strokeDashoffset="0"
                />
                {/* Light segments */}
                <circle
                  cx="50" cy="50" r="40"
                  fill="none"
                  stroke="#f3e8ff"
                  strokeWidth="8"
                  strokeDasharray="12 88"
                  strokeDashoffset="-25"
                />
                <circle
                  cx="50" cy="50" r="40"
                  fill="none"
                  stroke="#fef3c7"
                  strokeWidth="8"
                  strokeDasharray="10 90"
                  strokeDashoffset="-37"
                />
                <circle
                  cx="50" cy="50" r="40"
                  fill="none"
                  stroke="#fce7f3"
                  strokeWidth="8"
                  strokeDasharray="8 92"
                  strokeDashoffset="-47"
                />
                <circle
                  cx="50" cy="50" r="40"
                  fill="none"
                  stroke="#dbeafe"
                  strokeWidth="8"
                  strokeDasharray="15 85"
                  strokeDashoffset="-55"
                />
                <circle
                  cx="50" cy="50" r="40"
                  fill="none"
                  stroke="#dcfce7"
                  strokeWidth="8"
                  strokeDasharray="5 95"
                  strokeDashoffset="-70"
                />
              </svg>
            </div>

            {/* Problem Label */}
            <motion.div 
              className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-full font-semibold text-sm"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              The Problem
            </motion.div>
          </motion.div>

          {/* Problem Cards */}
          <motion.div 
            className="grid grid-cols-1 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {problemCards.map((card, index) => (
              <motion.div
                key={index}
                className={`${card.color} p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer`}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-lg ${
                    card.color === 'bg-gray-800' ? 'bg-gray-700' :
                    card.color === 'bg-green-100' ? 'bg-green-200' :
                    card.color === 'bg-red-200' ? 'bg-red-300' :
                    card.color === 'bg-yellow-200' ? 'bg-yellow-300' :
                    card.color === 'bg-blue-200' ? 'bg-blue-300' :
                    card.color === 'bg-pink-200' ? 'bg-pink-300' :
                    'bg-purple-300'
                  }`}>
                    <card.icon className={`w-5 h-5 ${
                      card.color === 'bg-gray-800' ? 'text-white' : 'text-gray-700'
                    }`} />
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg mb-2 ${
                      card.color === 'bg-gray-800' ? 'text-white' : 'text-gray-800'
                    }`}>
                      {card.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${
                      card.color === 'bg-gray-800' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

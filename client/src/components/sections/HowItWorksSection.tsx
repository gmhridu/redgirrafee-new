import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Globe, TrendingUp, CheckCircle2 } from "lucide-react";

export const HowItWorksSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const advantages = [
    {
      category: "Bank Partnership Advantages",
      features: [
        {
          icon: Shield,
          title: "Capture low-risk B2B card spend, reduce fraud with PSP-backed security, and scale globally.",
          highlight: true
        },
        {
          icon: TrendingUp,
          title: "Increase Revenue Streams: Earn higher transaction fees"
        }
      ]
    },
    {
      category: "Authorized PSPs Advantages", 
      features: [
        {
          icon: Globe,
          title: "Leverage our platform to offer secure, scalable payment solutions to enterprises worldwide."
        },
        {
          icon: TrendingUp,
          title: "Expand Market Reach: Tap into RedGirraffe's global"
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-green-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container-inner relative">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Powered by smart <span className="text-green-500">infrastructure</span>.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            More than a card—an intelligent spend management platform.
          </p>
        </motion.div>

        {/* Partnership Advantages */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {advantages.map((advantage, advantageIndex) => (
            <motion.div
              key={advantageIndex}
              className="space-y-8"
              variants={itemVariants}
            >
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  {advantage.category}
                </h3>
                <div className="w-20 h-1 bg-green-500 mx-auto"></div>
              </div>

              <div className="space-y-6">
                {advantage.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group ${
                      feature.highlight ? 'border-2 border-green-200 bg-green-50' : ''
                    }`}
                    whileHover={{ y: -3 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: featureIndex * 0.2 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl ${
                        feature.highlight ? 'bg-green-500' : 'bg-gray-500'
                      } flex-shrink-0`}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-700 leading-relaxed font-medium">
                          {feature.title}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Button className="bg-app-primary hover:bg-app-primary/90 text-white rounded-full px-12 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 mx-auto group">
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            Request a Demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

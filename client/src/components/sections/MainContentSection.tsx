import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Building2, CreditCard, Users, Shield, Globe, TrendingUp } from "lucide-react";

export const MainContentSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const solutionCards = [
    {
      title: "Banks",
      features: [
        {
          icon: CreditCard,
          title: "Low-Risk Card Spend",
          description: "Capture high-volume, low-risk B2B transactions."
        },
        {
          icon: Shield,
          title: "Maker Checker",
          description: "Reduce fraud risks with robust approvals."
        },
        {
          icon: TrendingUp,
          title: "Customer Stickiness",
          description: "Build enterprise loyalty with reliable payments."
        },
        {
          icon: Globe,
          title: "Real-Time Monitoring",
          description: "Lower risk exposure with live tracking."
        },
        {
          icon: Building2,
          title: "Scalable Infrastructure",
          description: "Support growing transaction volumes."
        },
        {
          icon: Users,
          title: "Cost Efficiency",
          description: "Lower processing costs compared to traditional methods."
        },
        {
          icon: Globe,
          title: "Global Reach",
          description: "Facilitate payments in 97+ countries."
        }
      ]
    },
    {
      title: "Cardholding Enterprises",
      features: [
        {
          icon: CreditCard,
          title: "Bill Discounting",
          description: "Offer early payments to vendors with MDR fully absorbed—zero-cost for you, faster cash flow for them."
        },
        {
          icon: Shield,
          title: "Maker Checker",
          description: "Secure, multi-approval workflows for error-free transactions."
        },
        {
          icon: TrendingUp,
          title: "Pre-Approved Limits",
          description: "Set spend caps for vendors, rent, and utilities."
        },
        {
          icon: Globe,
          title: "ERP Integration",
          description: "Seamlessly sync with 50+ business tools for efficiency."
        },
        {
          icon: Building2,
          title: "Real-Time Analytics",
          description: "Unified dashboards provide spend visibility."
        },
        {
          icon: Users,
          title: "Tax Metadata",
          description: "Embedded tax data simplifies compliance."
        },
        {
          icon: Globe,
          title: "Customer Stickiness",
          description: "Streamlined payments enhance vendor relationships."
        }
      ]
    },
    {
      title: "Vendors",
      features: [
        {
          icon: CreditCard,
          title: "Instant Settlements",
          description: "Receive payments in real time, no waiting."
        },
        {
          icon: Shield,
          title: "Global Support",
          description: "Access funds in 150+ currencies."
        },
        {
          icon: TrendingUp,
          title: "Auto Receipts",
          description: "Generate receipts and tax mappings automatically."
        },
        {
          icon: Globe,
          title: "Zero Delays",
          description: "Eliminate payment holds, improving cash flow."
        },
        {
          icon: Building2,
          title: "Cost Savings",
          description: "Choose cost-effective payment methods."
        },
        {
          icon: Users,
          title: "Self-Service Portal",
          description: "Easily manage payment preferences."
        },
        {
          icon: Globe,
          title: "Customer Stickiness",
          description: "Faster payments strengthen enterprise ties."
        }
      ]
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-green-50/30 relative overflow-hidden">
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-gradient-to-br from-emerald-300 via-green-200 to-teal-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-gradient-to-br from-slate-300 via-gray-200 to-zinc-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container-inner relative">
        {/* Sophisticated Header */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 bg-clip-text text-transparent mb-8 tracking-tight">
            Our Solutions
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 mx-auto rounded-full"></div>
          <p className="text-xl text-slate-600 mt-8 max-w-3xl mx-auto leading-relaxed">
            Sophisticated payment infrastructure designed for modern enterprises
          </p>
        </motion.div>

        {/* Sophisticated Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
          {solutionCards.map((solution, solutionIndex) => (
            <motion.div
              key={solutionIndex}
              className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-200/50 overflow-hidden relative group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: solutionIndex * 0.2 }}
            >
              {/* Sophisticated Card Header */}
              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/5"></div>
                <h3 className="text-3xl font-bold text-white text-center relative z-10 tracking-tight">
                  {solution.title}
                </h3>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-400/20 to-emerald-400/10 rounded-full blur-xl"></div>
              </div>

              {/* Static Features List with Classy Animated Icons */}
              <div className="p-8">
                <div className="space-y-7">
                  {solution.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start gap-5"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden group">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3]
                          }}
                          transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            delay: featureIndex * 0.4,
                            ease: "easeInOut"
                          }}
                        />
                        <motion.div
                          animate={{ 
                            rotate: [0, 5, -5, 0],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{ 
                            duration: 4,
                            repeat: Infinity,
                            delay: featureIndex * 0.3,
                            ease: "easeInOut"
                          }}
                        >
                          <feature.icon className="w-6 h-6 text-white relative z-10" />
                        </motion.div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-xl text-slate-800 mb-3 tracking-tight">
                          {feature.title}
                        </h4>
                        <p className="text-slate-600 leading-relaxed text-base">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sophisticated Border Accent */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-500/10 via-transparent to-emerald-500/5 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

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

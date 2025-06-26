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
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-20 w-96 h-96 bg-green-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-blue-300 rounded-full blur-3xl"></div>
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
            Our Solutions
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {solutionCards.map((solution, solutionIndex) => (
            <motion.div
              key={solutionIndex}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-500"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 text-center">
                  {solution.title}
                </h3>
              </div>

              {/* Features List */}
              <div className="p-8">
                <div className="space-y-6">
                  {solution.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-start gap-4 group-hover:translate-x-1 transition-transform duration-300"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                        <feature.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
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

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, CreditCard, Users, Shield, Globe, TrendingUp, Zap, Clock, DollarSign } from "lucide-react";

export const ContentSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const featureCategories = [
    {
      title: "For Banks",
      description: "Unlock smarter payments for banks and enterprises with RedGirraffe.",
      features: [
        {
          icon: TrendingUp,
          title: "Low-Risk Growth",
          subtitle: "Capture B2B card spend",
          bgColor: "bg-gray-100"
        },
        {
          icon: Shield,
          title: "Fraud Prevention", 
          subtitle: "Enterprise-grade security",
          bgColor: "bg-gray-100"
        },
        {
          icon: Globe,
          title: "Global Expansion",
          subtitle: "Pay in 97+ countries",
          bgColor: "bg-gray-100"
        },
        {
          icon: Clock,
          title: "Real-Time Insights",
          subtitle: "Monitor transactions",
          bgColor: "bg-gray-100"
        }
      ]
    },
    {
      title: "For Cardholding Enterprises", 
      description: "",
      features: [
        {
          icon: CreditCard,
          title: "Bill Discounting",
          subtitle: "Offer early payments",
          bgColor: "bg-gray-100"
        },
        {
          icon: Shield,
          title: "Enhanced Control",
          subtitle: "Maker Checker workflows",
          bgColor: "bg-gray-100"
        },
        {
          icon: DollarSign,
          title: "Cost Savings",
          subtitle: "Lower fees",
          bgColor: "bg-gray-100"
        },
        {
          icon: Globe,
          title: "Global Reach",
          subtitle: "97+ countries",
          bgColor: "bg-gray-100"
        },
        {
          icon: Zap,
          title: "Scalable Solutions",
          subtitle: "Support growth",
          bgColor: "bg-gray-100"
        },
        {
          icon: TrendingUp,
          title: "Real-Time Analytics",
          subtitle: "Support growth",
          bgColor: "bg-gray-100"
        },
        {
          icon: Users,
          title: "Customer Loyalty",
          subtitle: "Build stickiness",
          bgColor: "bg-gray-100"
        },
        {
          icon: Clock,
          title: "Cash Flow Boost",
          subtitle: "Bill discounting benefits",
          bgColor: "bg-gray-100"
        }
      ]
    }
  ];

  const businessOperations = [
    {
      icon: Globe,
      title: "Vendor Payments",
      description: "Pay vendors on time and avail cash discounts on bills"
    },
    {
      icon: Building2,
      title: "Cleaning, Security & Facility Services", 
      description: "Fund premises upkeep"
    },
    {
      icon: Users,
      title: "Event & Sponsorship Payments",
      description: "Support events, sponsorships, and promotional activities"
    },
    {
      icon: CreditCard,
      title: "Marketing & Advertising",
      description: "Settle bills for campaigns and creative services"
    },
    {
      icon: TrendingUp,
      title: "Logistics & Shipping",
      description: "Fund freight and transportation services"
    },
    {
      icon: Shield,
      title: "Professional Services",
      description: "Pay consultants, auditors, and advisors efficiently"
    },
    {
      icon: Users,
      title: "Contractor Payouts",
      description: "Pay freelancers and service partners"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
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
            Pay everything that matters.
          </h2>
          <p className="text-2xl lg:text-3xl text-green-500 font-medium">
            At the speed of now.
          </p>
        </motion.div>

        {/* Feature Categories */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featureCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="space-y-8"
              variants={itemVariants}
            >
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  {category.title}
                </h3>
                <div className="w-16 h-1 bg-green-500 mx-auto"></div>
                {category.description && (
                  <p className="text-gray-600 mt-4">{category.description}</p>
                )}
              </div>

              <div className={`grid grid-cols-2 gap-4 ${categoryIndex === 1 ? 'md:grid-cols-2' : ''}`}>
                {category.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    className={`${feature.bgColor} p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group cursor-pointer`}
                    whileHover={{ y: -3, scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-800 mb-2 text-lg">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {feature.subtitle}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Button className="bg-app-primary hover:bg-app-primary/90 text-white rounded-full px-12 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 mx-auto group">
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            Request a Demo
          </Button>
        </motion.div>

        {/* Business Operations Tabs */}
        <motion.div
          className="bg-gray-50 rounded-3xl p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Tab Headers */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-gray-800 text-white px-8 py-3 rounded-full font-semibold border-b-4 border-green-500">
              Vendor & Payments
            </div>
            <div className="text-gray-600 px-8 py-3 rounded-full hover:bg-gray-200 transition-colors cursor-pointer">
              Business Operations
            </div>
            <div className="text-gray-600 px-8 py-3 rounded-full hover:bg-gray-200 transition-colors cursor-pointer">
              Global Expense & Compliance
            </div>
          </div>

          {/* Business Operations Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {businessOperations.map((operation, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-50 transition-colors duration-300">
                    <operation.icon className="w-8 h-8 text-gray-600 group-hover:text-green-600 transition-colors duration-300" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-3 text-lg leading-tight">
                    {operation.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {operation.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

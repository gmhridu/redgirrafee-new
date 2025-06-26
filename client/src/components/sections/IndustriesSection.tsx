import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Factory, GraduationCap, Store, TrendingUp, Settings, Briefcase, Heart, Hotel, Zap } from "lucide-react";

export const IndustriesSection = () => {
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

  const industries = [
    {
      icon: Building2,
      title: "Data Centres",
      description: "Optimize infrastructure payments.",
      color: "bg-blue-50 hover:bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Logistics",
      description: "Fund shipping and contractor payments.",
      color: "bg-green-50 hover:bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Support supply chain payments.",
      color: "bg-purple-50 hover:bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Settings,
      title: "Technology",
      description: "Streamline hardware payments.",
      color: "bg-orange-50 hover:bg-orange-100",
      iconColor: "text-orange-600"
    },
    {
      icon: Building2,
      title: "Construction",
      description: "Fund materials and contractors.",
      color: "bg-red-50 hover:bg-red-100",
      iconColor: "text-red-600"
    },
    {
      icon: Briefcase,
      title: "SaaS Companies",
      description: "Automate subscription payments.",
      color: "bg-indigo-50 hover:bg-indigo-100",
      iconColor: "text-indigo-600"
    },
    {
      icon: TrendingUp,
      title: "Insurance",
      description: "Optimize infrastructure payments.",
      color: "bg-cyan-50 hover:bg-cyan-100",
      iconColor: "text-cyan-600"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Settle equipment payments securely.",
      color: "bg-pink-50 hover:bg-pink-100",
      iconColor: "text-pink-600"
    },
    {
      icon: Hotel,
      title: "Hospitality",
      description: "Manage hotel supplier payments.",
      color: "bg-yellow-50 hover:bg-yellow-100",
      iconColor: "text-yellow-600"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Support facility payments.",
      color: "bg-emerald-50 hover:bg-emerald-100",
      iconColor: "text-emerald-600"
    },
    {
      icon: Briefcase,
      title: "Media & Entertainment",
      description: "Settle event payments.",
      color: "bg-violet-50 hover:bg-violet-100",
      iconColor: "text-violet-600"
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      description: "Automate consulting fees.",
      color: "bg-teal-50 hover:bg-teal-100",
      iconColor: "text-teal-600"
    },
    {
      icon: Store,
      title: "Real Estate Funds",
      description: "Simplify property payments.",
      color: "bg-rose-50 hover:bg-rose-100",
      iconColor: "text-rose-600"
    },
    {
      icon: Store,
      title: "Retail Chains",
      description: "Streamline multi-location vendor payments.",
      color: "bg-lime-50 hover:bg-lime-100",
      iconColor: "text-lime-600"
    },
    {
      icon: Zap,
      title: "Energy & Utilities",
      description: "Cover infrastructure payments.",
      color: "bg-amber-50 hover:bg-amber-100",
      iconColor: "text-amber-600"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-300 rounded-full blur-3xl"></div>
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
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
            Industries we <span className="text-blue-500">serve</span>.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tailored solutions for diverse business sectors.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className={`${industry.color} p-8 rounded-3xl transition-all duration-300 group cursor-pointer border border-gray-100 hover:shadow-lg hover:border-gray-200`}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  <industry.icon className={`w-8 h-8 ${industry.iconColor}`} />
                </div>
                <h3 className="font-bold text-gray-800 mb-3 text-lg leading-tight">
                  {industry.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {industry.description}
                </p>
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

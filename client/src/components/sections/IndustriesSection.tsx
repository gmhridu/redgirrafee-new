import { Button } from "@/components/ui/button";
import { ArrowRight, Server, Truck, Factory, Laptop, Building, Briefcase, Shield, Heart, Hotel, GraduationCap, TrendingUp, Building2, Store, Zap } from "lucide-react";

export const IndustriesSection = () => {
  const industries = [
    {
      icon: Server,
      title: "Data Centres",
      description: "Optimize infrastructure payments.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Truck,
      title: "Logistics",
      description: "Fund shipping and contractor payments.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Support supply chain payments.",
      color: "from-slate-500 to-slate-600"
    },
    {
      icon: Laptop,
      title: "Technology",
      description: "Streamline hardware payments.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Building,
      title: "Construction",
      description: "Fund materials and contractors.",
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: Briefcase,
      title: "SaaS Companies",
      description: "Automate subscription payments.",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Shield,
      title: "Insurance",
      description: "Optimize infrastructure payments.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Settle equipment payments securely.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Hotel,
      title: "Hospitality",
      description: "Manage hotel supplier payments.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Support facility payments.",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: TrendingUp,
      title: "Media & Entertainment",
      description: "Settle event payments.",
      color: "from-violet-500 to-violet-600"
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      description: "Automate consulting fees.",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: Building2,
      title: "Real Estate Funds",
      description: "Simplify property payments.",
      color: "from-rose-500 to-rose-600"
    },
    {
      icon: Store,
      title: "Retail Chains",
      description: "Streamline multi-location vendor payments.",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Zap,
      title: "Energy & Utilities",
      description: "Cover infrastructure payments.",
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-green-50/20 relative overflow-hidden">
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-40 right-40 w-[700px] h-[700px] bg-gradient-to-br from-violet-300 via-purple-200 to-indigo-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-40 w-[600px] h-[600px] bg-gradient-to-br from-slate-300 via-gray-200 to-zinc-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container-inner relative">
        {/* Sophisticated Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6 tracking-tight">
            Industries we{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
              serve
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Tailored solutions for diverse business sectors.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-slate-200/40 hover:shadow-xl hover:border-violet-200/60 transition-all duration-300 hover:scale-[1.02] overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-white/30 to-slate-100/50 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              
              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-violet-100/30 to-purple-100/20 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500"></div>
              <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-tl from-slate-100/40 to-gray-100/30 rounded-full blur-lg group-hover:scale-110 transition-transform duration-500"></div>

              {/* Icon */}
              <div className={`relative w-12 h-12 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-xl"></div>
                <industry.icon className="w-6 h-6 text-white relative z-10 drop-shadow-sm" />
                
                {/* Icon Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} rounded-xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="font-bold text-lg text-slate-800 mb-3 leading-tight group-hover:text-slate-900 transition-colors duration-300">
                  {industry.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm group-hover:text-slate-700 transition-colors duration-300">
                  {industry.description}
                </p>
              </div>

              {/* Hover Accent Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 via-purple-400 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-full px-12 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto group">
            <span>Request a Demo</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </div>
      </div>
    </section>
  );
};
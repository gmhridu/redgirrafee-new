import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Factory, GraduationCap, Store, TrendingUp, Settings, Briefcase, Heart, Hotel, Zap } from "lucide-react";

export const IndustriesSection = () => {
  const industries = [
    {
      icon: Building2,
      title: "Data Centres",
      description: "Optimize infrastructure payments.",
      color: "bg-slate-50 hover:bg-slate-100",
      iconColor: "text-green-600"
    },
    {
      icon: TrendingUp,
      title: "Logistics",
      description: "Fund shipping and contractor payments.",
      color: "bg-slate-50 hover:bg-slate-100",
      iconColor: "text-green-600"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Support supply chain payments.",
      color: "bg-slate-50 hover:bg-slate-100",
      iconColor: "text-green-600"
    },
    {
      icon: Settings,
      title: "Technology",
      description: "Streamline hardware payments.",
      color: "bg-slate-50 hover:bg-slate-100",
      iconColor: "text-green-600"
    },
    {
      icon: Building2,
      title: "Construction",
      description: "Fund materials and contractors.",
      color: "bg-slate-50 hover:bg-slate-100",
      iconColor: "text-green-600"
    },
    {
      icon: Briefcase,
      title: "SaaS Companies",
      description: "Automate subscription payments.",
      color: "bg-slate-50 hover:bg-slate-100",
      iconColor: "text-green-600"
    },
    {
      icon: TrendingUp,
      title: "Insurance",
      description: "Optimize infrastructure payments.",
      color: "bg-slate-50 hover:bg-slate-100",
      iconColor: "text-green-600"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Settle equipment payments securely.",
      color: "bg-slate-50 hover:bg-slate-100",
      iconColor: "text-green-600"
    },
    {
      icon: Hotel,
      title: "Hospitality",
      description: "Manage hotel supplier payments.",
      color: "bg-slate-50 hover:bg-slate-100",
      iconColor: "text-green-600"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Support facility payments.",
      color: "bg-slate-50 hover:bg-slate-100",
      iconColor: "text-green-600"
    },
    {
      icon: Briefcase,
      title: "Media & Entertainment",
      description: "Settle event payments.",
      color: "bg-slate-50 hover:bg-slate-100",
      iconColor: "text-green-600"
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      description: "Automate consulting fees.",
      color: "bg-slate-50 hover:bg-slate-100",
      iconColor: "text-green-600"
    },
    {
      icon: Store,
      title: "Real Estate Funds",
      description: "Simplify property payments.",
      color: "bg-slate-50 hover:bg-slate-100",
      iconColor: "text-green-600"
    },
    {
      icon: Store,
      title: "Retail Chains",
      description: "Streamline multi-location vendor payments.",
      color: "bg-slate-50 hover:bg-slate-100",
      iconColor: "text-green-600"
    },
    {
      icon: Zap,
      title: "Energy & Utilities",
      description: "Cover infrastructure payments.",
      color: "bg-slate-50 hover:bg-slate-100",
      iconColor: "text-green-600"
    }
  ];

  return (
    <section className="section-spacing-tight bg-gradient-to-br from-amber-50/30 via-yellow-50/20 to-lime-50/30 relative overflow-hidden">
      {/* Minimal Background Pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute top-20 left-20 w-96 h-96 bg-green-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-emerald-200 rounded-full blur-3xl"></div>
      </div>

      {/* World-class full-width container aligned with hero section */}
      <div className="max-w-none px-2 sm:px-4 lg:px-6 xl:px-8 w-full">
        <div className="w-full max-w-[95%] xl:max-w-[90%] mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-responsive-xl font-bold text-slate-800 mb-4 sm:mb-6 tracking-tight">
            Industries{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
              we serve
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Tailored solutions for diverse business sectors.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid-responsive-2-4 gap-responsive-sm mb-12 sm:mb-16">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`${industry.color} padding-responsive-sm rounded-2xl sm:rounded-3xl transition-all duration-200 group cursor-pointer border border-slate-100 hover:shadow-lg hover:border-slate-200`}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:shadow-md transition-shadow duration-200">
                  <industry.icon className={`w-8 h-8 ${industry.iconColor}`} />
                </div>
                <h3 className="font-bold text-slate-900 mb-3 text-lg leading-tight">
                  {industry.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-12 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-3 mx-auto group">
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            Request a Demo
          </Button>
        </div>
        </div>
      </div>
    </section>
  );
};
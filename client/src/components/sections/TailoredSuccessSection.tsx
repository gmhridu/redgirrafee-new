import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, CreditCard, Users, Shield, Globe, TrendingUp, Zap, Clock, DollarSign, FileText, Banknote, UserCheck } from "lucide-react";

export const TailoredSuccessSection = () => {
  const featureCategories = [
    {
      title: "For Banks",
      features: [
        {
          icon: TrendingUp,
          title: "Low-Risk Growth",
          subtitle: "Capture B2B card spend"
        },
        {
          icon: Shield,
          title: "Fraud Prevention", 
          subtitle: "Enterprise-grade security"
        },
        {
          icon: Globe,
          title: "Global Expansion",
          subtitle: "Pay in 97+ countries"
        },
        {
          icon: Clock,
          title: "Real-Time Insights",
          subtitle: "Monitor transactions"
        },
        {
          icon: Zap,
          title: "Scalable Solutions",
          subtitle: "Support growth"
        },
        {
          icon: DollarSign,
          title: "Cost Efficiency",
          subtitle: "Reduce fees"
        }
      ]
    },
    {
      title: "For Cardholding Enterprises", 
      features: [
        {
          icon: CreditCard,
          title: "Bill Discounting",
          subtitle: "Offer early payments with MDR fully absorbed—zero-cost"
        },
        {
          icon: Shield,
          title: "Enhanced Control",
          subtitle: "Maker Checker workflows"
        },
        {
          icon: DollarSign,
          title: "Cost Savings",
          subtitle: "Lower fees"
        },
        {
          icon: Globe,
          title: "Global Reach",
          subtitle: "97+ countries"
        },
        {
          icon: TrendingUp,
          title: "Real-Time Analytics",
          subtitle: "Support growth"
        },
        {
          icon: FileText,
          title: "Compliance Ease",
          subtitle: "Embedded tax data"
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-green-50/30 relative overflow-hidden">
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-gradient-to-br from-emerald-300 via-green-200 to-teal-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-gradient-to-br from-slate-300 via-gray-200 to-zinc-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container-inner relative">
        {/* Sophisticated Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 bg-clip-text text-transparent mb-8 tracking-tight">
            Tailored for Your Success
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Unlock smarter payments for banks and enterprises with RedGirraffe.
          </p>
        </div>

        {/* Static Feature Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {featureCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-200/30 overflow-hidden relative group hover:shadow-2xl hover:border-emerald-200/40 transition-all duration-500"
            >
              {/* Premium Card Header */}
              <div className="bg-gradient-to-r from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-md px-8 py-6 relative overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/8 via-green-400/5 to-teal-500/8"></div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent"></div>
                <h3 className="text-xl font-semibold text-white text-center relative z-10 tracking-wide">
                  {category.title}
                </h3>
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-emerald-400/15 to-green-400/10 rounded-full blur-lg"></div>
                <div className="absolute -bottom-1 -left-1 w-12 h-12 bg-gradient-to-tl from-teal-400/10 to-green-500/5 rounded-full blur-md"></div>
              </div>

              {/* Static Features Grid */}
              <div className="p-10">
                <div className={`grid ${categoryIndex === 1 ? 'grid-cols-2' : 'grid-cols-2'} gap-4`}>
                  {category.features.map((feature, featureIndex) => {
                    if (!feature.icon || !feature.title) return null;
                    
                    const IconComponent = feature.icon;
                    return (
                      <div
                        key={featureIndex}
                        className="bg-slate-50/50 rounded-xl p-6 hover:bg-slate-50 transition-all duration-300 group/item"
                      >
                        <div className="text-center">
                          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-600 rounded-xl flex items-center justify-center shadow-sm relative overflow-hidden mx-auto mb-4">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"></div>
                            <IconComponent className="w-6 h-6 text-white relative z-10" />
                          </div>
                          <h4 className="font-semibold text-lg text-slate-800 mb-3 leading-tight group-hover/item:text-emerald-700 transition-colors duration-300">
                            {feature.title}
                          </h4>
                          <p className="text-slate-600 leading-relaxed text-sm">
                            {feature.subtitle}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row - Cash Flow Boost and Customer Loyalty */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Cash Flow Boost */}
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <div className="bg-slate-50/50 rounded-xl p-6 hover:bg-slate-50 transition-all duration-300 group/item text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-600 rounded-xl flex items-center justify-center shadow-sm relative overflow-hidden mx-auto mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"></div>
                  <Banknote className="w-6 h-6 text-white relative z-10" />
                </div>
                <h4 className="font-semibold text-lg text-slate-800 mb-3 leading-tight group-hover/item:text-emerald-700 transition-colors duration-300">
                  Cash Flow Boost
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Bill discounting benefits
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Customer Loyalty */}
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <div className="bg-slate-50/50 rounded-xl p-6 hover:bg-slate-50 transition-all duration-300 group/item text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-600 rounded-xl flex items-center justify-center shadow-sm relative overflow-hidden mx-auto mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"></div>
                  <UserCheck className="w-6 h-6 text-white relative z-10" />
                </div>
                <h4 className="font-semibold text-lg text-slate-800 mb-3 leading-tight group-hover/item:text-emerald-700 transition-colors duration-300">
                  Customer Loyalty
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Build stickiness
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-full px-12 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto group">
            <span>Request a Demo</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
          <p className="text-slate-500 mt-4 text-sm">
            Join thousands of enterprises already transforming their payments
          </p>
        </div>
      </div>
    </section>
  );
};
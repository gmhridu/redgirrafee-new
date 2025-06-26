import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Globe, TrendingUp } from "lucide-react";

export const HowItWorksSection = () => {
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
          title: "Expand Market Reach: Tap into RedGirraffe's global network"
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-slate-50/50 relative overflow-hidden">
      {/* Minimal Background Pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container-inner relative">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Powered by smart <span className="text-indigo-600">infrastructure</span>.
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            More than a card—an intelligent spend management platform.
          </p>
        </div>

        {/* Partnership Advantages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {advantages.map((advantage, advantageIndex) => (
            <div key={advantageIndex} className="space-y-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  {advantage.category}
                </h3>
                <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
              </div>

              <div className="space-y-6">
                {advantage.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200 group ${
                      feature.highlight ? 'border-2 border-indigo-200 bg-indigo-50' : 'border border-slate-100'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl ${
                        feature.highlight ? 'bg-indigo-600' : 'bg-slate-600'
                      } flex-shrink-0`}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-slate-700 leading-relaxed font-medium">
                          {feature.title}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-12 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-3 mx-auto group">
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            Request a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};
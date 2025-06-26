import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Globe, TrendingUp, Eye, BarChart3, Award, CreditCard, Zap, Smartphone } from "lucide-react";

export const HowItWorksSection = () => {
  const advantages = [
    {
      category: "Bank Partnership Advantages",
      features: [
        {
          icon: Shield,
          title: "Capture low-risk B2B card spend, reduce fraud with PSP-backed security, and scale globally."
        },
        {
          icon: TrendingUp,
          title: "Increase Revenue Streams: Earn higher transaction fees with secure, high-volume B2B payments."
        },
        {
          icon: Globe,
          title: "Enhanced Reporting: Access detailed analytics to optimize operations and compliance."
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
          title: "Expand Market Reach: Tap into RedGiraffe's global network of 97+ countries."
        },
        {
          icon: Shield,
          title: "Reduce Operational Costs: Streamline payment processing with integrated APIs."
        }
      ]
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "End-to-end encryption for all transactions."
    },
    {
      icon: Eye,
      title: "Fraud Detection by PSPs",
      description: "Leverages top-grade security from payment service providers to prevent fraud."
    },
    {
      icon: BarChart3,
      title: "Unified Dashboards Live Analytics",
      description: "Real-time analytics for spend control."
    },
    {
      icon: Award,
      title: "ISO 27001 Certified",
      description: "Globally recognized framework for data security management."
    },
    {
      icon: CreditCard,
      title: "PCI DSS Compliance",
      description: "Adheres to the highest standards for secure card transactions."
    },
    {
      icon: Zap,
      title: "AI-Powered Smarts",
      description: "Smart fraud detection and spend optimization."
    },
    {
      icon: Globe,
      title: "ERP & API Ready",
      description: "Seamless integration with 50+ business tools."
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Full platform access on your phone."
    }
  ];

  return (
    <section className="section-spacing-tight bg-gradient-to-br from-sky-50/30 via-cyan-50/20 to-teal-50/30 relative overflow-hidden">
      {/* Minimal Background Pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container-inner relative">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6 tracking-tight">
            How{" "}
            <span className="bg-gradient-to-r from-teal-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              RedGiraffe Works
            </span>
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
                <div className="w-20 h-1 bg-green-600 mx-auto"></div>
              </div>

              <div className="space-y-6">
                {advantage.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200 group border border-slate-100"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-green-600 flex-shrink-0">
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

        {/* Additional Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-200 group border border-slate-100"
            >
              <div className="mb-4">
                <div className="p-3 rounded-xl bg-green-600 inline-flex">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
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
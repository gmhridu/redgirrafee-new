import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Building2, CreditCard, Users, Shield, Globe, TrendingUp, Banknote, Building, UserCheck } from "lucide-react";

export const MainContentSection = () => {
  const solutionCards = [
    {
      title: "Banks",
      features: [
        {
          icon: Banknote,
          title: "Low-Risk Card Spend",
          description: "Capture high-volume, low-risk B2B transactions."
        },
        {
          icon: Shield,
          title: "Maker Checker",
          description: "Reduce fraud risks with robust approvals."
        },
        {
          icon: UserCheck,
          title: "Customer Stickiness",
          description: "Build enterprise loyalty with reliable payments."
        },
        {
          icon: Globe,
          title: "Real-Time Monitoring",
          description: "Track transactions with instant visibility."
        }
      ]
    },
    {
      title: "Cardholding Enterprises",
      features: [
        {
          icon: CreditCard,
          title: "Employee Spend Management",
          description: "Control and monitor corporate card usage."
        },
        {
          icon: Shield,
          title: "Fraud Protection",
          description: "Advanced security with real-time alerts."
        },
        {
          icon: TrendingUp,
          title: "Expense Automation",
          description: "Streamline reporting and reconciliation."
        },
        {
          icon: Building2,
          title: "Multi-location Support",
          description: "Centralized control across all offices."
        }
      ]
    },
    {
      title: "Vendors",
      features: [
        {
          icon: Globe,
          title: "Instant Payments",
          description: "Receive payments faster than traditional methods."
        },
        {
          icon: Shield,
          title: "Secure Transactions",
          description: "Bank-grade security for all payments."
        },
        {
          icon: Building,
          title: "Easy Integration",
          description: "Simple setup with existing systems."
        },
        {
          icon: TrendingUp,
          title: "Cash Flow Optimization",
          description: "Improve working capital management."
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
            Our Solutions
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 mx-auto rounded-full"></div>
          <p className="text-xl text-slate-600 mt-8 max-w-3xl mx-auto leading-relaxed">
            Sophisticated payment infrastructure designed for modern enterprises
          </p>
        </div>

        {/* Static Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
          {solutionCards.map((solution, solutionIndex) => (
            <div
              key={solutionIndex}
              className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-200/30 overflow-hidden relative group hover:shadow-2xl hover:border-emerald-200/40 transition-all duration-500"
            >
              {/* Premium Card Header */}
              <div className="bg-gradient-to-r from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-md px-8 py-6 relative overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/8 via-green-400/5 to-teal-500/8"></div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent"></div>
                <h3 className="text-xl font-semibold text-white text-center relative z-10 tracking-wide">
                  {solution.title}
                </h3>
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-emerald-400/15 to-green-400/10 rounded-full blur-lg"></div>
                <div className="absolute -bottom-1 -left-1 w-12 h-12 bg-gradient-to-tl from-teal-400/10 to-green-500/5 rounded-full blur-md"></div>
              </div>

              {/* Static Features List */}
              <div className="p-10">
                <div className="space-y-6">
                  {solution.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start gap-4 group hover:bg-slate-50/50 rounded-xl p-4 -m-4 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-600 rounded-xl flex items-center justify-center shadow-sm relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"></div>
                        <feature.icon className="w-5 h-5 text-white relative z-10" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-lg text-slate-800 mb-2 leading-tight group-hover:text-emerald-700 transition-colors duration-300">
                          {feature.title}
                        </h4>
                        <p className="text-slate-600 leading-relaxed text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-full px-12 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto group">
            <span>Get Started Today</span>
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
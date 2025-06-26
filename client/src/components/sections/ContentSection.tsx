import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, CreditCard, Users, Shield, Globe, TrendingUp, Zap, Clock, DollarSign } from "lucide-react";

export const ContentSection = () => {
  const featureCategories = [
    {
      title: "For Banks",
      description: "Unlock smarter payments for banks and enterprises with RedGirraffe.",
      features: [
        {
          icon: TrendingUp,
          title: "Low-Risk Growth",
          subtitle: "Capture B2B card spend",
          bgColor: "bg-slate-50"
        },
        {
          icon: Shield,
          title: "Fraud Prevention", 
          subtitle: "Enterprise-grade security",
          bgColor: "bg-slate-50"
        },
        {
          icon: Globe,
          title: "Global Expansion",
          subtitle: "Pay in 97+ countries",
          bgColor: "bg-slate-50"
        },
        {
          icon: Clock,
          title: "Real-Time Insights",
          subtitle: "Monitor transactions",
          bgColor: "bg-slate-50"
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
          bgColor: "bg-slate-50"
        },
        {
          icon: Shield,
          title: "Enhanced Control",
          subtitle: "Maker Checker workflows",
          bgColor: "bg-slate-50"
        },
        {
          icon: DollarSign,
          title: "Cost Savings",
          subtitle: "Lower fees",
          bgColor: "bg-slate-50"
        },
        {
          icon: Globe,
          title: "Global Reach",
          subtitle: "97+ countries",
          bgColor: "bg-slate-50"
        },
        {
          icon: Zap,
          title: "Scalable Solutions",
          subtitle: "Support growth",
          bgColor: "bg-slate-50"
        },
        {
          icon: TrendingUp,
          title: "Real-Time Analytics",
          subtitle: "Support growth",
          bgColor: "bg-slate-50"
        },
        {
          icon: Users,
          title: "Customer Loyalty",
          subtitle: "Build stickiness",
          bgColor: "bg-slate-50"
        },
        {
          icon: Clock,
          title: "Cash Flow Boost",
          subtitle: "Bill discounting benefits",
          bgColor: "bg-slate-50"
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
    <section className="py-24 bg-gradient-to-b from-white to-slate-50/30 relative overflow-hidden">
      {/* Minimal Background Pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container-inner relative">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Pay everything that matters.
          </h2>
          <p className="text-2xl lg:text-3xl text-indigo-600 font-medium">
            At the speed of now.
          </p>
        </div>

        {/* Feature Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {featureCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  {category.title}
                </h3>
                <div className="w-16 h-1 bg-indigo-600 mx-auto"></div>
                {category.description && (
                  <p className="text-slate-600 mt-4">{category.description}</p>
                )}
              </div>

              <div className={`grid grid-cols-2 gap-4 ${categoryIndex === 1 ? 'md:grid-cols-2' : ''}`}>
                {category.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className={`${feature.bgColor} p-6 rounded-2xl hover:shadow-lg transition-all duration-200 group cursor-pointer border border-slate-100`}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-bold text-slate-900 mb-2 text-lg">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-slate-600">
                        {feature.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mb-24">
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-12 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-3 mx-auto group">
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            Request a Demo
          </Button>
        </div>

        {/* Business Operations Tabs */}
        <div className="bg-slate-50/50 rounded-3xl p-12">
          {/* Tab Headers */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-slate-900 text-white px-8 py-3 rounded-full font-semibold border-b-4 border-indigo-600">
              Vendor & Payments
            </div>
            <div className="text-slate-600 px-8 py-3 rounded-full hover:bg-slate-200 transition-colors cursor-pointer">
              Business Operations
            </div>
            <div className="text-slate-600 px-8 py-3 rounded-full hover:bg-slate-200 transition-colors cursor-pointer">
              Global Expense & Compliance
            </div>
          </div>

          {/* Business Operations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {businessOperations.map((operation, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200 group"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-indigo-50 transition-colors duration-200">
                    <operation.icon className="w-8 h-8 text-slate-600 group-hover:text-indigo-600 transition-colors duration-200" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-3 text-lg leading-tight">
                    {operation.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {operation.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
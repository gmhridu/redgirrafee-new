import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Building2, Globe, CreditCard, Truck, Calendar, Shield, Server, Home, Plane, Zap, UserCheck, Laptop, Receipt, Scale, TrendingUp } from "lucide-react";
import { useState } from "react";

export const PaymentCategoriesSection = () => {
  const [activeTab, setActiveTab] = useState("vendor");

  const paymentCategories = {
    vendor: [
      {
        icon: Users,
        title: "Vendor Payments",
        subtitle: "Pay vendors on time and avail cash discounts on bills",
        color: "from-blue-500 to-blue-600"
      },
      {
        icon: TrendingUp,
        title: "Marketing & Advertising", 
        subtitle: "Settle bills for campaigns and creative services",
        color: "from-purple-500 to-purple-600"
      },
      {
        icon: Shield,
        title: "Cleaning, Security & Facility Services",
        subtitle: "Fund premises upkeep",
        color: "from-green-500 to-green-600"
      },
      {
        icon: Truck,
        title: "Logistics & Shipping",
        subtitle: "Fund freight and transportation services",
        color: "from-orange-500 to-orange-600"
      },
      {
        icon: Calendar,
        title: "Event & Sponsorship Payments",
        subtitle: "Support events, sponsorships, and promotional activities",
        color: "from-pink-500 to-pink-600"
      },
      {
        icon: UserCheck,
        title: "Professional Services",
        subtitle: "Pay consultants, auditors, and advisors efficiently",
        color: "from-indigo-500 to-indigo-600"
      }
    ],
    business: [
      {
        icon: Server,
        title: "Data Centres & SaaS Tools",
        subtitle: "Streamline hosting and software costs",
        color: "from-cyan-500 to-cyan-600"
      },
      {
        icon: Building2,
        title: "Commercial Property Rent",
        subtitle: "Pay for office and retail spaces",
        color: "from-slate-500 to-slate-600"
      },
      {
        icon: Plane,
        title: "Travel & Accommodation",
        subtitle: "Fund business travel and hotel bookings",
        color: "from-sky-500 to-sky-600"
      },
      {
        icon: Zap,
        title: "Utility Bills",
        subtitle: "Settle electricity, water, and gas expenses",
        color: "from-yellow-500 to-yellow-600"
      },
      {
        icon: CreditCard,
        title: "Employee Expenses",
        subtitle: "Reimburse staff for work-related costs",
        color: "from-emerald-500 to-emerald-600"
      },
      {
        icon: Laptop,
        title: "IT & Technology Services",
        subtitle: "Fund software subscriptions and tech infrastructure",
        color: "from-violet-500 to-violet-600"
      }
    ],
    compliance: [
      {
        icon: Home,
        title: "Office Supplies & Equipment",
        subtitle: "Cover costs for hardware and stationary",
        color: "from-amber-500 to-amber-600"
      },
      {
        icon: Shield,
        title: "Insurance, Legal, Tax Liabilities",
        subtitle: "Cover compliance-related payments",
        color: "from-red-500 to-red-600"
      },
      {
        icon: Scale,
        title: "Regulatory Fees",
        subtitle: "Pay government and licensing fees",
        color: "from-teal-500 to-teal-600"
      },
      {
        icon: Receipt,
        title: "Tax & Compliance Payments",
        subtitle: "Simplify tax filings, audits, and payments",
        color: "from-blue-500 to-blue-600"
      },
      {
        icon: TrendingUp,
        title: "Consulting, Marketing, Advisory",
        subtitle: "Settle bills for strategic partnerships",
        color: "from-purple-500 to-purple-600"
      },
      {
        icon: UserCheck,
        title: "Audit & Assurance Services",
        subtitle: "Fund compliance audits and certifications",
        color: "from-indigo-500 to-indigo-600"
      },
      {
        icon: Shield,
        title: "Risk Management",
        subtitle: "Support payments for risk mitigation services",
        color: "from-rose-500 to-rose-600"
      }
    ]
  };

  const tabConfig = [
    { id: "vendor", label: "Vendor & Payments", active: "vendor" },
    { id: "business", label: "Business Operations", active: "business" },
    { id: "compliance", label: "Global Expense & Compliance", active: "compliance" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-green-50/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-40 right-40 w-[700px] h-[700px] bg-gradient-to-br from-emerald-300 via-green-200 to-teal-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-40 w-[600px] h-[600px] bg-gradient-to-br from-slate-300 via-gray-200 to-zinc-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container-inner relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-8 tracking-tight">
            Pay Everything That Matters.{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-600 bg-clip-text text-transparent">
              At the Speed of Now
            </span>
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-col lg:flex-row justify-center mb-12 bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-slate-200/50 max-w-4xl mx-auto">
          {tabConfig.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex-1 text-center ${
                activeTab === tab.id
                  ? tab.id === "vendor"
                    ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg"
                    : tab.id === "business" 
                    ? "bg-gradient-to-r from-slate-700 to-slate-800 text-white shadow-lg"
                    : "bg-gradient-to-r from-slate-600 to-slate-700 text-white shadow-lg"
                  : "text-slate-600 hover:text-slate-800 hover:bg-slate-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {paymentCategories[activeTab as keyof typeof paymentCategories].map((category, index) => (
            <div
              key={index}
              className="group relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-slate-200/40 hover:shadow-2xl hover:border-emerald-200/60 transition-all duration-500 hover:scale-[1.02] overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-white/30 to-slate-100/50 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              
              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-emerald-100/30 to-green-100/20 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500"></div>
              <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-gradient-to-tl from-slate-100/40 to-gray-100/30 rounded-full blur-lg group-hover:scale-110 transition-transform duration-500"></div>

              {/* Icon */}
              <div className={`relative w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-2xl"></div>
                <category.icon className="w-8 h-8 text-white relative z-10 drop-shadow-sm" />
                
                {/* Icon Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-2xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="font-bold text-xl text-slate-800 mb-4 leading-tight group-hover:text-slate-900 transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm group-hover:text-slate-700 transition-colors duration-300">
                  {category.subtitle}
                </p>
              </div>

              {/* Hover Accent Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-green-400 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
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
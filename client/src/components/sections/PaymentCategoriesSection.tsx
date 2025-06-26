import { Button } from "@/components/ui/button";
import { ArrowRight, Globe } from "lucide-react";
import { useState } from "react";

export const PaymentCategoriesSection = () => {
  const [activeTab, setActiveTab] = useState("vendor");

  const paymentCategories = {
    vendor: [
      {
        title: "Data Centres & SaaS Tools",
        subtitle: "Streamline hosting and software costs"
      },
      {
        title: "Marketing & Advertising", 
        subtitle: "Settle bills for campaigns and creative services"
      },
      {
        title: "Cleaning, Security & Facility Services",
        subtitle: "Fund premises upkeep"
      },
      {
        title: "Logistics & Shipping",
        subtitle: "Fund freight and transportation services"
      },
      {
        title: "Event & Sponsorship Payments",
        subtitle: "Support events, sponsorships, and promotional activities"
      },
      {
        title: "Professional Services",
        subtitle: "Pay consultants, auditors, and advisors efficiently"
      },
      {
        title: "Vendor/Contractor Payouts",
        subtitle: "Pay freelancers and service partners"
      }
    ],
    business: [
      {
        title: "Commercial Property Rent",
        subtitle: "Pay for office and retail spaces"
      },
      {
        title: "Travel & Accommodation",
        subtitle: "Fund business travel and hotel bookings"
      },
      {
        title: "Utility Bills",
        subtitle: "Settle electricity, water, and gas expenses"
      },
      {
        title: "Employee Expenses",
        subtitle: "Reimburse staff for work-related costs"
      }
    ],
    compliance: [
      {
        title: "Office Supplies & Equipment",
        subtitle: "Cover costs for hardware and stationary"
      },
      {
        title: "Insurance, Legal, Tax Liabilities",
        subtitle: "Cover compliance-related payments"
      },
      {
        title: "Regulatory Fees",
        subtitle: "Pay government and licensing fees"
      },
      {
        title: "Tax & Compliance Payments",
        subtitle: "Simplify tax filings, audits, and payments"
      },
      {
        title: "Consulting, Marketing, Advisory",
        subtitle: "Settle bills for strategic partnerships"
      },
      {
        title: "Audit & Assurance Services",
        subtitle: "Fund compliance audits and certifications"
      },
      {
        title: "Risk Management",
        subtitle: "Support payments for risk mitigation services"
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
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 bg-clip-text text-transparent mb-8 tracking-tight">
            Pay Everything That Matters. At the<br />Speed of Now
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {paymentCategories[activeTab as keyof typeof paymentCategories].map((category, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-slate-200/30 hover:shadow-xl hover:border-emerald-200/40 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-600 rounded-xl flex items-center justify-center shadow-sm relative overflow-hidden mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"></div>
                <Globe className="w-6 h-6 text-white relative z-10" />
              </div>

              {/* Content */}
              <h3 className="font-semibold text-xl text-slate-800 mb-4 leading-tight group-hover:text-emerald-700 transition-colors duration-300">
                {category.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {category.subtitle}
              </p>
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
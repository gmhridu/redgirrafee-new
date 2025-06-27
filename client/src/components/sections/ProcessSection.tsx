import { CheckCircle, Settings, Play } from "lucide-react";

export const ProcessSection = () => {
  const steps = [
    {
      number: 1,
      title: "Setup & Approval",
      description: "Bank carries out KYC, due diligence and approves card limit. Use ERP or our interface. No code required.",
      features: [
        "KYC Verification",
        "Instant Setup",
        "Credit Assessment"
      ],
      icon: CheckCircle
    },
    {
      number: 2,
      title: "Configuration",
      description: "Vendors are onboarded, payout types defined, caps configured. AI validates payees, documents and flow logic.",
      features: [
        "AI Validation",
        "Smart Rules",
        "Vendor Onboarding"
      ],
      icon: Settings
    },
    {
      number: 3,
      title: "Execute & Monitor",
      description: "Authorized checkers release payouts. API triggers and card executes. Instant payout. Global FX support. Fully auditable.",
      features: [
        "Full Audit Trail",
        "Global FX",
        "Instant Execution"
      ],
      icon: Play
    }
  ];

  return (
    <section className="section-spacing bg-gradient-to-br from-orange-50/30 via-amber-50/20 to-yellow-50/30 relative overflow-hidden">
      {/* Minimal Background Pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute top-20 right-20 w-96 h-96 bg-slate-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gray-200 rounded-full blur-3xl"></div>
      </div>

      {/* World-class full-width container aligned with hero section */}
      <div className="max-w-none px-2 sm:px-4 lg:px-6 xl:px-8 w-full">
        <div className="w-full max-w-[95%] xl:max-w-[90%] mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-responsive-xl font-bold text-slate-800 mb-4 sm:mb-6 tracking-tight">
            How{" "}
            <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
              RedGiraffe works
            </span>
          </h2>
          <p className="text-responsive-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Simplify your payments in three seamless steps.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="max-w-7xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden lg:block relative mb-16">
            {/* Timeline Line */}
            <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
            
            {/* Timeline Dots */}
            <div className="flex justify-between items-center relative">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-slate-800 rounded-full border-4 border-white shadow-lg relative z-10"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-slate-50/50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-slate-100 group"
              >
                {/* Step Icon and Title */}
                <div className="mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-700 transition-colors duration-300">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Feature Tags */}
                <div className="space-y-3">
                  {step.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="bg-white rounded-lg px-4 py-2 text-sm font-medium text-slate-700 border border-slate-200 hover:border-green-200 hover:bg-green-50 transition-all duration-200"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
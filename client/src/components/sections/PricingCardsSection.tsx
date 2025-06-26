import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const PricingCardsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const pricingOptions = [
    {
      title: "Bank Partnership",
      description: "Reach out to RedGiraffe to engage in the B2B high-value global product partnership",
      features: [
        "Existing banking relationship",
        "Negotiated commercial rates", 
        "Regulatory compliance"
      ],
      buttonText: "Request a Demo",
      isHighlighted: false
    },
    {
      title: "Pay-pulse Commercial",
      description: "High-value recurring payment capability across all major global payment networks",
      features: [
        "Partnered with leading global payment rails",
        "Compliance managed by world-class PSPs",
        "Alternative Payment Methods",
        "97+ Country Coverage"
      ],
      buttonText: "Request a Demo",
      isHighlighted: true
    },
    {
      title: "Authorised PSPs",
      description: "Partner with RedGiraffe to unlock large-scale high-value recurring product across geographies where you operate",
      features: [
        "Tier 1 PSPs only",
        "Competitive interchange",
        "Local market expertise"
      ],
      buttonText: "Request a Demo", 
      isHighlighted: false
    }
  ];

  return (
    <section ref={sectionRef} className="section-spacing bg-gradient-to-br from-gray-50/40 via-slate-50/30 to-zinc-50/40 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-20 left-20 w-96 h-96 bg-green-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-slate-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container-responsive relative">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-responsive-xl font-bold text-slate-800 mb-4 sm:mb-6 tracking-tight">
            RedGiraffe Global{" "}
            <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
              Commercial Card Pricing
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-5xl mx-auto leading-relaxed mb-12">
            Pricing is subject to a commercial arrangement between your bank and RedGiraffe or its authorised 
            PSPs. Please contact your commercial bank to confirm your RedGiraffe Pay-Pulse Commercial 
            Credit Card high value recurring rates on Visa, MasterCard & other leading global Payment Networks.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button className="bg-slate-700 hover:bg-slate-800 text-white rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 flex items-center gap-2">
              <span>→</span>
              Request a Demo
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 flex items-center gap-2">
              <span>→</span>
              Contact Sales
            </Button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 shadow-lg transition-all duration-1000 transform ${
                option.isHighlighted && isVisible
                  ? 'bg-slate-700 text-white scale-105'
                  : 'bg-white text-slate-800 hover:shadow-xl'
              } ${
                option.isHighlighted ? 'border-2 border-green-500' : 'border border-slate-200'
              }`}
              style={{
                transitionDelay: option.isHighlighted ? '300ms' : '0ms'
              }}
            >
              {/* Card Header */}
              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-4 ${
                  option.isHighlighted && isVisible ? 'text-white' : 'text-slate-900'
                }`}>
                  {option.title}
                </h3>
                <p className={`leading-relaxed ${
                  option.isHighlighted && isVisible ? 'text-slate-200' : 'text-slate-600'
                }`}>
                  {option.description}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {option.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      option.isHighlighted && isVisible 
                        ? 'bg-green-400' 
                        : 'bg-green-100'
                    }`}>
                      <Check className={`w-3 h-3 ${
                        option.isHighlighted && isVisible 
                          ? 'text-slate-800' 
                          : 'text-green-600'
                      }`} />
                    </div>
                    <span className={`text-sm leading-relaxed ${
                      option.isHighlighted && isVisible ? 'text-slate-200' : 'text-slate-600'
                    }`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button className={`w-full rounded-full py-4 text-lg font-medium transition-all duration-300 ${
                option.isHighlighted && isVisible
                  ? 'bg-green-500 hover:bg-green-400 text-slate-900'
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}>
                {option.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
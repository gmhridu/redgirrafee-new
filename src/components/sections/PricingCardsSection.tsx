import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

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
      title: 'Bank Partnership',
      description:
        'Reach out to RedGirraffe to engage in the B2B high-value global product partnership',
      features: [
        'Existing banking relationship',
        'Negotiated commercial rates',
        'Regulatory compliance',
      ],
      buttonText: 'Request a Demo',
      isHighlighted: false,
    },
    {
      title: 'Pay-pulse Commercial',
      description:
        'High-value recurring payment capability across all major global payment networks',
      features: [
        'Partnered with leading global payment rails',
        'Compliance managed by world-class PSPs',
        'Alternative Payment Methods',
        '97+ Country Coverage',
      ],
      buttonText: 'Request a Demo',
      isHighlighted: true,
    },
    {
      title: 'Authorised PSPs',
      description:
        'Partner with RedGirraffe to unlock large-scale high-value recurring product across geographies where you operate',
      features: ['Tier 1 PSPs only', 'Competitive interchange', 'Local market expertise'],
      buttonText: 'Request a Demo',
      isHighlighted: false,
    },
  ];

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="section-spacing bg-gradient-to-br from-gray-50/40 via-slate-50/30 to-zinc-50/40 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-20 left-20 w-96 h-96 bg-green-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-slate-200 rounded-full blur-3xl"></div>
      </div>

      {/* Synchronized with Hero section margins for perfect consistency */}
      <div className="max-w-none px-1 sm:px-2 lg:px-3 xl:px-4 w-full">
        <div className="w-full max-w-[98%] xl:max-w-[96%] mx-auto relative">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] 2xl:text-[45px] 4xl:text-[72px] font-extrabold 4xl:leading-[102.8px] text-center mx-auto mb-4 sm:mb-6 tracking-tight">
              RedGirraffe Global{' '}
              <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-700 bg-clip-text text-transparent">
                Commercial Card Pricing
              </span>
            </h2>
            <p className="lg:text-lg 2xl:text-2xl font-normal 2xl:leading-[45.6px] text-slate-600 max-w-5xl mx-auto leading-relaxed mb-12">
              Pricing is subject to a commercial arrangement between your bank and RedGirraffe or
              its authorised PSPs. Please contact your commercial bank to confirm your RedGirraffe
              Pay-Pulse Commercial Credit Card high value recurring rates on Visa, MasterCard &
              other leading global Payment Networks.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
                <span>→</span>
                Request a Demo
              </Button>
              <Button className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600 text-white rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
                <span>→</span>
                Contact Sales
              </Button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid-responsive-1-2-3 gap-responsive max-w-6xl mx-auto">
            {pricingOptions.map((option, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 shadow-lg transition-all duration-500 transform group cursor-pointer ${
                  option.isHighlighted && isVisible
                    ? 'bg-gradient-to-br from-slate-800 to-slate-900 text-white scale-105 shadow-2xl'
                    : 'bg-white text-slate-800 hover:shadow-2xl hover:scale-105 hover:-translate-y-2'
                } ${
                  option.isHighlighted
                    ? 'border-2 border-emerald-500 ring-2 ring-emerald-500/20'
                    : 'border border-slate-200 hover:border-emerald-300 hover:ring-2 hover:ring-emerald-500/10'
                }`}
                style={{
                  transitionDelay: option.isHighlighted ? '300ms' : '0ms',
                }}
              >
                {/* Card Header */}
                <div className="mb-8">
                  <h3
                    className={`text-2xl font-bold mb-4 ${
                      option.isHighlighted && isVisible ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {option.title}
                  </h3>
                  <p
                    className={`leading-relaxed ${
                      option.isHighlighted && isVisible ? 'text-slate-200' : 'text-slate-600'
                    }`}
                  >
                    {option.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {option.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          option.isHighlighted && isVisible ? 'bg-green-400' : 'bg-green-100'
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 ${
                            option.isHighlighted && isVisible ? 'text-slate-800' : 'text-green-600'
                          }`}
                        />
                      </div>
                      <span
                        className={`text-sm leading-relaxed ${
                          option.isHighlighted && isVisible ? 'text-slate-200' : 'text-slate-600'
                        }`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full rounded-full py-4 text-lg font-medium transition-all duration-300 transform group-hover:scale-105 ${
                    option.isHighlighted && isVisible
                      ? 'bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600 text-white shadow-lg hover:shadow-xl'
                  }`}
                >
                  {option.buttonText}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

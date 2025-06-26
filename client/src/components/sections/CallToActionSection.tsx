import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const CallToActionSection = () => {
  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      features: [
        "Up to 10 users",
        "Basic analytics", 
        "Email support",
        "5GB storage"
      ],
      buttonText: "Get Started",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      features: [
        "Up to 50 users",
        "Advanced analytics",
        "Priority support", 
        "50GB storage",
        "API access"
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "default" as const,
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      features: [
        "Unlimited users",
        "Custom analytics",
        "24/7 support",
        "Unlimited storage",
        "Custom integrations"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const,
      popular: false
    }
  ];

  return (
    <section className="section-fullscreen">
      <div className="text-center mb-12 animate-on-scroll">
        <h2 className="text-h2-mobile sm:text-3xl lg:text-5xl font-bold text-slate-800 mb-6">
          Choose Your{" "}
          <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-red-600 bg-clip-text text-transparent">
            Plan
          </span>
        </h2>
        <p className="text-lg text-neutral-50 max-w-2xl mx-auto">
          Flexible pricing options designed to grow with your business. Start free or choose a plan that fits your needs.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <div 
            key={index} 
            className={`${plan.popular ? 'bg-app-primary text-white' : 'bg-white'} p-8 rounded-xl shadow-lg card-hover animate-on-scroll relative`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#00d959] text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
            )}
            <div className="text-center">
              <h3 className={`text-2xl font-semibold mb-4 ${plan.popular ? 'text-white' : 'text-textblack'}`}>
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-app-primary'}`}>
                  {plan.price}
                </span>
                <span className={plan.popular ? 'text-gray-300' : 'text-neutral-50'}>/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-left">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <Check className="text-[#00d959] w-4 h-4" />
                    <span className={plan.popular ? 'text-white' : 'text-textblack'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                variant={plan.popular ? "secondary" : plan.buttonVariant}
                className={`w-full btn-touch px-6 py-3 rounded-full font-semibold transition-all ${
                  plan.popular 
                    ? 'bg-[#00d959] text-white hover:bg-opacity-90' 
                    : plan.buttonVariant === 'outline' 
                      ? 'border-2 border-app-primary text-app-primary hover:bg-app-primary hover:text-white'
                      : 'bg-app-primary text-white hover:bg-opacity-90'
                }`}
              >
                {plan.buttonText}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

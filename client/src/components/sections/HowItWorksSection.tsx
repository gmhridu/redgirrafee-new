import { Button } from "@/components/ui/button";

export const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Sign Up & Setup",
      description: "Create your account and configure your workspace in minutes with our guided setup process.",
      bgColor: "bg-[#00d959]"
    },
    {
      number: "2", 
      title: "Import & Integrate",
      description: "Connect your existing systems and import your data using our seamless integration tools.",
      bgColor: "bg-app-secondary"
    },
    {
      number: "3",
      title: "Optimize & Scale",
      description: "Start using powerful features to optimize operations and scale your business efficiently.",
      bgColor: "bg-app-primary"
    }
  ];

  return (
    <section className="section-fullscreen-bg-alt">
      <div className="text-center mb-12 animate-on-scroll">
        <h2 className="text-h2-mobile sm:text-3xl lg:text-5xl font-bold text-textblack mb-6">
          How It Works
        </h2>
        <p className="text-lg text-neutral-50 max-w-2xl mx-auto">
          Get started with RedGirraffe in three simple steps and transform your business operations.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="text-center animate-on-scroll">
            <div className={`w-20 h-20 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
              <span className="text-2xl font-bold text-white">{step.number}</span>
            </div>
            <h3 className="text-xl font-semibold text-textblack mb-4">{step.title}</h3>
            <p className="text-neutral-50">{step.description}</p>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12 animate-on-scroll">
        <Button className="btn-touch px-8 py-4 bg-app-primary text-white rounded-full font-semibold hover:bg-opacity-90 transition-all">
          Start Your Journey
        </Button>
      </div>
    </section>
  );
};

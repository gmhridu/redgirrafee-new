import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24">
      <div className="container-inner">
        <div className="text-center max-w-4xl mx-auto animate-on-scroll">
          <h1 className="text-h1-mobile sm:text-4xl lg:text-6xl font-bold text-textblack mb-6 leading-tight">
            Transform Your Business with{" "}
            <span className="text-[#00d959]">RedGirraffe</span>
          </h1>
          <p className="text-lg sm:text-xl text-neutral-50 mb-8 leading-relaxed max-w-2xl mx-auto">
            Streamline operations, boost productivity, and scale your business with our comprehensive suite of professional tools and solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="btn-touch px-8 py-4 bg-app-primary text-white rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105">
              Get Started Free
            </Button>
            <Button 
              variant="outline"
              className="btn-touch px-8 py-4 bg-transparent border-2 border-app-primary text-app-primary rounded-full font-semibold hover:bg-app-primary hover:text-white transition-all"
            >
              Watch Demo
            </Button>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="mt-12 lg:mt-16 animate-on-scroll">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=700" 
            alt="Professional business dashboard interface" 
            className="rounded-xl shadow-2xl w-full h-auto" 
          />
        </div>
      </div>
    </section>
  );
};

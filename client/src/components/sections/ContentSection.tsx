import { Button } from "@/components/ui/button";

export const ContentSection = () => {
  return (
    <section className="section-fullscreen-bg-alt">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 animate-on-scroll">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
            alt="Business team analyzing data on multiple screens" 
            className="rounded-xl shadow-lg w-full h-auto" 
          />
        </div>
        <div className="order-1 lg:order-2 animate-on-scroll">
          <h2 className="text-h2-mobile sm:text-3xl lg:text-5xl font-bold text-textblack mb-6">
            Data-Driven Insights
          </h2>
          <p className="text-lg text-neutral-50 mb-8 leading-relaxed">
            Make informed decisions with real-time analytics, comprehensive reporting, and actionable insights that drive business growth.
          </p>
          <Button className="btn-touch px-8 py-4 bg-app-secondary text-white rounded-full font-semibold hover:bg-opacity-90 transition-all">
            Explore Analytics
          </Button>
        </div>
      </div>
    </section>
  );
};

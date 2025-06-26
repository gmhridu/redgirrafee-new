import { Check } from "lucide-react";

export const MainContentSection = () => {
  return (
    <section className="section-fullscreen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-on-scroll">
          <h2 className="text-h2-mobile sm:text-3xl lg:text-5xl font-bold text-textblack mb-6">
            Built for Modern Businesses
          </h2>
          <p className="text-lg text-neutral-50 mb-8 leading-relaxed">
            Our platform combines cutting-edge technology with intuitive design to deliver solutions that scale with your business needs.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#00d959] rounded-full flex items-center justify-center">
                <Check className="text-white text-xs w-4 h-4" />
              </div>
              <span className="text-textblack">Advanced Analytics & Reporting</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#00d959] rounded-full flex items-center justify-center">
                <Check className="text-white text-xs w-4 h-4" />
              </div>
              <span className="text-textblack">24/7 Customer Support</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#00d959] rounded-full flex items-center justify-center">
                <Check className="text-white text-xs w-4 h-4" />
              </div>
              <span className="text-textblack">Enterprise-Grade Security</span>
            </div>
          </div>
        </div>
        <div className="animate-on-scroll">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
            alt="Modern office workspace with professionals collaborating" 
            className="rounded-xl shadow-lg w-full h-auto" 
          />
        </div>
      </div>
    </section>
  );
};

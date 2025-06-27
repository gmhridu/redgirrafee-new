import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Globe, TrendingUp, Users, CheckCircle } from "lucide-react";

export const MainContentSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Enterprise-level encryption and compliance standards protect every transaction with military-grade security protocols."
    },
    {
      icon: Zap,
      title: "Lightning-Fast Processing",
      description: "Process payments in milliseconds with our advanced infrastructure, ensuring seamless customer experiences."
    },
    {
      icon: Globe,
      title: "Global Market Reach",
      description: "Accept payments in 180+ countries with local payment methods and multi-currency support."
    },
    {
      icon: TrendingUp,
      title: "Revenue Optimization",
      description: "Intelligent routing and dynamic pricing strategies maximize your revenue while minimizing processing costs."
    },
    {
      icon: Users,
      title: "Customer-First Design",
      description: "Intuitive interfaces and seamless checkout experiences drive higher conversion rates and customer satisfaction."
    },
    {
      icon: CheckCircle,
      title: "Compliance Assurance",
      description: "Stay compliant with PCI DSS, GDPR, and regional regulations through automated compliance management."
    }
  ];

  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-green-50/30 py-20 lg:py-32">
      <div className="max-w-none px-1 sm:px-2 lg:px-3 xl:px-4 w-full">
        <div className="max-w-[98%] xl:max-w-[96%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-responsive-xl font-bold text-gray-900 mb-6">
              Transform Your Business with
              <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Next-Generation Payment Solutions
              </span>
            </h2>
            <p className="text-responsive-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Unlock unprecedented growth with our comprehensive payment platform. From startups to enterprises, 
              we provide the tools and infrastructure needed to scale your business globally while maintaining 
              the highest standards of security and compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-green-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center group-hover:from-green-200 group-hover:to-emerald-200 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-responsive-base font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-full px-12 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto group">
              <span>Request a Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
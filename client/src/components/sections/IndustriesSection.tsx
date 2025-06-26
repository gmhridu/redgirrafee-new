import { Building2, Factory, GraduationCap, Store, TrendingUp, Settings } from "lucide-react";

export const IndustriesSection = () => {
  const industries = [
    {
      icon: Building2,
      title: "Healthcare",
      description: "Streamline patient management, enhance care coordination, and improve operational efficiency."
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Optimize production processes, manage supply chains, and reduce operational costs."
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Enhance learning experiences, manage student data, and improve institutional outcomes."
    },
    {
      icon: Store,
      title: "Retail",
      description: "Manage inventory, analyze customer behavior, and optimize sales performance."
    },
    {
      icon: TrendingUp,
      title: "Finance",
      description: "Ensure compliance, manage risk, and deliver superior financial services."
    },
    {
      icon: Settings,
      title: "Technology",
      description: "Accelerate development cycles, manage projects, and scale technical operations."
    }
  ];

  return (
    <section className="section-fullscreen">
      <div className="text-center mb-12 animate-on-scroll">
        <h2 className="text-h2-mobile sm:text-3xl lg:text-5xl font-bold text-textblack mb-6">
          Solutions for Every Industry
        </h2>
        <p className="text-lg text-neutral-50 max-w-2xl mx-auto">
          Tailored solutions designed to meet the unique challenges and requirements of your industry.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((industry, index) => {
          const IconComponent = industry.icon;
          return (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg card-hover animate-on-scroll">
              <div className="w-16 h-16 bg-tag-green rounded-lg flex items-center justify-center mb-6">
                <IconComponent className="text-app-primary w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-textblack mb-4">{industry.title}</h3>
              <p className="text-neutral-50">{industry.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

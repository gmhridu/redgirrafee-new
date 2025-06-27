import { Star } from "lucide-react";

export const UserTestimonialsSection = () => {
  const testimonials = [
    {
      name: "John Smith",
      role: "CEO, TechCorp",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      content: "RedGirraffe transformed our operations completely. The analytics insights have been game-changing for our business decisions."
    },
    {
      name: "Sarah Johnson",
      role: "Operations Director, GlobalInc",
      image: "https://images.unsplash.com/photo-1494790108755-2616b9e1bb36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      content: "The level of customer support is exceptional. The team truly understands our business needs and delivers results."
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateLabs",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      content: "The platform's scalability and security features make it perfect for enterprise-level operations. Highly recommended!"
    }
  ];

  return (
    <section className="section-spacing-tight bg-gradient-to-br from-purple-50/30 via-fuchsia-50/20 to-pink-50/30 relative overflow-hidden">
      <div className="container-responsive relative">
        <div className="text-center mb-8 sm:mb-12 animate-on-scroll">
          <h2 className="text-responsive-xl font-bold text-textblack mb-4 sm:mb-6">
            What Our Customers Say
          </h2>
          <p className="text-responsive-base text-neutral-50 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what industry leaders have to say about RedGirraffe.
          </p>
        </div>
        
        <div className="grid-responsive-1-2-3 gap-responsive">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white padding-responsive rounded-xl shadow-lg card-hover animate-on-scroll">
              <div className="flex items-center mb-4">
              <img 
                src={testimonial.image} 
                alt={`Professional headshot of ${testimonial.name}`} 
                className="w-12 h-12 rounded-full mr-4" 
              />
              <div>
                <h4 className="font-semibold text-textblack">{testimonial.name}</h4>
                <p className="text-sm text-neutral-50">{testimonial.role}</p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#00d959] text-[#00d959]" />
              ))}
              </div>
              <p className="text-responsive-sm text-neutral-50 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

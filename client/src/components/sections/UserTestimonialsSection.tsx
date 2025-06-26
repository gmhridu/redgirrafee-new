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
    <section className="section-spacing-tight bg-gradient-to-br from-purple-50 via-fuchsia-50 to-pink-50 relative overflow-hidden">
      {/* Sophisticated Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-fuchsia-500/3 to-pink-400/5"></div>
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 right-20 w-96 h-96 bg-gradient-to-br from-purple-300 to-fuchsia-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-gradient-to-br from-pink-200 to-purple-200 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-fuchsia-200 to-pink-200 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="text-center mb-12 animate-on-scroll">
        <h2 className="text-h2-mobile sm:text-3xl lg:text-5xl font-bold text-textblack mb-6">
          What Our Customers Say
        </h2>
        <p className="text-lg text-neutral-50 max-w-2xl mx-auto">
          Don't just take our word for it. Here's what industry leaders have to say about RedGirraffe.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-lg card-hover animate-on-scroll">
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
            <p className="text-neutral-50 italic">"{testimonial.content}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

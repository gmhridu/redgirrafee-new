import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, MessageCircle, Mail, ArrowRight, CheckCircle, Globe, Shield, Zap } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
}

export const SophisticatedContactSection = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    phone: ""
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { toast } = useToast();
  const queryClient = useQueryClient();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company,
          message: `Phone: ${data.phone}`
        })
      });
      if (!response.ok) {
        throw new Error("Failed to submit contact form");
      }
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Demo Request Submitted!",
        description: "We'll get in touch with you soon to schedule your demo.",
      });
      setFormData({ name: "", email: "", company: "", phone: "" });
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: () => {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "+44 330 113 1707",
      subtitle: "The Best Way to get Faster Answer",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: MessageCircle,
      title: "+91 80 1019 1019",
      subtitle: "WhatsApp Support Available",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Mail,
      title: "connect@redgiraffe.com",
      subtitle: "We Are Always Ready to Help",
      color: "from-purple-500 to-violet-600"
    }
  ];

  const benefits = [
    { icon: Globe, text: "Global payment networks" },
    { icon: Shield, text: "Enterprise-grade security" },
    { icon: Zap, text: "Instant processing" },
    { icon: CheckCircle, text: "99.9% uptime guarantee" }
  ];

  return (
    <section ref={sectionRef} className="section-spacing-contact bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 relative overflow-hidden">
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500/5 via-transparent to-slate-500/5"></div>
        <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-gradient-to-br from-emerald-400/10 to-green-300/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-gradient-to-br from-slate-400/8 to-gray-300/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-400/5 via-purple-300/3 to-pink-400/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute top-32 left-10 w-4 h-4 bg-emerald-400 rounded-full"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-64 right-32 w-6 h-6 bg-green-300 rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-48 left-1/4 w-3 h-3 bg-teal-400 rounded-full"
          animate={{
            x: [0, 30, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container-inner relative">
        {/* Premium Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
            Ready to transform your{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-teal-400 bg-clip-text text-transparent">
              business payments?
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Join thousands of enterprises, banks, and PSPs simplifying payments with RedGiraffe's 
            cutting-edge infrastructure and unmatched global reach.
          </p>
          
          {/* Benefits Showcase */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
                <benefit.icon className="w-4 h-4 text-emerald-400" />
                <span className="text-white text-sm font-medium">{benefit.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Information Cards */}
          <motion.div 
            className="lg:col-span-1 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
            {contactInfo.map((contact, index) => (
              <motion.div 
                key={index} 
                className="group bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <contact.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                      {contact.title}
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {contact.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Premium Contact Form */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-2xl">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">Start Your Journey</h3>
                <p className="text-slate-300 leading-relaxed">
                  Schedule a personalized demo and discover how RedGiraffe can revolutionize your payment infrastructure.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Enhanced Form Fields */}
                  {[
                    { field: "name", label: "Full Name", type: "text", placeholder: "Enter Your Name" },
                    { field: "company", label: "Company Name", type: "text", placeholder: "Enter Your Company" }
                  ].map((input) => (
                    <div key={input.field} className="relative">
                      <label className="block text-sm font-medium text-slate-300 mb-3">
                        {input.label}
                      </label>
                      <div className="relative">
                        <Input
                          type={input.type}
                          placeholder={input.placeholder}
                          value={formData[input.field as keyof ContactFormData]}
                          onChange={(e) => handleInputChange(input.field as keyof ContactFormData, e.target.value)}
                          onFocus={() => setFocusedField(input.field)}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-6 py-4 bg-white/10 border-2 rounded-xl text-white placeholder-slate-400 transition-all duration-300 focus:outline-none backdrop-blur-sm ${
                            focusedField === input.field 
                              ? 'border-emerald-400 bg-white/15 shadow-lg shadow-emerald-400/20' 
                              : 'border-white/30 hover:border-white/50'
                          }`}
                          required
                        />
                        {focusedField === input.field && (
                          <motion.div
                            className="absolute inset-0 rounded-xl border-2 border-emerald-400"
                            initial={{ scale: 1.05, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 1.05, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { field: "email", label: "Business Email Address", type: "email", placeholder: "Enter Your Email" },
                    { field: "phone", label: "Phone Number", type: "tel", placeholder: "Enter Your Phone" }
                  ].map((input) => (
                    <div key={input.field} className="relative">
                      <label className="block text-sm font-medium text-slate-300 mb-3">
                        {input.label}
                      </label>
                      <div className="relative">
                        <Input
                          type={input.type}
                          placeholder={input.placeholder}
                          value={formData[input.field as keyof ContactFormData]}
                          onChange={(e) => handleInputChange(input.field as keyof ContactFormData, e.target.value)}
                          onFocus={() => setFocusedField(input.field)}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-6 py-4 bg-white/10 border-2 rounded-xl text-white placeholder-slate-400 transition-all duration-300 focus:outline-none backdrop-blur-sm ${
                            focusedField === input.field 
                              ? 'border-emerald-400 bg-white/15 shadow-lg shadow-emerald-400/20' 
                              : 'border-white/30 hover:border-white/50'
                          }`}
                          required={input.field === "email"}
                        />
                        {focusedField === input.field && (
                          <motion.div
                            className="absolute inset-0 rounded-xl border-2 border-emerald-400"
                            initial={{ scale: 1.05, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 1.05, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Premium Submit Button */}
                <motion.div className="pt-6">
                  <motion.button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white rounded-2xl py-6 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/25 flex items-center justify-center gap-3 group disabled:opacity-50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {contactMutation.isPending ? (
                      <motion.div
                        className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                    ) : (
                      <>
                        <span>Request a Demo</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                      </>
                    )}
                  </motion.button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
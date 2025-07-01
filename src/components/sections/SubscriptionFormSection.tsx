import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export const SubscriptionFormSection = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const submitMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", company: "", message: "" });
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        description: "Name, email, and message are required.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email address",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    submitMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <section className="section-fullscreen-bg-alt">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-h2-mobile sm:text-3xl lg:text-5xl font-bold text-textblack mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-neutral-50 max-w-2xl mx-auto">
            Ready to transform your business? Contact our team to learn more about RedGirraffe solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-textblack mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-tag-green rounded-lg flex items-center justify-center">
                    <Phone className="text-app-primary w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-textblack">Phone</p>
                    <p className="text-neutral-50">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-tag-green rounded-lg flex items-center justify-center">
                    <Mail className="text-app-primary w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-textblack">Email</p>
                    <p className="text-neutral-50">contact@redgirraffe.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-tag-green rounded-lg flex items-center justify-center">
                    <MapPin className="text-app-primary w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-textblack">Office</p>
                    <p className="text-neutral-50">123 Business Ave, Suite 100<br />City, State 12345</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-textblack mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-textblack mb-2">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange("name")}
                    className="input-mobile w-full px-4 py-3 border border-abu-stroke rounded-lg focus:ring-2 focus:ring-app-primary focus:border-transparent transition-colors"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-textblack mb-2">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange("email")}
                    className="input-mobile w-full px-4 py-3 border border-abu-stroke rounded-lg focus:ring-2 focus:ring-app-primary focus:border-transparent transition-colors"
                    placeholder="your.email@company.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="company" className="block text-sm font-medium text-textblack mb-2">
                    Company
                  </Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange("company")}
                    className="input-mobile w-full px-4 py-3 border border-abu-stroke rounded-lg focus:ring-2 focus:ring-app-primary focus:border-transparent transition-colors"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="block text-sm font-medium text-textblack mb-2">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange("message")}
                    className="input-mobile w-full px-4 py-3 border border-abu-stroke rounded-lg focus:ring-2 focus:ring-app-primary focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your business needs..."
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={submitMutation.isPending}
                  className="w-full btn-touch px-6 py-3 bg-app-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all"
                >
                  {submitMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

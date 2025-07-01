import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
}

export const FinalContactSection = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company,
          message: `Phone: ${data.phone}`, // Store phone in message field for compatibility
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to submit contact form');
      }
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: 'Demo Request Submitted!',
        description: "We'll get in touch with you soon to schedule your demo.",
      });
      setFormData({ name: '', email: '', company: '', phone: '' });
      queryClient.invalidateQueries({ queryKey: ['/api/contact'] });
    },
    onError: () => {
      toast({
        title: 'Submission Failed',
        description: 'Please try again or contact us directly.',
        variant: 'destructive',
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
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
      title: '+44 330 113 1707',
      subtitle: 'The Best Way to get Faster Answer',
    },
    {
      icon: MessageCircle,
      title: '+91 80 1019 1019',
      subtitle: 'WhatsApp Support Available',
    },
    {
      icon: Mail,
      title: 'connect@redgiraffe.com',
      subtitle: 'We Are Always Ready to Help',
    },
  ];

  return (
    <section className="py-20 bg-slate-50/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-20 right-20 w-96 h-96 bg-green-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-slate-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container-inner relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6 tracking-tight">
            Ready to transform your business{' '}
            <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
              payments?
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of enterprises, banks, and PSPs simplifying payments with RedGiraffe
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((contact, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <contact.icon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{contact.title}</h3>
              <p className="text-slate-600 text-sm">{contact.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                <Input
                  type="text"
                  placeholder="Enter Your Name"
                  value={formData.name}
                  onChange={e => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Company Name
                </label>
                <Input
                  type="text"
                  placeholder="Enter Your Company"
                  value={formData.company}
                  onChange={e => handleInputChange('company', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Business Email */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Business Email Address
                </label>
                <Input
                  type="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={e => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  placeholder="Enter Your Phone"
                  value={formData.phone}
                  onChange={e => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={contactMutation.isPending}
              className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full py-4 text-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>→</span>
              {contactMutation.isPending ? 'Submitting...' : 'Request a Demo'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
}

export const SophisticatedContactSection = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const { toast } = useToast();
  const queryClient = useQueryClient();

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
          message: `Phone: ${data.phone}`,
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
      gradient: 'from-green-600 to-emerald-600',
    },
    {
      icon: MessageCircle,
      title: '+91 80 1019 1019',
      subtitle: 'WhatsApp Support Available',
      gradient: 'from-emerald-600 to-teal-600',
    },
    {
      icon: Mail,
      title: 'connect@RedGirraffe.com',
      subtitle: 'We Are Always Ready to Help',
      gradient: 'from-teal-600 to-cyan-600',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="contact"
      className="relative py-12 lg:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-green-400/10 to-emerald-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-teal-400/10 to-cyan-400/5 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      {/* Main Container */}
      <div className="max-w-none px-1 sm:px-2 lg:px-3 xl:px-4 w-full">
        <div className="w-full max-w-[98%] xl:max-w-[96%] mx-auto relative">
          {/* Enhanced Header */}
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Ready to transform your{' '}
              <span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-green-700 bg-clip-text text-transparent">
                business payments?
              </span>
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Join thousands of enterprises, banks, and PSPs simplifying payments with RedGirraffe's
              cutting-edge infrastructure and unmatched global reach.
            </motion.p>
          </motion.div>

          {/* Two-Card Layout */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Contact Information Card */}
            <motion.div
              className="relative group"
              variants={itemVariants}
              onMouseEnter={() => setHoveredCard(0)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 lg:p-10 border border-gray-700 h-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-gray-600">
                {/* Gradient Background Layer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-emerald-600/5"
                  animate={{ opacity: hoveredCard === 0 ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Sparkle Effect */}
                <motion.div
                  className="absolute top-4 right-4"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: hoveredCard === 0 ? 1 : 0,
                    scale: hoveredCard === 0 ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                </motion.div>

                <div className="relative">
                  <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                  <p className="text-gray-300 mb-8">
                    Choose your preferred method to connect with our team.
                  </p>

                  <div className="space-y-6">
                    {contactInfo.map((contact, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-4 group/item cursor-pointer"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${contact.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover/item:shadow-xl transition-shadow duration-300`}
                        >
                          <contact.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-1 group-hover/item:text-green-400 transition-colors duration-300">
                            {contact.title}
                          </h4>
                          <p className="text-gray-400 text-sm">{contact.subtitle}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Premium Border Glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === 0 ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="absolute inset-[-1px] bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl opacity-20 blur-sm" />
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form Card */}
            <motion.div
              className="relative group"
              variants={itemVariants}
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 lg:p-10 border border-gray-700 h-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-gray-600">
                {/* Gradient Background Layer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-teal-600/5"
                  animate={{ opacity: hoveredCard === 1 ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Sparkle Effect */}
                <motion.div
                  className="absolute top-4 right-4"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: hoveredCard === 1 ? 1 : 0,
                    scale: hoveredCard === 1 ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                </motion.div>

                <div className="relative">
                  <h3 className="text-2xl font-bold text-white mb-6">Request a Demo</h3>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="relative">
                        <Input
                          type="text"
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={e => handleInputChange('name', e.target.value)}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 transition-all duration-300 ${
                            focusedField === 'name'
                              ? 'border-green-500 bg-gray-700/70'
                              : 'border-gray-600 hover:border-gray-500'
                          }`}
                          required
                        />
                      </div>
                      <div className="relative">
                        <Input
                          type="text"
                          placeholder="Company Name"
                          value={formData.company}
                          onChange={e => handleInputChange('company', e.target.value)}
                          onFocus={() => setFocusedField('company')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 transition-all duration-300 ${
                            focusedField === 'company'
                              ? 'border-green-500 bg-gray-700/70'
                              : 'border-gray-600 hover:border-gray-500'
                          }`}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="relative">
                        <Input
                          type="email"
                          placeholder="Business Email"
                          value={formData.email}
                          onChange={e => handleInputChange('email', e.target.value)}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 transition-all duration-300 ${
                            focusedField === 'email'
                              ? 'border-green-500 bg-gray-700/70'
                              : 'border-gray-600 hover:border-gray-500'
                          }`}
                          required
                        />
                      </div>
                      <div className="relative">
                        <Input
                          type="tel"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={e => handleInputChange('phone', e.target.value)}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 transition-all duration-300 ${
                            focusedField === 'phone'
                              ? 'border-green-500 bg-gray-700/70'
                              : 'border-gray-600 hover:border-gray-500'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <motion.div className="pt-2">
                      <motion.button
                        type="submit"
                        disabled={contactMutation.isPending}
                        className="relative w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-full py-4 text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-500 inline-flex items-center justify-center gap-3 group overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                        whileHover={{ scale: contactMutation.isPending ? 1 : 1.02 }}
                        whileTap={{ scale: contactMutation.isPending ? 1 : 0.98 }}
                      >
                        {/* Button Gradient Animation */}
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Button Shine Effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                        </div>

                        <span className="relative z-10">
                          {contactMutation.isPending ? 'Submitting...' : 'Request a Demo'}
                        </span>
                        {!contactMutation.isPending && (
                          <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        )}
                      </motion.button>
                    </motion.div>
                  </form>
                </div>

                {/* Premium Border Glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === 1 ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="absolute inset-[-1px] bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl opacity-20 blur-sm" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

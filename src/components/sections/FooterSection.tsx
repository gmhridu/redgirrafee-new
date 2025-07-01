import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Linkedin, Twitter, Instagram, Youtube, Music } from "lucide-react";
import { useState } from "react";

export const FooterSection = () => {
  const [email, setEmail] = useState("");

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className="bg-app-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container-inner relative">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 py-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Important Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-orange-400 font-semibold mb-6 text-sm uppercase tracking-wide">Important Links</h4>
            <p className="text-orange-300 text-sm mb-4">Quick access to essential pages</p>
            <ul className="space-y-3">
              {[
                "The Journey",
                "Board of Advisors", 
                "Founding Team",
                "INDIA - S A & I Team",
                "Media Relations",
                "Higher Purpose",
                "Our Values",
                "RentPay™",
                "About Us",
                "Reviews",
                "FAQs",
                "Press Releases"
              ].map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#" className="text-gray-300 hover:text-orange-300 transition-colors text-sm">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Policies & Compliance */}
          <motion.div variants={itemVariants}>
            <h4 className="text-orange-400 font-semibold mb-6 text-sm uppercase tracking-wide">Policies & Compliance</h4>
            <p className="text-orange-300 text-sm mb-4">Key policies for security and compliance</p>
            <ul className="space-y-3">
              {[
                "Fixed Deposit",
                "Refer & Earn",
                "Privacy Policy",
                "Refund/Cancellation Policy",
                "Terms & Conditions",
                "Anti corruption & Bribery Policy",
                "Code of Business Conduct & Ethics",
                "Anti-Fraud Policy Investigation",
                "Anti-Money Laundering Policy",
                "Sanctions Compliance Statement",
                "Grievance Redressal Policy"
              ].map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#" className="text-gray-300 hover:text-orange-300 transition-colors text-sm">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Business Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-orange-400 font-semibold mb-6 text-sm uppercase tracking-wide">Business Services</h4>
            <p className="text-orange-300 text-sm mb-4">Solutions for businesses & partners</p>
            <ul className="space-y-3">
              {[
                "List Your Property",
                "Register as Agent",
                "Corporate Rental ERP",
                "Self Storage",
                "Post Your Requirement"
              ].map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#" className="text-gray-300 hover:text-orange-300 transition-colors text-sm">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Our Offices */}
          <motion.div variants={itemVariants}>
            <h4 className="text-orange-400 font-semibold mb-6 text-sm uppercase tracking-wide">Our Offices</h4>
            <p className="text-orange-300 text-sm mb-4">Global presence, local impact</p>
            
            <div className="space-y-6">
              {/* United Kingdom */}
              <div>
                <h5 className="text-orange-300 font-semibold mb-2 text-sm">United Kingdom</h5>
                <div className="text-white font-semibold text-sm mb-1">RedGirraffe Inc.</div>
                <p className="text-gray-300 text-xs leading-relaxed">
                  Harben House, Harben Parade,<br />
                  Finchley Road, London, NW3 6LH
                </p>
              </div>

              {/* Singapore */}
              <div>
                <h5 className="text-orange-300 font-semibold mb-2 text-sm">Singapore</h5>
                <div className="text-white font-semibold text-sm mb-1">RedGirraffe Holdings</div>
                <p className="text-gray-300 text-xs leading-relaxed">
                  3 Temasek Avenue, Centennial<br />
                  Tower, #17-01, Singapore 039190.
                </p>
              </div>

              {/* India */}
              <div>
                <h5 className="text-orange-300 font-semibold mb-2 text-sm">India</h5>
                <div className="text-white font-semibold text-sm mb-1">RedGirraffe.com</div>
                <div className="text-gray-300 text-xs leading-relaxed mb-2">
                  904, Galleria Towers, DLF Phase<br />
                  IV, Gurgaon, Haryana - 122002.
                </div>
                <div className="text-gray-300 text-xs leading-relaxed">
                  507, Tulsiiani Chambers, Nariman<br />
                  Point, Mumbai - 400021.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stay Connected */}
          <motion.div variants={itemVariants}>
            <h4 className="text-orange-400 font-semibold mb-6 text-sm uppercase tracking-wide">Stay Connected</h4>
            <p className="text-orange-300 text-sm mb-6">Never miss an update</p>
            
            {/* Newsletter Signup */}
            <form onSubmit={handleSubscribe} className="mb-8">
              <div className="flex gap-2">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder-gray-400 text-sm"
                  required
                />
                <Button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm font-medium"
                >
                  Subscribe
                </Button>
              </div>
            </form>

            {/* RedGirraffe Logo & Flags */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#00d959] rounded overflow-hidden">
                  <div className="w-full h-full bg-[#00d959] flex items-center justify-center text-white font-bold text-sm">R</div>
                </div>
                <span className="text-xl font-bold text-white">RedGirraffe</span>
              </div>
              
              {/* Country Flags */}
              <div className="flex gap-2 mb-4">
                <div className="w-8 h-6 rounded-sm overflow-hidden bg-gray-200 flex items-center justify-center text-xs">🇺🇸</div>
                <div className="w-8 h-6 rounded-sm overflow-hidden bg-gray-200 flex items-center justify-center text-xs">🇪🇺</div>
                <div className="w-8 h-6 rounded-sm overflow-hidden bg-gray-200 flex items-center justify-center text-xs">🇬🇧</div>
                <div className="w-8 h-6 rounded-sm overflow-hidden bg-gray-200 flex items-center justify-center text-xs">🇮🇳</div>
              </div>
            </div>

            {/* Business Info */}
            <div className="text-xs text-orange-300 mb-4">
              <div className="flex gap-2 mb-1">
                <span className="text-orange-400">Payments</span>
                <span>|</span>
                <span className="text-orange-400">B2B SaaS</span>
                <span>|</span>
                <span className="text-orange-400">Real Estate</span>
              </div>
            </div>

            <div className="text-xs text-gray-300 mb-6">
              Write to us at:<br />
              <a href="mailto:connect@redgirraffe.com" className="text-orange-300 hover:text-orange-400 transition-colors">
                connect@redgirraffe.com
              </a>
            </div>

            {/* Professional Contact Info */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <h5 className="text-white font-semibold mb-3 text-sm">Professional Services</h5>
              <div className="space-y-2 text-xs text-gray-300">
                <div>Global Payment Processing</div>
                <div>Enterprise Solutions</div>
                <div>Compliance & Security</div>
                <div>24/7 Support Available</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-white/10 pt-8 pb-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-300 text-sm">
            Copyright © 2025-2026 | RedGirraffe - All rights reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

import { Facebook, Twitter, Linkedin } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer className="bg-app-primary text-white py-12">
      <div className="container-inner">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[#00d959] rounded overflow-hidden">
                <div className="w-full h-full bg-[#00d959] flex items-center justify-center text-white font-bold">R</div>
              </div>
              <span className="text-2xl font-bold">RedGirraffe</span>
            </div>
            <p className="text-gray-300 mb-4">
              Transforming businesses with innovative solutions and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-app-secondary rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors">
                <Twitter className="text-white w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-app-secondary rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors">
                <Linkedin className="text-white w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-app-secondary rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors">
                <Facebook className="text-white w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">API</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">News</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-app-secondary pt-8 text-center">
          <p className="text-gray-300">&copy; 2024 RedGirraffe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

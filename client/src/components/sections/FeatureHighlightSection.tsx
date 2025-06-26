import { BarChart3, Users, Check } from "lucide-react";

export const FeatureHighlightSection = () => {
  return (
    <section className="section-spacing-tight bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 relative overflow-hidden">
      {/* Sophisticated Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-600/5 via-gray-500/3 to-zinc-400/5"></div>
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 right-20 w-96 h-96 bg-gradient-to-br from-slate-300 to-gray-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-gradient-to-br from-zinc-200 to-slate-200 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-gray-200 to-zinc-200 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="text-center mb-12 animate-on-scroll">
        <h2 className="text-h2-mobile sm:text-3xl lg:text-5xl font-bold text-textblack mb-6">
          Powered by{" "}
          <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
            smart infrastructure
          </span>
        </h2>
        <p className="text-lg text-neutral-50 max-w-2xl mx-auto">
          Everything you need to streamline operations, boost productivity, and scale your business effectively.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="animate-on-scroll">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-[#00d959] rounded-lg flex items-center justify-center mb-6">
              <BarChart3 className="text-white w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold text-textblack mb-4">Real-Time Analytics</h3>
            <p className="text-neutral-50 mb-6">Get instant insights into your business performance with our advanced analytics dashboard.</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-textblack">
                <Check className="text-[#00d959] w-4 h-4" />
                Custom dashboards and reports
              </li>
              <li className="flex items-center gap-2 text-textblack">
                <Check className="text-[#00d959] w-4 h-4" />
                Data visualization tools
              </li>
              <li className="flex items-center gap-2 text-textblack">
                <Check className="text-[#00d959] w-4 h-4" />
                Automated alerts and notifications
              </li>
            </ul>
          </div>
        </div>
        <div className="animate-on-scroll">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
            alt="Analytics dashboard with charts and graphs" 
            className="rounded-xl shadow-lg w-full h-auto" 
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 animate-on-scroll">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
            alt="Team collaboration workspace with project management tools" 
            className="rounded-xl shadow-lg w-full h-auto" 
          />
        </div>
        <div className="order-1 lg:order-2 animate-on-scroll">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-app-secondary rounded-lg flex items-center justify-center mb-6">
              <Users className="text-white w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold text-textblack mb-4">Team Collaboration</h3>
            <p className="text-neutral-50 mb-6">Enhance teamwork with integrated communication and project management tools.</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-textblack">
                <Check className="text-[#00d959] w-4 h-4" />
                Real-time messaging and file sharing
              </li>
              <li className="flex items-center gap-2 text-textblack">
                <Check className="text-[#00d959] w-4 h-4" />
                Project tracking and task management
              </li>
              <li className="flex items-center gap-2 text-textblack">
                <Check className="text-[#00d959] w-4 h-4" />
                Video conferencing integration
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

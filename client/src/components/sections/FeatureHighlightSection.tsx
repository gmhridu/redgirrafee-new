import { BarChart3, Users, Check } from "lucide-react";

export const FeatureHighlightSection = () => {
  return (
    <section className="section-spacing-tight bg-gradient-to-br from-slate-50/60 via-gray-50/40 to-zinc-50/60 relative overflow-hidden">
      {/* World-class full-width container aligned with hero section */}
      <div className="max-w-none px-2 sm:px-4 lg:px-6 xl:px-8 w-full">
        <div className="w-full max-w-[95%] xl:max-w-[90%] mx-auto relative">
          <div className="text-center mb-8 sm:mb-12 animate-on-scroll">
            <h2 className="text-responsive-xl font-bold text-textblack mb-4 sm:mb-6">
            Powered by{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
              smart infrastructure
            </span>
          </h2>
          <p className="text-responsive-base text-neutral-50 max-w-2xl mx-auto">
            Everything you need to streamline operations, boost productivity, and scale your business effectively.
          </p>
        </div>
        
        <div className="grid-responsive-1-2 gap-responsive items-center mb-12 sm:mb-16">
          <div className="animate-on-scroll">
            <div className="bg-white padding-responsive rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-[#00d959] rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="text-white w-6 h-6" />
              </div>
              <h3 className="text-responsive-lg font-semibold text-textblack mb-4">Real-Time Analytics</h3>
              <p className="text-responsive-sm text-neutral-50 mb-6">Get instant insights into your business performance with our advanced analytics dashboard.</p>
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
        
        <div className="grid-responsive-1-2 gap-responsive items-center">
          <div className="animate-on-scroll">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
              alt="Team collaboration and communication tools" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
          </div>
          <div className="animate-on-scroll">
            <div className="bg-white padding-responsive rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-[#00d959] rounded-lg flex items-center justify-center mb-6">
                <Users className="text-white w-6 h-6" />
              </div>
              <h3 className="text-responsive-lg font-semibold text-textblack mb-4">Team Collaboration</h3>
              <p className="text-responsive-sm text-neutral-50 mb-6">Enhance team productivity with powerful collaboration tools designed for modern workflows.</p>
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
        </div>
      </div>
    </section>
  );
};
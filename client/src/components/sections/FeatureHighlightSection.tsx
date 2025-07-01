import { BarChart3, Check, Users } from 'lucide-react';

export const FeatureHighlightSection = () => {
  return (
    <section className="relative py-12 lg:py-20 bg-gradient-to-br from-slate-50/60 via-gray-50/40 to-zinc-50/60 overflow-hidden">
      {/* Synchronized with Hero section margins for perfect consistency */}
      <div className="max-w-none px-1 sm:px-2 lg:px-3 xl:px-4 w-full">
        <div className="w-full max-w-[98%] xl:max-w-[96%] mx-auto relative">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 tracking-tight">
              Powered by{' '}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
                smart infrastructure
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Everything you need to streamline operations, boost productivity, and scale your
              business effectively.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center mb-12 sm:mb-16">
            <div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group cursor-pointer border border-slate-100 hover:border-blue-200">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <BarChart3 className="text-white w-7 h-7" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  Real-Time Analytics
                </h3>
                <p className="text-base md:text-lg text-slate-600 mb-6 leading-relaxed">
                  Get instant insights into your business performance with our advanced analytics
                  dashboard.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-700 group-hover:text-slate-900 transition-colors duration-300">
                    <div className="w-5 h-5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="text-white w-3 h-3" />
                    </div>
                    Custom dashboards and reports
                  </li>
                  <li className="flex items-center gap-3 text-slate-700 group-hover:text-slate-900 transition-colors duration-300">
                    <div className="w-5 h-5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="text-white w-3 h-3" />
                    </div>
                    Data visualization tools
                  </li>
                  <li className="flex items-center gap-3 text-slate-700 group-hover:text-slate-900 transition-colors duration-300">
                    <div className="w-5 h-5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="text-white w-3 h-3" />
                    </div>
                    Automated alerts and notifications
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
                alt="Analytics dashboard with charts and graphs"
                className="rounded-2xl shadow-lg hover:shadow-2xl w-full h-auto transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
                alt="Team collaboration and communication tools"
                className="rounded-2xl shadow-lg hover:shadow-2xl w-full h-auto transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
              />
            </div>
            <div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group cursor-pointer border border-slate-100 hover:border-purple-200">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Users className="text-white w-7 h-7" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  Team Collaboration
                </h3>
                <p className="text-base md:text-lg text-slate-600 mb-6 leading-relaxed">
                  Enhance team productivity with powerful collaboration tools designed for modern
                  workflows.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-700 group-hover:text-slate-900 transition-colors duration-300">
                    <div className="w-5 h-5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="text-white w-3 h-3" />
                    </div>
                    Real-time messaging and file sharing
                  </li>
                  <li className="flex items-center gap-3 text-slate-700 group-hover:text-slate-900 transition-colors duration-300">
                    <div className="w-5 h-5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="text-white w-3 h-3" />
                    </div>
                    Project tracking and task management
                  </li>
                  <li className="flex items-center gap-3 text-slate-700 group-hover:text-slate-900 transition-colors duration-300">
                    <div className="w-5 h-5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="text-white w-3 h-3" />
                    </div>
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

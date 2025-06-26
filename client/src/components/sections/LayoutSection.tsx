export const LayoutSection = () => {
  return (
    <section className="section-fullscreen-bg-alt">
      <div className="text-center mb-12">
        <p className="text-neutral-50 text-sm uppercase tracking-wider mb-4">Trusted by Industry Leaders</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="h-8 bg-gray-300 rounded"></div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="h-8 bg-gray-300 rounded"></div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="h-8 bg-gray-300 rounded"></div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="h-8 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="text-center animate-on-scroll">
          <div className="text-4xl font-bold text-app-primary mb-2">10,000+</div>
          <p className="text-neutral-50">Active Users</p>
        </div>
        <div className="text-center animate-on-scroll">
          <div className="text-4xl font-bold text-app-primary mb-2">500+</div>
          <p className="text-neutral-50">Companies</p>
        </div>
        <div className="text-center animate-on-scroll">
          <div className="text-4xl font-bold text-app-primary mb-2">99%</div>
          <p className="text-neutral-50">Satisfaction Rate</p>
        </div>
      </div>
    </section>
  );
};

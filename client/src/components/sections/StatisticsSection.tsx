import { useEffect, useRef, useState } from "react";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}

const AnimatedCounter = ({ end, duration = 2000, suffix = "", decimals = 0 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Smooth easing function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = end * easeOutQuart;
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  const displayValue = decimals > 0 ? count.toFixed(decimals) : Math.floor(count);

  return (
    <span ref={counterRef} className="tabular-nums">
      {displayValue}{suffix}
    </span>
  );
};

export const StatisticsSection = () => {
  const stats = [
    {
      number: 97,
      suffix: "+",
      label: "Countries Covered",
      description: "Global payments made simple"
    },
    {
      number: 99.9,
      suffix: "%",
      decimals: 1,
      label: "Uptime SLA",
      description: "Ensures uninterrupted payments"
    },
    {
      number: 150,
      suffix: "+",
      label: "Currencies Supported",
      description: "Pay in any currency, anywhere"
    }
  ];

  return (
    <section className="section-spacing bg-gradient-to-br from-green-50/30 via-emerald-50/20 to-lime-50/30 relative overflow-hidden">
      {/* Minimal Background Pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute top-20 right-20 w-96 h-96 bg-green-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-emerald-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container-responsive relative">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-responsive-xl font-bold text-slate-800 mb-4 sm:mb-6 tracking-tight">
            Scale globally with{" "}
            <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
              unmatched reliability
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Serving 97+ countries with 99.9% uptime and support for 150+ currencies—RedGiraffe processes 
            $20B+ annually with top-tier security.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid-responsive-1-2-3 gap-responsive max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 text-center group"
            >
              <div className="mb-6">
                <div className="text-6xl lg:text-7xl font-bold text-slate-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
                  <AnimatedCounter
                    end={stat.number}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                    duration={2500}
                  />
                </div>
                <div className="text-lg font-semibold text-green-600 mb-3">
                  {stat.label}
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};
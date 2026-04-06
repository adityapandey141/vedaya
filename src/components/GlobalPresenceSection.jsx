import { useState, useEffect, useRef } from "react";
import { Leaf, TrendingUp, Shield, Lightbulb, Recycle } from "lucide-react";

const whyChooseUs = [
  {
    icon: Leaf,
    title: "Sustainable Development",
    description: "Focus on eco-friendly and responsible growth",
  },
  {
    icon: TrendingUp,
    title: "Diversified Expertise",
    description: "Business expertise across multiple sectors",
  },
  {
    icon: Lightbulb,
    title: "Future-Oriented",
    description: "Innovation-driven and forward-thinking approach",
  },
  {
    icon: Shield,
    title: "Long-term Value",
    description: "Commitment to creating lasting value",
  },
  {
    icon: Recycle,
    title: "Responsible Growth",
    description: "Balancing profitability with environmental care",
  },
];

const Counter = ({ target, suffix, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, inView]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const GlobalPresenceSection = () => {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-dark-navy relative overflow-hidden"
    >
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm mb-2 block">
            Why Partner With Us
          </span>
          <h2 className="font-rubik text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Why Choose Vedaya Renewables
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              className="text-center group bg-darker-navy/50 p-6 rounded-xl hover:bg-primary/20 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-colors">
                <item.icon
                  className="text-accent group-hover:text-white transition-colors"
                  size={28}
                />
              </div>
              <h3 className="font-rubik font-bold text-lg text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceSection;

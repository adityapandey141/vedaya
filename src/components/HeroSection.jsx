import { useState, useEffect } from "react";
import {
  Building2,
  Leaf,
  Sun,
  ChevronLeft,
  ChevronRight,
  Target,
  Eye,
} from "lucide-react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1920&q=80",
    subtitle: "Welcome to Vedaya Renewables",
    title: ["Building a Sustainable", "Future Together"],
    description:
      "Vedaya Renewables LLP is a multidisciplinary enterprise focused on creating long-term value through sustainable development across Real Estate, Agriculture & Renewable Energy.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80",
    subtitle: "Sustainable Development",
    title: ["Real Estate, Agriculture & ", "Renewable Energy"],
    description:
      "By combining traditional industries with environmentally responsible practices, we aim to contribute to economic growth while protecting ecological balance.",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => setCurrentSlide(index);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  const features = [
    { icon: Building2, label: "Real Estate" },
    { icon: Leaf, label: "Agriculture" },
    { icon: Sun, label: "Renewable Energy" },
  ];

  return (
    <section
      id="home"
      className="relative h-screen min-h-[800px] overflow-hidden"
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 dark-overlay" />

          {/* Content */}
          <div className="container-custom relative h-full flex items-center z-20">
            <div className="grid md:grid-cols-2 gap-2 items-center w-full pt-20">
              {/* Left Content */}
              <div
                className={`text-white transition-all duration-700 delay-300 ${index === currentSlide ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
              >
                <span className="text-accent font-semibold text-lg mb-4 block">
                  {slide.subtitle}
                </span>
                <h1 className="font-rubik text-4xl md:text-5xl lg:text-6xl  font-bold leading-tight mb-6">
                  {slide.title.map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </h1>
                <p className="text-gray-300 text-lg mb-8 max-w-lg">
                  {slide.description}
                </p>

                {/* Feature Icons */}
                <div className="flex gap-6 mb-8">
                  {features.map((feature, i) => (
                    <div key={i} className="flex flex-col items-center gap-2">
                      <div className="w-16 h-16 rounded-full border-2 border-accent flex items-center justify-center hover:bg-accent transition-colors group">
                        <feature.icon
                          className="text-accent group-hover:text-white transition-colors"
                          size={28}
                        />
                      </div>
                      <span className="text-sm text-gray-300">
                        {feature.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a href="#services" className="btn-accent">
                    Explore Our Services
                    <ChevronRight size={20} />
                  </a>
                  <a href="#contact" className="btn-outline">
                    Contact Us
                  </a>
                </div>
              </div>

              {/* Right - Info Card */}
              <div
                className={`hidden lg:block transition-all duration-700 delay-500 ${index === currentSlide ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-md ml-auto border border-white/20">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <Eye className="text-white" size={28} />
                      </div>
                      <div>
                        <h3 className="font-rubik font-bold text-xl text-white mb-2">
                          Our Vision
                        </h3>
                        <p className="text-gray-300 text-sm">
                          To become a trusted and sustainable business group
                          contributing to economic growth while promoting
                          environmental responsibility.
                        </p>
                      </div>
                    </div>
                    <div className="border-t border-white/20"></div>
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <Target className="text-white" size={28} />
                      </div>
                      <div>
                        <h3 className="font-rubik font-bold text-xl text-white mb-2">
                          Our Mission
                        </h3>
                        <p className="text-gray-300 text-sm">
                          To develop and manage projects across real estate,
                          agriculture, and renewable energy using modern,
                          efficient, and sustainable practices.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/20 hover:bg-primary flex items-center justify-center text-white transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/20 hover:bg-primary flex items-center justify-center text-white transition-colors"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-primary w-8" : "bg-white/50 hover:bg-white"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

import { Check, ArrowRight } from "lucide-react";

const features = [
  "Sustainable and eco-friendly development",
  "Efficient resource management",
  "Innovation-driven growth strategies",
  "Compliance with regulatory frameworks",
  "Long-term business value creation",
];

const DiscoverSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="section-title">Our Approach</span>
            <h2 className="section-heading mb-6">
              Responsible Development for a Better Tomorrow
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Vedaya Renewables LLP operates at the intersection of real estate,
              agriculture, and renewable energy. Our approach focuses on
              responsible growth, modern innovation, and sustainable business
              ecosystems that create value for both people and the environment.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Check className="text-white" size={14} />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn-primary">
              Learn More
              <ArrowRight size={20} />
            </a>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=80"
              alt="Sustainable business"
              className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 md:bottom-8 md:left-8 bg-accent text-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="text-4xl font-rubik font-bold">3</div>
                <div className="text-sm">
                  Core Business
                  <br />
                  Sectors
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;

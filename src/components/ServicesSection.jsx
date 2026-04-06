import { Building2, Leaf, Sun, Wind, Fuel, Home } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Real Estate Sector",
    description:
      "Sustainable development and management of residential, commercial, and mixed-use projects with efficient land utilization.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80",
  },
  {
    icon: Leaf,
    title: "Agriculture Domain",
    description:
      "Modern farming, agri-investments, and innovative agricultural practices focused on long-term productivity and rural development.",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&q=80",
  },
  {
    icon: Sun,
    title: "Solar Energy Projects",
    description:
      "Development and implementation of solar energy solutions that support environmental sustainability and reduce carbon footprints.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&q=80",
  },
  {
    icon: Wind,
    title: "Wind Energy Initiatives",
    description:
      "Harnessing wind power through cutting-edge turbine solutions for sustainable and clean energy generation.",
    image:
      "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=400&q=80",
  },
  {
    icon: Fuel,
    title: "Bio-fuel Solutions",
    description:
      "Clean energy project management and sustainable bio-fuel development for greener energy alternatives.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&q=80",
  },
  {
    icon: Home,
    title: "Property Management",
    description:
      "Property acquisition and management services with sustainable construction practices and long-term value creation.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="section-title">Our Services</span>
          <h2 className="section-heading">Our Core Sectors</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Vedaya Renewables LLP provides services across three major sectors,
            combining innovation, sustainability, and long-term growth
            strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                  <service.icon className="text-white" size={28} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-rubik font-bold text-xl text-dark-navy mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

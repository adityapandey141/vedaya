import {
  Building2,
  Leaf,
  Sun,
  Wind,
  Droplets,
  Home,
  ArrowRight,
  Check,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ServicesPage = () => {
  const mainServices = [
    {
      icon: Building2,
      title: "Real Estate Sector",
      description:
        "We specialize in identifying, acquiring, and developing land for residential, commercial, and industrial use. Our services include land aggregation, legal due diligence, township planning, and strategic partnerships with developers.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      features: [
        "Land Acquisition & Development",
        "Property Management",
        "Township Planning",
        "Legal Due Diligence",
        "Strategic Partnerships",
      ],
    },
    {
      icon: Leaf,
      title: "Agriculture Domain",
      description:
        "Vedaya is committed to promoting sustainable agriculture through modern farming practices. We manage farmland, support crop cultivation, and explore agri-tech solutions that boost productivity and environmental health.",
      image:
        "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80",
      features: [
        "Modern Farming Practices",
        "Crop Management",
        "Agri-tech Solutions",
        "Sustainable Methods",
        "Farmland Management",
      ],
    },
    {
      icon: Sun,
      title: "Renewable Energy",
      description:
        "As part of our commitment to a greener future, we invest in and develop renewable energy projects, including solar farms, wind energy, and bio-fuel initiatives. We work with partners to bring clean energy solutions to industries and communities.",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
      features: [
        "Solar Energy Projects",
        "Wind Power Solutions",
        "Bio-fuel Initiatives",
        "Clean Energy Consulting",
        "Sustainable Infrastructure",
      ],
    },
  ];

  const additionalServices = [
    {
      icon: Wind,
      title: "Wind Energy",
      description:
        "Harnessing wind power for sustainable electricity generation through modern turbine installations.",
    },
    {
      icon: Droplets,
      title: "Bio-fuel Solutions",
      description:
        "Developing eco-friendly fuel alternatives from organic sources for reduced carbon footprint.",
    },
    {
      icon: Home,
      title: "Property Management",
      description:
        "Comprehensive property oversight services ensuring optimal returns on real estate investments.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80)",
          }}
        >
          <div className="absolute inset-0 bg-dark-navy/70"></div>
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <h1 className="font-rubik text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
            Comprehensive solutions across real estate, agriculture, and
            renewable energy sectors.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-sm">
            <a href="/" className="hover:text-primary transition-colors">
              Home
            </a>
            <span>/</span>
            <span className="text-primary">Services</span>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-title">What We Offer</span>
            <h2 className="section-heading">Our Core Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Delivering excellence across three key sectors with sustainable,
              innovative solutions that create lasting value.
            </p>
          </div>

          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                    />
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                      <service.icon className="text-white" size={40} />
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h3 className="font-rubik text-3xl font-bold text-dark-navy mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                          <Check className="text-white" size={14} />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="/contact" className="btn-primary inline-flex">
                    Get Started
                    <ArrowRight size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-title">More Solutions</span>
            <h2 className="section-heading">Additional Services</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all group hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                  <service.icon
                    className="text-accent group-hover:text-white transition-colors"
                    size={32}
                  />
                </div>
                <h3 className="font-rubik text-xl font-bold text-dark-navy mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-title">How We Work</span>
            <h2 className="section-heading">Our Process</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "Understanding your needs and goals",
              },
              {
                step: "02",
                title: "Planning",
                desc: "Developing tailored strategies",
              },
              {
                step: "03",
                title: "Execution",
                desc: "Implementing with precision",
              },
              {
                step: "04",
                title: "Delivery",
                desc: "Ensuring quality outcomes",
              },
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 font-rubik text-2xl font-bold">
                  {item.step}
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-primary/30"></div>
                )}
                <h3 className="font-rubik text-xl font-bold text-dark-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-rubik text-3xl md:text-4xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your specific requirements. Our team is ready
            to help you find the perfect solution.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-dark transition-colors"
          >
            Contact Us
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;

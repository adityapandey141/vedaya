import {
  Check,
  Eye,
  Target,
  Compass,
  Building2,
  Leaf,
  Sun,
  Users,
  Award,
  Shield,
  TrendingUp,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutPage = () => {
  const values = [
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To be a trusted name in sustainable development by integrating modern practices in real estate, agriculture, and renewable energy — creating value for communities and the environment alike.",
    },
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To deliver responsible, high-quality solutions that support growth, sustainability, and innovation across our core business sectors while building lasting relationships with our stakeholders.",
    },
    {
      icon: Compass,
      title: "Our Approach",
      description:
        "We believe in a hands-on, transparent approach. From land acquisition to project execution, we work closely with partners, regulatory bodies, and local communities to ensure every initiative is efficient, compliant, and impactful.",
    },
  ];

  const sectors = [
    {
      icon: Building2,
      title: "Real Estate Sector",
      description:
        "Comprehensive services including land acquisition, development, and property management.",
    },
    {
      icon: Leaf,
      title: "Agriculture Domain",
      description:
        "Modern farming practices, crop management, and sustainable agricultural solutions.",
    },
    {
      icon: Sun,
      title: "Renewable Energy",
      description:
        "Solar, wind, and bio-fuel solutions for a cleaner, sustainable future.",
    },
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: "Experienced Team",
      description:
        "Our professionals bring decades of combined expertise across all sectors.",
    },
    {
      icon: Award,
      title: "Quality Focused",
      description:
        "We maintain the highest standards in every project we undertake.",
    },
    {
      icon: Shield,
      title: "Trusted Partner",
      description:
        "Building long-term relationships based on trust and transparency.",
    },
    {
      icon: TrendingUp,
      title: "Sustainable Growth",
      description:
        "Creating value that benefits both business and the environment.",
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
              "url(https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1920&q=80)",
          }}
        >
          <div className="absolute inset-0 bg-dark-navy/70"></div>
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <h1 className="font-rubik text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About Us
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
            Vedaya Renewables LLP is a multidisciplinary enterprise focused on
            creating long-term value through sustainable development.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-sm">
            <a href="/" className="hover:text-primary transition-colors">
              Home
            </a>
            <span>/</span>
            <span className="text-primary">About Us</span>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="Vedaya Team"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-xl shadow-lg hidden md:block">
                <div className="text-4xl font-rubik font-bold">3</div>
                <div className="text-sm">
                  Core Business
                  <br />
                  Sectors
                </div>
              </div>
            </div>
            <div>
              <span className="section-title">Who We Are</span>
              <h2 className="section-heading mb-6">
                Pioneers in Sustainable Development
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Vedaya Renewables LLP is a forward-thinking enterprise committed
                to driving progress in three transformative sectors: Real
                Estate, Agriculture, and Renewable Energy. We bring together
                expertise, innovation, and a deep sense of responsibility to
                create meaningful impact.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our work spans from strategic land development and modern
                agricultural practices to sustainable energy solutions. We
                operate with a long-term vision, focusing on projects that
                benefit communities, investors, and the environment.
              </p>
              <ul className="space-y-3">
                {[
                  "Sustainable and eco-friendly development",
                  "Efficient resource management",
                  "Innovation-driven growth strategies",
                  "Long-term business value creation",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <Check className="text-white" size={14} />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Approach */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-title">Our Foundation</span>
            <h2 className="section-heading">Vision, Mission & Approach</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                  <value.icon
                    className="text-accent group-hover:text-white transition-colors"
                    size={32}
                  />
                </div>
                <h3 className="font-rubik text-xl font-bold text-dark-navy mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Sectors */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-title">What We Do</span>
            <h2 className="section-heading">Our Core Sectors</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:bg-primary group transition-colors cursor-pointer"
              >
                <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                  <sector.icon
                    className="text-accent group-hover:text-white transition-colors"
                    size={32}
                  />
                </div>
                <h3 className="font-rubik text-xl font-bold text-dark-navy mb-4 group-hover:text-white transition-colors">
                  {sector.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-white/90 transition-colors">
                  {sector.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-dark-navy">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">
              Why Vedaya
            </span>
            <h2 className="font-rubik text-3xl md:text-4xl font-bold text-white mt-2">
              Why Choose Us
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="text-accent" size={36} />
                </div>
                <h3 className="font-rubik text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-rubik text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you're looking for real estate opportunities, agricultural
            partnerships, or renewable energy solutions, we're here to help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-dark transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;

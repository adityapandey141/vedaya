import { useState } from "react";
import { MapPin, Mail, Clock, Send, Phone, MessageSquare } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["India"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@vedayarenewables.com"],
      link: "mailto:info@vedayarenewables.com",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Monday - Friday", "9:00 AM - 6:00 PM"],
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
            Contact Us
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
            Get in touch with us for partnerships, inquiries, or any questions
            you may have.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-sm">
            <a href="/" className="hover:text-primary transition-colors">
              Home
            </a>
            <span>/</span>
            <span className="text-primary">Contact</span>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 -mt-32 relative z-20">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-xl text-center hover:shadow-2xl transition-shadow"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <info.icon className="text-accent" size={28} />
                </div>
                <h3 className="font-rubik text-xl font-bold text-dark-navy mb-4">
                  {info.title}
                </h3>
                {info.details.map((detail, idx) =>
                  info.link ? (
                    <a
                      key={idx}
                      href={info.link}
                      className="block text-gray-600 hover:text-primary transition-colors"
                    >
                      {detail}
                    </a>
                  ) : (
                    <p key={idx} className="text-gray-600">
                      {detail}
                    </p>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="text-accent" size={28} />
                <h2 className="font-rubik text-2xl font-bold text-dark-navy">
                  Send Us a Message
                </h2>
              </div>
              <p className="text-gray-600 mb-8">
                Whether you are looking for partnerships, project inquiries, or
                business collaborations, our team is here to assist you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="+91 12345 67890"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white"
                    >
                      <option value="">Select a Subject</option>
                      <option value="real-estate">Real Estate Inquiry</option>
                      <option value="agriculture">
                        Agriculture Partnership
                      </option>
                      <option value="renewable-energy">
                        Renewable Energy Project
                      </option>
                      <option value="investment">Investment Opportunity</option>
                      <option value="partnership">Business Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full md:w-auto">
                  Send Message
                  <Send size={20} />
                </button>
              </form>
            </div>

            {/* Info Side */}
            <div className="flex flex-col justify-center">
              <span className="section-title">Get In Touch</span>
              <h2 className="section-heading mb-6">
                Let's Start a Conversation
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                At Vedaya Renewables LLP, we believe in building strong
                relationships with our partners and stakeholders. Whether you
                have a project in mind, want to explore investment
                opportunities, or simply have questions about our services, we'd
                love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="font-rubik font-semibold text-dark-navy mb-1">
                      Email
                    </h4>
                    <a
                      href="mailto:info@vedayarenewables.com"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      info@vedayarenewables.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="font-rubik font-semibold text-dark-navy mb-1">
                      Location
                    </h4>
                    <p className="text-gray-600">India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="font-rubik font-semibold text-dark-navy mb-1">
                      Business Hours
                    </h4>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-primary/10 rounded-xl">
                <h4 className="font-rubik font-bold text-dark-navy mb-2">
                  Quick Response
                </h4>
                <p className="text-gray-600 text-sm">
                  We typically respond to all inquiries within 24-48 business
                  hours. For urgent matters, please indicate so in your message.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;

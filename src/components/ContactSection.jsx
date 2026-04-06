import { useState } from "react";
import { Send, Calendar } from "lucide-react";

const articles = [
  {
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&q=80",
    date: "March 15, 2024",
    title: "Sustainable Real Estate Development Trends",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=200&q=80",
    date: "March 10, 2024",
    title: "Modern Agriculture & Sustainable Farming",
  },
  {
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=200&q=80",
    date: "March 5, 2024",
    title: "The Future of Renewable Energy in India",
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We will contact you soon.");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <span className="section-title">Get In Touch</span>
            <h2 className="section-heading mb-4">Get in Touch With Us</h2>
            <p className="text-gray-600 mb-8">
              Whether you are looking for partnerships, project inquiries, or
              business collaborations, our team is here to assist you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors bg-white"
                >
                  <option value="">Select Subject</option>
                  <option value="real-estate">Real Estate Sector</option>
                  <option value="agriculture">Agriculture Domain</option>
                  <option value="renewable-energy">Renewable Energy</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="investment">Investment Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
              ></textarea>

              <button type="submit" className="btn-primary">
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>

          {/* Recent Articles Sidebar */}
          <div id="blog">
            <span className="section-title">Latest News</span>
            <h3 className="font-rubik text-2xl font-bold text-dark-navy mb-6">
              Recent Articles
            </h3>

            <div className="space-y-6">
              {articles.map((article, index) => (
                <a key={index} href="#" className="flex gap-4 group">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-24 h-20 object-cover rounded-lg flex-shrink-0"
                  />
                  <div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                      <Calendar size={14} />
                      {article.date}
                    </div>
                    <h4 className="font-rubik font-semibold text-dark-navy group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

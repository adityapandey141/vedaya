import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Real Estate Developer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5,
    text: "Vedaya Renewables has been an excellent partner for our sustainable real estate projects. Their commitment to eco-friendly development aligns perfectly with our vision.",
  },
  {
    name: "Priya Sharma",
    role: "Agricultural Investor",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    rating: 5,
    text: "Working with Vedaya on agricultural investments has been a great experience. Their modern farming approach and sustainable practices deliver real results.",
  },
  {
    name: "Amit Patel",
    role: "Business Partner",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    rating: 5,
    text: "As a business collaborator, I appreciate Vedaya's focus on long-term value creation. Their diversified expertise across sectors makes them a reliable partner.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="section-title">Testimonials</span>
          <h2 className="section-heading">What Our Partners Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow relative"
            >
              <Quote
                className="absolute top-6 right-6 text-primary/20"
                size={48}
              />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-400 fill-yellow-400"
                    size={20}
                  />
                ))}
              </div>

              <p className="text-gray-600 mb-6 relative z-10">
                {testimonial.text}
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-rubik font-bold text-dark-navy">
                    {testimonial.name}
                  </h4>
                  <span className="text-primary text-sm">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

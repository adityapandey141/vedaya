import { Target, Eye, Compass } from "lucide-react";

const values = [
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become a trusted and sustainable business group contributing to economic growth while promoting environmental responsibility.",
  },
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To develop and manage projects across real estate, agriculture, and renewable energy using modern, efficient, and sustainable practices.",
  },
  {
    icon: Compass,
    title: "Our Approach",
    description:
      "Sustainable and eco-friendly development with efficient resource management, innovation-driven growth, and compliance with regulatory frameworks.",
  },
];

const ValueSection = () => {
  return (
    <section className="py-20 bg-dark-navy">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-darker-navy p-8 rounded-xl hover:bg-primary/20 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <value.icon
                  className="text-primary group-hover:text-white transition-colors"
                  size={32}
                />
              </div>
              <h3 className="font-rubik font-bold text-2xl text-white mb-4">
                {value.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;

import { ArrowRight } from "lucide-react";

const projects = [
  {
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    category: "Real Estate",
    title: "Commercial Development",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&q=80",
    category: "Agriculture",
    title: "Sustainable Farming",
  },
  {
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
    category: "Renewable Energy",
    title: "Solar Energy Project",
  },
  {
    image:
      "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=600&q=80",
    category: "Wind Energy",
    title: "Wind Power Initiative",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="section-title">Our Work</span>
          <h2 className="section-heading">Our Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/90 via-dark-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-primary text-sm font-semibold">
                  {project.category}
                </span>
                <h3 className="font-rubik font-bold text-xl text-white mt-1">
                  {project.title}
                </h3>
              </div>

              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="text-white" size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

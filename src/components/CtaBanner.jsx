import { ArrowRight } from "lucide-react";

const CtaBanner = () => {
  return (
    <section className="bg-primary py-16">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
        <h2 className="font-rubik text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center md:text-left">
          Partner With Us for a Greener Future
        </h2>
        <a
          href="#contact"
          className="bg-accent text-white hover:bg-accent-dark font-semibold py-4 px-8 rounded transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
        >
          Get In Touch
          <ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
};

export default CtaBanner;

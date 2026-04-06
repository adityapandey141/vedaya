import { Leaf, TrendingUp } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=80"
              alt="Sustainable development"
              className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
            />
            {/* Stats Box */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:right-8 bg-accent text-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-rubik font-bold">3</div>
              <div className="text-sm">
                Core Business
                <br />
                Sectors
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:pl-8">
            <span className="section-title">About Us</span>
            <h2 className="section-heading mb-6">
              About Vedaya Renewables LLP
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Vedaya Renewables LLP is a forward-thinking enterprise engaged in
              the sectors of real estate, agriculture, and renewable energy. Our
              objective is to build sustainable business models that balance
              profitability with environmental responsibility.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We believe that the future of business lies in responsible
              development. By integrating innovative practices with traditional
              sectors, we aim to contribute meaningfully to both economic
              progress and ecological sustainability.
            </p>

            {/* Features */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Leaf className="text-primary" size={32} />
                </div>
                <div>
                  <h3 className="font-rubik font-bold text-xl text-dark-navy mb-2">
                    Sustainable Development
                  </h3>
                  <p className="text-gray-600">
                    Eco-friendly development practices with efficient resource
                    management and innovation-driven growth.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="text-primary" size={32} />
                </div>
                <div>
                  <h3 className="font-rubik font-bold text-xl text-dark-navy mb-2">
                    Long-term Value Creation
                  </h3>
                  <p className="text-gray-600">
                    Building business ecosystems that create lasting value for
                    people and the environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

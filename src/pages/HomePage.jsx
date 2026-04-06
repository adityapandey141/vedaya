import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ValueSection from '../components/ValueSection';
import CtaBanner from '../components/CtaBanner';
import ServicesSection from '../components/ServicesSection';
import GlobalPresenceSection from '../components/GlobalPresenceSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ProjectsSection from '../components/ProjectsSection';
import DiscoverSection from '../components/DiscoverSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ValueSection />
      <CtaBanner />
      <ServicesSection />
      <GlobalPresenceSection />
      <TestimonialsSection />
      <ProjectsSection />
      <DiscoverSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;

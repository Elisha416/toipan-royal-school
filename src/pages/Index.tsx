
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AcademicsSection from "@/components/AcademicsSection";
import CampusSection from "@/components/CampusSection";
import AdmissionsSection from "@/components/AdmissionsSection";
import NewsEventsSection from "@/components/NewsEventsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AnimatedSection>
        <AboutSection />
      </AnimatedSection>
      <AnimatedSection>
        <AcademicsSection />
      </AnimatedSection>
      <AnimatedSection>
        <CampusSection />
      </AnimatedSection>
      <AnimatedSection>
        <AdmissionsSection />
      </AnimatedSection>
      <AnimatedSection>
        <NewsEventsSection />
      </AnimatedSection>
      <AnimatedSection>
        <ContactSection />
      </AnimatedSection>
      <Footer />
    </div>
  );
};

export default Index;

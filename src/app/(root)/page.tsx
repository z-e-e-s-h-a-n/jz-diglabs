import ApproachSection from "@/components/ApproachSection";
import CaseStudySection from "@/components/CaseStudySection";
import ContactSection from "@/components/ContactSection";
import FaqSection from "@/components/FaqSection";
import HeroSection from "@/components/HeroSection";
import IndustrySection from "@/components/IndustrySection";
import ServiceDetails from "@/components/ServiceDetails";
import ServiceSection from "@/components/ServiceSection";
import TeamSection from "@/components/TeamSection";
import TechStackSection from "@/components/TechStackSection";
import TestimonialSection from "@/components/TestimonialSection";
import WhyChooseUsSection from "@/components/WhyChooseUs";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <IndustrySection />
      <WhyChooseUsSection />
      <CaseStudySection />
      <TeamSection />
      <TechStackSection />
      <ApproachSection />
      <ServiceDetails />
      <FaqSection length={5} />
      <TestimonialSection />
      <ContactSection />
    </>
  );
};

export default Home;

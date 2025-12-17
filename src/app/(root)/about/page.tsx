import ApproachSection from "@/components/ApproachSection";
import ContactSection from "@/components/ContactSection";
import PageHeader from "@/components/PageHeader";
import ServiceDetails from "@/components/ServiceDetails";
import TeamSection from "@/components/TeamSection";
import VisionSection from "@/components/VisionSection";
import WhyChooseUsSection from "@/components/WhyChooseUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | JZ Digital Labs",
  description:
    "Learn about JZ Digital Labs — our mission, team, values, and passion for building digital products that drive business impact and long-term growth.",
};

const AboutPage = () => {
  return (
    <>
      <PageHeader title="About Us" />
      <WhyChooseUsSection />
      <ApproachSection />
      <ServiceDetails />
      <VisionSection />
      <TeamSection />
      <ContactSection />
    </>
  );
};

export default AboutPage;

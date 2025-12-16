import ApproachSection from "@/components/ApproachSection";
import ContactSection from "@/components/ContactSection";
import PageHeader from "@/components/PageHeader";
import ServiceDetails from "@/components/ServiceDetails";
import TeamSection from "@/components/TeamSection";
import VisionSection from "@/components/VisionSection";
import WhyChooseUsSection from "@/components/WhyChooseUs";
import React from "react";

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

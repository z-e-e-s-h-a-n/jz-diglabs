import ApproachSection from "@/components/ApproachSection";
import CaseStudySection from "@/components/CaseStudySection";
import ContactSection from "@/components/ContactSection";
import IndustrySection from "@/components/IndustrySection";
import PageHeader from "@/components/PageHeader";
import ServiceDetails from "@/components/ServiceDetails";
import React from "react";

const CaseStudyPage = () => {
  return (
    <>
      <PageHeader
        title="Driving Innovation in Every Industry"
        className="h-screen"
      />
      <IndustrySection />
      <ApproachSection />
      <ServiceDetails />
      <CaseStudySection />
      <ContactSection />
    </>
  );
};

export default CaseStudyPage;

import CaseStudySection from "@/components/CaseStudySection";
import ContactSection from "@/components/ContactSection";
import PageHeader from "@/components/PageHeader";
import WhyChooseUsSection from "@/components/WhyChooseUs";
import React from "react";

const CaseStudyPage = () => {
  return (
    <>
      <PageHeader title="Case Studies" />
      <CaseStudySection />
      <WhyChooseUsSection />
      <ContactSection />
    </>
  );
};

export default CaseStudyPage;

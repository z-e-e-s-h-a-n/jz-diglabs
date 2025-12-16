import ApproachSection from "@/components/ApproachSection";
import ContactSection from "@/components/ContactSection";
import FaqSection from "@/components/FaqSection";
import PageHeader from "@/components/PageHeader";
import ServiceDetails from "@/components/ServiceDetails";
import React from "react";

const FaqPage = () => {
  return (
    <>
      <PageHeader title="Faq" />
      <FaqSection />
      <ApproachSection />
      <ServiceDetails />
      <ContactSection />
    </>
  );
};

export default FaqPage;

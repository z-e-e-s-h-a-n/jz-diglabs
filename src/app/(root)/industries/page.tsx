import ApproachSection from "@/components/ApproachSection";
import CaseStudySection from "@/components/CaseStudySection";
import ContactSection from "@/components/ContactSection";
import IndustrySection from "@/components/IndustrySection";
import PageHeader from "@/components/PageHeader";
import ServiceDetails from "@/components/ServiceDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve | JZ Digital Labs",
  description:
    "JZ Digital Labs builds tailored software solutions for FinTech, HealthTech, E-commerce, EdTech, Real Estate, Logistics, SaaS & Startup needs — technology with purpose.",
};

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

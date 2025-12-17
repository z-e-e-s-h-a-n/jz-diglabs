import ApproachSection from "@/components/ApproachSection";
import CaseStudySection from "@/components/CaseStudySection";
import ContactSection from "@/components/ContactSection";
import PageHeader from "@/components/PageHeader";
import ServiceDetails from "@/components/ServiceDetails";
import TechStackSection from "@/components/TechStackSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Development Services | JZ Digital Labs",
  description:
    "Explore full-stack software development services from JZ Digital Labs: web & mobile app development, UI/UX design, cloud & DevOps, MVPs, and ongoing maintenance for scalable digital success.",
};

const ServicePage = () => {
  return (
    <>
      <PageHeader title="Our Services" />
      <ApproachSection />
      <ServiceDetails />
      <TechStackSection />
      <CaseStudySection />
      <ContactSection />
    </>
  );
};

export default ServicePage;

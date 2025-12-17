import CaseStudySection from "@/components/CaseStudySection";
import ContactSection from "@/components/ContactSection";
import PageHeader from "@/components/PageHeader";
import WhyChooseUsSection from "@/components/WhyChooseUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | JZ Digital Labs",
  description:
    "Explore real success stories from JZ Digital Labs — FinTech apps, e-commerce platforms, SaaS dashboards, and more built with modern tech and real results.",
};

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

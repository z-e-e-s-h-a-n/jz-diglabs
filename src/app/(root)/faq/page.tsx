import ApproachSection from "@/components/ApproachSection";
import ContactSection from "@/components/ContactSection";
import FaqSection from "@/components/FaqSection";
import PageHeader from "@/components/PageHeader";
import ServiceDetails from "@/components/ServiceDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | JZ Digital Labs",
  description:
    "Have questions about working with JZ Digital Labs? Get clear answers on our development process, costs, timelines, technologies, and support.",
};

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

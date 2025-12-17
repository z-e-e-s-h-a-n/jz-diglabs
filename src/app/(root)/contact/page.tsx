import ContactSection from "@/components/ContactSection";
import PageHeader from "@/components/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact JZ Digital Labs | Start Your Project",
  description:
    "Get in touch with JZ Digital Labs for software development, MVPs, cloud solutions, UI/UX design, and DevOps support — let’s build something great together.",
};

const ContactPage = () => {
  return (
    <>
      <PageHeader title="Contact Us" />
      <ContactSection />
    </>
  );
};

export default ContactPage;

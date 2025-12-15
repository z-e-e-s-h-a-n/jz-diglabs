import React from "react";
import ContactForm from "./ContactForm";
import Image from "next/image";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div>
        <ContactForm title="Ready to Start Your Project?" />
        <Image
          src="/images/contact-image.png"
          alt="Contact Image"
          width={800}
          height={800}
        />
      </div>
    </section>
  );
};

export default ContactSection;

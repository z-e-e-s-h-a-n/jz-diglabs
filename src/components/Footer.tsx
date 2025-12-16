import { contactDetails, mainMenu, servicesMenu } from "@/lib/constants";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div>
          <h4>Pemogan</h4>
          <p>
            Whether you need help with billing, enrolment, or support, our
            experts are just a message away. Reach out today.
          </p>
          <div>
            <Link href="#" target="_blank">
              <Facebook />
            </Link>
            <Link href="#" target="_blank">
              <Linkedin />
            </Link>
            <Link href="#" target="_blank">
              <Instagram />
            </Link>
          </div>
        </div>
        <div>
          <h4>Services</h4>
          <nav>
            {servicesMenu.map(({ label, href }) => (
              <Link href={href} key={label}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h4>Quick Links</h4>
          <nav>
            {mainMenu.map(({ label, href }) => (
              <Link href={href} key={label}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h4>Get In Touch</h4>
          <nav>
            <Link href="">{contactDetails.address}</Link>
            <Link href={`mailto:${contactDetails.email}`}>
              Email: {contactDetails.email}
            </Link>
            <Link href={`tel:${contactDetails.phone}`}>
              Phone: {contactDetails.phone}
            </Link>
          </nav>
        </div>
      </div>
      <div>
        <p>JZ Digital Labs © 2025 All Rights Reserved.​</p>
        <p>
          Website Designed by{" "}
          <Link href="#">
            <strong>JZ Digital Labs</strong>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

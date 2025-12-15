import { experiences } from "@/lib/constants";
import Image from "next/image";
import React from "react";
import Counter from "./Counter";

const WhyChooseUsSection = () => {
  return (
    <section className="why-choose-us-section">
      <div>
        <h3>Why Choose Us</h3>
        <p>
          We combine strategic thinking, modern technology, and proven execution
          to deliver reliable digital solutions that drive real business results
          and long-term growth.
        </p>
      </div>

      <div>
        <Image src="/images/member-1.png" alt="" width={400} height={500} />
        <Image src="/images/member-2.png" alt="" width={500} height={600} />
        <Image src="/images/member-3.png" alt="" width={400} height={500} />
      </div>

      <ul>
        {experiences.map((c) => (
          <Counter key={c.title} {...c} />
        ))}
      </ul>
    </section>
  );
};

export default WhyChooseUsSection;

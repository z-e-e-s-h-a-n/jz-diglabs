import React from "react";
import { Button } from "./ui/button";
import { industriesDetails, industriesMenu } from "@/lib/constants";
import Image from "next/image";

const IndustrySection = () => {
  return (
    <section className="industry-section">
      <div>
        <h3>Solutions for Every Industry</h3>
        <p>
          From startups to enterprises, we build industry-specific solutions
          that streamline operations, enhance user experiences, and accelerate
          business growth.
        </p>
        <Button size="lg">Discover Now</Button>
      </div>
      <ul>
        {industriesMenu.map(({ label, href }) => {
          const d = industriesDetails.find((i) => href.includes(i.slug));

          if (!d) return;

          return (
            <li key={label}>
              <div>
                <h4>{d.title}</h4>
                <p>{d.description}</p>
              </div>
              <Image src={d.imageUrl} alt={d.title} width={400} height={200} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default IndustrySection;

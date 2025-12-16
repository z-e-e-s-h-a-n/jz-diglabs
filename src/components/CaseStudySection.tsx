import { caseStudyDetails, caseStudyMenu } from "@/lib/constants";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const CaseStudySection = () => {
  return (
    <section className="case-study-section">
      <h3>Case Studies</h3>

      <ul>
        {caseStudyMenu.slice(0, 3).map(({ label, href }) => {
          const d = caseStudyDetails.find((c) => href.includes(c.slug));

          if (!d) return;

          return (
            <li key={label}>
              <Image src={d.imageUrl} alt={d.title} width={400} height={300} />
              <ul>
                {d.techStack.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <h4>{d.title}</h4>
              {/* <p>{d.subtitle}</p> */}
            </li>
          );
        })}
      </ul>

      <Button href="/case-study">All Cases</Button>
    </section>
  );
};

export default CaseStudySection;

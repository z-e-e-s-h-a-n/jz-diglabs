import Image from "next/image";
import React from "react";
import Counter from "./Counter";

const VisionSection = () => {
  return (
    <section className="vision-section">
      <div>
        <h3>Values And Vision</h3>
        <ul>
          <li>
            We put integrity and excellence at the core of every digital
            solution we build.
          </li>
          <li>
            Our vision is to empower businesses through technology that drives
            real impact and growth.
          </li>
          <li>
            We value clarity, collaboration, and commitment in every client
            partnership we forge.
          </li>
        </ul>
      </div>
      <div>
        <Counter count={154} title="Professional Teams" />
        <Image
          src="/images/member-2.png"
          alt="Vision Image"
          width={315}
          height={300}
        />
        <Image
          src="/images/member-3.png"
          alt="Vision Image"
          width={280}
          height={250}
        />
      </div>
    </section>
  );
};

export default VisionSection;

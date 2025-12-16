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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            blandit ligula vel vestibulum commodo.
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            blandit ligula vel vestibulum commodo.
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            blandit ligula vel vestibulum commodo.
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

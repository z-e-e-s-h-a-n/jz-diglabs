import { testimonials } from "@/lib/constants";
import Image from "next/image";
import React from "react";
import Counter from "./Counter";

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <h3>What Our Clients Say</h3>
      <div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            blandit ligula vel vestibulum commodo. Mauris eget aliquet nulla,
            quis ultricies magna.
          </p>
          <Counter
            count={154}
            title="Professional Teams"
            className="max-w-60 p-0 border-0 flex-col-reverse"
          />
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            blandit ligula vel vestibulum commodo.
          </p>
          <Counter
            count={2554}
            title="Success Projects"
            className="max-w-60 p-0 border-0 flex-col-reverse"
          />
        </div>
      </div>
      <ul>
        {testimonials.map((t) => (
          <li key={t.name}>
            <div>
              <h4>{t.title}</h4>
              <span>{t.name}</span>
            </div>
            <Image src={t.imageUrl} alt={t.name} width={400} height={400} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TestimonialSection;

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
            Clients trust us for clarity, quality, and steady delivery. Our work
            speaks through partnerships built to last. We help teams scale with
            confidence.
          </p>
          <Counter
            count={154}
            title="Professional Teams"
            className="max-w-60 p-0 border-0 flex-col-reverse"
          />
        </div>
        <div>
          <p>
            Our team blends strategic vision with hands-on technical excellence.
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

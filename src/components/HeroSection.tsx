import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Counter from "./Counter";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <h2>Your Vision</h2>
      <div>
        <ul>
          <li>Evaluation & Design</li>
          <li>Custom software</li>
          <li>Web Development</li>
        </ul>
        <div>
          <div>
            <span />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <Counter count={12} title="Years Of Experience" className="p-6" />
        </div>
      </div>
      <Image
        src="/images/laptop.png"
        alt="Laptop Image"
        width={1200}
        height={1200}
      />
      <div>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button href="#contact-section">Get Started</Button>
        </div>
        <h2>Our Code</h2>
      </div>
    </section>
  );
};

export default HeroSection;

import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Counter from "./Counter";

const ApproachSection = () => {
  return (
    <section>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between py-5 px-8 border rounded-2xl gap-24 sm:gap-8 lg:gap-4">
        <div className="space-y-4 basis-full lg:basis-1/2">
          <h3>Our Approach</h3>
          <p>
            We combine deep strategy with modern tech to solve real business
            challenges. Our process ensures measurable results.
          </p>
          <Button href="#contact-section" size="lg">
            Discover Now
          </Button>
        </div>
        <div className="basis-full lg:basis-1/2 relative">
          <Image
            src="/images/mobile.png"
            alt="Mobile Image"
            width={600}
            height={600}
            className="-my-40"
          />
          <Counter
            count={2554}
            title="Success Projects"
            className="absolute left-8 top-1/3 flex-col backdrop-blur-md [&>span:first-child]:text-5xl"
          />
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;

import { servicesDetails } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { cn } from "@/lib/utils";

const ServiceDetails = () => {
  return (
    <section className="space-y-6">
      {servicesDetails.map((s, i) => (
        <div
          key={s.title}
          className={cn(
            "flex flex-col md:items-center md:justify-between gap-16 p-8 border rounded-2xl",
            (i + 1) % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
          )}
        >
          <div
            className={cn(
              "space-y-4 basis-[60%]",
              (i + 1) % 2 === 0
                ? "md:pl-12 md:ml-12 md:border-l"
                : "md:pr-12 md:mr-12 md:border-r"
            )}
          >
            <h3>{s.title}</h3>
            <p>{s.description}</p>
          </div>
          <div
            className={cn(
              "basis-[40%]",
              (i + 1) % 2 === 0 ? "flex-start" : "md:flex-center"
            )}
          >
            <ul className="space-y-4 dot-list">
              {s.deliverables.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServiceDetails;

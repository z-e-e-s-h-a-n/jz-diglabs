import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { servicesDetails, servicesMenu } from "@/lib/constants";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ServiceSection = () => {
  return (
    <section className="service-section">
      <Tabs defaultValue={servicesMenu[0].href}>
        <TabsList asChild>
          <Carousel>
            <CarouselContent>
              {servicesMenu.map((s) => (
                <CarouselItem
                  key={s.label}
                  className="basis-full sm:basis-1/2  lg:basis-1/3 xl:basis-1/5 flex-center"
                >
                  <TabsTrigger
                    key={s.label}
                    value={s.href}
                    className="border border-border rounded-2xl px-6 py-4"
                  >
                    {s.label}
                  </TabsTrigger>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </TabsList>

        {servicesMenu.map(({ label, href }) => {
          const d = servicesDetails.find((d) => href.includes(d.slug));

          return (
            <TabsContent key={label} value={href}>
              <Image
                src="/images/services-image.png"
                alt={label}
                width={400}
                height={400}
              />

              {d && (
                <div>
                  <h3>{d.title}</h3>
                  {d.techStack && (
                    <ul>
                      {d.techStack.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  )}
                  <p>{d.description}</p>
                </div>
              )}
            </TabsContent>
          );
        })}
      </Tabs>
    </section>
  );
};

export default ServiceSection;

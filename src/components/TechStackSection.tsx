import { toolsStack } from "@/lib/constants";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TechStackSection = () => {
  const { title, description, categories } = toolsStack;

  return (
    <section className="tech-stack-section">
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <Tabs defaultValue={categories[0].title}>
        {/* 1️⃣ Tabs List (Triggers only) */}
        <TabsList className="flex-col sm:flex-row flex-wrap items-start justify-start basis-full lg:basis-1/5 bg-transparent h-fit gap-4">
          {categories.map((c) => (
            <TabsTrigger
              key={c.title}
              value={c.title}
              className="p-4 py-3 w-full font-semibold text-md rounded-4xl"
            >
              {c.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* 2️⃣ Tabs Content */}
        {categories.map((c) => {
          const toolsArray = Object.entries(c.tools).map(([key, values]) => ({
            key,
            values,
          }));

          return (
            <TabsContent key={c.title} value={c.title}>
              {toolsArray.map((tool) => (
                <div key={tool.key}>
                  <h4>{tool.key}</h4>
                  <ul>
                    {tool.values.map((v: string, i: number) => (
                      <li key={v}>
                        <span>0{i + 1}</span> <span>{v}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </TabsContent>
          );
        })}
      </Tabs>
    </section>
  );
};

export default TechStackSection;

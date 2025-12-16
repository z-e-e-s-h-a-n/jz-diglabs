import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/constants";
import { Button } from "./ui/button";

interface FaqSectionProps {
  length?: number;
}

const FaqSection = ({ length }: FaqSectionProps) => {
  return (
    <section>
      <div className="space-y-8 md:space-y-16 border p-4 py-16 sm:p-8 rounded-2xl">
        <h3 className="text-center">Questions & Answers</h3>
        <Accordion type="single" collapsible defaultValue={faqs[0].question}>
          {faqs.slice(0, length).map(({ question, answer }) => (
            <AccordionItem key={question} value={question}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        {length && (
          <Button href="/faq" className="flex w-max mx-auto">
            Discover More
          </Button>
        )}
      </div>
    </section>
  );
};

export default FaqSection;

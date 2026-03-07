import PageBanner from "@/components/layout/PageBanner";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/data/sampleData";

const FAQ = () => (
  <div>
    <PageBanner title="Frequently Asked Questions" breadcrumbs={[{ label: "FAQ" }]} />
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <Accordion type="single" collapsible>
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left font-display">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </div>
);

export default FAQ;

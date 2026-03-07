import PageBanner from "@/components/layout/PageBanner";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/sampleData";

const Testimonials = () => (
  <div>
    <PageBanner title="Testimonials" breadcrumbs={[{ label: "Testimonials" }]} />
    <section className="py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6 max-w-4xl">
        {testimonials.map((t, i) => (
          <Card key={i}><CardContent className="p-6">
            <p className="text-muted-foreground italic">"{t.quote}"</p>
            <div className="mt-4 pt-4 border-t"><p className="font-semibold text-accent">{t.name}</p><p className="text-xs text-muted-foreground">{t.role}</p></div>
          </CardContent></Card>
        ))}
      </div>
    </section>
  </div>
);

export default Testimonials;

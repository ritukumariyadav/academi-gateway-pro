import PageBanner from "@/components/layout/PageBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";

const Admission = () => (
  <div>
    <PageBanner title="Admission" breadcrumbs={[{ label: "Admission" }]} />
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-display text-3xl font-bold">Admissions 2026–27 Are Open</h2>
          <p className="text-muted-foreground mt-3">We welcome applications from students who demonstrate academic potential, leadership qualities, and a passion for learning.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { step: "01", title: "Apply Online", desc: "Fill out the application form with your details and academic records." },
            { step: "02", title: "Entrance Test", desc: "Appear for the entrance examination on the scheduled date." },
            { step: "03", title: "Counseling", desc: "Shortlisted candidates will be called for counseling and document verification." },
          ].map((s) => (
            <Card key={s.step} className="text-center">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto text-lg font-bold">{s.step}</div>
                <h3 className="font-display text-lg font-semibold mt-4">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-8">
            <h3 className="font-display text-xl font-semibold mb-4">Eligibility Criteria</h3>
            <ul className="space-y-2">
              {[
                "10+2 or equivalent from a recognized board",
                "Minimum 60% aggregate marks",
                "Valid entrance test score",
                "Age criteria as per program requirements",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-success shrink-0" />{item}
                </li>
              ))}
            </ul>
            <Link to="/apply-online" className="mt-6 block">
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Apply Online Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  </div>
);

export default Admission;

import PageBanner from "@/components/layout/PageBanner";
import { Card, CardContent } from "@/components/ui/card";
import { faculty } from "@/data/sampleData";
import { User } from "lucide-react";

const Faculty = () => (
  <div>
    <PageBanner title="Our Faculty" breadcrumbs={[{ label: "Faculty" }]} />
    <section className="py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {faculty.map((f) => (
          <Card key={f.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 flex gap-4">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <User className="h-8 w-8 text-primary/60" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">{f.name}</h3>
                <p className="text-sm text-accent font-medium">{f.designation}</p>
                <p className="text-xs text-muted-foreground mt-1">{f.department} • {f.specialization}</p>
                <p className="text-xs text-muted-foreground">{f.experience} experience</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  </div>
);

export default Faculty;

import PageBanner from "@/components/layout/PageBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { courses } from "@/data/sampleData";

const Courses = () => (
  <div>
    <PageBanner title="Courses & Programs" breadcrumbs={[{ label: "Courses" }]} />
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c) => (
            <Card key={c.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="h-2 bg-accent" />
              <CardContent className="p-6">
                <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">{c.department}</span>
                <h3 className="font-display text-xl font-semibold mt-3 group-hover:text-accent transition-colors">{c.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{c.description}</p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t text-sm text-muted-foreground">
                  <span>⏱ {c.duration}</span>
                  <span>🎓 {c.seats} seats</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Courses;

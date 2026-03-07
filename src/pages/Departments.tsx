import PageBanner from "@/components/layout/PageBanner";
import { Card, CardContent } from "@/components/ui/card";
import { departments } from "@/data/sampleData";
import { Users, BookOpen, GraduationCap } from "lucide-react";

const Departments = () => (
  <div>
    <PageBanner title="Departments" breadcrumbs={[{ label: "Departments" }]} />
    <section className="py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((d) => (
          <Card key={d.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="font-display text-xl font-semibold">{d.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">Head: {d.head}</p>
              <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t">
                <div className="text-center"><Users className="h-4 w-4 mx-auto text-accent" /><span className="text-sm font-bold block">{d.faculty}</span><span className="text-xs text-muted-foreground">Faculty</span></div>
                <div className="text-center"><GraduationCap className="h-4 w-4 mx-auto text-accent" /><span className="text-sm font-bold block">{d.students}</span><span className="text-xs text-muted-foreground">Students</span></div>
                <div className="text-center"><BookOpen className="h-4 w-4 mx-auto text-accent" /><span className="text-sm font-bold block">{d.courses}</span><span className="text-xs text-muted-foreground">Courses</span></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  </div>
);

export default Departments;

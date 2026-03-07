import PageBanner from "@/components/layout/PageBanner";
import { Card, CardContent } from "@/components/ui/card";
import { notices } from "@/data/sampleData";
import { Bell } from "lucide-react";
import { Link } from "react-router-dom";

const Notices = () => (
  <div>
    <PageBanner title="Notice Board" breadcrumbs={[{ label: "Notices" }]} />
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-3xl space-y-4">
        {notices.map((n) => (
          <Link key={n.id} to={`/notices/${n.id}`}>
            <Card className="hover:border-accent/40 transition-colors">
              <CardContent className="p-5 flex gap-4">
                <div className="h-10 w-10 rounded bg-accent/10 flex items-center justify-center shrink-0">
                  <Bell className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold">{n.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{n.content}</p>
                  <p className="text-xs text-muted-foreground mt-2">{n.date} • {n.category}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  </div>
);

export default Notices;

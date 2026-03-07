import PageBanner from "@/components/layout/PageBanner";
import { Card, CardContent } from "@/components/ui/card";
import { events } from "@/data/sampleData";
import { MapPin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Events = () => (
  <div>
    <PageBanner title="Events & News" breadcrumbs={[{ label: "Events" }]} />
    <section className="py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6">
        {events.map((e) => (
          <Link key={e.id} to={`/events/${e.id}`}>
            <Card className="hover:shadow-lg transition-shadow h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 rounded-lg bg-primary flex flex-col items-center justify-center shrink-0 text-primary-foreground">
                    <span className="text-xs">{new Date(e.date).toLocaleString('default', { month: 'short' })}</span>
                    <span className="text-xl font-bold leading-none">{new Date(e.date).getDate()}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold">{e.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1"><MapPin className="h-3 w-3" />{e.location}</p>
                    <p className="text-sm text-muted-foreground mt-2">{e.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  </div>
);

export default Events;

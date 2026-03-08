import { useParams, Link } from "react-router-dom";
import PageBanner from "@/components/layout/PageBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { events } from "@/data/sampleData";
import { ArrowLeft, Calendar, MapPin, Clock, Users } from "lucide-react";

const EventDetail = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Event Not Found</h2>
        <Link to="/events"><Button><ArrowLeft className="mr-2 h-4 w-4" /> All Events</Button></Link>
      </div>
    );
  }

  const otherEvents = events.filter((e) => e.id !== id).slice(0, 3);

  return (
    <>
      <PageBanner title="Event Details" subtitle={event.title} />
      <section className="container mx-auto px-4 py-12">
        <Link to="/events" className="inline-flex items-center text-primary hover:underline text-sm mb-6 block">
          <ArrowLeft className="mr-1 h-4 w-4" /> Back to Events
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{event.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{event.date}</span>
                  <span className="flex items-center gap-1"><MapPin className="h-4 w-4" />{event.location}</span>
                  <span className="flex items-center gap-1"><Clock className="h-4 w-4" />10:00 AM – 5:00 PM</span>
                  <span className="flex items-center gap-1"><Users className="h-4 w-4" />Open to All</span>
                </div>
                <div className="text-muted-foreground space-y-3">
                  <p>{event.description}</p>
                  <p>This event is organized by Preston Academy as part of our commitment to holistic education and community engagement. Students, faculty, and external guests are welcome to participate.</p>
                  <p>Registration is recommended for planning purposes. Light refreshments will be provided. For special accommodations or queries, please contact the Events Office.</p>
                  <h4 className="font-semibold text-foreground mt-4">Schedule Highlights</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>10:00 AM — Inauguration & Welcome Address</li>
                    <li>11:00 AM — Keynote Session</li>
                    <li>1:00 PM — Lunch Break</li>
                    <li>2:00 PM — Interactive Workshops / Competitions</li>
                    <li>4:30 PM — Valedictory & Prize Distribution</li>
                  </ul>
                </div>
                <Button className="mt-4">Register for This Event</Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Upcoming Events</h3>
            {otherEvents.map((e) => (
              <Link to={`/events/${e.id}`} key={e.id}>
                <Card className="hover:bg-muted/50 transition-colors mb-3">
                  <CardContent className="p-4">
                    <Badge variant="outline" className="mb-2">{e.date}</Badge>
                    <p className="font-medium text-sm">{e.title}</p>
                    <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1"><MapPin className="h-3 w-3" />{e.location}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default EventDetail;

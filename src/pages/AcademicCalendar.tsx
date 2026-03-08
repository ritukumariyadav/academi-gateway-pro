import PageBanner from "@/components/layout/PageBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, BookOpen, Award, PartyPopper } from "lucide-react";

const calendarData = [
  { month: "January 2026", events: [
    { date: "Jan 6", event: "Spring Semester Begins", type: "academic" },
    { date: "Jan 26", event: "Republic Day Holiday", type: "holiday" },
  ]},
  { month: "February 2026", events: [
    { date: "Feb 15", event: "Last Date for Course Add/Drop", type: "academic" },
    { date: "Feb 25", event: "Scholarship Application Deadline", type: "deadline" },
  ]},
  { month: "March 2026", events: [
    { date: "Mar 10", event: "Guest Lecture: AI in Healthcare", type: "event" },
    { date: "Mar 15–Apr 5", event: "Mid-Term Examinations", type: "exam" },
    { date: "Mar 20", event: "Sports Day Registration Closes", type: "deadline" },
  ]},
  { month: "April 2026", events: [
    { date: "Apr 10", event: "Mid-Term Results Published", type: "academic" },
    { date: "Apr 15–17", event: "Annual Cultural Festival — Crescendo", type: "event" },
    { date: "Apr 22", event: "International Science Symposium", type: "event" },
  ]},
  { month: "May 2026", events: [
    { date: "May 1", event: "Labour Day Holiday", type: "holiday" },
    { date: "May 5", event: "Career Fair 2026", type: "event" },
    { date: "May 15–Jun 5", event: "End-Term Examinations", type: "exam" },
    { date: "May 20", event: "Alumni Homecoming Weekend", type: "event" },
  ]},
  { month: "June 2026", events: [
    { date: "Jun 10", event: "End-Term Results Published", type: "academic" },
    { date: "Jun 15", event: "Summer Vacation Begins", type: "holiday" },
    { date: "Jun 20", event: "Convocation Ceremony 2026", type: "event" },
  ]},
];

const typeColor = (t: string) => {
  switch (t) {
    case "exam": return "destructive";
    case "holiday": return "secondary";
    case "deadline": return "outline";
    case "event": return "default";
    default: return "outline";
  }
};

const AcademicCalendar = () => (
  <div>
    <PageBanner title="Academic Calendar" subtitle="Key dates and schedules for the academic year 2025–2026" />
    <section className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {calendarData.map((m) => (
          <Card key={m.month}>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Calendar className="h-5 w-5 text-accent" />
                {m.month}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {m.events.map((e, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-xs font-mono text-muted-foreground w-24 shrink-0 pt-0.5">{e.date}</span>
                    <div>
                      <p className="text-sm font-medium">{e.event}</p>
                      <Badge variant={typeColor(e.type) as any} className="capitalize text-[10px] mt-1">{e.type}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  </div>
);

export default AcademicCalendar;

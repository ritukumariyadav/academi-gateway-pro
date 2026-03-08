import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, Calendar, FileText, DollarSign, BookOpen, AlertTriangle } from "lucide-react";

const notifications = [
  { id: 1, icon: AlertTriangle, title: "Mid-term exams start March 15th", desc: "Prepare for mid-term examinations. Timetable has been uploaded.", time: "2 hours ago", type: "urgent" },
  { id: 2, icon: FileText, title: "Assignment 4 deadline extended", desc: "Data Structures Assignment 4 deadline extended to March 12th.", time: "5 hours ago", type: "academic" },
  { id: 3, icon: BookOpen, title: "Library book return reminder", desc: "Digital Design by Morris Mano is overdue. Please return immediately.", time: "1 day ago", type: "library" },
  { id: 4, icon: Calendar, title: "Sports Day registration closing soon", desc: "Register for Annual Sports Day 2026 before March 10th.", time: "1 day ago", type: "event" },
  { id: 5, icon: DollarSign, title: "Fee payment reminder", desc: "Semester 4 fees of $2,700 due by March 31, 2026.", time: "2 days ago", type: "finance" },
  { id: 6, icon: Bell, title: "Guest lecture on AI in Healthcare", desc: "Dr. Priya Sharma will deliver a guest lecture on March 10th in the main auditorium.", time: "3 days ago", type: "academic" },
  { id: 7, icon: FileText, title: "Semester 3 results published", desc: "Check your exam results and grade report in the Results section.", time: "1 week ago", type: "academic" },
  { id: 8, icon: Calendar, title: "Cultural Festival registrations open", desc: "Crescendo 2026 registrations are now open. Register by March 20th.", time: "1 week ago", type: "event" },
];

const typeColor = (t: string) => {
  switch (t) {
    case "urgent": return "destructive";
    case "finance": return "secondary";
    default: return "outline";
  }
};

const StudentNotifications = () => (
  <div className="space-y-6">
    <h1 className="font-display text-2xl font-bold">Notifications</h1>
    <div className="space-y-3">
      {notifications.map((n) => (
        <Card key={n.id} className={n.type === "urgent" ? "border-destructive/30" : ""}>
          <CardContent className="p-4 flex items-start gap-4">
            <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
              <n.icon className="h-5 w-5 text-accent" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-medium text-sm">{n.title}</h3>
                <Badge variant={typeColor(n.type) as any} className="capitalize text-[10px]">{n.type}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{n.desc}</p>
              <p className="text-xs text-muted-foreground mt-1">{n.time}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default StudentNotifications;

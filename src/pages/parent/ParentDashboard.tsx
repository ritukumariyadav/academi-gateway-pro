import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, DollarSign, FileText, TrendingUp, Bell } from "lucide-react";

const ParentDashboard = () => (
  <div className="space-y-6">
    <h1 className="font-display text-2xl font-bold">Parent Dashboard</h1>
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      {[
        { icon: Users, label: "Child", value: "Raj Kumar" },
        { icon: FileText, label: "Class", value: "CS-A (2nd Year)" },
        { icon: Calendar, label: "Attendance", value: "92%" },
        { icon: TrendingUp, label: "CGPA", value: "8.5" },
        { icon: DollarSign, label: "Fee Status", value: "Paid" },
        { icon: Bell, label: "Notifications", value: "3 New" },
      ].map((s, i) => (
        <Card key={i}><CardContent className="p-4"><s.icon className="h-5 w-5 text-accent mb-2" /><p className="text-lg font-bold">{s.value}</p><p className="text-xs text-muted-foreground">{s.label}</p></CardContent></Card>
      ))}
    </div>
    <div className="grid lg:grid-cols-2 gap-6">
      <Card><CardContent className="p-6">
        <h3 className="font-display font-semibold mb-4">Recent Updates</h3>
        <div className="space-y-3">
          {["Mid-term exam schedule released", "Assignment 4 graded — CS201", "Fee receipt generated for Spring 2026", "PTM scheduled — March 15"].map((n, i) => (
            <div key={i} className="flex items-start gap-2 p-3 rounded-lg bg-muted/50"><Bell className="h-4 w-4 text-accent mt-0.5 shrink-0" /><span className="text-sm">{n}</span></div>
          ))}
        </div>
      </CardContent></Card>
      <Card><CardContent className="p-6">
        <h3 className="font-display font-semibold mb-4">Upcoming Events</h3>
        <div className="space-y-3">
          {[{ event: "Mid-Term Exams", date: "Mar 15–25" }, { event: "Parent-Teacher Meet", date: "Mar 15" }, { event: "Annual Day", date: "Apr 10" }].map((e, i) => (
            <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <span className="text-sm font-medium">{e.event}</span><Badge variant="outline">{e.date}</Badge>
            </div>
          ))}
        </div>
      </CardContent></Card>
    </div>
  </div>
);

export default ParentDashboard;

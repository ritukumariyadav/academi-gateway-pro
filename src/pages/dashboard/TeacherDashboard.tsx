import { Card, CardContent } from "@/components/ui/card";
import { Users, BookOpen, ClipboardList, Bell, Clock } from "lucide-react";

const TeacherDashboard = () => (
  <div className="space-y-6">
    <h1 className="font-display text-2xl font-bold">Welcome back, Professor!</h1>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        { icon: Users, label: "Total Students", value: "156" },
        { icon: BookOpen, label: "Active Courses", value: "4" },
        { icon: ClipboardList, label: "Pending Reviews", value: "12" },
        { icon: Bell, label: "Announcements", value: "3" },
      ].map((s, i) => (
        <Card key={i}><CardContent className="p-4 flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center"><s.icon className="h-5 w-5 text-accent" /></div>
          <div><p className="text-xs text-muted-foreground">{s.label}</p><p className="text-lg font-bold">{s.value}</p></div>
        </CardContent></Card>
      ))}
    </div>
    <Card><CardContent className="p-6">
      <h3 className="font-display font-semibold mb-4">Today's Classes</h3>
      <div className="space-y-3">
        {[
          { time: "9:00 AM", subject: "Data Structures — CS201", students: 45 },
          { time: "11:30 AM", subject: "Algorithm Design — CS301", students: 38 },
          { time: "2:00 PM", subject: "AI Fundamentals — CS401", students: 52 },
        ].map((c, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
            <Clock className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium w-20">{c.time}</span>
            <span className="text-sm flex-1">{c.subject}</span>
            <span className="text-xs text-muted-foreground">{c.students} students</span>
          </div>
        ))}
      </div>
    </CardContent></Card>
  </div>
);

export default TeacherDashboard;

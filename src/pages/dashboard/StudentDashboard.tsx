import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Calendar, FileText, Bell, Clock, DollarSign } from "lucide-react";

const StudentDashboard = () => (
  <div className="space-y-6">
    <h1 className="font-display text-2xl font-bold">Welcome back, Student!</h1>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        { icon: Calendar, label: "Attendance", value: "87%", color: "text-success" },
        { icon: FileText, label: "CGPA", value: "8.4", color: "text-accent" },
        { icon: BookOpen, label: "Assignments Due", value: "3", color: "text-destructive" },
        { icon: DollarSign, label: "Fees Due", value: "$1,200", color: "text-accent" },
      ].map((s, i) => (
        <Card key={i}><CardContent className="p-4 flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center"><s.icon className={`h-5 w-5 ${s.color}`} /></div>
          <div><p className="text-xs text-muted-foreground">{s.label}</p><p className="text-lg font-bold">{s.value}</p></div>
        </CardContent></Card>
      ))}
    </div>
    <div className="grid lg:grid-cols-2 gap-6">
      <Card><CardContent className="p-6">
        <h3 className="font-display font-semibold mb-4">Today's Schedule</h3>
        <div className="space-y-3">
          {[
            { time: "9:00 AM", subject: "Data Structures", room: "Room 201" },
            { time: "11:00 AM", subject: "Discrete Math", room: "Room 105" },
            { time: "2:00 PM", subject: "Physics Lab", room: "Lab 3" },
          ].map((c, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <Clock className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium w-20">{c.time}</span>
              <span className="text-sm flex-1">{c.subject}</span>
              <span className="text-xs text-muted-foreground">{c.room}</span>
            </div>
          ))}
        </div>
      </CardContent></Card>
      <Card><CardContent className="p-6">
        <h3 className="font-display font-semibold mb-4">Recent Notifications</h3>
        <div className="space-y-3">
          {[
            "Mid-term exams start March 15th",
            "Assignment 4 deadline extended to March 12th",
            "Library book return reminder",
            "Sports Day registration closing soon",
          ].map((n, i) => (
            <div key={i} className="flex items-start gap-2 p-3 rounded-lg bg-muted/50">
              <Bell className="h-4 w-4 text-accent mt-0.5" />
              <span className="text-sm">{n}</span>
            </div>
          ))}
        </div>
      </CardContent></Card>
    </div>
  </div>
);

export default StudentDashboard;

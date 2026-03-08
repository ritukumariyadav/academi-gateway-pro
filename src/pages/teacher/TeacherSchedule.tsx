import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Clock, MapPin } from "lucide-react";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const schedule: Record<string, { time: string; course: string; room: string; section: string }[]> = {
  Monday: [
    { time: "9:00–10:00", course: "Data Structures (CS201)", room: "Room 201", section: "Sec A" },
    { time: "11:30–12:30", course: "Algorithm Design (CS301)", room: "Room 305", section: "Sec B" },
    { time: "2:00–3:00", course: "AI Fundamentals (CS401)", room: "Lab 4", section: "Sec A" },
  ],
  Tuesday: [
    { time: "10:00–11:00", course: "Data Structures (CS201)", room: "Room 201", section: "Sec A" },
    { time: "2:00–4:00", course: "AI Lab (CS401)", room: "Lab 4", section: "Sec A" },
  ],
  Wednesday: [
    { time: "9:00–10:00", course: "Algorithm Design (CS301)", room: "Room 305", section: "Sec B" },
    { time: "11:00–12:00", course: "Data Structures (CS201)", room: "Room 201", section: "Sec A" },
    { time: "3:00–4:00", course: "Department Meeting", room: "Conference Room", section: "—" },
  ],
  Thursday: [
    { time: "9:00–10:00", course: "AI Fundamentals (CS401)", room: "Room 401", section: "Sec A" },
    { time: "11:00–1:00", course: "DS Lab (CS201)", room: "Lab 2", section: "Sec A" },
  ],
  Friday: [
    { time: "9:00–10:00", course: "Algorithm Design (CS301)", room: "Room 305", section: "Sec B" },
    { time: "10:00–11:00", course: "Office Hours", room: "Office 304", section: "—" },
    { time: "2:00–3:00", course: "AI Fundamentals (CS401)", room: "Room 401", section: "Sec A" },
  ],
};

const TeacherSchedule = () => (
  <div className="space-y-6">
    <h1 className="font-display text-2xl font-bold">Class Schedule</h1>
    <div className="grid sm:grid-cols-3 gap-4">
      <Card><CardContent className="p-4 text-center">
        <p className="text-3xl font-bold text-accent">14</p>
        <p className="text-sm text-muted-foreground">Weekly Lectures</p>
      </CardContent></Card>
      <Card><CardContent className="p-4 text-center">
        <p className="text-3xl font-bold">3</p>
        <p className="text-sm text-muted-foreground">Courses</p>
      </CardContent></Card>
      <Card><CardContent className="p-4 text-center">
        <p className="text-3xl font-bold">135</p>
        <p className="text-sm text-muted-foreground">Total Students</p>
      </CardContent></Card>
    </div>

    {days.map((day) => (
      <Card key={day}>
        <CardHeader><CardTitle className="text-lg">{day}</CardTitle></CardHeader>
        <CardContent>
          {schedule[day].length === 0 ? (
            <p className="text-muted-foreground text-sm">No classes scheduled</p>
          ) : (
            <div className="space-y-3">
              {schedule[day].map((s, i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-1.5 text-sm w-28 shrink-0">
                    <Clock className="h-4 w-4 text-accent" />
                    {s.time}
                  </div>
                  <span className="font-medium text-sm flex-1">{s.course}</span>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {s.room}
                  </div>
                  <span className="text-xs text-muted-foreground">{s.section}</span>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    ))}
  </div>
);

export default TeacherSchedule;

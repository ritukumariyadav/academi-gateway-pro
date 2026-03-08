import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const slots = ["9:00–10:00", "10:00–11:00", "11:15–12:15", "12:15–1:15", "2:00–3:00", "3:00–4:00"];

const timetable: Record<string, (string | null)[]> = {
  Monday:    ["Data Structures", "Discrete Math", null, "English", "Physics Lab", "Physics Lab"],
  Tuesday:   ["Computer Networks", "Digital Electronics", "Data Structures", null, "English", "Library"],
  Wednesday: ["Discrete Math", "Computer Networks", null, "Digital Electronics", "Data Structures", "Tutorial"],
  Thursday:  ["English", "Physics Lab", "Physics Lab", null, "Computer Networks", "Digital Electronics"],
  Friday:    ["Data Structures", "Discrete Math", "Computer Networks", null, "Sports", "Sports"],
};

const StudentTimetable = () => (
  <div className="space-y-6">
    <h1 className="font-display text-2xl font-bold">Class Timetable</h1>
    <Card>
      <CardHeader>
        <CardTitle>B.Tech CS — Semester 4, Section A</CardTitle>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-24">Day</TableHead>
              {slots.map((s) => <TableHead key={s} className="text-center text-xs">{s}</TableHead>)}
            </TableRow>
          </TableHeader>
          <TableBody>
            {days.map((day) => (
              <TableRow key={day}>
                <TableCell className="font-medium">{day}</TableCell>
                {timetable[day].map((subject, i) => (
                  <TableCell key={i} className="text-center text-sm">
                    {subject ? (
                      <span className="inline-block px-2 py-1 rounded bg-accent/10 text-accent-foreground text-xs font-medium">
                        {subject}
                      </span>
                    ) : (
                      <span className="text-muted-foreground text-xs">Lunch</span>
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </div>
);

export default StudentTimetable;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar } from "lucide-react";

const exams = [
  { subject: "Data Structures (CS201)", date: "2026-03-18", time: "10:00 AM", hall: "Hall A", duration: "3 hrs", status: "Upcoming" },
  { subject: "Database Systems (CS301)", date: "2026-03-20", time: "02:00 PM", hall: "Hall B", duration: "3 hrs", status: "Upcoming" },
  { subject: "Operating Systems (CS302)", date: "2026-03-22", time: "10:00 AM", hall: "Hall A", duration: "3 hrs", status: "Upcoming" },
  { subject: "Mathematics III (MA201)", date: "2026-02-10", time: "10:00 AM", hall: "Room 102", duration: "1 hr", status: "Completed" },
];

const StudentExams = () => (
  <div className="space-y-6">
    <h1 className="font-display text-2xl font-bold">Exam Schedule</h1>
    <Card>
      <CardHeader><CardTitle>My Exams</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow><TableHead>Subject</TableHead><TableHead>Date</TableHead><TableHead>Time</TableHead><TableHead>Hall</TableHead><TableHead>Duration</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
          <TableBody>{exams.map((e, i) => (
            <TableRow key={i}><TableCell className="font-medium">{e.subject}</TableCell><TableCell>{e.date}</TableCell><TableCell>{e.time}</TableCell><TableCell>{e.hall}</TableCell><TableCell>{e.duration}</TableCell>
              <TableCell><Badge variant={e.status === "Completed" ? "secondary" : "default"}>{e.status}</Badge></TableCell>
            </TableRow>
          ))}</TableBody>
        </Table>
      </CardContent>
    </Card>
  </div>
);

export default StudentExams;

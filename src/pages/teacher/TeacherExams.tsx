import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Calendar, FileText } from "lucide-react";

const exams = [
  { id: 1, name: "Mid-Term Examination", subject: "Data Structures (CS201)", date: "2026-03-18", time: "10:00 AM", hall: "Hall A", duration: "3 hrs", status: "Upcoming" },
  { id: 2, name: "Mid-Term Examination", subject: "Database Systems (CS301)", date: "2026-03-20", time: "02:00 PM", hall: "Hall B", duration: "3 hrs", status: "Upcoming" },
  { id: 3, name: "Unit Test 2", subject: "Data Structures (CS201)", date: "2026-02-10", time: "10:00 AM", hall: "Room 102", duration: "1 hr", status: "Completed" },
];

const invigilation = [
  { date: "2026-03-18", time: "10:00 AM – 1:00 PM", hall: "Hall A", exam: "CS201 Mid-Term", students: 58 },
  { date: "2026-03-22", time: "02:00 PM – 5:00 PM", hall: "Hall C", exam: "ME201 Mid-Term", students: 40 },
];

const TeacherExams = () => (
  <div className="space-y-6">
    <h1 className="font-display text-2xl font-bold">Exam Schedule</h1>
    <Card>
      <CardHeader><CardTitle>My Subject Exams</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow><TableHead>Exam</TableHead><TableHead>Subject</TableHead><TableHead>Date</TableHead><TableHead>Time</TableHead><TableHead>Hall</TableHead><TableHead>Duration</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
          <TableBody>{exams.map(e => (
            <TableRow key={e.id}><TableCell className="font-medium">{e.name}</TableCell><TableCell>{e.subject}</TableCell><TableCell>{e.date}</TableCell><TableCell>{e.time}</TableCell><TableCell>{e.hall}</TableCell><TableCell>{e.duration}</TableCell>
              <TableCell><Badge variant={e.status === "Completed" ? "secondary" : "default"}>{e.status}</Badge></TableCell>
            </TableRow>
          ))}</TableBody>
        </Table>
      </CardContent>
    </Card>
    <Card>
      <CardHeader><CardTitle>Invigilation Duties</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow><TableHead>Date</TableHead><TableHead>Time</TableHead><TableHead>Hall</TableHead><TableHead>Exam</TableHead><TableHead>Students</TableHead></TableRow></TableHeader>
          <TableBody>{invigilation.map((d, i) => (
            <TableRow key={i}><TableCell>{d.date}</TableCell><TableCell>{d.time}</TableCell><TableCell>{d.hall}</TableCell><TableCell>{d.exam}</TableCell><TableCell>{d.students}</TableCell></TableRow>
          ))}</TableBody>
        </Table>
      </CardContent>
    </Card>
  </div>
);

export default TeacherExams;

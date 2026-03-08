import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Monitor, Clock, Users } from "lucide-react";

const quizzes = [
  { id: 1, title: "CS201 — Data Structures Quiz 1", course: "Data Structures", questions: 30, duration: "45 min", attempts: 58, status: "Active" },
  { id: 2, title: "ME201 — Thermo Mid-Term", course: "Thermodynamics", questions: 50, duration: "90 min", attempts: 0, status: "Scheduled" },
  { id: 3, title: "BA301 — Marketing MCQ Test", course: "Marketing Mgmt.", questions: 25, duration: "30 min", attempts: 65, status: "Completed" },
  { id: 4, title: "PH101 — Physics Unit Test", course: "Physics", questions: 40, duration: "60 min", attempts: 42, status: "Completed" },
  { id: 5, title: "CS301 — DBMS Practice", course: "Database Systems", questions: 20, duration: "30 min", attempts: 0, status: "Draft" },
];

const AdminOnlineExams = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="font-display text-2xl font-bold">Online Exams & Quizzes</h1>
      <Button><Plus className="h-4 w-4 mr-1" /> Create Quiz</Button>
    </div>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {[{ label: "Total Quizzes", value: "24", icon: Monitor }, { label: "Active Now", value: "1", icon: Clock }, { label: "Total Attempts", value: "1,240", icon: Users }, { label: "Avg Score", value: "72%", icon: Monitor }].map((s, i) => (
        <Card key={i}><CardContent className="p-4"><s.icon className="h-5 w-5 text-accent mb-2" /><p className="text-lg font-bold">{s.value}</p><p className="text-xs text-muted-foreground">{s.label}</p></CardContent></Card>
      ))}
    </div>
    <Card>
      <CardHeader><CardTitle>All Quizzes</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow><TableHead>Title</TableHead><TableHead>Course</TableHead><TableHead>Questions</TableHead><TableHead>Duration</TableHead><TableHead>Attempts</TableHead><TableHead>Status</TableHead><TableHead>Actions</TableHead></TableRow></TableHeader>
          <TableBody>{quizzes.map(q => (
            <TableRow key={q.id}><TableCell className="font-medium">{q.title}</TableCell><TableCell>{q.course}</TableCell><TableCell>{q.questions}</TableCell><TableCell>{q.duration}</TableCell><TableCell>{q.attempts}</TableCell>
              <TableCell><Badge variant={q.status === "Active" ? "default" : q.status === "Completed" ? "secondary" : q.status === "Scheduled" ? "outline" : "outline"}>{q.status}</Badge></TableCell>
              <TableCell><Button size="sm" variant="ghost">Manage</Button></TableCell>
            </TableRow>
          ))}</TableBody>
        </Table>
      </CardContent>
    </Card>
  </div>
);

export default AdminOnlineExams;

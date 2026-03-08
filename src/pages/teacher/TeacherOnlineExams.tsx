import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Monitor } from "lucide-react";

const quizzes = [
  { id: 1, title: "DS Quiz 1 — Linked Lists", course: "CS201", questions: 15, duration: "20 min", submissions: 58, avgScore: "76%", status: "Completed" },
  { id: 2, title: "DS Quiz 2 — Trees", course: "CS201", questions: 20, duration: "30 min", submissions: 0, status: "Draft" },
  { id: 3, title: "DBMS Practice Test", course: "CS301", questions: 25, duration: "30 min", submissions: 52, avgScore: "68%", status: "Completed" },
];

const TeacherOnlineExams = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="font-display text-2xl font-bold">Online Quizzes</h1>
      <Button><Plus className="h-4 w-4 mr-1" /> Create Quiz</Button>
    </div>
    <Card>
      <CardHeader><CardTitle>My Quizzes</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow><TableHead>Title</TableHead><TableHead>Course</TableHead><TableHead>Questions</TableHead><TableHead>Duration</TableHead><TableHead>Submissions</TableHead><TableHead>Avg Score</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
          <TableBody>{quizzes.map(q => (
            <TableRow key={q.id}><TableCell className="font-medium">{q.title}</TableCell><TableCell>{q.course}</TableCell><TableCell>{q.questions}</TableCell><TableCell>{q.duration}</TableCell><TableCell>{q.submissions}</TableCell><TableCell>{q.avgScore || "—"}</TableCell>
              <TableCell><Badge variant={q.status === "Completed" ? "secondary" : "outline"}>{q.status}</Badge></TableCell>
            </TableRow>
          ))}</TableBody>
        </Table>
      </CardContent>
    </Card>
  </div>
);

export default TeacherOnlineExams;

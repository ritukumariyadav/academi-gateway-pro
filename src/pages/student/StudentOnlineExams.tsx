import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Monitor, Clock } from "lucide-react";

const quizzes = [
  { id: 1, title: "DS Quiz 1 — Linked Lists", course: "CS201", questions: 15, duration: "20 min", score: "12/15", status: "Completed" },
  { id: 2, title: "DBMS Practice Test", course: "CS301", questions: 25, duration: "30 min", score: "—", status: "Available" },
  { id: 3, title: "OS Unit Test", course: "CS302", questions: 20, duration: "25 min", score: "—", status: "Upcoming" },
];

const StudentOnlineExams = () => (
  <div className="space-y-6">
    <h1 className="font-display text-2xl font-bold">Online Quizzes</h1>
    <div className="space-y-4">
      {quizzes.map(q => (
        <Card key={q.id}>
          <CardContent className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Monitor className="h-8 w-8 text-accent" />
              <div>
                <p className="font-medium">{q.title}</p>
                <p className="text-sm text-muted-foreground">{q.course} · {q.questions} questions · {q.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {q.score !== "—" && <span className="text-sm font-bold">{q.score}</span>}
              <Badge variant={q.status === "Completed" ? "secondary" : q.status === "Available" ? "default" : "outline"}>{q.status}</Badge>
              {q.status === "Available" && <Button size="sm">Start</Button>}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default StudentOnlineExams;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Upload, Clock, CheckCircle, AlertCircle } from "lucide-react";

const assignments = [
  { id: 1, title: "Binary Search Tree Implementation", subject: "Data Structures", due: "Mar 12, 2026", status: "pending", marks: null },
  { id: 2, title: "Network Topology Design", subject: "Computer Networks", due: "Mar 15, 2026", status: "pending", marks: null },
  { id: 3, title: "Technical Report Writing", subject: "English Communication", due: "Mar 10, 2026", status: "submitted", marks: null },
  { id: 4, title: "Graph Theory Problem Set", subject: "Discrete Mathematics", due: "Mar 5, 2026", status: "graded", marks: "18/20" },
  { id: 5, title: "Logic Gate Circuit Design", subject: "Digital Electronics", due: "Mar 3, 2026", status: "graded", marks: "16/20" },
  { id: 6, title: "Sorting Algorithms Analysis", subject: "Data Structures", due: "Feb 28, 2026", status: "graded", marks: "19/20" },
  { id: 7, title: "IP Addressing Worksheet", subject: "Computer Networks", due: "Feb 25, 2026", status: "late", marks: "12/20" },
];

const statusIcon = (s: string) => {
  switch (s) {
    case "pending": return <Clock className="h-4 w-4 text-accent" />;
    case "submitted": return <Upload className="h-4 w-4 text-primary" />;
    case "graded": return <CheckCircle className="h-4 w-4 text-success" />;
    case "late": return <AlertCircle className="h-4 w-4 text-destructive" />;
  }
};

const statusVariant = (s: string) => {
  switch (s) {
    case "pending": return "outline";
    case "submitted": return "secondary";
    case "graded": return "default";
    case "late": return "destructive";
    default: return "outline";
  }
};

const StudentAssignments = () => (
  <div className="space-y-6">
    <h1 className="font-display text-2xl font-bold">Assignments</h1>
    <div className="grid sm:grid-cols-4 gap-4">
      {[
        { label: "Pending", count: 2, color: "text-accent" },
        { label: "Submitted", count: 1, color: "text-primary" },
        { label: "Graded", count: 3, color: "text-success" },
        { label: "Late", count: 1, color: "text-destructive" },
      ].map((s) => (
        <Card key={s.label}><CardContent className="p-4 text-center">
          <p className={`text-2xl font-bold ${s.color}`}>{s.count}</p>
          <p className="text-sm text-muted-foreground">{s.label}</p>
        </CardContent></Card>
      ))}
    </div>

    <Card>
      <CardHeader><CardTitle>All Assignments</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Assignment</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Marks</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {assignments.map((a) => (
              <TableRow key={a.id}>
                <TableCell className="font-medium">{a.title}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{a.subject}</TableCell>
                <TableCell className="text-sm">{a.due}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1.5">
                    {statusIcon(a.status)}
                    <Badge variant={statusVariant(a.status) as any} className="capitalize">{a.status}</Badge>
                  </div>
                </TableCell>
                <TableCell className="font-medium">{a.marks || "—"}</TableCell>
                <TableCell>
                  {a.status === "pending" && <Button size="sm" variant="outline"><Upload className="h-3 w-3 mr-1" /> Submit</Button>}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </div>
);

export default StudentAssignments;

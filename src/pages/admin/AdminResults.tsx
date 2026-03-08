import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, Upload } from "lucide-react";

const resultSummary = [
  { course: "CS201 — Data Structures", faculty: "Dr. Robert Chen", submitted: true, students: 45, passRate: 96 },
  { course: "CS301 — Algorithm Design", faculty: "Dr. Robert Chen", submitted: true, students: 38, passRate: 92 },
  { course: "MA201 — Discrete Math", faculty: "Dr. Lisa Wang", submitted: false, students: 42, passRate: 0 },
  { course: "PH201 — Physics II", faculty: "Dr. James Thompson", submitted: true, students: 50, passRate: 88 },
  { course: "EC201 — Digital Electronics", faculty: "Dr. Alan Foster", submitted: true, students: 40, passRate: 95 },
  { course: "EN201 — English Communication", faculty: "Prof. Maria Garcia", submitted: false, students: 36, passRate: 0 },
];

const AdminResults = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="font-display text-2xl font-bold">Manage Results</h1>
      <div className="flex gap-2">
        <Button variant="outline"><Download className="h-4 w-4 mr-1" /> Export All</Button>
        <Button><Upload className="h-4 w-4 mr-1" /> Bulk Upload</Button>
      </div>
    </div>
    <div className="flex gap-3">
      <Select defaultValue="sem4">
        <SelectTrigger className="w-[200px]"><SelectValue placeholder="Semester" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="sem4">Semester 4</SelectItem>
          <SelectItem value="sem3">Semester 3</SelectItem>
          <SelectItem value="sem2">Semester 2</SelectItem>
        </SelectContent>
      </Select>
      <Select defaultValue="midterm">
        <SelectTrigger className="w-[180px]"><SelectValue placeholder="Exam" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="midterm">Mid-Term</SelectItem>
          <SelectItem value="endterm">End-Term</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <Card>
      <CardHeader><CardTitle>Result Submission Status</CardTitle></CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Course</TableHead><TableHead>Faculty</TableHead><TableHead>Students</TableHead>
              <TableHead>Pass Rate</TableHead><TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {resultSummary.map((r, i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{r.course}</TableCell>
                <TableCell className="text-sm">{r.faculty}</TableCell>
                <TableCell>{r.students}</TableCell>
                <TableCell>{r.submitted ? `${r.passRate}%` : "—"}</TableCell>
                <TableCell>
                  <Badge variant={r.submitted ? "default" : "destructive"}>
                    {r.submitted ? "Submitted" : "Pending"}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </div>
);

export default AdminResults;

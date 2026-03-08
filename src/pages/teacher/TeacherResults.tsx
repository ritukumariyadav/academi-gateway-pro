import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, Save } from "lucide-react";

const students = [
  { roll: "CS2024-001", name: "Aisha Kumar", internal: 38, external: 72, total: 110, grade: "A" },
  { roll: "CS2024-005", name: "David Kim", internal: 35, external: 68, total: 103, grade: "A" },
  { roll: "CS2024-012", name: "Emma Wilson", internal: 28, external: 55, total: 83, grade: "B" },
  { roll: "CS2024-018", name: "James Park", internal: 40, external: 78, total: 118, grade: "A+" },
  { roll: "CS2024-023", name: "Maria Lopez", internal: 32, external: 60, total: 92, grade: "B+" },
  { roll: "CS2024-029", name: "Neha Gupta", internal: 36, external: 65, total: 101, grade: "A" },
  { roll: "CS2024-034", name: "Rahul Sharma", internal: 38, external: 72, total: 110, grade: "A" },
];

const TeacherResults = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="font-display text-2xl font-bold">Upload Results</h1>
      <div className="flex gap-2">
        <Button variant="outline"><Upload className="h-4 w-4 mr-1" /> Import CSV</Button>
        <Button><Save className="h-4 w-4 mr-1" /> Save Results</Button>
      </div>
    </div>

    <div className="flex gap-3 flex-wrap">
      <Select defaultValue="cs201">
        <SelectTrigger className="w-[220px]"><SelectValue placeholder="Select Course" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="cs201">CS201 — Data Structures</SelectItem>
          <SelectItem value="cs301">CS301 — Algorithm Design</SelectItem>
          <SelectItem value="cs401">CS401 — AI Fundamentals</SelectItem>
        </SelectContent>
      </Select>
      <Select defaultValue="midterm">
        <SelectTrigger className="w-[180px]"><SelectValue placeholder="Exam Type" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="midterm">Mid-Term Exam</SelectItem>
          <SelectItem value="endterm">End-Term Exam</SelectItem>
          <SelectItem value="internal">Internal Assessment</SelectItem>
        </SelectContent>
      </Select>
    </div>

    <Card>
      <CardHeader><CardTitle>CS201 — Data Structures (Mid-Term)</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Roll No</TableHead>
              <TableHead>Student</TableHead>
              <TableHead>Internal (50)</TableHead>
              <TableHead>External (100)</TableHead>
              <TableHead>Total (150)</TableHead>
              <TableHead>Grade</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((s) => (
              <TableRow key={s.roll}>
                <TableCell className="font-mono text-sm">{s.roll}</TableCell>
                <TableCell className="font-medium">{s.name}</TableCell>
                <TableCell><Input type="number" defaultValue={s.internal} className="w-20 h-8" /></TableCell>
                <TableCell><Input type="number" defaultValue={s.external} className="w-20 h-8" /></TableCell>
                <TableCell className="font-bold">{s.total}</TableCell>
                <TableCell className="font-medium">{s.grade}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </div>
);

export default TeacherResults;

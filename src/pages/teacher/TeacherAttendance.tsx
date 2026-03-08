import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Users } from "lucide-react";

const students = [
  { roll: "CS2024-001", name: "Aisha Kumar", present: true },
  { roll: "CS2024-005", name: "David Kim", present: true },
  { roll: "CS2024-012", name: "Emma Wilson", present: false },
  { roll: "CS2024-018", name: "James Park", present: true },
  { roll: "CS2024-023", name: "Maria Lopez", present: true },
  { roll: "CS2024-029", name: "Neha Gupta", present: false },
  { roll: "CS2024-034", name: "Rahul Sharma", present: true },
  { roll: "CS2024-042", name: "Sarah Chen", present: true },
];

const TeacherAttendance = () => (
  <div className="space-y-6">
    <h1 className="font-display text-2xl font-bold">Manage Attendance</h1>
    <div className="grid sm:grid-cols-3 gap-4">
      <Card><CardContent className="p-4 text-center">
        <p className="text-3xl font-bold text-success">6</p>
        <p className="text-sm text-muted-foreground">Present</p>
      </CardContent></Card>
      <Card><CardContent className="p-4 text-center">
        <p className="text-3xl font-bold text-destructive">2</p>
        <p className="text-sm text-muted-foreground">Absent</p>
      </CardContent></Card>
      <Card><CardContent className="p-4 text-center">
        <p className="text-3xl font-bold">8</p>
        <p className="text-sm text-muted-foreground">Total Students</p>
      </CardContent></Card>
    </div>

    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <CardTitle>Mark Attendance</CardTitle>
          <div className="flex gap-2">
            <Select defaultValue="cs201">
              <SelectTrigger className="w-[200px]"><SelectValue placeholder="Select Course" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="cs201">CS201 — Data Structures</SelectItem>
                <SelectItem value="cs301">CS301 — Algorithm Design</SelectItem>
                <SelectItem value="cs401">CS401 — AI Fundamentals</SelectItem>
              </SelectContent>
            </Select>
            <Button><CheckCircle className="h-4 w-4 mr-1" /> Submit</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">Present</TableHead>
              <TableHead>Roll No</TableHead>
              <TableHead>Student Name</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((s) => (
              <TableRow key={s.roll}>
                <TableCell><Checkbox defaultChecked={s.present} /></TableCell>
                <TableCell className="font-mono text-sm">{s.roll}</TableCell>
                <TableCell className="font-medium">{s.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </div>
);

export default TeacherAttendance;

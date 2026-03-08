import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const students = [
  { roll: "CS2024-001", name: "Aisha Kumar", email: "aisha.k@student.edu", attendance: 92, cgpa: 9.1, status: "active" },
  { roll: "CS2024-005", name: "David Kim", email: "david.k@student.edu", attendance: 88, cgpa: 8.7, status: "active" },
  { roll: "CS2024-012", name: "Emma Wilson", email: "emma.w@student.edu", attendance: 75, cgpa: 7.2, status: "warning" },
  { roll: "CS2024-018", name: "James Park", email: "james.p@student.edu", attendance: 90, cgpa: 8.9, status: "active" },
  { roll: "CS2024-023", name: "Maria Lopez", email: "maria.l@student.edu", attendance: 85, cgpa: 8.4, status: "active" },
  { roll: "CS2024-029", name: "Neha Gupta", email: "neha.g@student.edu", attendance: 70, cgpa: 6.8, status: "warning" },
  { roll: "CS2024-034", name: "Rahul Sharma", email: "rahul.s@student.edu", attendance: 87, cgpa: 8.4, status: "active" },
  { roll: "CS2024-042", name: "Sarah Chen", email: "sarah.c@student.edu", attendance: 95, cgpa: 9.4, status: "active" },
];

const TeacherStudents = () => (
  <div className="space-y-6">
    <h1 className="font-display text-2xl font-bold">Student List</h1>
    <div className="flex flex-col sm:flex-row gap-3">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search students..." className="pl-9" />
      </div>
      <Select defaultValue="cs201">
        <SelectTrigger className="w-[220px]"><SelectValue placeholder="Filter by Course" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Courses</SelectItem>
          <SelectItem value="cs201">CS201 — Data Structures</SelectItem>
          <SelectItem value="cs301">CS301 — Algorithm Design</SelectItem>
          <SelectItem value="cs401">CS401 — AI Fundamentals</SelectItem>
        </SelectContent>
      </Select>
    </div>

    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Roll No</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="text-center">Attendance</TableHead>
              <TableHead className="text-center">CGPA</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((s) => (
              <TableRow key={s.roll}>
                <TableCell className="font-mono text-sm">{s.roll}</TableCell>
                <TableCell className="font-medium">{s.name}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{s.email}</TableCell>
                <TableCell className="text-center">
                  <span className={s.attendance < 80 ? "text-destructive font-medium" : ""}>{s.attendance}%</span>
                </TableCell>
                <TableCell className="text-center font-medium">{s.cgpa}</TableCell>
                <TableCell>
                  <Badge variant={s.status === "warning" ? "destructive" : "default"} className="capitalize">{s.status}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </div>
);

export default TeacherStudents;

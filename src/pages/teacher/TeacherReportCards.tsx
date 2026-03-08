import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, FileText } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const students = [
  { roll: "CS2024001", name: "Raj Kumar", sgpa: 8.7, cgpa: 8.5, attendance: "92%", remarks: "Good performance" },
  { roll: "CS2024002", name: "Priya Sharma", sgpa: 9.2, cgpa: 9.0, attendance: "96%", remarks: "Excellent" },
  { roll: "CS2024003", name: "Amit Singh", sgpa: 7.8, cgpa: 7.6, attendance: "85%", remarks: "Needs improvement in practicals" },
  { roll: "CS2024004", name: "Maria Lopez", sgpa: 8.9, cgpa: 8.7, attendance: "94%", remarks: "Consistent performer" },
];

const TeacherReportCards = () => (
  <div className="space-y-6">
    <h1 className="font-display text-2xl font-bold">Report Cards</h1>
    <div className="flex gap-4 flex-wrap">
      <Select defaultValue="cs201"><SelectTrigger className="w-48"><SelectValue /></SelectTrigger>
        <SelectContent><SelectItem value="cs201">CS201 — Data Structures</SelectItem><SelectItem value="cs301">CS301 — DBMS</SelectItem></SelectContent>
      </Select>
      <Select defaultValue="spring2026"><SelectTrigger className="w-48"><SelectValue /></SelectTrigger>
        <SelectContent><SelectItem value="spring2026">Spring 2026</SelectItem><SelectItem value="fall2025">Fall 2025</SelectItem></SelectContent>
      </Select>
    </div>
    <Card>
      <CardHeader><CardTitle>Student Report Cards — Add Remarks</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow><TableHead>Roll</TableHead><TableHead>Name</TableHead><TableHead>SGPA</TableHead><TableHead>CGPA</TableHead><TableHead>Attendance</TableHead><TableHead>Remarks</TableHead><TableHead>Actions</TableHead></TableRow></TableHeader>
          <TableBody>{students.map(s => (
            <TableRow key={s.roll}><TableCell>{s.roll}</TableCell><TableCell className="font-medium">{s.name}</TableCell><TableCell>{s.sgpa}</TableCell><TableCell>{s.cgpa}</TableCell><TableCell>{s.attendance}</TableCell>
              <TableCell><span className="text-sm text-muted-foreground">{s.remarks}</span></TableCell>
              <TableCell><Button size="sm" variant="ghost">Edit</Button></TableCell>
            </TableRow>
          ))}</TableBody>
        </Table>
      </CardContent>
    </Card>
  </div>
);

export default TeacherReportCards;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Download, Printer } from "lucide-react";

const students = [
  { roll: "CS2024001", name: "Raj Kumar", class: "CS-A", sgpa: 8.7, cgpa: 8.5, attendance: "92%", status: "Generated" },
  { roll: "CS2024002", name: "Priya Sharma", class: "CS-A", sgpa: 9.2, cgpa: 9.0, attendance: "96%", status: "Generated" },
  { roll: "CS2024003", name: "Amit Singh", class: "CS-A", sgpa: 7.8, cgpa: 7.6, attendance: "85%", status: "Pending" },
  { roll: "ME2024001", name: "John Park", class: "ME-A", sgpa: 8.1, cgpa: 8.0, attendance: "90%", status: "Generated" },
  { roll: "EC2024001", name: "Sarah Lee", class: "EC-A", sgpa: 9.5, cgpa: 9.3, attendance: "98%", status: "Generated" },
];

const AdminReportCards = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="font-display text-2xl font-bold">Report Card Generator</h1>
      <div className="flex gap-2">
        <Button variant="outline"><Printer className="h-4 w-4 mr-1" /> Bulk Print</Button>
        <Button><Download className="h-4 w-4 mr-1" /> Export All</Button>
      </div>
    </div>
    <div className="flex gap-4 flex-wrap">
      <Select defaultValue="spring2026"><SelectTrigger className="w-48"><SelectValue /></SelectTrigger>
        <SelectContent><SelectItem value="spring2026">Spring 2026</SelectItem><SelectItem value="fall2025">Fall 2025</SelectItem></SelectContent>
      </Select>
      <Select><SelectTrigger className="w-48"><SelectValue placeholder="Select class" /></SelectTrigger>
        <SelectContent><SelectItem value="all">All Classes</SelectItem><SelectItem value="csa">CS-A</SelectItem><SelectItem value="mea">ME-A</SelectItem><SelectItem value="eca">EC-A</SelectItem></SelectContent>
      </Select>
      <Button>Generate Report Cards</Button>
    </div>
    <Card>
      <CardHeader><CardTitle>Student Report Cards</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow><TableHead>Roll No</TableHead><TableHead>Name</TableHead><TableHead>Class</TableHead><TableHead>SGPA</TableHead><TableHead>CGPA</TableHead><TableHead>Attendance</TableHead><TableHead>Status</TableHead><TableHead>Actions</TableHead></TableRow></TableHeader>
          <TableBody>{students.map(s => (
            <TableRow key={s.roll}><TableCell className="font-medium">{s.roll}</TableCell><TableCell>{s.name}</TableCell><TableCell>{s.class}</TableCell><TableCell>{s.sgpa}</TableCell><TableCell className="font-bold">{s.cgpa}</TableCell><TableCell>{s.attendance}</TableCell>
              <TableCell><Badge variant={s.status === "Generated" ? "secondary" : "outline"}>{s.status}</Badge></TableCell>
              <TableCell><div className="flex gap-1"><Button size="sm" variant="ghost"><FileText className="h-3 w-3" /></Button><Button size="sm" variant="ghost"><Download className="h-3 w-3" /></Button></div></TableCell>
            </TableRow>
          ))}</TableBody>
        </Table>
      </CardContent>
    </Card>
  </div>
);

export default AdminReportCards;

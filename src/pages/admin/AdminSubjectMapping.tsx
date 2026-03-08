import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const mappings = [
  { id: 1, subject: "Data Structures", code: "CS201", teacher: "Dr. Smith", class: "CS-A (2nd Year)", schedule: "Mon/Wed 10:00–11:30", students: 62 },
  { id: 2, subject: "Database Systems", code: "CS301", teacher: "Prof. Johnson", class: "CS-B (3rd Year)", schedule: "Tue/Thu 09:00–10:30", students: 58 },
  { id: 3, subject: "Thermodynamics", code: "ME201", teacher: "Dr. Brown", class: "ME-A (2nd Year)", schedule: "Mon/Wed 14:00–15:30", students: 55 },
  { id: 4, subject: "Circuit Theory", code: "EC101", teacher: "Prof. Davis", class: "EC-A (1st Year)", schedule: "Tue/Thu 11:00–12:30", students: 48 },
  { id: 5, subject: "Marketing Mgmt.", code: "BA301", teacher: "Dr. Wilson", class: "BA-A (3rd Year)", schedule: "Wed/Fri 10:00–11:30", students: 70 },
];

const AdminSubjectMapping = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="font-display text-2xl font-bold">Subject-Teacher Mapping</h1>
      <Dialog>
        <DialogTrigger asChild><Button><Plus className="h-4 w-4 mr-1" /> Assign Subject</Button></DialogTrigger>
        <DialogContent>
          <DialogHeader><DialogTitle>Assign Subject to Teacher</DialogTitle></DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2"><Label>Subject</Label>
              <Select><SelectTrigger><SelectValue placeholder="Select subject" /></SelectTrigger>
                <SelectContent><SelectItem value="cs201">CS201 - Data Structures</SelectItem><SelectItem value="cs301">CS301 - Database Systems</SelectItem></SelectContent>
              </Select>
            </div>
            <div className="space-y-2"><Label>Teacher</Label>
              <Select><SelectTrigger><SelectValue placeholder="Select teacher" /></SelectTrigger>
                <SelectContent><SelectItem value="smith">Dr. Smith</SelectItem><SelectItem value="johnson">Prof. Johnson</SelectItem></SelectContent>
              </Select>
            </div>
            <div className="space-y-2"><Label>Class / Section</Label>
              <Select><SelectTrigger><SelectValue placeholder="Select class" /></SelectTrigger>
                <SelectContent><SelectItem value="csa2">CS-A (2nd Year)</SelectItem><SelectItem value="csb3">CS-B (3rd Year)</SelectItem></SelectContent>
              </Select>
            </div>
            <Button className="w-full">Assign</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>

    <Card>
      <CardHeader><CardTitle>Current Mappings</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow><TableHead>Subject</TableHead><TableHead>Code</TableHead><TableHead>Teacher</TableHead><TableHead>Class</TableHead><TableHead>Schedule</TableHead><TableHead>Students</TableHead><TableHead>Actions</TableHead></TableRow></TableHeader>
          <TableBody>
            {mappings.map(m => (
              <TableRow key={m.id}>
                <TableCell className="font-medium">{m.subject}</TableCell>
                <TableCell><Badge variant="outline">{m.code}</Badge></TableCell>
                <TableCell>{m.teacher}</TableCell>
                <TableCell>{m.class}</TableCell>
                <TableCell className="text-sm">{m.schedule}</TableCell>
                <TableCell>{m.students}</TableCell>
                <TableCell><Button variant="ghost" size="sm">Edit</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </div>
);

export default AdminSubjectMapping;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Users } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const classes = [
  { id: 1, name: "CS-A", year: "1st Year", department: "Computer Science", students: 62, classTeacher: "Dr. Smith", room: "Room 101" },
  { id: 2, name: "CS-B", year: "1st Year", department: "Computer Science", students: 58, classTeacher: "Prof. Lee", room: "Room 102" },
  { id: 3, name: "ME-A", year: "2nd Year", department: "Mechanical Eng.", students: 55, classTeacher: "Dr. Brown", room: "Room 201" },
  { id: 4, name: "EC-A", year: "3rd Year", department: "Electronics", students: 48, classTeacher: "Prof. Davis", room: "Room 301" },
  { id: 5, name: "BA-A", year: "1st Year", department: "Business Admin", students: 70, classTeacher: "Dr. Wilson", room: "Room 401" },
  { id: 6, name: "PH-A", year: "2nd Year", department: "Physics", students: 42, classTeacher: "Dr. Taylor", room: "Lab 3" },
];

const AdminClasses = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="font-display text-2xl font-bold">Classes & Sections</h1>
      <Dialog>
        <DialogTrigger asChild><Button><Plus className="h-4 w-4 mr-1" /> Add Class</Button></DialogTrigger>
        <DialogContent>
          <DialogHeader><DialogTitle>Create New Class/Section</DialogTitle></DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2"><Label>Class Name</Label><Input placeholder="e.g. CS-A" /></div>
            <div className="space-y-2"><Label>Year</Label>
              <Select><SelectTrigger><SelectValue placeholder="Select year" /></SelectTrigger>
                <SelectContent><SelectItem value="1">1st Year</SelectItem><SelectItem value="2">2nd Year</SelectItem><SelectItem value="3">3rd Year</SelectItem><SelectItem value="4">4th Year</SelectItem></SelectContent>
              </Select>
            </div>
            <div className="space-y-2"><Label>Department</Label><Input placeholder="Department" /></div>
            <div className="space-y-2"><Label>Class Teacher</Label><Input placeholder="Teacher name" /></div>
            <div className="space-y-2"><Label>Room</Label><Input placeholder="Room number" /></div>
            <Button className="w-full">Create Class</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {[{ label: "Total Classes", value: "24" }, { label: "Total Sections", value: "48" }, { label: "Students Assigned", value: "5,240" }, { label: "Unassigned", value: "12" }].map((s, i) => (
        <Card key={i}><CardContent className="p-4"><Users className="h-5 w-5 text-accent mb-2" /><p className="text-lg font-bold">{s.value}</p><p className="text-xs text-muted-foreground">{s.label}</p></CardContent></Card>
      ))}
    </div>

    <Card>
      <CardHeader><CardTitle>All Classes</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow><TableHead>Class</TableHead><TableHead>Year</TableHead><TableHead>Department</TableHead><TableHead>Students</TableHead><TableHead>Class Teacher</TableHead><TableHead>Room</TableHead><TableHead>Actions</TableHead></TableRow></TableHeader>
          <TableBody>
            {classes.map(c => (
              <TableRow key={c.id}>
                <TableCell className="font-medium">{c.name}</TableCell>
                <TableCell><Badge variant="outline">{c.year}</Badge></TableCell>
                <TableCell>{c.department}</TableCell>
                <TableCell>{c.students}</TableCell>
                <TableCell>{c.classTeacher}</TableCell>
                <TableCell>{c.room}</TableCell>
                <TableCell><Button variant="ghost" size="sm">Manage</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </div>
);

export default AdminClasses;

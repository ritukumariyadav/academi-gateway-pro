import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Eye, Pencil, Trash2 } from "lucide-react";

const teachers = [
  { id: 1, empId: "FAC-2012-018", name: "Dr. Robert Chen", department: "Computer Science", designation: "Professor & HOD", status: "active" },
  { id: 2, empId: "FAC-2015-024", name: "Prof. Sarah Williams", department: "Management", designation: "Professor & HOD", status: "active" },
  { id: 3, empId: "FAC-2010-005", name: "Dr. James Thompson", department: "Physics", designation: "Professor & HOD", status: "active" },
  { id: 4, empId: "FAC-2014-032", name: "Prof. Maria Garcia", department: "Arts & Humanities", designation: "Professor & HOD", status: "active" },
  { id: 5, empId: "FAC-2008-003", name: "Dr. Emily Park", department: "Medicine", designation: "Professor & HOD", status: "active" },
  { id: 6, empId: "FAC-2018-041", name: "Dr. Alan Foster", department: "Computer Science", designation: "Associate Professor", status: "active" },
  { id: 7, empId: "FAC-2020-055", name: "Dr. Lisa Wang", department: "Mathematics", designation: "Assistant Professor", status: "on-leave" },
];

const AdminTeachers = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="font-display text-2xl font-bold">Manage Teachers</h1>
      <Button><Plus className="h-4 w-4 mr-1" /> Add Teacher</Button>
    </div>
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input placeholder="Search teachers..." className="pl-9" />
    </div>
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Emp ID</TableHead><TableHead>Name</TableHead><TableHead>Department</TableHead>
              <TableHead>Designation</TableHead><TableHead>Status</TableHead><TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {teachers.map((t) => (
              <TableRow key={t.id}>
                <TableCell className="font-mono text-sm">{t.empId}</TableCell>
                <TableCell className="font-medium">{t.name}</TableCell>
                <TableCell className="text-sm">{t.department}</TableCell>
                <TableCell className="text-sm">{t.designation}</TableCell>
                <TableCell><Badge variant={t.status === "active" ? "default" : "secondary"} className="capitalize">{t.status}</Badge></TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    <Button size="icon" variant="ghost" className="h-8 w-8"><Eye className="h-4 w-4" /></Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8"><Pencil className="h-4 w-4" /></Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8 text-destructive"><Trash2 className="h-4 w-4" /></Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </div>
);

export default AdminTeachers;

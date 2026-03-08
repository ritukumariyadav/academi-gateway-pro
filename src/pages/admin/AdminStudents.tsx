import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Eye, Pencil, Trash2 } from "lucide-react";

const students = [
  { id: 1, roll: "CS2024-001", name: "Aisha Kumar", program: "B.Tech CS", semester: 4, status: "active" },
  { id: 2, roll: "CS2024-005", name: "David Kim", program: "B.Tech CS", semester: 4, status: "active" },
  { id: 3, roll: "MBA2024-012", name: "Emma Wilson", program: "MBA", semester: 2, status: "active" },
  { id: 4, roll: "ME2023-018", name: "James Park", program: "B.Tech ME", semester: 6, status: "active" },
  { id: 5, roll: "PHY2024-023", name: "Maria Lopez", program: "B.Sc Physics", semester: 4, status: "inactive" },
  { id: 6, roll: "CS2023-029", name: "Neha Gupta", program: "B.Tech CS", semester: 6, status: "active" },
  { id: 7, roll: "CS2024-034", name: "Rahul Sharma", program: "B.Tech CS", semester: 4, status: "active" },
  { id: 8, roll: "ENG2024-042", name: "Sarah Chen", program: "B.A. English", semester: 2, status: "active" },
];

const AdminStudents = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="font-display text-2xl font-bold">Manage Students</h1>
      <Button><Plus className="h-4 w-4 mr-1" /> Add Student</Button>
    </div>
    <div className="flex gap-3">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search by name or roll number..." className="pl-9" />
      </div>
    </div>
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Roll No</TableHead><TableHead>Name</TableHead><TableHead>Program</TableHead>
              <TableHead>Semester</TableHead><TableHead>Status</TableHead><TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((s) => (
              <TableRow key={s.id}>
                <TableCell className="font-mono text-sm">{s.roll}</TableCell>
                <TableCell className="font-medium">{s.name}</TableCell>
                <TableCell className="text-sm">{s.program}</TableCell>
                <TableCell>{s.semester}</TableCell>
                <TableCell><Badge variant={s.status === "active" ? "default" : "secondary"} className="capitalize">{s.status}</Badge></TableCell>
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

export default AdminStudents;

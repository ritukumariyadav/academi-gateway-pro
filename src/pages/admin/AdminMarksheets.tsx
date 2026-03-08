import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Plus, Save, FileText, Search } from "lucide-react";
import { DataTable, DataTableColumnHeader } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { toast } from "sonner";

type Marksheet = {
  id: number;
  roll: string;
  name: string;
  course: string;
  semester: string;
  subjects: { name: string; internal: number; external: number; total: number; grade: string }[];
  sgpa: number;
  status: string;
};

const initialMarksheets: Marksheet[] = [
  { id: 1, roll: "CS2024-001", name: "Aisha Kumar", course: "Computer Science", semester: "Sem 3", subjects: [{ name: "Data Structures", internal: 38, external: 72, total: 110, grade: "A" }, { name: "Discrete Math", internal: 35, external: 68, total: 103, grade: "A" }], sgpa: 8.6, status: "published" },
  { id: 2, roll: "CS2024-005", name: "David Kim", course: "Computer Science", semester: "Sem 3", subjects: [{ name: "Data Structures", internal: 35, external: 68, total: 103, grade: "A" }, { name: "Discrete Math", internal: 30, external: 60, total: 90, grade: "B+" }], sgpa: 8.0, status: "published" },
  { id: 3, roll: "CS2024-012", name: "Emma Wilson", course: "Computer Science", semester: "Sem 3", subjects: [{ name: "Data Structures", internal: 28, external: 55, total: 83, grade: "B" }], sgpa: 7.2, status: "draft" },
  { id: 4, roll: "MBA2024-003", name: "James Park", course: "Business Administration", semester: "Sem 2", subjects: [{ name: "Marketing", internal: 40, external: 78, total: 118, grade: "A+" }], sgpa: 9.1, status: "published" },
];

const subjectsList = ["Data Structures", "Discrete Math", "Computer Networks", "Digital Electronics", "English Communication", "Marketing", "Finance", "Physics", "Calculus"];

const columns: ColumnDef<Marksheet>[] = [
  { accessorKey: "roll", header: ({ column }) => <DataTableColumnHeader column={column} title="Roll No" />, cell: ({ row }) => <span className="font-mono text-sm">{row.getValue("roll")}</span> },
  { accessorKey: "name", header: ({ column }) => <DataTableColumnHeader column={column} title="Student" />, cell: ({ row }) => <span className="font-medium">{row.getValue("name")}</span> },
  { accessorKey: "course", header: ({ column }) => <DataTableColumnHeader column={column} title="Course" /> },
  { accessorKey: "semester", header: "Semester" },
  { accessorKey: "sgpa", header: ({ column }) => <DataTableColumnHeader column={column} title="SGPA" />, cell: ({ row }) => <span className="font-bold">{row.getValue("sgpa")}</span> },
  { accessorKey: "status", header: "Status", cell: ({ row }) => <Badge variant={row.getValue("status") === "published" ? "default" : "secondary"} className="capitalize">{row.getValue("status")}</Badge> },
  { id: "actions", cell: ({ row }) => <Button size="sm" variant="ghost"><FileText className="h-3 w-3 mr-1" /> View</Button> },
];

const AdminMarksheets = () => {
  const [marksheets, setMarksheets] = useState(initialMarksheets);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ roll: "", name: "", course: "cs", semester: "sem3" });
  const [subjectMarks, setSubjectMarks] = useState([{ subject: "Data Structures", internal: 0, external: 0 }]);

  const addSubject = () => setSubjectMarks([...subjectMarks, { subject: "", internal: 0, external: 0 }]);
  const removeSubject = (idx: number) => setSubjectMarks(subjectMarks.filter((_, i) => i !== idx));

  const updateSubjectMark = (idx: number, field: string, value: string | number) => {
    const updated = [...subjectMarks];
    updated[idx] = { ...updated[idx], [field]: value };
    setSubjectMarks(updated);
  };

  const getGrade = (total: number) => {
    if (total >= 115) return "A+";
    if (total >= 100) return "A";
    if (total >= 85) return "B+";
    if (total >= 70) return "B";
    if (total >= 55) return "C";
    return "F";
  };

  const handleSave = () => {
    const subjects = subjectMarks.map((s) => ({
      name: s.subject,
      internal: s.internal,
      external: s.external,
      total: s.internal + s.external,
      grade: getGrade(s.internal + s.external),
    }));
    const avgTotal = subjects.reduce((a, s) => a + s.total, 0) / subjects.length;
    const sgpa = Math.round((avgTotal / 150) * 10 * 10) / 10;

    setMarksheets([...marksheets, {
      id: marksheets.length + 1,
      roll: formData.roll,
      name: formData.name,
      course: formData.course === "cs" ? "Computer Science" : "Business Administration",
      semester: formData.semester === "sem3" ? "Sem 3" : "Sem 2",
      subjects,
      sgpa,
      status: "draft",
    }]);
    toast.success("Marksheet created successfully!");
    setOpen(false);
    setFormData({ roll: "", name: "", course: "cs", semester: "sem3" });
    setSubjectMarks([{ subject: "Data Structures", internal: 0, external: 0 }]);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="font-display text-2xl font-bold">Manage Marksheets</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button><Plus className="h-4 w-4 mr-1" /> Create Marksheet</Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Create New Marksheet</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Roll Number</Label>
                  <Input placeholder="CS2024-001" value={formData.roll} onChange={(e) => setFormData({ ...formData, roll: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label>Student Name</Label>
                  <Input placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label>Course</Label>
                  <Select value={formData.course} onValueChange={(v) => setFormData({ ...formData, course: v })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cs">Computer Science</SelectItem>
                      <SelectItem value="mba">Business Administration</SelectItem>
                      <SelectItem value="mech">Mechanical Engineering</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Semester</Label>
                  <Select value={formData.semester} onValueChange={(v) => setFormData({ ...formData, semester: v })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => <SelectItem key={s} value={`sem${s}`}>Semester {s}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label className="text-base font-semibold">Subject Marks</Label>
                  <Button type="button" size="sm" variant="outline" onClick={addSubject}><Plus className="h-3 w-3 mr-1" /> Add Subject</Button>
                </div>
                {subjectMarks.map((s, idx) => (
                  <div key={idx} className="grid grid-cols-[1fr_80px_80px_auto] gap-2 items-end">
                    <div className="space-y-1">
                      {idx === 0 && <Label className="text-xs">Subject</Label>}
                      <Select value={s.subject} onValueChange={(v) => updateSubjectMark(idx, "subject", v)}>
                        <SelectTrigger className="h-9"><SelectValue placeholder="Select" /></SelectTrigger>
                        <SelectContent>
                          {subjectsList.map((sub) => <SelectItem key={sub} value={sub}>{sub}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1">
                      {idx === 0 && <Label className="text-xs">Int (50)</Label>}
                      <Input type="number" min={0} max={50} className="h-9" value={s.internal} onChange={(e) => updateSubjectMark(idx, "internal", Number(e.target.value))} />
                    </div>
                    <div className="space-y-1">
                      {idx === 0 && <Label className="text-xs">Ext (100)</Label>}
                      <Input type="number" min={0} max={100} className="h-9" value={s.external} onChange={(e) => updateSubjectMark(idx, "external", Number(e.target.value))} />
                    </div>
                    <Button type="button" size="sm" variant="ghost" className="h-9 text-destructive" onClick={() => removeSubject(idx)} disabled={subjectMarks.length <= 1}>✕</Button>
                  </div>
                ))}
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>
              <Button onClick={handleSave} disabled={!formData.roll || !formData.name}><Save className="h-4 w-4 mr-1" /> Save Marksheet</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <Card><CardContent className="p-4 text-center"><p className="text-3xl font-bold text-accent">{marksheets.filter((m) => m.status === "published").length}</p><p className="text-sm text-muted-foreground">Published</p></CardContent></Card>
        <Card><CardContent className="p-4 text-center"><p className="text-3xl font-bold">{marksheets.filter((m) => m.status === "draft").length}</p><p className="text-sm text-muted-foreground">Drafts</p></CardContent></Card>
        <Card><CardContent className="p-4 text-center"><p className="text-3xl font-bold">{marksheets.length}</p><p className="text-sm text-muted-foreground">Total</p></CardContent></Card>
      </div>

      <Card>
        <CardHeader><CardTitle>All Marksheets</CardTitle></CardHeader>
        <CardContent>
          <DataTable columns={columns} data={marksheets} searchKey="name" searchPlaceholder="Search by student name..." />
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminMarksheets;

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable, DataTableColumnHeader } from "@/components/ui/data-table";
import { Plus, BookOpen, Save } from "lucide-react";
import { toast } from "sonner";

type Syllabus = {
  id: number;
  course: string;
  subject: string;
  semester: string;
  units: { title: string; topics: string }[];
  updatedAt: string;
  status: string;
};

const initialSyllabus: Syllabus[] = [
  { id: 1, course: "Computer Science", subject: "Data Structures", semester: "Sem 3", units: [{ title: "Arrays & Linked Lists", topics: "Static arrays, Dynamic arrays, Singly/Doubly linked lists" }, { title: "Trees & Graphs", topics: "BST, AVL Trees, BFS, DFS, Shortest path" }], updatedAt: "Mar 1, 2026", status: "published" },
  { id: 2, course: "Computer Science", subject: "Algorithm Design", semester: "Sem 4", units: [{ title: "Divide & Conquer", topics: "Merge sort, Quick sort, Binary search" }, { title: "Dynamic Programming", topics: "Memoization, Tabulation, Knapsack, LCS" }], updatedAt: "Feb 28, 2026", status: "published" },
  { id: 3, course: "Business Administration", subject: "Marketing Management", semester: "Sem 2", units: [{ title: "Marketing Fundamentals", topics: "4Ps, STP, Consumer behavior" }], updatedAt: "Feb 25, 2026", status: "draft" },
  { id: 4, course: "Computer Science", subject: "Computer Networks", semester: "Sem 3", units: [{ title: "OSI Model", topics: "7 layers, TCP/IP, Protocols" }, { title: "Network Security", topics: "Encryption, Firewalls, VPN" }], updatedAt: "Feb 20, 2026", status: "published" },
];

const columns: ColumnDef<Syllabus>[] = [
  { accessorKey: "subject", header: ({ column }) => <DataTableColumnHeader column={column} title="Subject" />, cell: ({ row }) => <span className="font-medium">{row.getValue("subject")}</span> },
  { accessorKey: "course", header: ({ column }) => <DataTableColumnHeader column={column} title="Course" /> },
  { accessorKey: "semester", header: "Semester" },
  { id: "units", header: "Units", cell: ({ row }) => <span>{row.original.units.length} unit(s)</span> },
  { accessorKey: "updatedAt", header: ({ column }) => <DataTableColumnHeader column={column} title="Updated" /> },
  { accessorKey: "status", header: "Status", cell: ({ row }) => <Badge variant={row.getValue("status") === "published" ? "default" : "secondary"} className="capitalize">{row.getValue("status")}</Badge> },
  { id: "actions", cell: () => <Button size="sm" variant="ghost"><BookOpen className="h-3 w-3 mr-1" /> View</Button> },
];

const AdminSyllabus = () => {
  const [syllabus, setSyllabus] = useState(initialSyllabus);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ course: "cs", subject: "", semester: "sem3" });
  const [units, setUnits] = useState([{ title: "", topics: "" }]);

  const addUnit = () => setUnits([...units, { title: "", topics: "" }]);
  const updateUnit = (idx: number, field: string, value: string) => {
    const updated = [...units];
    updated[idx] = { ...updated[idx], [field]: value };
    setUnits(updated);
  };

  const courseMap: Record<string, string> = { cs: "Computer Science", mba: "Business Administration", mech: "Mechanical Engineering" };

  const handleSave = () => {
    setSyllabus([...syllabus, {
      id: syllabus.length + 1,
      course: courseMap[form.course],
      subject: form.subject,
      semester: form.semester.replace("sem", "Sem "),
      units: units.filter((u) => u.title),
      updatedAt: "Just now",
      status: "draft",
    }]);
    toast.success("Syllabus created successfully!");
    setOpen(false);
    setForm({ course: "cs", subject: "", semester: "sem3" });
    setUnits([{ title: "", topics: "" }]);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="font-display text-2xl font-bold">Manage Syllabus</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button><Plus className="h-4 w-4 mr-1" /> Add Syllabus</Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
            <DialogHeader><DialogTitle>Create Syllabus</DialogTitle></DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>Course</Label>
                  <Select value={form.course} onValueChange={(v) => setForm({ ...form, course: v })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cs">Computer Science</SelectItem>
                      <SelectItem value="mba">Business Administration</SelectItem>
                      <SelectItem value="mech">Mechanical Engineering</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Subject Name</Label>
                  <Input placeholder="e.g. Data Structures" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label>Semester</Label>
                  <Select value={form.semester} onValueChange={(v) => setForm({ ...form, semester: v })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => <SelectItem key={s} value={`sem${s}`}>Semester {s}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label className="text-base font-semibold">Units / Modules</Label>
                  <Button type="button" size="sm" variant="outline" onClick={addUnit}><Plus className="h-3 w-3 mr-1" /> Add Unit</Button>
                </div>
                {units.map((u, idx) => (
                  <Card key={idx}>
                    <CardContent className="p-3 space-y-2">
                      <Input placeholder={`Unit ${idx + 1} Title`} value={u.title} onChange={(e) => updateUnit(idx, "title", e.target.value)} />
                      <Textarea placeholder="Topics covered (comma-separated)" rows={2} value={u.topics} onChange={(e) => updateUnit(idx, "topics", e.target.value)} />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>
              <Button onClick={handleSave} disabled={!form.subject}><Save className="h-4 w-4 mr-1" /> Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader><CardTitle>All Syllabus</CardTitle></CardHeader>
        <CardContent>
          <DataTable columns={columns} data={syllabus} searchKey="subject" searchPlaceholder="Search by subject..." />
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminSyllabus;

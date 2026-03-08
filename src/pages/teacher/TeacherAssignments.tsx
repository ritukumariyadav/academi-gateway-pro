import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Plus, Eye, Save } from "lucide-react";
import { DataTable, DataTableColumnHeader } from "@/components/ui/data-table";
import { toast } from "sonner";

type Assignment = { id: number; title: string; course: string; due: string; submitted: number; total: number; status: string; description?: string };

const initialAssignments: Assignment[] = [
  { id: 1, title: "Binary Search Tree Implementation", course: "CS201 — Data Structures", due: "Mar 12, 2026", submitted: 32, total: 45, status: "active" },
  { id: 2, title: "Greedy Algorithm Problem Set", course: "CS301 — Algorithm Design", due: "Mar 15, 2026", submitted: 10, total: 38, status: "active" },
  { id: 3, title: "Neural Network Basics Report", course: "CS401 — AI Fundamentals", due: "Mar 18, 2026", submitted: 0, total: 52, status: "active" },
  { id: 4, title: "Graph Theory Problem Set", course: "CS201 — Data Structures", due: "Mar 5, 2026", submitted: 44, total: 45, status: "grading" },
  { id: 5, title: "Sorting Algorithms Analysis", course: "CS201 — Data Structures", due: "Feb 28, 2026", submitted: 45, total: 45, status: "completed" },
  { id: 6, title: "Search Algorithm Comparison", course: "CS301 — Algorithm Design", due: "Feb 20, 2026", submitted: 38, total: 38, status: "completed" },
];

const columns: ColumnDef<Assignment>[] = [
  { accessorKey: "title", header: ({ column }) => <DataTableColumnHeader column={column} title="Assignment" />, cell: ({ row }) => <span className="font-medium">{row.getValue("title")}</span> },
  { accessorKey: "course", header: ({ column }) => <DataTableColumnHeader column={column} title="Course" />, cell: ({ row }) => <span className="text-sm text-muted-foreground">{row.getValue("course")}</span> },
  { accessorKey: "due", header: ({ column }) => <DataTableColumnHeader column={column} title="Due Date" /> },
  { id: "submissions", header: "Submissions", cell: ({ row }) => `${row.original.submitted}/${row.original.total}` },
  { accessorKey: "status", header: "Status", cell: ({ row }) => <Badge variant={row.getValue("status") === "completed" ? "default" : row.getValue("status") === "grading" ? "secondary" : "outline"} className="capitalize">{row.getValue("status")}</Badge> },
  { id: "actions", cell: () => <Button size="sm" variant="ghost"><Eye className="h-3 w-3 mr-1" /> View</Button> },
];

const TeacherAssignments = () => {
  const [assignments, setAssignments] = useState(initialAssignments);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ title: "", course: "cs201", due: "", description: "", totalMarks: "20" });

  const courseMap: Record<string, string> = { cs201: "CS201 — Data Structures", cs301: "CS301 — Algorithm Design", cs401: "CS401 — AI Fundamentals" };

  const handleCreate = () => {
    setAssignments([{
      id: assignments.length + 1,
      title: form.title,
      course: courseMap[form.course],
      due: form.due || "TBD",
      submitted: 0,
      total: 45,
      status: "active",
      description: form.description,
    }, ...assignments]);
    toast.success("Assignment created and sent to students!");
    setOpen(false);
    setForm({ title: "", course: "cs201", due: "", description: "", totalMarks: "20" });
  };

  const active = assignments.filter((a) => a.status === "active").length;
  const grading = assignments.filter((a) => a.status === "grading").length;
  const completed = assignments.filter((a) => a.status === "completed").length;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="font-display text-2xl font-bold">Manage Assignments</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button><Plus className="h-4 w-4 mr-1" /> Create Assignment</Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader><DialogTitle>Create New Assignment</DialogTitle></DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Assignment Title</Label>
                <Input placeholder="e.g. Binary Search Tree Implementation" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Course</Label>
                  <Select value={form.course} onValueChange={(v) => setForm({ ...form, course: v })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cs201">CS201 — Data Structures</SelectItem>
                      <SelectItem value="cs301">CS301 — Algorithm Design</SelectItem>
                      <SelectItem value="cs401">CS401 — AI Fundamentals</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Due Date</Label>
                  <Input type="date" value={form.due} onChange={(e) => setForm({ ...form, due: e.target.value })} />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Total Marks</Label>
                <Input type="number" placeholder="20" value={form.totalMarks} onChange={(e) => setForm({ ...form, totalMarks: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Description / Instructions</Label>
                <Textarea placeholder="Provide detailed instructions for the assignment..." rows={4} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>
              <Button onClick={handleCreate} disabled={!form.title}><Save className="h-4 w-4 mr-1" /> Create & Assign</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        <Card><CardContent className="p-4 text-center"><p className="text-3xl font-bold text-accent">{active}</p><p className="text-sm text-muted-foreground">Active</p></CardContent></Card>
        <Card><CardContent className="p-4 text-center"><p className="text-3xl font-bold">{grading}</p><p className="text-sm text-muted-foreground">Needs Grading</p></CardContent></Card>
        <Card><CardContent className="p-4 text-center"><p className="text-3xl font-bold text-success">{completed}</p><p className="text-sm text-muted-foreground">Completed</p></CardContent></Card>
      </div>
      <Card>
        <CardHeader><CardTitle>All Assignments</CardTitle></CardHeader>
        <CardContent>
          <DataTable columns={columns} data={assignments} searchKey="title" searchPlaceholder="Search assignments..." />
        </CardContent>
      </Card>
    </div>
  );
};

export default TeacherAssignments;

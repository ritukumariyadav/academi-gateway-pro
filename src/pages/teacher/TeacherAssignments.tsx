import { ColumnDef } from "@tanstack/react-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, Eye } from "lucide-react";
import { DataTable, DataTableColumnHeader } from "@/components/ui/data-table";

type Assignment = { id: number; title: string; course: string; due: string; submitted: number; total: number; status: string };

const assignments: Assignment[] = [
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

const TeacherAssignments = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="font-display text-2xl font-bold">Manage Assignments</h1>
      <Button><Plus className="h-4 w-4 mr-1" /> Create Assignment</Button>
    </div>
    <div className="grid sm:grid-cols-3 gap-4">
      <Card><CardContent className="p-4 text-center"><p className="text-3xl font-bold text-accent">3</p><p className="text-sm text-muted-foreground">Active</p></CardContent></Card>
      <Card><CardContent className="p-4 text-center"><p className="text-3xl font-bold">1</p><p className="text-sm text-muted-foreground">Needs Grading</p></CardContent></Card>
      <Card><CardContent className="p-4 text-center"><p className="text-3xl font-bold text-success">2</p><p className="text-sm text-muted-foreground">Completed</p></CardContent></Card>
    </div>
    <Card>
      <CardHeader><CardTitle>All Assignments</CardTitle></CardHeader>
      <CardContent>
        <DataTable columns={columns} data={assignments} searchKey="title" searchPlaceholder="Search assignments..." />
      </CardContent>
    </Card>
  </div>
);

export default TeacherAssignments;

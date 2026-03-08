import { ColumnDef } from "@tanstack/react-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Upload, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { DataTable, DataTableColumnHeader } from "@/components/ui/data-table";

type Assignment = { id: number; title: string; subject: string; due: string; status: string; marks: string | null };

const assignments: Assignment[] = [
  { id: 1, title: "Binary Search Tree Implementation", subject: "Data Structures", due: "Mar 12, 2026", status: "pending", marks: null },
  { id: 2, title: "Network Topology Design", subject: "Computer Networks", due: "Mar 15, 2026", status: "pending", marks: null },
  { id: 3, title: "Technical Report Writing", subject: "English Communication", due: "Mar 10, 2026", status: "submitted", marks: null },
  { id: 4, title: "Graph Theory Problem Set", subject: "Discrete Mathematics", due: "Mar 5, 2026", status: "graded", marks: "18/20" },
  { id: 5, title: "Logic Gate Circuit Design", subject: "Digital Electronics", due: "Mar 3, 2026", status: "graded", marks: "16/20" },
  { id: 6, title: "Sorting Algorithms Analysis", subject: "Data Structures", due: "Feb 28, 2026", status: "graded", marks: "19/20" },
  { id: 7, title: "IP Addressing Worksheet", subject: "Computer Networks", due: "Feb 25, 2026", status: "late", marks: "12/20" },
];

const statusIcon = (s: string) => {
  switch (s) {
    case "pending": return <Clock className="h-4 w-4 text-accent" />;
    case "submitted": return <Upload className="h-4 w-4 text-primary" />;
    case "graded": return <CheckCircle className="h-4 w-4 text-success" />;
    case "late": return <AlertCircle className="h-4 w-4 text-destructive" />;
  }
};

const statusVariant = (s: string) => {
  switch (s) { case "pending": return "outline"; case "submitted": return "secondary"; case "graded": return "default"; case "late": return "destructive"; default: return "outline"; }
};

const columns: ColumnDef<Assignment>[] = [
  { accessorKey: "title", header: ({ column }) => <DataTableColumnHeader column={column} title="Assignment" />, cell: ({ row }) => <span className="font-medium">{row.getValue("title")}</span> },
  { accessorKey: "subject", header: ({ column }) => <DataTableColumnHeader column={column} title="Subject" />, cell: ({ row }) => <span className="text-sm text-muted-foreground">{row.getValue("subject")}</span> },
  { accessorKey: "due", header: ({ column }) => <DataTableColumnHeader column={column} title="Due Date" /> },
  {
    accessorKey: "status", header: "Status",
    cell: ({ row }) => (
      <div className="flex items-center gap-1.5">
        {statusIcon(row.getValue("status"))}
        <Badge variant={statusVariant(row.getValue("status")) as any} className="capitalize">{row.getValue("status")}</Badge>
      </div>
    ),
  },
  { accessorKey: "marks", header: "Marks", cell: ({ row }) => <span className="font-medium">{row.getValue("marks") || "—"}</span> },
  {
    id: "actions",
    cell: ({ row }) => row.original.status === "pending" ? <Button size="sm" variant="outline"><Upload className="h-3 w-3 mr-1" /> Submit</Button> : null,
  },
];

const StudentAssignments = () => (
  <div className="space-y-6">
    <h1 className="font-display text-2xl font-bold">Assignments</h1>
    <div className="grid sm:grid-cols-4 gap-4">
      {[
        { label: "Pending", count: 2, color: "text-accent" },
        { label: "Submitted", count: 1, color: "text-primary" },
        { label: "Graded", count: 3, color: "text-success" },
        { label: "Late", count: 1, color: "text-destructive" },
      ].map((s) => (
        <Card key={s.label}><CardContent className="p-4 text-center"><p className={`text-2xl font-bold ${s.color}`}>{s.count}</p><p className="text-sm text-muted-foreground">{s.label}</p></CardContent></Card>
      ))}
    </div>
    <Card>
      <CardHeader><CardTitle>All Assignments</CardTitle></CardHeader>
      <CardContent>
        <DataTable columns={columns} data={assignments} searchKey="title" searchPlaceholder="Search assignments..." />
      </CardContent>
    </Card>
  </div>
);

export default StudentAssignments;

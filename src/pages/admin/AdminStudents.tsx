import { ColumnDef } from "@tanstack/react-table";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, Eye, Pencil, Trash2 } from "lucide-react";
import { DataTable, DataTableColumnHeader } from "@/components/ui/data-table";

type Student = {
  id: number;
  roll: string;
  name: string;
  program: string;
  semester: number;
  status: string;
};

const students: Student[] = [
  { id: 1, roll: "CS2024-001", name: "Aisha Kumar", program: "B.Tech CS", semester: 4, status: "active" },
  { id: 2, roll: "CS2024-005", name: "David Kim", program: "B.Tech CS", semester: 4, status: "active" },
  { id: 3, roll: "MBA2024-012", name: "Emma Wilson", program: "MBA", semester: 2, status: "active" },
  { id: 4, roll: "ME2023-018", name: "James Park", program: "B.Tech ME", semester: 6, status: "active" },
  { id: 5, roll: "PHY2024-023", name: "Maria Lopez", program: "B.Sc Physics", semester: 4, status: "inactive" },
  { id: 6, roll: "CS2023-029", name: "Neha Gupta", program: "B.Tech CS", semester: 6, status: "active" },
  { id: 7, roll: "CS2024-034", name: "Rahul Sharma", program: "B.Tech CS", semester: 4, status: "active" },
  { id: 8, roll: "ENG2024-042", name: "Sarah Chen", program: "B.A. English", semester: 2, status: "active" },
];

const columns: ColumnDef<Student>[] = [
  {
    accessorKey: "roll",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Roll No" />,
    cell: ({ row }) => <span className="font-mono text-sm">{row.getValue("roll")}</span>,
  },
  {
    accessorKey: "name",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Name" />,
    cell: ({ row }) => <span className="font-medium">{row.getValue("name")}</span>,
  },
  {
    accessorKey: "program",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Program" />,
  },
  {
    accessorKey: "semester",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Semester" />,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge variant={row.getValue("status") === "active" ? "default" : "secondary"} className="capitalize">
        {row.getValue("status")}
      </Badge>
    ),
    filterFn: (row, id, value) => value.includes(row.getValue(id)),
  },
  {
    id: "actions",
    cell: () => (
      <div className="flex gap-1">
        <Button size="icon" variant="ghost" className="h-8 w-8"><Eye className="h-4 w-4" /></Button>
        <Button size="icon" variant="ghost" className="h-8 w-8"><Pencil className="h-4 w-4" /></Button>
        <Button size="icon" variant="ghost" className="h-8 w-8 text-destructive"><Trash2 className="h-4 w-4" /></Button>
      </div>
    ),
  },
];

const AdminStudents = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="font-display text-2xl font-bold">Manage Students</h1>
      <Button><Plus className="h-4 w-4 mr-1" /> Add Student</Button>
    </div>
    <Card>
      <CardContent className="p-4">
        <DataTable columns={columns} data={students} searchKey="name" searchPlaceholder="Search by name..." />
      </CardContent>
    </Card>
  </div>
);

export default AdminStudents;

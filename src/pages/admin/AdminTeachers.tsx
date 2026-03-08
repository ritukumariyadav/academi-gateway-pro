import { ColumnDef } from "@tanstack/react-table";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, Eye, Pencil, Trash2 } from "lucide-react";
import { DataTable, DataTableColumnHeader } from "@/components/ui/data-table";

type Teacher = {
  id: number;
  empId: string;
  name: string;
  department: string;
  designation: string;
  status: string;
};

const teachers: Teacher[] = [
  { id: 1, empId: "FAC-2012-018", name: "Dr. Robert Chen", department: "Computer Science", designation: "Professor & HOD", status: "active" },
  { id: 2, empId: "FAC-2015-024", name: "Prof. Sarah Williams", department: "Management", designation: "Professor & HOD", status: "active" },
  { id: 3, empId: "FAC-2010-005", name: "Dr. James Thompson", department: "Physics", designation: "Professor & HOD", status: "active" },
  { id: 4, empId: "FAC-2014-032", name: "Prof. Maria Garcia", department: "Arts & Humanities", designation: "Professor & HOD", status: "active" },
  { id: 5, empId: "FAC-2008-003", name: "Dr. Emily Park", department: "Medicine", designation: "Professor & HOD", status: "active" },
  { id: 6, empId: "FAC-2018-041", name: "Dr. Alan Foster", department: "Computer Science", designation: "Associate Professor", status: "active" },
  { id: 7, empId: "FAC-2020-055", name: "Dr. Lisa Wang", department: "Mathematics", designation: "Assistant Professor", status: "on-leave" },
];

const columns: ColumnDef<Teacher>[] = [
  {
    accessorKey: "empId",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Emp ID" />,
    cell: ({ row }) => <span className="font-mono text-sm">{row.getValue("empId")}</span>,
  },
  {
    accessorKey: "name",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Name" />,
    cell: ({ row }) => <span className="font-medium">{row.getValue("name")}</span>,
  },
  {
    accessorKey: "department",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Department" />,
  },
  {
    accessorKey: "designation",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Designation" />,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge variant={row.getValue("status") === "active" ? "default" : "secondary"} className="capitalize">
        {row.getValue("status")}
      </Badge>
    ),
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

const AdminTeachers = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="font-display text-2xl font-bold">Manage Teachers</h1>
      <Button><Plus className="h-4 w-4 mr-1" /> Add Teacher</Button>
    </div>
    <Card>
      <CardContent className="p-4">
        <DataTable columns={columns} data={teachers} searchKey="name" searchPlaceholder="Search teachers..." />
      </CardContent>
    </Card>
  </div>
);

export default AdminTeachers;

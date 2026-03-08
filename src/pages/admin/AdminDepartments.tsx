import { ColumnDef } from "@tanstack/react-table";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { DataTable, DataTableColumnHeader } from "@/components/ui/data-table";
import { departments } from "@/data/sampleData";

type Department = (typeof departments)[number];

const columns: ColumnDef<Department>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Department" />,
    cell: ({ row }) => <span className="font-medium">{row.getValue("name")}</span>,
  },
  {
    accessorKey: "head",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Head" />,
  },
  {
    accessorKey: "faculty",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Faculty" />,
  },
  {
    accessorKey: "students",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Students" />,
  },
  {
    accessorKey: "courses",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Courses" />,
  },
  {
    id: "actions",
    cell: () => (
      <div className="flex gap-1">
        <Button size="icon" variant="ghost" className="h-8 w-8"><Pencil className="h-4 w-4" /></Button>
        <Button size="icon" variant="ghost" className="h-8 w-8 text-destructive"><Trash2 className="h-4 w-4" /></Button>
      </div>
    ),
  },
];

const AdminDepartments = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="font-display text-2xl font-bold">Manage Departments</h1>
      <Button><Plus className="h-4 w-4 mr-1" /> Add Department</Button>
    </div>
    <Card>
      <CardContent className="p-4">
        <DataTable columns={columns} data={departments} searchKey="name" searchPlaceholder="Search departments..." />
      </CardContent>
    </Card>
  </div>
);

export default AdminDepartments;

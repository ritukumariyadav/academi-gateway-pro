import { ColumnDef } from "@tanstack/react-table";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { DataTable, DataTableColumnHeader } from "@/components/ui/data-table";
import { courses } from "@/data/sampleData";

type Course = (typeof courses)[number];

const columns: ColumnDef<Course>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Course Name" />,
    cell: ({ row }) => <span className="font-medium">{row.getValue("name")}</span>,
  },
  {
    accessorKey: "department",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Department" />,
  },
  {
    accessorKey: "duration",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Duration" />,
  },
  {
    accessorKey: "seats",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Seats" />,
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => (
      <span className="text-sm text-muted-foreground max-w-[200px] truncate block">{row.getValue("description")}</span>
    ),
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

const AdminCourses = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="font-display text-2xl font-bold">Manage Courses</h1>
      <Button><Plus className="h-4 w-4 mr-1" /> Add Course</Button>
    </div>
    <Card>
      <CardContent className="p-4">
        <DataTable columns={columns} data={courses} searchKey="name" searchPlaceholder="Search courses..." />
      </CardContent>
    </Card>
  </div>
);

export default AdminCourses;

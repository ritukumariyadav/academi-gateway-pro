import { ColumnDef } from "@tanstack/react-table";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { DataTable, DataTableColumnHeader } from "@/components/ui/data-table";
import { notices } from "@/data/sampleData";

type Notice = (typeof notices)[number];

const columns: ColumnDef<Notice>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Title" />,
    cell: ({ row }) => <span className="font-medium">{row.getValue("title")}</span>,
  },
  {
    accessorKey: "category",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Category" />,
    cell: ({ row }) => <Badge variant="outline">{row.getValue("category")}</Badge>,
  },
  {
    accessorKey: "date",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Date" />,
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

const AdminNotices = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="font-display text-2xl font-bold">Manage Notices</h1>
      <Button><Plus className="h-4 w-4 mr-1" /> Create Notice</Button>
    </div>
    <Card>
      <CardContent className="p-4">
        <DataTable columns={columns} data={notices} searchKey="title" searchPlaceholder="Search notices..." />
      </CardContent>
    </Card>
  </div>
);

export default AdminNotices;

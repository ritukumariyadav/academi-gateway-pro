import { ColumnDef } from "@tanstack/react-table";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { DataTable, DataTableColumnHeader } from "@/components/ui/data-table";
import { events } from "@/data/sampleData";

type Event = (typeof events)[number];

const columns: ColumnDef<Event>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Event" />,
    cell: ({ row }) => <span className="font-medium">{row.getValue("title")}</span>,
  },
  {
    accessorKey: "date",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Date" />,
  },
  {
    accessorKey: "location",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Location" />,
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

const AdminEvents = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="font-display text-2xl font-bold">Manage Events</h1>
      <Button><Plus className="h-4 w-4 mr-1" /> Add Event</Button>
    </div>
    <Card>
      <CardContent className="p-4">
        <DataTable columns={columns} data={events} searchKey="title" searchPlaceholder="Search events..." />
      </CardContent>
    </Card>
  </div>
);

export default AdminEvents;

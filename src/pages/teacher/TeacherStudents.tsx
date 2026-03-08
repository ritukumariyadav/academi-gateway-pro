import { ColumnDef } from "@tanstack/react-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DataTable, DataTableColumnHeader } from "@/components/ui/data-table";

type Student = { roll: string; name: string; email: string; attendance: number; cgpa: number; status: string };

const students: Student[] = [
  { roll: "CS2024-001", name: "Aisha Kumar", email: "aisha.k@student.edu", attendance: 92, cgpa: 9.1, status: "active" },
  { roll: "CS2024-005", name: "David Kim", email: "david.k@student.edu", attendance: 88, cgpa: 8.7, status: "active" },
  { roll: "CS2024-012", name: "Emma Wilson", email: "emma.w@student.edu", attendance: 75, cgpa: 7.2, status: "warning" },
  { roll: "CS2024-018", name: "James Park", email: "james.p@student.edu", attendance: 90, cgpa: 8.9, status: "active" },
  { roll: "CS2024-023", name: "Maria Lopez", email: "maria.l@student.edu", attendance: 85, cgpa: 8.4, status: "active" },
  { roll: "CS2024-029", name: "Neha Gupta", email: "neha.g@student.edu", attendance: 70, cgpa: 6.8, status: "warning" },
  { roll: "CS2024-034", name: "Rahul Sharma", email: "rahul.s@student.edu", attendance: 87, cgpa: 8.4, status: "active" },
  { roll: "CS2024-042", name: "Sarah Chen", email: "sarah.c@student.edu", attendance: 95, cgpa: 9.4, status: "active" },
];

const columns: ColumnDef<Student>[] = [
  { accessorKey: "roll", header: ({ column }) => <DataTableColumnHeader column={column} title="Roll No" />, cell: ({ row }) => <span className="font-mono text-sm">{row.getValue("roll")}</span> },
  { accessorKey: "name", header: ({ column }) => <DataTableColumnHeader column={column} title="Name" />, cell: ({ row }) => <span className="font-medium">{row.getValue("name")}</span> },
  { accessorKey: "email", header: "Email", cell: ({ row }) => <span className="text-sm text-muted-foreground">{row.getValue("email")}</span> },
  { accessorKey: "attendance", header: ({ column }) => <DataTableColumnHeader column={column} title="Attendance" />, cell: ({ row }) => { const v = row.getValue("attendance") as number; return <span className={v < 80 ? "text-destructive font-medium" : ""}>{v}%</span>; } },
  { accessorKey: "cgpa", header: ({ column }) => <DataTableColumnHeader column={column} title="CGPA" />, cell: ({ row }) => <span className="font-medium">{row.getValue("cgpa")}</span> },
  { accessorKey: "status", header: "Status", cell: ({ row }) => <Badge variant={row.getValue("status") === "warning" ? "destructive" : "default"} className="capitalize">{row.getValue("status")}</Badge> },
];

const TeacherStudents = () => (
  <div className="space-y-6">
    <h1 className="font-display text-2xl font-bold">Student List</h1>
    <Card>
      <CardContent className="p-4">
        <DataTable columns={columns} data={students} searchKey="name" searchPlaceholder="Search students..." />
      </CardContent>
    </Card>
  </div>
);

export default TeacherStudents;

import { ColumnDef } from "@tanstack/react-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, Save } from "lucide-react";
import { DataTable, DataTableColumnHeader } from "@/components/ui/data-table";

type StudentResult = { roll: string; name: string; internal: number; external: number; total: number; grade: string };

const students: StudentResult[] = [
  { roll: "CS2024-001", name: "Aisha Kumar", internal: 38, external: 72, total: 110, grade: "A" },
  { roll: "CS2024-005", name: "David Kim", internal: 35, external: 68, total: 103, grade: "A" },
  { roll: "CS2024-012", name: "Emma Wilson", internal: 28, external: 55, total: 83, grade: "B" },
  { roll: "CS2024-018", name: "James Park", internal: 40, external: 78, total: 118, grade: "A+" },
  { roll: "CS2024-023", name: "Maria Lopez", internal: 32, external: 60, total: 92, grade: "B+" },
  { roll: "CS2024-029", name: "Neha Gupta", internal: 36, external: 65, total: 101, grade: "A" },
  { roll: "CS2024-034", name: "Rahul Sharma", internal: 38, external: 72, total: 110, grade: "A" },
];

const columns: ColumnDef<StudentResult>[] = [
  { accessorKey: "roll", header: ({ column }) => <DataTableColumnHeader column={column} title="Roll No" />, cell: ({ row }) => <span className="font-mono text-sm">{row.getValue("roll")}</span> },
  { accessorKey: "name", header: ({ column }) => <DataTableColumnHeader column={column} title="Student" />, cell: ({ row }) => <span className="font-medium">{row.getValue("name")}</span> },
  { accessorKey: "internal", header: "Internal (50)", cell: ({ row }) => <Input type="number" defaultValue={row.getValue("internal")} className="w-20 h-8" /> },
  { accessorKey: "external", header: "External (100)", cell: ({ row }) => <Input type="number" defaultValue={row.getValue("external")} className="w-20 h-8" /> },
  { accessorKey: "total", header: "Total (150)", cell: ({ row }) => <span className="font-bold">{row.getValue("total")}</span> },
  { accessorKey: "grade", header: "Grade", cell: ({ row }) => <span className="font-medium">{row.getValue("grade")}</span> },
];

const TeacherResults = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="font-display text-2xl font-bold">Upload Results</h1>
      <div className="flex gap-2">
        <Button variant="outline"><Upload className="h-4 w-4 mr-1" /> Import CSV</Button>
        <Button><Save className="h-4 w-4 mr-1" /> Save Results</Button>
      </div>
    </div>
    <div className="flex gap-3 flex-wrap">
      <Select defaultValue="cs201">
        <SelectTrigger className="w-[220px]"><SelectValue placeholder="Select Course" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="cs201">CS201 — Data Structures</SelectItem>
          <SelectItem value="cs301">CS301 — Algorithm Design</SelectItem>
          <SelectItem value="cs401">CS401 — AI Fundamentals</SelectItem>
        </SelectContent>
      </Select>
      <Select defaultValue="midterm">
        <SelectTrigger className="w-[180px]"><SelectValue placeholder="Exam Type" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="midterm">Mid-Term Exam</SelectItem>
          <SelectItem value="endterm">End-Term Exam</SelectItem>
          <SelectItem value="internal">Internal Assessment</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <Card>
      <CardHeader><CardTitle>CS201 — Data Structures (Mid-Term)</CardTitle></CardHeader>
      <CardContent>
        <DataTable columns={columns} data={students} searchKey="name" searchPlaceholder="Search students..." showColumnToggle={false} />
      </CardContent>
    </Card>
  </div>
);

export default TeacherResults;

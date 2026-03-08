import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable, DataTableColumnHeader } from "@/components/ui/data-table";
import { Save, FileText } from "lucide-react";
import { toast } from "sonner";

type StudentMark = { roll: string; name: string; internal: number; external: number; total: number; grade: string };

const getGrade = (total: number) => {
  if (total >= 115) return "A+";
  if (total >= 100) return "A";
  if (total >= 85) return "B+";
  if (total >= 70) return "B";
  if (total >= 55) return "C";
  return "F";
};

const initialStudents: StudentMark[] = [
  { roll: "CS2024-001", name: "Aisha Kumar", internal: 38, external: 72, total: 110, grade: "A" },
  { roll: "CS2024-005", name: "David Kim", internal: 35, external: 68, total: 103, grade: "A" },
  { roll: "CS2024-012", name: "Emma Wilson", internal: 28, external: 55, total: 83, grade: "B" },
  { roll: "CS2024-018", name: "James Park", internal: 40, external: 78, total: 118, grade: "A+" },
  { roll: "CS2024-023", name: "Maria Lopez", internal: 32, external: 60, total: 92, grade: "B+" },
  { roll: "CS2024-029", name: "Neha Gupta", internal: 36, external: 65, total: 101, grade: "A" },
  { roll: "CS2024-034", name: "Rahul Sharma", internal: 38, external: 72, total: 110, grade: "A" },
];

const TeacherMarksheets = () => {
  const [students, setStudents] = useState(initialStudents);
  const [course, setCourse] = useState("cs201");
  const [semester, setSemester] = useState("sem3");

  const updateMark = (roll: string, field: "internal" | "external", value: number) => {
    setStudents(students.map((s) => {
      if (s.roll !== roll) return s;
      const updated = { ...s, [field]: value };
      updated.total = updated.internal + updated.external;
      updated.grade = getGrade(updated.total);
      return updated;
    }));
  };

  const columns: ColumnDef<StudentMark>[] = [
    { accessorKey: "roll", header: ({ column }) => <DataTableColumnHeader column={column} title="Roll No" />, cell: ({ row }) => <span className="font-mono text-sm">{row.getValue("roll")}</span> },
    { accessorKey: "name", header: ({ column }) => <DataTableColumnHeader column={column} title="Student" />, cell: ({ row }) => <span className="font-medium">{row.getValue("name")}</span> },
    { accessorKey: "internal", header: "Internal (50)", cell: ({ row }) => <Input type="number" min={0} max={50} className="w-20 h-8" defaultValue={row.getValue("internal")} onBlur={(e) => updateMark(row.original.roll, "internal", Number(e.target.value))} /> },
    { accessorKey: "external", header: "External (100)", cell: ({ row }) => <Input type="number" min={0} max={100} className="w-20 h-8" defaultValue={row.getValue("external")} onBlur={(e) => updateMark(row.original.roll, "external", Number(e.target.value))} /> },
    { accessorKey: "total", header: "Total", cell: ({ row }) => <span className="font-bold">{row.original.total}/150</span> },
    { accessorKey: "grade", header: "Grade", cell: ({ row }) => <Badge variant={row.original.grade.startsWith("A") ? "default" : "secondary"}>{row.original.grade}</Badge> },
  ];

  const handleSave = () => toast.success("Marksheet saved successfully!");

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="font-display text-2xl font-bold">Marksheet Entry</h1>
        <Button onClick={handleSave}><Save className="h-4 w-4 mr-1" /> Save Marksheet</Button>
      </div>

      <div className="flex gap-3 flex-wrap">
        <Select value={course} onValueChange={setCourse}>
          <SelectTrigger className="w-[220px]"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="cs201">CS201 — Data Structures</SelectItem>
            <SelectItem value="cs301">CS301 — Algorithm Design</SelectItem>
            <SelectItem value="cs401">CS401 — AI Fundamentals</SelectItem>
          </SelectContent>
        </Select>
        <Select value={semester} onValueChange={setSemester}>
          <SelectTrigger className="w-[160px]"><SelectValue /></SelectTrigger>
          <SelectContent>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => <SelectItem key={s} value={`sem${s}`}>Semester {s}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>

      <Card>
        <CardHeader><CardTitle className="flex items-center gap-2"><FileText className="h-5 w-5" /> Enter Marks — CS201 Data Structures</CardTitle></CardHeader>
        <CardContent>
          <DataTable columns={columns} data={students} searchKey="name" searchPlaceholder="Search students..." showColumnToggle={false} />
        </CardContent>
      </Card>
    </div>
  );
};

export default TeacherMarksheets;

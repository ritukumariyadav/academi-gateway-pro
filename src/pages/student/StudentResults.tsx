import { ColumnDef } from "@tanstack/react-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DataTable, DataTableColumnHeader } from "@/components/ui/data-table";

type Subject = { name: string; code: string; internal: number; external: number; total: number; grade: string };
type Semester = { sem: string; sgpa: string; subjects: Subject[] };

const semesters: Semester[] = [
  {
    sem: "Semester 3 (Current)", sgpa: "8.6",
    subjects: [
      { name: "Data Structures", code: "CS201", internal: 38, external: 72, total: 110, grade: "A" },
      { name: "Discrete Mathematics", code: "MA201", internal: 35, external: 68, total: 103, grade: "A" },
      { name: "Computer Networks", code: "CS202", internal: 30, external: 60, total: 90, grade: "B+" },
      { name: "Digital Electronics", code: "EC201", internal: 40, external: 75, total: 115, grade: "A+" },
      { name: "English Communication", code: "EN201", internal: 32, external: 58, total: 90, grade: "B+" },
    ],
  },
  {
    sem: "Semester 2", sgpa: "8.2",
    subjects: [
      { name: "Programming in C++", code: "CS102", internal: 36, external: 70, total: 106, grade: "A" },
      { name: "Calculus II", code: "MA102", internal: 30, external: 62, total: 92, grade: "B+" },
      { name: "Physics II", code: "PH102", internal: 34, external: 66, total: 100, grade: "A" },
    ],
  },
];

const gradeColor = (g: string) => {
  if (g.startsWith("A")) return "default";
  if (g.startsWith("B")) return "secondary";
  return "outline";
};

const columns: ColumnDef<Subject>[] = [
  { accessorKey: "code", header: "Code", cell: ({ row }) => <span className="font-mono text-xs">{row.getValue("code")}</span> },
  { accessorKey: "name", header: ({ column }) => <DataTableColumnHeader column={column} title="Subject" />, cell: ({ row }) => <span className="font-medium">{row.getValue("name")}</span> },
  { accessorKey: "internal", header: "Internal", cell: ({ row }) => <span className="text-center">{row.getValue("internal")}/50</span> },
  { accessorKey: "external", header: "External", cell: ({ row }) => <span className="text-center">{row.getValue("external")}/100</span> },
  { accessorKey: "total", header: ({ column }) => <DataTableColumnHeader column={column} title="Total" />, cell: ({ row }) => <span className="font-medium">{row.getValue("total")}/150</span> },
  { accessorKey: "grade", header: "Grade", cell: ({ row }) => <Badge variant={gradeColor(row.getValue("grade")) as any}>{row.getValue("grade")}</Badge> },
];

const StudentResults = () => (
  <div className="space-y-6">
    <h1 className="font-display text-2xl font-bold">Exam Results</h1>
    <div className="grid sm:grid-cols-3 gap-4">
      <Card><CardContent className="p-4 text-center"><p className="text-3xl font-bold text-accent">8.4</p><p className="text-sm text-muted-foreground">CGPA</p></CardContent></Card>
      <Card><CardContent className="p-4 text-center"><p className="text-3xl font-bold">8.6</p><p className="text-sm text-muted-foreground">Latest SGPA</p></CardContent></Card>
      <Card><CardContent className="p-4 text-center"><p className="text-3xl font-bold text-success">0</p><p className="text-sm text-muted-foreground">Backlogs</p></CardContent></Card>
    </div>
    {semesters.map((sem) => (
      <Card key={sem.sem}>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg">{sem.sem}</CardTitle>
            <Badge>SGPA: {sem.sgpa}</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={sem.subjects} showPagination={false} showColumnToggle={false} />
        </CardContent>
      </Card>
    ))}
  </div>
);

export default StudentResults;

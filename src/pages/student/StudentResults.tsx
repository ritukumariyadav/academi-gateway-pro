import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const semesters = [
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

const StudentResults = () => (
  <div className="space-y-6">
    <h1 className="font-display text-2xl font-bold">Exam Results</h1>
    <div className="grid sm:grid-cols-3 gap-4">
      <Card><CardContent className="p-4 text-center">
        <p className="text-3xl font-bold text-accent">8.4</p>
        <p className="text-sm text-muted-foreground">CGPA</p>
      </CardContent></Card>
      <Card><CardContent className="p-4 text-center">
        <p className="text-3xl font-bold">8.6</p>
        <p className="text-sm text-muted-foreground">Latest SGPA</p>
      </CardContent></Card>
      <Card><CardContent className="p-4 text-center">
        <p className="text-3xl font-bold text-success">0</p>
        <p className="text-sm text-muted-foreground">Backlogs</p>
      </CardContent></Card>
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
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Code</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead className="text-center">Internal</TableHead>
                <TableHead className="text-center">External</TableHead>
                <TableHead className="text-center">Total</TableHead>
                <TableHead className="text-center">Grade</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sem.subjects.map((s) => (
                <TableRow key={s.code}>
                  <TableCell className="font-mono text-xs">{s.code}</TableCell>
                  <TableCell className="font-medium">{s.name}</TableCell>
                  <TableCell className="text-center">{s.internal}/50</TableCell>
                  <TableCell className="text-center">{s.external}/100</TableCell>
                  <TableCell className="text-center font-medium">{s.total}/150</TableCell>
                  <TableCell className="text-center"><Badge variant={gradeColor(s.grade) as any}>{s.grade}</Badge></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default StudentResults;

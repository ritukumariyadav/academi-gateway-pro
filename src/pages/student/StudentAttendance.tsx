import { ColumnDef } from "@tanstack/react-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { DataTable, DataTableColumnHeader } from "@/components/ui/data-table";

const subjects = [
  { name: "Data Structures", attended: 38, total: 42, percentage: 90 },
  { name: "Discrete Mathematics", attended: 35, total: 40, percentage: 88 },
  { name: "Physics Lab", attended: 14, total: 16, percentage: 88 },
  { name: "English Communication", attended: 28, total: 36, percentage: 78 },
  { name: "Computer Networks", attended: 30, total: 38, percentage: 79 },
  { name: "Digital Electronics", attended: 34, total: 40, percentage: 85 },
];

type RecentDay = { date: string; status: string; subjects: string };

const recentDays: RecentDay[] = [
  { date: "Mar 7, 2026", status: "Present", subjects: "DS, Math, Physics Lab" },
  { date: "Mar 6, 2026", status: "Present", subjects: "English, CN, DE" },
  { date: "Mar 5, 2026", status: "Absent", subjects: "DS, Math, CN" },
  { date: "Mar 4, 2026", status: "Present", subjects: "English, Physics Lab, DE" },
  { date: "Mar 3, 2026", status: "Present", subjects: "DS, Math, CN" },
];

const recentColumns: ColumnDef<RecentDay>[] = [
  { accessorKey: "date", header: ({ column }) => <DataTableColumnHeader column={column} title="Date" />, cell: ({ row }) => <span className="font-medium">{row.getValue("date")}</span> },
  { accessorKey: "status", header: "Status", cell: ({ row }) => <Badge variant={row.getValue("status") === "Present" ? "default" : "destructive"}>{row.getValue("status")}</Badge> },
  { accessorKey: "subjects", header: "Subjects", cell: ({ row }) => <span className="text-sm text-muted-foreground">{row.getValue("subjects")}</span> },
];

const StudentAttendance = () => {
  const overall = Math.round(subjects.reduce((a, s) => a + s.percentage, 0) / subjects.length);

  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-bold">Attendance Records</h1>
      <div className="grid sm:grid-cols-3 gap-4">
        <Card><CardContent className="p-4 text-center"><p className="text-3xl font-bold text-accent">{overall}%</p><p className="text-sm text-muted-foreground">Overall Attendance</p></CardContent></Card>
        <Card><CardContent className="p-4 text-center"><p className="text-3xl font-bold">179</p><p className="text-sm text-muted-foreground">Classes Attended</p></CardContent></Card>
        <Card><CardContent className="p-4 text-center"><p className="text-3xl font-bold">212</p><p className="text-sm text-muted-foreground">Total Classes</p></CardContent></Card>
      </div>
      <Card>
        <CardHeader><CardTitle>Subject-wise Attendance</CardTitle></CardHeader>
        <CardContent>
          <div className="space-y-4">
            {subjects.map((s) => (
              <div key={s.name} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{s.name}</span>
                  <span className={s.percentage < 80 ? "text-destructive font-medium" : "text-muted-foreground"}>{s.attended}/{s.total} ({s.percentage}%)</span>
                </div>
                <Progress value={s.percentage} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>Recent Attendance</CardTitle></CardHeader>
        <CardContent>
          <DataTable columns={recentColumns} data={recentDays} showPagination={false} showColumnToggle={false} />
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentAttendance;

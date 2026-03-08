import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const subjects = [
  { name: "Data Structures", code: "CS201", internal: 38, external: 52, total: 90, grade: "A+", attendance: "94%" },
  { name: "Database Systems", code: "CS301", internal: 35, external: 48, total: 83, grade: "A", attendance: "90%" },
  { name: "Operating Systems", code: "CS302", internal: 32, external: 44, total: 76, grade: "B+", attendance: "88%" },
  { name: "Mathematics III", code: "MA201", internal: 36, external: 50, total: 86, grade: "A", attendance: "95%" },
];

const ParentProgress = () => (
  <div className="space-y-6">
    <h1 className="font-display text-2xl font-bold">Child's Progress</h1>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[["Overall CGPA", "8.5"], ["Current SGPA", "8.7"], ["Attendance", "92%"], ["Rank", "12/62"]].map(([k, v]) => (
        <Card key={k}><CardContent className="p-4"><p className="text-xs text-muted-foreground">{k}</p><p className="text-xl font-bold mt-1">{v}</p></CardContent></Card>
      ))}
    </div>
    <Card>
      <CardHeader><CardTitle>Subject-wise Performance — Spring 2026</CardTitle></CardHeader>
      <CardContent>
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted"><tr><th className="p-3 text-left">Subject</th><th className="p-3">Internal</th><th className="p-3">External</th><th className="p-3">Total</th><th className="p-3">Grade</th><th className="p-3">Attendance</th></tr></thead>
            <tbody>{subjects.map(s => (
              <tr key={s.code} className="border-t"><td className="p-3 font-medium">{s.name} ({s.code})</td><td className="p-3 text-center">{s.internal}/40</td><td className="p-3 text-center">{s.external}/60</td><td className="p-3 text-center font-bold">{s.total}</td><td className="p-3 text-center"><Badge>{s.grade}</Badge></td><td className="p-3 text-center">{s.attendance}</td></tr>
            ))}</tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  </div>
);

export default ParentProgress;

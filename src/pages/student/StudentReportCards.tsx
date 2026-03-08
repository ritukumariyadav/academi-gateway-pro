import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const reportCard = {
  name: "Raj Kumar", roll: "CS2024001", class: "CS-A (2nd Year)", semester: "Spring 2026",
  subjects: [
    { name: "Data Structures", code: "CS201", internal: 38, external: 52, total: 90, grade: "A+" },
    { name: "Database Systems", code: "CS301", internal: 35, external: 48, total: 83, grade: "A" },
    { name: "Operating Systems", code: "CS302", internal: 32, external: 44, total: 76, grade: "B+" },
    { name: "Mathematics III", code: "MA201", internal: 36, external: 50, total: 86, grade: "A" },
    { name: "Data Comm.", code: "CS303", internal: 40, external: 52, total: 92, grade: "A+" },
  ],
  sgpa: 8.7, cgpa: 8.5, attendance: "92%", remarks: "Good performance. Keep it up!"
};

const StudentReportCards = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="font-display text-2xl font-bold">Report Card</h1>
      <Button><Download className="h-4 w-4 mr-1" /> Download PDF</Button>
    </div>
    <Card>
      <CardHeader><CardTitle>Semester Report — {reportCard.semester}</CardTitle></CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div><span className="text-muted-foreground">Name:</span> <strong>{reportCard.name}</strong></div>
          <div><span className="text-muted-foreground">Roll:</span> <strong>{reportCard.roll}</strong></div>
          <div><span className="text-muted-foreground">Class:</span> <strong>{reportCard.class}</strong></div>
          <div><span className="text-muted-foreground">Attendance:</span> <strong>{reportCard.attendance}</strong></div>
        </div>
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted"><tr><th className="p-3 text-left">Subject</th><th className="p-3">Code</th><th className="p-3">Internal</th><th className="p-3">External</th><th className="p-3">Total</th><th className="p-3">Grade</th></tr></thead>
            <tbody>{reportCard.subjects.map(s => (
              <tr key={s.code} className="border-t"><td className="p-3 font-medium">{s.name}</td><td className="p-3 text-center">{s.code}</td><td className="p-3 text-center">{s.internal}/40</td><td className="p-3 text-center">{s.external}/60</td><td className="p-3 text-center font-bold">{s.total}</td><td className="p-3 text-center"><Badge>{s.grade}</Badge></td></tr>
            ))}</tbody>
          </table>
        </div>
        <div className="flex gap-8 pt-2">
          <div><span className="text-muted-foreground text-sm">SGPA:</span> <strong className="text-lg">{reportCard.sgpa}</strong></div>
          <div><span className="text-muted-foreground text-sm">CGPA:</span> <strong className="text-lg">{reportCard.cgpa}</strong></div>
        </div>
        <p className="text-sm text-muted-foreground italic">Remarks: {reportCard.remarks}</p>
      </CardContent>
    </Card>
  </div>
);

export default StudentReportCards;

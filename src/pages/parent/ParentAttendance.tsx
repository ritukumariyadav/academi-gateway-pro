import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

const attendance = [
  { month: "March 2026", working: 23, present: 21, absent: 2, percentage: "91%" },
  { month: "February 2026", working: 22, present: 20, absent: 2, percentage: "91%" },
  { month: "January 2026", working: 20, present: 19, absent: 1, percentage: "95%" },
  { month: "December 2025", working: 18, present: 15, absent: 3, percentage: "83%" },
];

const ParentAttendance = () => (
  <div className="space-y-6">
    <h1 className="font-display text-2xl font-bold">Attendance Summary</h1>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[["Overall", "92%"], ["This Month", "91%"], ["Total Present", "175"], ["Total Absent", "15"]].map(([k, v]) => (
        <Card key={k}><CardContent className="p-4"><Calendar className="h-5 w-5 text-accent mb-2" /><p className="text-lg font-bold">{v}</p><p className="text-xs text-muted-foreground">{k}</p></CardContent></Card>
      ))}
    </div>
    <Card>
      <CardHeader><CardTitle>Monthly Breakdown</CardTitle></CardHeader>
      <CardContent>
        <div className="space-y-3">
          {attendance.map(a => (
            <div key={a.month} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
              <div><p className="font-medium">{a.month}</p><p className="text-xs text-muted-foreground">Working: {a.working} · Present: {a.present} · Absent: {a.absent}</p></div>
              <Badge variant={parseInt(a.percentage) >= 90 ? "secondary" : "destructive"}>{a.percentage}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

export default ParentAttendance;

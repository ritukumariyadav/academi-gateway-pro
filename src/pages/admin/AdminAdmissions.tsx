import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, CheckCircle, XCircle } from "lucide-react";

const applications = [
  { id: 1, name: "Aisha Kumar", program: "B.Tech Computer Science", date: "Mar 5, 2026", score: 92, status: "pending" },
  { id: 2, name: "John Park", program: "MBA Business Admin", date: "Mar 4, 2026", score: 85, status: "pending" },
  { id: 3, name: "Maria Lopez", program: "B.Sc Physics", date: "Mar 3, 2026", score: 78, status: "pending" },
  { id: 4, name: "David Chen", program: "B.Tech Mechanical Eng.", date: "Mar 2, 2026", score: 88, status: "reviewed" },
  { id: 5, name: "Sarah Kim", program: "B.A. English Literature", date: "Mar 1, 2026", score: 90, status: "accepted" },
  { id: 6, name: "Raj Patel", program: "B.Tech Computer Science", date: "Feb 28, 2026", score: 62, status: "rejected" },
  { id: 7, name: "Emily Davis", program: "B.Sc Mathematics", date: "Feb 27, 2026", score: 95, status: "accepted" },
];

const statusVariant = (s: string) => {
  switch (s) {
    case "accepted": return "default";
    case "rejected": return "destructive";
    case "reviewed": return "secondary";
    default: return "outline";
  }
};

const AdminAdmissions = () => (
  <div className="space-y-6">
    <h1 className="font-display text-2xl font-bold">Manage Admissions</h1>
    <div className="grid sm:grid-cols-4 gap-4">
      {[
        { label: "Total Applications", count: 89, color: "" },
        { label: "Pending Review", count: 34, color: "text-accent" },
        { label: "Accepted", count: 42, color: "text-success" },
        { label: "Rejected", count: 13, color: "text-destructive" },
      ].map((s) => (
        <Card key={s.label}><CardContent className="p-4 text-center">
          <p className={`text-2xl font-bold ${s.color}`}>{s.count}</p>
          <p className="text-sm text-muted-foreground">{s.label}</p>
        </CardContent></Card>
      ))}
    </div>
    <Card>
      <CardHeader><CardTitle>Applications</CardTitle></CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Applicant</TableHead><TableHead>Program</TableHead><TableHead>Date</TableHead>
              <TableHead>Score</TableHead><TableHead>Status</TableHead><TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {applications.map((a) => (
              <TableRow key={a.id}>
                <TableCell className="font-medium">{a.name}</TableCell>
                <TableCell className="text-sm">{a.program}</TableCell>
                <TableCell className="text-sm">{a.date}</TableCell>
                <TableCell className="font-medium">{a.score}%</TableCell>
                <TableCell><Badge variant={statusVariant(a.status) as any} className="capitalize">{a.status}</Badge></TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    <Button size="icon" variant="ghost" className="h-8 w-8"><Eye className="h-4 w-4" /></Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8 text-success"><CheckCircle className="h-4 w-4" /></Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8 text-destructive"><XCircle className="h-4 w-4" /></Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </div>
);

export default AdminAdmissions;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MessageSquare, AlertTriangle } from "lucide-react";

const complaints = [
  { id: 1, from: "Raj Kumar (Student)", category: "Infrastructure", subject: "Broken AC in Room 102", date: "2026-03-07", priority: "High", status: "Open" },
  { id: 2, from: "Dr. Smith (Faculty)", category: "IT", subject: "Projector not working in Hall A", date: "2026-03-06", priority: "Medium", status: "In Progress" },
  { id: 3, from: "Parent — Mr. Kumar", category: "Academic", subject: "Child's attendance not updated", date: "2026-03-05", priority: "Low", status: "Resolved" },
  { id: 4, from: "Sarah Lee (Student)", category: "Hostel", subject: "Hot water not available", date: "2026-03-04", priority: "Medium", status: "In Progress" },
  { id: 5, from: "Prof. Johnson (Faculty)", category: "Admin", subject: "Salary slip discrepancy", date: "2026-03-03", priority: "High", status: "Open" },
];

const AdminComplaints = () => (
  <div className="space-y-6">
    <h1 className="font-display text-2xl font-bold">Complaints & Grievances</h1>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {[{ label: "Total Complaints", value: "48" }, { label: "Open", value: "8" }, { label: "In Progress", value: "5" }, { label: "Resolved", value: "35" }].map((s, i) => (
        <Card key={i}><CardContent className="p-4"><MessageSquare className="h-5 w-5 text-accent mb-2" /><p className="text-lg font-bold">{s.value}</p><p className="text-xs text-muted-foreground">{s.label}</p></CardContent></Card>
      ))}
    </div>
    <Card>
      <CardHeader><CardTitle>All Complaints</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow><TableHead>From</TableHead><TableHead>Category</TableHead><TableHead>Subject</TableHead><TableHead>Date</TableHead><TableHead>Priority</TableHead><TableHead>Status</TableHead><TableHead>Actions</TableHead></TableRow></TableHeader>
          <TableBody>{complaints.map(c => (
            <TableRow key={c.id}><TableCell className="text-sm">{c.from}</TableCell><TableCell><Badge variant="outline">{c.category}</Badge></TableCell><TableCell className="font-medium">{c.subject}</TableCell><TableCell>{c.date}</TableCell>
              <TableCell><Badge variant={c.priority === "High" ? "destructive" : c.priority === "Medium" ? "default" : "secondary"}>{c.priority}</Badge></TableCell>
              <TableCell><Badge variant={c.status === "Resolved" ? "secondary" : c.status === "Open" ? "destructive" : "outline"}>{c.status}</Badge></TableCell>
              <TableCell><Button size="sm" variant="ghost">View</Button></TableCell>
            </TableRow>
          ))}</TableBody>
        </Table>
      </CardContent>
    </Card>
  </div>
);

export default AdminComplaints;

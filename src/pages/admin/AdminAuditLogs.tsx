import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Shield } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const logs = [
  { id: 1, timestamp: "2026-03-08 14:32", user: "Admin (admin@preston.edu)", action: "Updated fee structure", module: "Fees", ip: "192.168.1.10" },
  { id: 2, timestamp: "2026-03-08 13:15", user: "Dr. Smith", action: "Uploaded marks for CS201", module: "Marksheets", ip: "192.168.1.25" },
  { id: 3, timestamp: "2026-03-08 12:00", user: "Admin", action: "Approved admission — Aisha Kumar", module: "Admissions", ip: "192.168.1.10" },
  { id: 4, timestamp: "2026-03-08 11:45", user: "Prof. Johnson", action: "Created assignment — DB Lab 5", module: "Assignments", ip: "192.168.1.30" },
  { id: 5, timestamp: "2026-03-08 10:30", user: "Admin", action: "Published notice — Exam Schedule", module: "Notices", ip: "192.168.1.10" },
  { id: 6, timestamp: "2026-03-07 16:20", user: "Admin", action: "Added new course — AI/ML Fundamentals", module: "Courses", ip: "192.168.1.10" },
  { id: 7, timestamp: "2026-03-07 15:00", user: "Mrs. Davis", action: "Marked attendance — EC-A", module: "Attendance", ip: "192.168.1.35" },
  { id: 8, timestamp: "2026-03-07 14:10", user: "Admin", action: "Generated payroll — March 2026", module: "HR", ip: "192.168.1.10" },
  { id: 9, timestamp: "2026-03-07 11:30", user: "Admin", action: "Changed site settings", module: "Settings", ip: "192.168.1.10" },
  { id: 10, timestamp: "2026-03-06 09:00", user: "System", action: "Automated backup completed", module: "System", ip: "—" },
];

const AdminAuditLogs = () => {
  const [search, setSearch] = useState("");
  const filtered = logs.filter(l => l.action.toLowerCase().includes(search.toLowerCase()) || l.user.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-bold">Audit Logs</h1>
      <div className="flex gap-4 flex-wrap">
        <div className="relative w-72"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /><Input className="pl-9" placeholder="Search logs..." value={search} onChange={e => setSearch(e.target.value)} /></div>
        <Select><SelectTrigger className="w-40"><SelectValue placeholder="Module" /></SelectTrigger>
          <SelectContent><SelectItem value="all">All Modules</SelectItem><SelectItem value="fees">Fees</SelectItem><SelectItem value="marks">Marksheets</SelectItem><SelectItem value="admin">Admissions</SelectItem></SelectContent>
        </Select>
      </div>
      <Card>
        <CardHeader><CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5" /> Activity Log</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader><TableRow><TableHead>Timestamp</TableHead><TableHead>User</TableHead><TableHead>Action</TableHead><TableHead>Module</TableHead><TableHead>IP Address</TableHead></TableRow></TableHeader>
            <TableBody>{filtered.map(l => (
              <TableRow key={l.id}><TableCell className="text-sm text-muted-foreground">{l.timestamp}</TableCell><TableCell className="font-medium">{l.user}</TableCell><TableCell>{l.action}</TableCell><TableCell><Badge variant="outline">{l.module}</Badge></TableCell><TableCell className="text-xs text-muted-foreground">{l.ip}</TableCell></TableRow>
            ))}</TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminAuditLogs;

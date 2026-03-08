import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search, Calendar, MapPin, Users } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const exams = [
  { id: 1, name: "Mid-Term Examination", type: "Internal", startDate: "2026-03-15", endDate: "2026-03-25", status: "Upcoming", courses: 12, halls: 6 },
  { id: 2, name: "Unit Test 2", type: "Internal", startDate: "2026-02-10", endDate: "2026-02-12", status: "Completed", courses: 12, halls: 4 },
  { id: 3, name: "Practical Examination", type: "Practical", startDate: "2026-04-01", endDate: "2026-04-10", status: "Scheduled", courses: 8, halls: 3 },
  { id: 4, name: "End Semester Exam", type: "External", startDate: "2026-04-15", endDate: "2026-04-30", status: "Draft", courses: 12, halls: 8 },
];

const seatingPlans = [
  { hall: "Hall A", capacity: 60, assigned: 58, invigilator: "Dr. Smith" },
  { hall: "Hall B", capacity: 50, assigned: 50, invigilator: "Prof. Johnson" },
  { hall: "Hall C", capacity: 40, assigned: 38, invigilator: "Dr. Williams" },
  { hall: "Lab 1", capacity: 30, assigned: 28, invigilator: "Dr. Brown" },
];

const AdminExams = () => {
  const [search, setSearch] = useState("");
  const filtered = exams.filter(e => e.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="font-display text-2xl font-bold">Exam Management</h1>
        <Dialog>
          <DialogTrigger asChild><Button><Plus className="h-4 w-4 mr-1" /> Create Exam</Button></DialogTrigger>
          <DialogContent>
            <DialogHeader><DialogTitle>Create New Exam</DialogTitle></DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2"><Label>Exam Name</Label><Input placeholder="e.g. Mid-Term Examination" /></div>
              <div className="space-y-2"><Label>Type</Label>
                <Select><SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                  <SelectContent><SelectItem value="internal">Internal</SelectItem><SelectItem value="external">External</SelectItem><SelectItem value="practical">Practical</SelectItem></SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2"><Label>Start Date</Label><Input type="date" /></div>
                <div className="space-y-2"><Label>End Date</Label><Input type="date" /></div>
              </div>
              <Button className="w-full">Create Exam</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[{ label: "Total Exams", value: "4", icon: Calendar }, { label: "Upcoming", value: "1", icon: Calendar }, { label: "Exam Halls", value: "8", icon: MapPin }, { label: "Invigilators", value: "24", icon: Users }].map((s, i) => (
          <Card key={i}><CardContent className="p-4"><s.icon className="h-5 w-5 text-accent mb-2" /><p className="text-lg font-bold">{s.value}</p><p className="text-xs text-muted-foreground">{s.label}</p></CardContent></Card>
        ))}
      </div>

      <Card>
        <CardHeader className="flex-row items-center justify-between space-y-0">
          <CardTitle>Examinations</CardTitle>
          <div className="relative w-64"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /><Input className="pl-9" placeholder="Search exams..." value={search} onChange={e => setSearch(e.target.value)} /></div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader><TableRow><TableHead>Name</TableHead><TableHead>Type</TableHead><TableHead>Dates</TableHead><TableHead>Courses</TableHead><TableHead>Halls</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
            <TableBody>
              {filtered.map(e => (
                <TableRow key={e.id}>
                  <TableCell className="font-medium">{e.name}</TableCell>
                  <TableCell>{e.type}</TableCell>
                  <TableCell className="text-sm">{e.startDate} → {e.endDate}</TableCell>
                  <TableCell>{e.courses}</TableCell>
                  <TableCell>{e.halls}</TableCell>
                  <TableCell><Badge variant={e.status === "Completed" ? "secondary" : e.status === "Upcoming" ? "default" : "outline"}>{e.status}</Badge></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Seating Plan — Mid-Term Examination</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader><TableRow><TableHead>Hall</TableHead><TableHead>Capacity</TableHead><TableHead>Assigned</TableHead><TableHead>Invigilator</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
            <TableBody>
              {seatingPlans.map(s => (
                <TableRow key={s.hall}>
                  <TableCell className="font-medium">{s.hall}</TableCell>
                  <TableCell>{s.capacity}</TableCell>
                  <TableCell>{s.assigned}</TableCell>
                  <TableCell>{s.invigilator}</TableCell>
                  <TableCell><Badge variant={s.assigned >= s.capacity ? "secondary" : "outline"}>{s.assigned >= s.capacity ? "Full" : "Available"}</Badge></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminExams;

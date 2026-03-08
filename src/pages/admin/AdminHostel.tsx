import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home, Users, DollarSign, AlertTriangle } from "lucide-react";

const rooms = [
  { room: "A-101", type: "Double", block: "Block A", capacity: 2, occupied: 2, students: "Raj Kumar, Amit Singh" },
  { room: "A-102", type: "Double", block: "Block A", capacity: 2, occupied: 1, students: "Priya Sharma" },
  { room: "B-201", type: "Triple", block: "Block B", capacity: 3, occupied: 3, students: "John, David, Michael" },
  { room: "B-202", type: "Single", block: "Block B", capacity: 1, occupied: 0, students: "—" },
  { room: "C-301", type: "Double", block: "Block C", capacity: 2, occupied: 2, students: "Sarah, Emily" },
];

const complaints = [
  { id: 1, room: "A-101", student: "Raj Kumar", issue: "Water leakage in bathroom", date: "2026-03-05", status: "Open" },
  { id: 2, room: "B-201", student: "John", issue: "AC not working", date: "2026-03-03", status: "In Progress" },
  { id: 3, room: "C-301", student: "Sarah", issue: "Broken window latch", date: "2026-02-28", status: "Resolved" },
];

const messFees = [
  { month: "January 2026", amount: 4500, collected: 4200, pending: 300, students: 280 },
  { month: "February 2026", amount: 4500, collected: 4100, pending: 400, students: 280 },
  { month: "March 2026", amount: 4500, collected: 2800, pending: 1700, students: 280 },
];

const AdminHostel = () => (
  <div className="space-y-6">
    <h1 className="font-display text-2xl font-bold">Hostel Management</h1>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {[{ label: "Total Rooms", value: "320", icon: Home }, { label: "Occupants", value: "540", icon: Users }, { label: "Vacant Beds", value: "38", icon: Home }, { label: "Open Complaints", value: "4", icon: AlertTriangle }].map((s, i) => (
        <Card key={i}><CardContent className="p-4"><s.icon className="h-5 w-5 text-accent mb-2" /><p className="text-lg font-bold">{s.value}</p><p className="text-xs text-muted-foreground">{s.label}</p></CardContent></Card>
      ))}
    </div>

    <Tabs defaultValue="rooms">
      <TabsList><TabsTrigger value="rooms">Room Allocation</TabsTrigger><TabsTrigger value="complaints">Complaints</TabsTrigger><TabsTrigger value="mess">Mess Fees</TabsTrigger></TabsList>
      <TabsContent value="rooms">
        <Card><CardContent className="pt-6">
          <Table>
            <TableHeader><TableRow><TableHead>Room</TableHead><TableHead>Block</TableHead><TableHead>Type</TableHead><TableHead>Capacity</TableHead><TableHead>Occupied</TableHead><TableHead>Students</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
            <TableBody>
              {rooms.map(r => (
                <TableRow key={r.room}><TableCell className="font-medium">{r.room}</TableCell><TableCell>{r.block}</TableCell><TableCell>{r.type}</TableCell><TableCell>{r.capacity}</TableCell><TableCell>{r.occupied}</TableCell><TableCell className="text-sm">{r.students}</TableCell>
                  <TableCell><Badge variant={r.occupied >= r.capacity ? "secondary" : "outline"}>{r.occupied >= r.capacity ? "Full" : "Available"}</Badge></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent></Card>
      </TabsContent>
      <TabsContent value="complaints">
        <Card><CardContent className="pt-6">
          <Table>
            <TableHeader><TableRow><TableHead>Room</TableHead><TableHead>Student</TableHead><TableHead>Issue</TableHead><TableHead>Date</TableHead><TableHead>Status</TableHead><TableHead>Actions</TableHead></TableRow></TableHeader>
            <TableBody>
              {complaints.map(c => (
                <TableRow key={c.id}><TableCell>{c.room}</TableCell><TableCell>{c.student}</TableCell><TableCell>{c.issue}</TableCell><TableCell>{c.date}</TableCell>
                  <TableCell><Badge variant={c.status === "Resolved" ? "secondary" : c.status === "Open" ? "destructive" : "outline"}>{c.status}</Badge></TableCell>
                  <TableCell><Button size="sm" variant="ghost">Update</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent></Card>
      </TabsContent>
      <TabsContent value="mess">
        <Card><CardContent className="pt-6">
          <Table>
            <TableHeader><TableRow><TableHead>Month</TableHead><TableHead>Fee/Student</TableHead><TableHead>Collected</TableHead><TableHead>Pending</TableHead><TableHead>Students</TableHead></TableRow></TableHeader>
            <TableBody>
              {messFees.map((m, i) => (
                <TableRow key={i}><TableCell className="font-medium">{m.month}</TableCell><TableCell>${m.amount}</TableCell><TableCell className="text-green-600">${m.collected}</TableCell><TableCell className="text-destructive">${m.pending}</TableCell><TableCell>{m.students}</TableCell></TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent></Card>
      </TabsContent>
    </Tabs>
  </div>
);

export default AdminHostel;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, DollarSign, Calendar, Clock } from "lucide-react";

const leaveRequests = [
  { id: 1, name: "Dr. Smith", type: "Sick Leave", from: "2026-03-10", to: "2026-03-12", days: 3, status: "Pending" },
  { id: 2, name: "Prof. Johnson", type: "Casual Leave", from: "2026-03-15", to: "2026-03-15", days: 1, status: "Approved" },
  { id: 3, name: "Mrs. Davis", type: "Maternity", from: "2026-04-01", to: "2026-06-30", days: 90, status: "Approved" },
  { id: 4, name: "Mr. Wilson", type: "Earned Leave", from: "2026-03-20", to: "2026-03-25", days: 5, status: "Pending" },
];

const payroll = [
  { id: 1, name: "Dr. Smith", designation: "Professor", basic: 85000, hra: 25500, da: 17000, deductions: 12750, net: 114750 },
  { id: 2, name: "Prof. Johnson", designation: "Assoc. Prof.", basic: 72000, hra: 21600, da: 14400, deductions: 10800, net: 97200 },
  { id: 3, name: "Mrs. Davis", designation: "Asst. Prof.", basic: 58000, hra: 17400, da: 11600, deductions: 8700, net: 78300 },
  { id: 4, name: "Mr. Kumar", designation: "Lab Asst.", basic: 35000, hra: 10500, da: 7000, deductions: 5250, net: 47250 },
];

const staffAttendance = [
  { name: "Dr. Smith", present: 22, absent: 0, late: 1, leaves: 0 },
  { name: "Prof. Johnson", present: 20, absent: 1, late: 2, leaves: 0 },
  { name: "Mrs. Davis", present: 21, absent: 0, late: 0, leaves: 2 },
  { name: "Mr. Kumar", present: 23, absent: 0, late: 0, leaves: 0 },
];

const AdminHR = () => (
  <div className="space-y-6">
    <h1 className="font-display text-2xl font-bold">HR & Payroll</h1>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {[{ label: "Total Staff", value: "124", icon: Users }, { label: "On Leave Today", value: "3", icon: Calendar }, { label: "Pending Requests", value: "2", icon: Clock }, { label: "Monthly Payroll", value: "$3.2M", icon: DollarSign }].map((s, i) => (
        <Card key={i}><CardContent className="p-4"><s.icon className="h-5 w-5 text-accent mb-2" /><p className="text-lg font-bold">{s.value}</p><p className="text-xs text-muted-foreground">{s.label}</p></CardContent></Card>
      ))}
    </div>

    <Tabs defaultValue="leave">
      <TabsList><TabsTrigger value="leave">Leave Management</TabsTrigger><TabsTrigger value="payroll">Payroll</TabsTrigger><TabsTrigger value="attendance">Staff Attendance</TabsTrigger></TabsList>
      <TabsContent value="leave">
        <Card><CardContent className="pt-6">
          <Table>
            <TableHeader><TableRow><TableHead>Staff</TableHead><TableHead>Type</TableHead><TableHead>From</TableHead><TableHead>To</TableHead><TableHead>Days</TableHead><TableHead>Status</TableHead><TableHead>Actions</TableHead></TableRow></TableHeader>
            <TableBody>
              {leaveRequests.map(l => (
                <TableRow key={l.id}>
                  <TableCell className="font-medium">{l.name}</TableCell><TableCell>{l.type}</TableCell><TableCell>{l.from}</TableCell><TableCell>{l.to}</TableCell><TableCell>{l.days}</TableCell>
                  <TableCell><Badge variant={l.status === "Approved" ? "secondary" : "outline"}>{l.status}</Badge></TableCell>
                  <TableCell>{l.status === "Pending" && <div className="flex gap-1"><Button size="sm" variant="default">Approve</Button><Button size="sm" variant="outline">Reject</Button></div>}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent></Card>
      </TabsContent>
      <TabsContent value="payroll">
        <Card><CardContent className="pt-6">
          <Table>
            <TableHeader><TableRow><TableHead>Name</TableHead><TableHead>Designation</TableHead><TableHead>Basic</TableHead><TableHead>HRA</TableHead><TableHead>DA</TableHead><TableHead>Deductions</TableHead><TableHead>Net Pay</TableHead></TableRow></TableHeader>
            <TableBody>
              {payroll.map(p => (
                <TableRow key={p.id}>
                  <TableCell className="font-medium">{p.name}</TableCell><TableCell>{p.designation}</TableCell>
                  <TableCell>${p.basic.toLocaleString()}</TableCell><TableCell>${p.hra.toLocaleString()}</TableCell><TableCell>${p.da.toLocaleString()}</TableCell>
                  <TableCell className="text-destructive">${p.deductions.toLocaleString()}</TableCell><TableCell className="font-bold">${p.net.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent></Card>
      </TabsContent>
      <TabsContent value="attendance">
        <Card><CardContent className="pt-6">
          <Table>
            <TableHeader><TableRow><TableHead>Name</TableHead><TableHead>Present</TableHead><TableHead>Absent</TableHead><TableHead>Late</TableHead><TableHead>Leaves</TableHead></TableRow></TableHeader>
            <TableBody>
              {staffAttendance.map((s, i) => (
                <TableRow key={i}><TableCell className="font-medium">{s.name}</TableCell><TableCell className="text-green-600">{s.present}</TableCell><TableCell className="text-destructive">{s.absent}</TableCell><TableCell className="text-yellow-600">{s.late}</TableCell><TableCell>{s.leaves}</TableCell></TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent></Card>
      </TabsContent>
    </Tabs>
  </div>
);

export default AdminHR;

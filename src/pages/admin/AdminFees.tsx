import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp, AlertTriangle, Users } from "lucide-react";

const feeStructure = [
  { program: "B.Tech (All Branches)", tuition: "$2,400", lab: "$300", hostel: "$1,800", total: "$4,500" },
  { program: "MBA", tuition: "$3,200", lab: "$200", hostel: "$1,800", total: "$5,200" },
  { program: "B.Sc (All Branches)", tuition: "$1,800", lab: "$250", hostel: "$1,500", total: "$3,550" },
  { program: "B.A. (All Branches)", tuition: "$1,500", lab: "$100", hostel: "$1,500", total: "$3,100" },
  { program: "MBBS", tuition: "$5,000", lab: "$500", hostel: "$2,000", total: "$7,500" },
];

const recentPayments = [
  { student: "Rahul Sharma", roll: "CS2024-034", amount: "$2,700", date: "Mar 7, 2026", status: "completed" },
  { student: "Aisha Kumar", roll: "CS2024-001", amount: "$2,700", date: "Mar 6, 2026", status: "completed" },
  { student: "David Kim", roll: "CS2024-005", amount: "$1,200", date: "Mar 5, 2026", status: "partial" },
  { student: "Emma Wilson", roll: "MBA2024-012", amount: "$3,400", date: "Mar 4, 2026", status: "completed" },
];

const AdminFees = () => (
  <div className="space-y-6">
    <h1 className="font-display text-2xl font-bold">Manage Fees</h1>
    <div className="grid sm:grid-cols-4 gap-4">
      <Card><CardContent className="p-4 flex items-center gap-3">
        <DollarSign className="h-8 w-8 text-accent" />
        <div><p className="text-xl font-bold">$2.4M</p><p className="text-xs text-muted-foreground">Total Collected</p></div>
      </CardContent></Card>
      <Card><CardContent className="p-4 flex items-center gap-3">
        <AlertTriangle className="h-8 w-8 text-destructive" />
        <div><p className="text-xl font-bold">$380K</p><p className="text-xs text-muted-foreground">Outstanding</p></div>
      </CardContent></Card>
      <Card><CardContent className="p-4 flex items-center gap-3">
        <Users className="h-8 w-8 text-primary" />
        <div><p className="text-xl font-bold">4,820</p><p className="text-xs text-muted-foreground">Fees Paid</p></div>
      </CardContent></Card>
      <Card><CardContent className="p-4 flex items-center gap-3">
        <TrendingUp className="h-8 w-8 text-success" />
        <div><p className="text-xl font-bold">92%</p><p className="text-xs text-muted-foreground">Collection Rate</p></div>
      </CardContent></Card>
    </div>

    <Card>
      <CardHeader><CardTitle>Fee Structure (Annual)</CardTitle></CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Program</TableHead><TableHead>Tuition</TableHead><TableHead>Lab Fee</TableHead>
              <TableHead>Hostel</TableHead><TableHead>Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {feeStructure.map((f, i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{f.program}</TableCell>
                <TableCell>{f.tuition}</TableCell>
                <TableCell>{f.lab}</TableCell>
                <TableCell>{f.hostel}</TableCell>
                <TableCell className="font-bold">{f.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>

    <Card>
      <CardHeader><CardTitle>Recent Payments</CardTitle></CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Student</TableHead><TableHead>Roll No</TableHead><TableHead>Amount</TableHead>
              <TableHead>Date</TableHead><TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentPayments.map((p, i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{p.student}</TableCell>
                <TableCell className="font-mono text-sm">{p.roll}</TableCell>
                <TableCell>{p.amount}</TableCell>
                <TableCell className="text-sm">{p.date}</TableCell>
                <TableCell><Badge variant={p.status === "completed" ? "default" : "secondary"} className="capitalize">{p.status}</Badge></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </div>
);

export default AdminFees;

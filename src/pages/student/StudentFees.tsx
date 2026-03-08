import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DollarSign, CreditCard, AlertTriangle, CheckCircle } from "lucide-react";

const feeHistory = [
  { id: 1, desc: "Semester 4 Tuition Fee", amount: "$2,400", due: "Mar 31, 2026", status: "pending" },
  { id: 2, desc: "Lab & Library Fee", amount: "$300", due: "Mar 31, 2026", status: "pending" },
  { id: 3, desc: "Semester 3 Tuition Fee", amount: "$2,400", due: "Sep 15, 2025", status: "paid", paidOn: "Sep 10, 2025" },
  { id: 4, desc: "Hostel Fee (Annual)", amount: "$1,800", due: "Aug 1, 2025", status: "paid", paidOn: "Jul 28, 2025" },
  { id: 5, desc: "Semester 2 Tuition Fee", amount: "$2,400", due: "Mar 15, 2025", status: "paid", paidOn: "Mar 12, 2025" },
  { id: 6, desc: "Admission Fee", amount: "$500", due: "Aug 1, 2024", status: "paid", paidOn: "Jul 20, 2024" },
];

const StudentFees = () => (
  <div className="space-y-6">
    <h1 className="font-display text-2xl font-bold">Fee Details</h1>
    <div className="grid sm:grid-cols-3 gap-4">
      <Card><CardContent className="p-4 flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-destructive/10 flex items-center justify-center">
          <AlertTriangle className="h-5 w-5 text-destructive" />
        </div>
        <div><p className="text-xs text-muted-foreground">Due Amount</p><p className="text-xl font-bold text-destructive">$2,700</p></div>
      </CardContent></Card>
      <Card><CardContent className="p-4 flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-success/10 flex items-center justify-center">
          <CheckCircle className="h-5 w-5 text-success" />
        </div>
        <div><p className="text-xs text-muted-foreground">Total Paid</p><p className="text-xl font-bold">$7,100</p></div>
      </CardContent></Card>
      <Card><CardContent className="p-4 flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
          <CreditCard className="h-5 w-5 text-accent" />
        </div>
        <div><p className="text-xs text-muted-foreground">Next Due Date</p><p className="text-xl font-bold">Mar 31</p></div>
      </CardContent></Card>
    </div>

    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Fee History</CardTitle>
          <Button><DollarSign className="h-4 w-4 mr-1" /> Pay Now</Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Description</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {feeHistory.map((f) => (
              <TableRow key={f.id}>
                <TableCell className="font-medium">{f.desc}</TableCell>
                <TableCell>{f.amount}</TableCell>
                <TableCell className="text-sm">{f.due}</TableCell>
                <TableCell>
                  <Badge variant={f.status === "paid" ? "default" : "destructive"} className="capitalize">{f.status}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </div>
);

export default StudentFees;

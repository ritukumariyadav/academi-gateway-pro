import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { DollarSign, CreditCard, AlertTriangle, CheckCircle, Download, FileText, Receipt, Clock } from "lucide-react";

const studentInfo = { name: "Raj Kumar", roll: "CS2024001", class: "CS-A (2nd Year)", program: "B.Tech — Computer Science" };

const currentInvoice = {
  id: "INV-2026-1042", semester: "Spring 2026", dueDate: "2026-03-01", status: "Paid",
  items: [
    { head: "Tuition Fee", code: "TF-001", amount: 45000 },
    { head: "Laboratory Fee", code: "LAB-001", amount: 5000 },
    { head: "Library Fee", code: "LB-001", amount: 2000 },
    { head: "Examination Fee", code: "EX-001", amount: 3000 },
    { head: "Development Fee", code: "DF-001", amount: 2500 },
  ],
  subtotal: 57500, scholarship: -28750, lateFine: 0, total: 28750,
  scholarshipName: "Academic Merit — Gold (50%)",
};

const paymentHistory = [
  { txnId: "TXN-78452", invoice: "INV-2026-1042", amount: 28750, method: "Online — HDFC NetBanking", date: "2026-02-25 10:32 AM", receipt: "RCP-4521", status: "Success" },
  { txnId: "TXN-71234", invoice: "INV-2025-2108", amount: 28750, method: "UPI — raj@oksbi", date: "2025-09-10 11:15 AM", receipt: "RCP-3892", status: "Success" },
  { txnId: "TXN-68901", invoice: "INV-2025-1542", amount: 28750, method: "Online — SBI Debit Card", date: "2025-03-12 09:45 AM", receipt: "RCP-3241", status: "Success" },
  { txnId: "TXN-65432", invoice: "INV-2024-0891", amount: 5000, method: "Demand Draft", date: "2024-07-20 02:00 PM", receipt: "RCP-2105", status: "Success" },
];

const allInvoices = [
  { id: "INV-2026-1042", semester: "Spring 2026 (Sem 4)", billed: 57500, scholarship: 28750, paid: 28750, balance: 0, dueDate: "2026-03-01", status: "Paid" },
  { id: "INV-2025-2108", semester: "Fall 2025 (Sem 3)", billed: 57500, scholarship: 28750, paid: 28750, balance: 0, dueDate: "2025-09-15", status: "Paid" },
  { id: "INV-2025-1542", semester: "Spring 2025 (Sem 2)", billed: 57500, scholarship: 28750, paid: 28750, balance: 0, dueDate: "2025-03-15", status: "Paid" },
  { id: "INV-2024-0891", semester: "Admission Fee", billed: 5000, scholarship: 0, paid: 5000, balance: 0, dueDate: "2024-08-01", status: "Paid" },
];

const upcomingDues = [
  { semester: "Fall 2026 (Sem 5)", estimatedAmount: 28750, dueDate: "2026-09-15", status: "Upcoming" },
];

const totalPaid = allInvoices.reduce((s, i) => s + i.paid, 0);
const totalBilled = allInvoices.reduce((s, i) => s + i.billed, 0);
const totalScholarship = allInvoices.reduce((s, i) => s + i.scholarship, 0);

const f = (n: number) => `$${n.toLocaleString()}`;

const StudentFees = () => (
  <div className="space-y-6">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
      <div>
        <h1 className="font-display text-2xl font-bold">Fee Details</h1>
        <p className="text-sm text-muted-foreground">{studentInfo.name} · {studentInfo.roll} · {studentInfo.program}</p>
      </div>
      <Button><DollarSign className="h-4 w-4 mr-1" /> Pay Now</Button>
    </div>

    {/* KPI Cards */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <Card><CardContent className="p-4 flex items-center gap-3"><div className="h-10 w-10 rounded-lg bg-destructive/10 flex items-center justify-center"><AlertTriangle className="h-5 w-5 text-destructive" /></div><div><p className="text-xs text-muted-foreground">Current Due</p><p className="text-xl font-bold text-green-600">$0</p></div></CardContent></Card>
      <Card><CardContent className="p-4 flex items-center gap-3"><div className="h-10 w-10 rounded-lg bg-green-100 dark:bg-green-950/30 flex items-center justify-center"><CheckCircle className="h-5 w-5 text-green-600" /></div><div><p className="text-xs text-muted-foreground">Total Paid</p><p className="text-xl font-bold">{f(totalPaid)}</p></div></CardContent></Card>
      <Card><CardContent className="p-4 flex items-center gap-3"><div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center"><CreditCard className="h-5 w-5 text-accent" /></div><div><p className="text-xs text-muted-foreground">Scholarship Savings</p><p className="text-xl font-bold text-accent">{f(totalScholarship)}</p></div></CardContent></Card>
      <Card><CardContent className="p-4 flex items-center gap-3"><div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center"><Clock className="h-5 w-5 text-muted-foreground" /></div><div><p className="text-xs text-muted-foreground">Next Due</p><p className="text-xl font-bold">Sep 15</p></div></CardContent></Card>
    </div>

    <Tabs defaultValue="current">
      <TabsList>
        <TabsTrigger value="current"><Receipt className="h-3.5 w-3.5 mr-1" /> Current Invoice</TabsTrigger>
        <TabsTrigger value="history"><FileText className="h-3.5 w-3.5 mr-1" /> All Invoices</TabsTrigger>
        <TabsTrigger value="payments"><CreditCard className="h-3.5 w-3.5 mr-1" /> Payment History</TabsTrigger>
      </TabsList>

      {/* Current Invoice */}
      <TabsContent value="current">
        <Card>
          <CardHeader className="flex-row items-center justify-between space-y-0">
            <div>
              <CardTitle>Invoice #{currentInvoice.id}</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">{currentInvoice.semester} · Due: {currentInvoice.dueDate}</p>
            </div>
            <div className="flex gap-2">
              <Badge variant="default">{currentInvoice.status}</Badge>
              <Button size="sm" variant="outline"><Download className="h-4 w-4 mr-1" /> Download</Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader><TableRow><TableHead>Fee Head</TableHead><TableHead>Code</TableHead><TableHead className="text-right">Amount</TableHead></TableRow></TableHeader>
              <TableBody>
                {currentInvoice.items.map(i => (
                  <TableRow key={i.code}><TableCell className="font-medium">{i.head}</TableCell><TableCell className="font-mono text-xs">{i.code}</TableCell><TableCell className="text-right">{f(i.amount)}</TableCell></TableRow>
                ))}
              </TableBody>
            </Table>
            <Separator className="my-4" />
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span>Subtotal</span><span>{f(currentInvoice.subtotal)}</span></div>
              <div className="flex justify-between text-accent"><span>Scholarship: {currentInvoice.scholarshipName}</span><span>-{f(Math.abs(currentInvoice.scholarship))}</span></div>
              {currentInvoice.lateFine > 0 && <div className="flex justify-between text-destructive"><span>Late Fine</span><span>+{f(currentInvoice.lateFine)}</span></div>}
              <Separator />
              <div className="flex justify-between text-lg font-bold"><span>Total Payable</span><span>{f(currentInvoice.total)}</span></div>
            </div>
          </CardContent>
        </Card>

        {upcomingDues.length > 0 && (
          <Card className="mt-4">
            <CardHeader><CardTitle>Upcoming Dues</CardTitle></CardHeader>
            <CardContent>
              {upcomingDues.map((d, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div><p className="font-medium">{d.semester}</p><p className="text-xs text-muted-foreground">Due: {d.dueDate}</p></div>
                  <div className="text-right"><p className="font-bold">{f(d.estimatedAmount)}</p><Badge variant="outline">{d.status}</Badge></div>
                </div>
              ))}
            </CardContent>
          </Card>
        )}
      </TabsContent>

      {/* All Invoices */}
      <TabsContent value="history">
        <Card>
          <CardHeader><CardTitle>All Invoices</CardTitle></CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow><TableHead>Invoice #</TableHead><TableHead>Semester</TableHead><TableHead className="text-right">Billed</TableHead><TableHead className="text-right">Scholarship</TableHead><TableHead className="text-right">Paid</TableHead><TableHead>Due Date</TableHead><TableHead>Status</TableHead><TableHead>Actions</TableHead></TableRow>
              </TableHeader>
              <TableBody>
                {allInvoices.map(inv => (
                  <TableRow key={inv.id}>
                    <TableCell className="font-mono text-xs">{inv.id}</TableCell>
                    <TableCell className="font-medium">{inv.semester}</TableCell>
                    <TableCell className="text-right">{f(inv.billed)}</TableCell>
                    <TableCell className="text-right text-accent">{inv.scholarship > 0 ? `-${f(inv.scholarship)}` : "—"}</TableCell>
                    <TableCell className="text-right font-bold">{f(inv.paid)}</TableCell>
                    <TableCell>{inv.dueDate}</TableCell>
                    <TableCell><Badge variant="default">{inv.status}</Badge></TableCell>
                    <TableCell><Button size="sm" variant="ghost"><Download className="h-3.5 w-3.5" /></Button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Payment History */}
      <TabsContent value="payments">
        <Card>
          <CardHeader><CardTitle>Payment Transactions</CardTitle></CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow><TableHead>Txn ID</TableHead><TableHead>Invoice</TableHead><TableHead className="text-right">Amount</TableHead><TableHead>Method</TableHead><TableHead>Date</TableHead><TableHead>Receipt</TableHead><TableHead>Status</TableHead></TableRow>
              </TableHeader>
              <TableBody>
                {paymentHistory.map(p => (
                  <TableRow key={p.txnId}>
                    <TableCell className="font-mono text-xs">{p.txnId}</TableCell>
                    <TableCell className="font-mono text-xs">{p.invoice}</TableCell>
                    <TableCell className="text-right font-bold">{f(p.amount)}</TableCell>
                    <TableCell className="text-sm">{p.method}</TableCell>
                    <TableCell className="text-sm">{p.date}</TableCell>
                    <TableCell><Button size="sm" variant="ghost"><Download className="h-3.5 w-3.5 mr-1" />{p.receipt}</Button></TableCell>
                    <TableCell><Badge variant="default"><CheckCircle className="h-3 w-3 mr-1" />{p.status}</Badge></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  </div>
);

export default StudentFees;

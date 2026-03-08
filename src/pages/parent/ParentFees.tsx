import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { DollarSign, CheckCircle, Clock, Download, Receipt, FileText, CreditCard } from "lucide-react";

const childInfo = { name: "Raj Kumar", roll: "CS2024001", class: "CS-A (2nd Year)", program: "B.Tech — CS" };

const feeSummary = { totalBilled: 177500, totalScholarship: 86250, totalPaid: 91250, balance: 0, nextDue: "Sep 15, 2026", nextAmount: 28750 };

const semesterFees = [
  {
    semester: "Spring 2026 (Sem 4)", invoice: "INV-2026-1042", status: "Paid", paidDate: "2026-02-25",
    items: [
      { head: "Tuition Fee", amount: 45000 },
      { head: "Lab Fee", amount: 5000 },
      { head: "Library Fee", amount: 2000 },
      { head: "Exam Fee", amount: 3000 },
      { head: "Development Fee", amount: 2500 },
    ],
    subtotal: 57500, scholarship: 28750, total: 28750,
  },
  {
    semester: "Fall 2025 (Sem 3)", invoice: "INV-2025-2108", status: "Paid", paidDate: "2025-09-10",
    items: [
      { head: "Tuition Fee", amount: 45000 },
      { head: "Lab Fee", amount: 5000 },
      { head: "Library Fee", amount: 2000 },
      { head: "Exam Fee", amount: 3000 },
      { head: "Development Fee", amount: 2500 },
    ],
    subtotal: 57500, scholarship: 28750, total: 28750,
  },
];

const paymentHistory = [
  { date: "2026-02-25", description: "Semester 4 Fees — Online", amount: 28750, method: "HDFC NetBanking", receipt: "RCP-4521", status: "Paid" },
  { date: "2025-09-10", description: "Semester 3 Fees — UPI", amount: 28750, method: "UPI — raj@oksbi", receipt: "RCP-3892", status: "Paid" },
  { date: "2025-03-12", description: "Semester 2 Fees — Card", amount: 28750, method: "SBI Debit Card", receipt: "RCP-3241", status: "Paid" },
  { date: "2024-07-20", description: "Admission Fee — DD", amount: 5000, method: "Demand Draft", receipt: "RCP-2105", status: "Paid" },
];

const f = (n: number) => `$${n.toLocaleString()}`;

const ParentFees = () => (
  <div className="space-y-6">
    <div>
      <h1 className="font-display text-2xl font-bold">Fee Details</h1>
      <p className="text-sm text-muted-foreground">{childInfo.name} · {childInfo.roll} · {childInfo.program}</p>
    </div>

    {/* KPI Cards */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <Card><CardContent className="p-4"><CheckCircle className="h-5 w-5 text-green-600 mb-1" /><p className="text-lg font-bold text-green-600">{f(feeSummary.totalPaid)}</p><p className="text-xs text-muted-foreground">Total Paid</p></CardContent></Card>
      <Card><CardContent className="p-4"><DollarSign className="h-5 w-5 text-accent mb-1" /><p className="text-lg font-bold text-accent">{f(feeSummary.totalScholarship)}</p><p className="text-xs text-muted-foreground">Scholarship Savings</p></CardContent></Card>
      <Card><CardContent className="p-4"><DollarSign className="h-5 w-5 text-green-600 mb-1" /><p className="text-lg font-bold text-green-600">{f(feeSummary.balance)}</p><p className="text-xs text-muted-foreground">Balance Due</p></CardContent></Card>
      <Card><CardContent className="p-4"><Clock className="h-5 w-5 text-muted-foreground mb-1" /><p className="text-lg font-bold">{feeSummary.nextDue}</p><p className="text-xs text-muted-foreground">Next Due · {f(feeSummary.nextAmount)}</p></CardContent></Card>
    </div>

    <Tabs defaultValue="breakdown">
      <TabsList>
        <TabsTrigger value="breakdown"><Receipt className="h-3.5 w-3.5 mr-1" /> Fee Breakdown</TabsTrigger>
        <TabsTrigger value="payments"><CreditCard className="h-3.5 w-3.5 mr-1" /> Payment History</TabsTrigger>
      </TabsList>

      <TabsContent value="breakdown">
        <div className="space-y-4">
          {semesterFees.map(sem => (
            <Card key={sem.invoice}>
              <CardHeader className="flex-row items-center justify-between space-y-0">
                <div>
                  <CardTitle className="text-base">{sem.semester}</CardTitle>
                  <p className="text-xs text-muted-foreground mt-1">Invoice: {sem.invoice} · Paid: {sem.paidDate}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <Badge variant="default">{sem.status}</Badge>
                  <Button size="sm" variant="outline"><Download className="h-3.5 w-3.5" /></Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-muted"><tr><th className="p-3 text-left">Fee Head</th><th className="p-3 text-right">Amount</th></tr></thead>
                    <tbody>
                      {sem.items.map(i => (
                        <tr key={i.head} className="border-t"><td className="p-3">{i.head}</td><td className="p-3 text-right">{f(i.amount)}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-3 space-y-1 text-sm">
                  <div className="flex justify-between"><span>Subtotal</span><span>{f(sem.subtotal)}</span></div>
                  <div className="flex justify-between text-accent"><span>Scholarship (50%)</span><span>-{f(sem.scholarship)}</span></div>
                  <Separator />
                  <div className="flex justify-between font-bold text-base"><span>Amount Paid</span><span>{f(sem.total)}</span></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="payments">
        <Card>
          <CardHeader><CardTitle>All Payments</CardTitle></CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow><TableHead>Date</TableHead><TableHead>Description</TableHead><TableHead className="text-right">Amount</TableHead><TableHead>Method</TableHead><TableHead>Receipt</TableHead><TableHead>Status</TableHead></TableRow>
              </TableHeader>
              <TableBody>
                {paymentHistory.map((p, i) => (
                  <TableRow key={i}>
                    <TableCell>{p.date}</TableCell>
                    <TableCell className="font-medium">{p.description}</TableCell>
                    <TableCell className="text-right font-bold">{f(p.amount)}</TableCell>
                    <TableCell className="text-sm">{p.method}</TableCell>
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

export default ParentFees;

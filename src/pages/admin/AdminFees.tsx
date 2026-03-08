import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  DollarSign, TrendingUp, AlertTriangle, Users, Search, Download, Send,
  FileText, CreditCard, Receipt, Clock, CheckCircle, XCircle, Plus, Printer,
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { useState } from "react";

// ── Monthly collection trend ──
const collectionTrend = [
  { month: "Sep", collected: 480, target: 520 }, { month: "Oct", collected: 410, target: 520 },
  { month: "Nov", collected: 490, target: 520 }, { month: "Dec", collected: 320, target: 520 },
  { month: "Jan", collected: 440, target: 520 }, { month: "Feb", collected: 470, target: 520 },
  { month: "Mar", collected: 380, target: 520 },
];

// ── Invoices ──
const invoices = [
  { id: "INV-2026-1042", student: "Raj Kumar", roll: "CS2024001", class: "CS-A", amount: 52000, paid: 52000, balance: 0, dueDate: "2026-03-01", status: "Paid", method: "Online", paidDate: "2026-02-25", receipt: "RCP-4521" },
  { id: "INV-2026-1043", student: "Priya Sharma", roll: "CS2024002", class: "CS-A", amount: 52000, paid: 26000, balance: 26000, dueDate: "2026-03-01", status: "Partial", method: "Cheque", paidDate: "2026-02-28", receipt: "RCP-4522" },
  { id: "INV-2026-1044", student: "Amit Singh", roll: "CS2024003", class: "CS-A", amount: 52000, paid: 0, balance: 52000, dueDate: "2026-03-01", status: "Overdue", method: "—", paidDate: "—", receipt: "—" },
  { id: "INV-2026-1045", student: "Maria Lopez", roll: "ME2024001", class: "ME-A", amount: 52000, paid: 52000, balance: 0, dueDate: "2026-03-01", status: "Paid", method: "UPI", paidDate: "2026-02-26", receipt: "RCP-4523" },
  { id: "INV-2026-1046", student: "John Park", roll: "PH2024001", class: "PH-A", amount: 38500, paid: 0, balance: 38500, dueDate: "2026-03-15", status: "Pending", method: "—", paidDate: "—", receipt: "—" },
  { id: "INV-2026-1047", student: "Sarah Lee", roll: "EC2024001", class: "EC-A", amount: 52000, paid: 52000, balance: 0, dueDate: "2026-03-01", status: "Paid", method: "Online", paidDate: "2026-02-27", receipt: "RCP-4524" },
  { id: "INV-2026-1048", student: "David Chen", roll: "BA2024001", class: "BA-A", amount: 38500, paid: 19250, balance: 19250, dueDate: "2026-03-01", status: "Partial", method: "Cash", paidDate: "2026-03-01", receipt: "RCP-4525" },
  { id: "INV-2026-1049", student: "Emily Watson", roll: "CS2024004", class: "CS-B", amount: 52000, paid: 0, balance: 52000, dueDate: "2026-03-15", status: "Pending", method: "—", paidDate: "—", receipt: "—" },
];

// ── Payment transactions log ──
const transactions = [
  { txnId: "TXN-78452", invoice: "INV-2026-1042", student: "Raj Kumar", amount: 52000, method: "Online — HDFC NetBanking", gateway: "Razorpay", date: "2026-02-25 10:32 AM", status: "Success" },
  { txnId: "TXN-78453", invoice: "INV-2026-1043", student: "Priya Sharma", amount: 26000, method: "Cheque #784521", gateway: "Offline", date: "2026-02-28 02:15 PM", status: "Cleared" },
  { txnId: "TXN-78454", invoice: "INV-2026-1045", student: "Maria Lopez", amount: 52000, method: "UPI — maria@oksbi", gateway: "Razorpay", date: "2026-02-26 11:45 AM", status: "Success" },
  { txnId: "TXN-78455", invoice: "INV-2026-1047", student: "Sarah Lee", amount: 52000, method: "Online — Axis Debit Card", gateway: "Razorpay", date: "2026-02-27 09:20 AM", status: "Success" },
  { txnId: "TXN-78456", invoice: "INV-2026-1048", student: "David Chen", amount: 19250, method: "Cash — Receipt #R-982", gateway: "Counter", date: "2026-03-01 03:30 PM", status: "Success" },
  { txnId: "TXN-78457", invoice: "INV-2026-1044", student: "Amit Singh", amount: 52000, method: "Online — SBI Card", gateway: "Razorpay", date: "2026-03-02 04:10 PM", status: "Failed" },
];

// ── Late fine register ──
const lateFines = [
  { student: "Amit Singh", roll: "CS2024003", overdueDays: 7, fineRate: 50, totalFine: 350, waived: false },
  { student: "David Chen", roll: "BA2024001", overdueDays: 7, fineRate: 50, totalFine: 350, waived: false },
  { student: "Priya Sharma", roll: "CS2024002", overdueDays: 0, fineRate: 50, totalFine: 0, waived: false },
];

// ── Installment plans ──
const installments = [
  { student: "Priya Sharma", roll: "CS2024002", plan: "2 Installments", total: 52000, installment1: { amount: 26000, due: "2026-02-28", status: "Paid" }, installment2: { amount: 26000, due: "2026-04-15", status: "Upcoming" } },
  { student: "David Chen", roll: "BA2024001", plan: "3 Installments", total: 38500, installment1: { amount: 19250, due: "2026-03-01", status: "Paid" }, installment2: { amount: 9625, due: "2026-04-01", status: "Upcoming" }, installment3: { amount: 9625, due: "2026-05-01", status: "Upcoming" } },
];

// ── Due reminders ──
const reminders = [
  { student: "Amit Singh", roll: "CS2024003", amount: 52000, dueDate: "2026-03-01", daysPast: 7, remindersSent: 2, lastReminder: "2026-03-05", channel: "Email + SMS" },
  { student: "John Park", roll: "PH2024001", amount: 38500, dueDate: "2026-03-15", daysPast: 0, remindersSent: 1, lastReminder: "2026-03-06", channel: "Email" },
  { student: "Emily Watson", roll: "CS2024004", amount: 52000, dueDate: "2026-03-15", daysPast: 0, remindersSent: 0, lastReminder: "—", channel: "—" },
];

const statusVariant = (s: string) =>
  s === "Paid" ? "default" : s === "Partial" ? "secondary" : s === "Overdue" ? "destructive" : "outline";

const AdminFees = () => {
  const [search, setSearch] = useState("");
  const filtered = invoices.filter(i =>
    i.student.toLowerCase().includes(search.toLowerCase()) || i.id.toLowerCase().includes(search.toLowerCase())
  );

  const totalBilled = invoices.reduce((s, i) => s + i.amount, 0);
  const totalCollected = invoices.reduce((s, i) => s + i.paid, 0);
  const totalOutstanding = invoices.reduce((s, i) => s + i.balance, 0);
  const collectionRate = Math.round((totalCollected / totalBilled) * 100);

  return (
    <div className="space-y-6">
      {/* ── Header ── */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold">Fee & Billing Management</h1>
          <p className="text-sm text-muted-foreground">Spring 2026 Semester · Academic Year 2025-26</p>
        </div>
        <div className="flex gap-2">
          <Dialog>
            <DialogTrigger asChild><Button variant="outline"><Send className="h-4 w-4 mr-1" /> Send Reminders</Button></DialogTrigger>
            <DialogContent>
              <DialogHeader><DialogTitle>Send Fee Reminders</DialogTitle></DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2"><Label>Target</Label>
                  <Select defaultValue="overdue"><SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent><SelectItem value="overdue">Overdue Students (2)</SelectItem><SelectItem value="pending">All Pending (4)</SelectItem><SelectItem value="partial">Partial Payments (2)</SelectItem></SelectContent>
                  </Select>
                </div>
                <div className="space-y-2"><Label>Channel</Label>
                  <Select defaultValue="both"><SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent><SelectItem value="email">Email Only</SelectItem><SelectItem value="sms">SMS Only</SelectItem><SelectItem value="both">Email + SMS</SelectItem></SelectContent>
                  </Select>
                </div>
                <Button className="w-full"><Send className="h-4 w-4 mr-1" /> Send Now</Button>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild><Button><Plus className="h-4 w-4 mr-1" /> Generate Invoice</Button></DialogTrigger>
            <DialogContent className="max-w-lg">
              <DialogHeader><DialogTitle>Generate New Invoice</DialogTitle></DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2"><Label>Student Roll No</Label><Input placeholder="CS2024001" /></div>
                  <div className="space-y-2"><Label>Semester</Label>
                    <Select><SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent><SelectItem value="spring2026">Spring 2026</SelectItem><SelectItem value="fall2025">Fall 2025</SelectItem></SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2"><Label>Fee Heads (auto-calculated)</Label>
                  <div className="border rounded-lg p-3 space-y-2 text-sm">
                    <div className="flex justify-between"><span>Tuition Fee</span><span>$45,000</span></div>
                    <div className="flex justify-between"><span>Lab Fee</span><span>$5,000</span></div>
                    <div className="flex justify-between"><span>Library Fee</span><span>$2,000</span></div>
                    <div className="flex justify-between border-t pt-2 font-bold"><span>Total</span><span>$52,000</span></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2"><Label>Due Date</Label><Input type="date" /></div>
                  <div className="space-y-2"><Label>Installment Plan</Label>
                    <Select><SelectTrigger><SelectValue placeholder="Full Payment" /></SelectTrigger>
                      <SelectContent><SelectItem value="full">Full Payment</SelectItem><SelectItem value="2">2 Installments</SelectItem><SelectItem value="3">3 Installments</SelectItem></SelectContent>
                    </Select>
                  </div>
                </div>
                <Button className="w-full">Generate Invoice</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* ── KPI Cards ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        <Card><CardContent className="p-4"><DollarSign className="h-5 w-5 text-accent mb-1" /><p className="text-lg font-bold">${(totalBilled / 1000).toFixed(0)}K</p><p className="text-xs text-muted-foreground">Total Billed</p></CardContent></Card>
        <Card><CardContent className="p-4"><CheckCircle className="h-5 w-5 text-green-600 mb-1" /><p className="text-lg font-bold text-green-600">${(totalCollected / 1000).toFixed(0)}K</p><p className="text-xs text-muted-foreground">Collected</p></CardContent></Card>
        <Card><CardContent className="p-4"><AlertTriangle className="h-5 w-5 text-destructive mb-1" /><p className="text-lg font-bold text-destructive">${(totalOutstanding / 1000).toFixed(0)}K</p><p className="text-xs text-muted-foreground">Outstanding</p></CardContent></Card>
        <Card><CardContent className="p-4"><TrendingUp className="h-5 w-5 text-accent mb-1" /><p className="text-lg font-bold">{collectionRate}%</p><p className="text-xs text-muted-foreground">Collection Rate</p><Progress value={collectionRate} className="mt-2 h-1.5" /></CardContent></Card>
        <Card><CardContent className="p-4"><Clock className="h-5 w-5 text-yellow-600 mb-1" /><p className="text-lg font-bold text-yellow-600">2</p><p className="text-xs text-muted-foreground">Overdue Invoices</p></CardContent></Card>
        <Card><CardContent className="p-4"><Users className="h-5 w-5 text-accent mb-1" /><p className="text-lg font-bold">{invoices.length}</p><p className="text-xs text-muted-foreground">Total Invoices</p></CardContent></Card>
      </div>

      {/* ── Collection Trend Chart ── */}
      <Card>
        <CardHeader><CardTitle>Monthly Collection vs Target (in $K)</CardTitle></CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={collectionTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(v: number) => `$${v}K`} />
              <Bar dataKey="collected" fill="hsl(var(--primary))" name="Collected" radius={[4, 4, 0, 0]} />
              <Bar dataKey="target" fill="hsl(var(--muted-foreground))" name="Target" radius={[4, 4, 0, 0]} opacity={0.3} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* ── Main Tabs ── */}
      <Tabs defaultValue="invoices">
        <TabsList className="flex-wrap h-auto gap-1">
          <TabsTrigger value="invoices"><Receipt className="h-3.5 w-3.5 mr-1" /> Invoices</TabsTrigger>
          <TabsTrigger value="transactions"><CreditCard className="h-3.5 w-3.5 mr-1" /> Transactions</TabsTrigger>
          <TabsTrigger value="installments"><Clock className="h-3.5 w-3.5 mr-1" /> Installments</TabsTrigger>
          <TabsTrigger value="fines"><AlertTriangle className="h-3.5 w-3.5 mr-1" /> Late Fines</TabsTrigger>
          <TabsTrigger value="reminders"><Send className="h-3.5 w-3.5 mr-1" /> Reminders</TabsTrigger>
        </TabsList>

        {/* Invoices */}
        <TabsContent value="invoices">
          <Card>
            <CardHeader className="flex-row items-center justify-between space-y-0">
              <CardTitle>All Invoices</CardTitle>
              <div className="flex gap-2">
                <div className="relative w-64"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /><Input className="pl-9" placeholder="Search student or invoice..." value={search} onChange={e => setSearch(e.target.value)} /></div>
                <Button variant="outline" size="sm"><Download className="h-4 w-4 mr-1" /> Export</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Invoice #</TableHead><TableHead>Student</TableHead><TableHead>Class</TableHead>
                      <TableHead className="text-right">Billed</TableHead><TableHead className="text-right">Paid</TableHead>
                      <TableHead className="text-right">Balance</TableHead><TableHead>Due Date</TableHead>
                      <TableHead>Method</TableHead><TableHead>Status</TableHead><TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filtered.map(inv => (
                      <TableRow key={inv.id}>
                        <TableCell className="font-mono text-sm">{inv.id}</TableCell>
                        <TableCell><div><span className="font-medium">{inv.student}</span><p className="text-xs text-muted-foreground">{inv.roll}</p></div></TableCell>
                        <TableCell>{inv.class}</TableCell>
                        <TableCell className="text-right font-medium">${inv.amount.toLocaleString()}</TableCell>
                        <TableCell className="text-right text-green-600">${inv.paid.toLocaleString()}</TableCell>
                        <TableCell className="text-right">{inv.balance > 0 ? <span className="text-destructive font-medium">${inv.balance.toLocaleString()}</span> : "—"}</TableCell>
                        <TableCell>{inv.dueDate}</TableCell>
                        <TableCell className="text-sm">{inv.method}</TableCell>
                        <TableCell><Badge variant={statusVariant(inv.status)}>{inv.status}</Badge></TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Button size="sm" variant="ghost" title="Download Invoice"><FileText className="h-3.5 w-3.5" /></Button>
                            {inv.receipt !== "—" && <Button size="sm" variant="ghost" title="Print Receipt"><Printer className="h-3.5 w-3.5" /></Button>}
                            {inv.status !== "Paid" && <Button size="sm" variant="ghost" title="Record Payment"><DollarSign className="h-3.5 w-3.5" /></Button>}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Transactions */}
        <TabsContent value="transactions">
          <Card>
            <CardHeader><CardTitle>Payment Transaction Log</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow><TableHead>Txn ID</TableHead><TableHead>Invoice</TableHead><TableHead>Student</TableHead><TableHead className="text-right">Amount</TableHead><TableHead>Method</TableHead><TableHead>Gateway</TableHead><TableHead>Date & Time</TableHead><TableHead>Status</TableHead></TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map(t => (
                    <TableRow key={t.txnId}>
                      <TableCell className="font-mono text-xs">{t.txnId}</TableCell>
                      <TableCell className="font-mono text-xs">{t.invoice}</TableCell>
                      <TableCell className="font-medium">{t.student}</TableCell>
                      <TableCell className="text-right font-medium">${t.amount.toLocaleString()}</TableCell>
                      <TableCell className="text-sm">{t.method}</TableCell>
                      <TableCell><Badge variant="outline">{t.gateway}</Badge></TableCell>
                      <TableCell className="text-sm">{t.date}</TableCell>
                      <TableCell>
                        <Badge variant={t.status === "Success" || t.status === "Cleared" ? "default" : "destructive"}>
                          {t.status === "Success" ? <><CheckCircle className="h-3 w-3 mr-1" />{t.status}</> : t.status === "Failed" ? <><XCircle className="h-3 w-3 mr-1" />{t.status}</> : t.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Installments */}
        <TabsContent value="installments">
          <Card>
            <CardHeader><CardTitle>Installment Plans</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              {installments.map(inst => (
                <div key={inst.roll} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div><span className="font-medium">{inst.student}</span><span className="text-sm text-muted-foreground ml-2">({inst.roll})</span></div>
                    <div className="text-right"><Badge variant="outline">{inst.plan}</Badge><span className="ml-2 font-bold">${inst.total.toLocaleString()}</span></div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[inst.installment1, inst.installment2, (inst as any).installment3].filter(Boolean).map((i: any, idx: number) => (
                      <div key={idx} className={`p-3 rounded-lg border ${i.status === "Paid" ? "bg-green-50 border-green-200 dark:bg-green-950/20 dark:border-green-800" : "bg-muted/50"}`}>
                        <p className="text-xs text-muted-foreground">Installment {idx + 1}</p>
                        <p className="font-bold mt-1">${i.amount.toLocaleString()}</p>
                        <p className="text-xs mt-1">Due: {i.due}</p>
                        <Badge variant={i.status === "Paid" ? "default" : "outline"} className="mt-2">{i.status}</Badge>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Late Fines */}
        <TabsContent value="fines">
          <Card>
            <CardHeader><CardTitle>Late Fine Register</CardTitle></CardHeader>
            <CardContent>
              <div className="mb-4 p-3 rounded-lg bg-muted/50 text-sm">
                <strong>Fine Policy:</strong> $50 per day after due date. Maximum fine capped at 10% of invoice amount. Waivers require admin approval.
              </div>
              <Table>
                <TableHeader>
                  <TableRow><TableHead>Student</TableHead><TableHead>Roll</TableHead><TableHead>Overdue Days</TableHead><TableHead>Rate/Day</TableHead><TableHead className="text-right">Total Fine</TableHead><TableHead>Waived</TableHead><TableHead>Actions</TableHead></TableRow>
                </TableHeader>
                <TableBody>
                  {lateFines.map(f => (
                    <TableRow key={f.roll}>
                      <TableCell className="font-medium">{f.student}</TableCell>
                      <TableCell className="text-sm">{f.roll}</TableCell>
                      <TableCell>{f.overdueDays > 0 ? <span className="text-destructive font-medium">{f.overdueDays} days</span> : "—"}</TableCell>
                      <TableCell>${f.fineRate}</TableCell>
                      <TableCell className="text-right font-bold">{f.totalFine > 0 ? <span className="text-destructive">${f.totalFine}</span> : "—"}</TableCell>
                      <TableCell>{f.waived ? <Badge variant="secondary">Waived</Badge> : "No"}</TableCell>
                      <TableCell>{f.totalFine > 0 && <Button size="sm" variant="outline">Waive Fine</Button>}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Reminders */}
        <TabsContent value="reminders">
          <Card>
            <CardHeader className="flex-row items-center justify-between space-y-0">
              <CardTitle>Due Reminders</CardTitle>
              <Button size="sm"><Send className="h-4 w-4 mr-1" /> Bulk Remind</Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow><TableHead>Student</TableHead><TableHead>Roll</TableHead><TableHead className="text-right">Amount Due</TableHead><TableHead>Due Date</TableHead><TableHead>Days Past</TableHead><TableHead>Reminders Sent</TableHead><TableHead>Last Reminder</TableHead><TableHead>Channel</TableHead><TableHead>Actions</TableHead></TableRow>
                </TableHeader>
                <TableBody>
                  {reminders.map(r => (
                    <TableRow key={r.roll}>
                      <TableCell className="font-medium">{r.student}</TableCell>
                      <TableCell className="text-sm">{r.roll}</TableCell>
                      <TableCell className="text-right font-bold text-destructive">${r.amount.toLocaleString()}</TableCell>
                      <TableCell>{r.dueDate}</TableCell>
                      <TableCell>{r.daysPast > 0 ? <Badge variant="destructive">{r.daysPast} days</Badge> : <Badge variant="outline">Not due</Badge>}</TableCell>
                      <TableCell>{r.remindersSent}</TableCell>
                      <TableCell className="text-sm">{r.lastReminder}</TableCell>
                      <TableCell className="text-sm">{r.channel}</TableCell>
                      <TableCell><Button size="sm" variant="ghost"><Send className="h-3.5 w-3.5" /></Button></TableCell>
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
};

export default AdminFees;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  DollarSign, TrendingUp, TrendingDown, Download, Plus,
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// ── Expense transactions with voucher numbers ──
const expenses = [
  { id: "VCH-2026-0182", category: "Salaries", description: "Staff salaries — March 2026", amount: 320000, date: "2026-03-01", approvedBy: "Finance Head", paymentMode: "Bank Transfer", status: "Paid" },
  { id: "VCH-2026-0183", category: "Utilities", description: "Electricity — Feb 2026 (Block A+B+C)", amount: 12000, date: "2026-02-28", approvedBy: "Admin", paymentMode: "Online", status: "Paid" },
  { id: "VCH-2026-0184", category: "Utilities", description: "Water supply — Feb 2026", amount: 3000, date: "2026-02-28", approvedBy: "Admin", paymentMode: "Online", status: "Paid" },
  { id: "VCH-2026-0185", category: "Maintenance", description: "AC repair — Block B classrooms (12 units)", amount: 8500, date: "2026-03-05", approvedBy: "Finance Head", paymentMode: "Cheque", status: "Pending" },
  { id: "VCH-2026-0186", category: "IT", description: "Annual AWS hosting + domain renewal", amount: 3200, date: "2026-03-01", approvedBy: "IT Head", paymentMode: "Online", status: "Paid" },
  { id: "VCH-2026-0187", category: "IT", description: "CCTV camera replacement — Lab wing", amount: 2000, date: "2026-03-03", approvedBy: "Admin", paymentMode: "Cash", status: "Paid" },
  { id: "VCH-2026-0188", category: "Events", description: "Annual Day — venue + decorations", amount: 8000, date: "2026-03-10", approvedBy: "Principal", paymentMode: "Bank Transfer", status: "Approved" },
  { id: "VCH-2026-0189", category: "Events", description: "Annual Day — catering (500 pax)", amount: 4000, date: "2026-03-10", approvedBy: "Principal", paymentMode: "Bank Transfer", status: "Approved" },
  { id: "VCH-2026-0190", category: "Library", description: "New book procurement — CS & Physics", amount: 7500, date: "2026-03-08", approvedBy: "Librarian", paymentMode: "Bank Transfer", status: "Pending" },
  { id: "VCH-2026-0191", category: "Maintenance", description: "Plumbing repair — Hostel Block A", amount: 1500, date: "2026-03-07", approvedBy: "Warden", paymentMode: "Cash", status: "Paid" },
];

// ── Budget with sub-categories ──
const budget = [
  { category: "Salaries & Benefits", allocated: 3800000, spent: 960000, committed: 2840000, available: 0, items: ["Base Salaries", "PF Contribution", "Insurance", "Bonus"] },
  { category: "Infrastructure & Maintenance", allocated: 500000, spent: 125000, committed: 50000, available: 325000, items: ["Building Repair", "AC Maintenance", "Plumbing", "Painting"] },
  { category: "IT & Technology", allocated: 200000, spent: 62000, committed: 25000, available: 113000, items: ["Hosting", "Software Licenses", "Hardware", "CCTV"] },
  { category: "Events & Activities", allocated: 150000, spent: 45000, committed: 12000, available: 93000, items: ["Annual Day", "Sports Day", "Cultural Fest", "Workshops"] },
  { category: "Library & Resources", allocated: 100000, spent: 22000, committed: 7500, available: 70500, items: ["Books", "Journals", "Digital Resources", "Equipment"] },
  { category: "Marketing & Admissions", allocated: 120000, spent: 28000, committed: 15000, available: 77000, items: ["Advertising", "Events", "Website", "Collateral"] },
  { category: "Utilities", allocated: 180000, spent: 75000, committed: 0, available: 105000, items: ["Electricity", "Water", "Internet", "Phone"] },
  { category: "Miscellaneous", allocated: 100000, spent: 12000, committed: 5000, available: 83000, items: ["Stationery", "Travel", "Legal", "Audit"] },
];

const totalAllocated = budget.reduce((s, b) => s + b.allocated, 0);
const totalSpent = budget.reduce((s, b) => s + b.spent, 0);
const totalCommitted = budget.reduce((s, b) => s + b.committed, 0);

// ── Monthly expense trend ──
const monthlyExpenses = [
  { month: "Sep", salaries: 310, utilities: 14, maintenance: 8, it: 5, other: 18 },
  { month: "Oct", salaries: 310, utilities: 13, maintenance: 12, it: 4, other: 15 },
  { month: "Nov", salaries: 315, utilities: 15, maintenance: 6, it: 6, other: 20 },
  { month: "Dec", salaries: 315, utilities: 12, maintenance: 10, it: 3, other: 12 },
  { month: "Jan", salaries: 318, utilities: 14, maintenance: 5, it: 8, other: 16 },
  { month: "Feb", salaries: 318, utilities: 15, maintenance: 7, it: 5, other: 14 },
  { month: "Mar", salaries: 320, utilities: 15, maintenance: 10, it: 5, other: 20 },
];

const f = (n: number) => `$${n.toLocaleString()}`;

const AdminExpenses = () => (
  <div className="space-y-6">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
      <div>
        <h1 className="font-display text-2xl font-bold">Expense Tracking & Budget</h1>
        <p className="text-sm text-muted-foreground">Financial Year 2025-26 · Budget Period: Apr 2025 – Mar 2026</p>
      </div>
      <div className="flex gap-2">
        <Button variant="outline"><Download className="h-4 w-4 mr-1" /> Export</Button>
        <Button><Plus className="h-4 w-4 mr-1" /> Add Expense</Button>
      </div>
    </div>

    {/* KPI Cards */}
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
      <Card><CardContent className="p-4"><DollarSign className="h-5 w-5 text-accent mb-1" /><p className="text-lg font-bold">{f(totalAllocated)}</p><p className="text-xs text-muted-foreground">Total Budget</p></CardContent></Card>
      <Card><CardContent className="p-4"><TrendingDown className="h-5 w-5 text-destructive mb-1" /><p className="text-lg font-bold text-destructive">{f(totalSpent)}</p><p className="text-xs text-muted-foreground">Spent YTD</p></CardContent></Card>
      <Card><CardContent className="p-4"><DollarSign className="h-5 w-5 text-yellow-600 mb-1" /><p className="text-lg font-bold text-yellow-600">{f(totalCommitted)}</p><p className="text-xs text-muted-foreground">Committed</p></CardContent></Card>
      <Card><CardContent className="p-4"><TrendingUp className="h-5 w-5 text-green-600 mb-1" /><p className="text-lg font-bold text-green-600">{f(totalAllocated - totalSpent - totalCommitted)}</p><p className="text-xs text-muted-foreground">Available</p></CardContent></Card>
      <Card><CardContent className="p-4"><DollarSign className="h-5 w-5 text-accent mb-1" /><p className="text-lg font-bold">{Math.round((totalSpent / totalAllocated) * 100)}%</p><p className="text-xs text-muted-foreground">Budget Used</p><Progress value={(totalSpent / totalAllocated) * 100} className="mt-2 h-1.5" /></CardContent></Card>
    </div>

    {/* Monthly Expense Chart */}
    <Card>
      <CardHeader><CardTitle>Monthly Expenses by Category ($K)</CardTitle></CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={monthlyExpenses}>
            <CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="month" /><YAxis /><Tooltip formatter={(v: number) => `$${v}K`} />
            <Bar dataKey="salaries" stackId="a" fill="hsl(var(--primary))" name="Salaries" />
            <Bar dataKey="utilities" stackId="a" fill="hsl(var(--accent))" name="Utilities" />
            <Bar dataKey="maintenance" stackId="a" fill="#f59e0b" name="Maintenance" />
            <Bar dataKey="it" stackId="a" fill="#10b981" name="IT" />
            <Bar dataKey="other" stackId="a" fill="#8b5cf6" name="Other" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>

    <Tabs defaultValue="transactions">
      <TabsList>
        <TabsTrigger value="transactions">Expense Transactions</TabsTrigger>
        <TabsTrigger value="budget">Budget Overview</TabsTrigger>
      </TabsList>

      <TabsContent value="transactions">
        <Card>
          <CardHeader><CardTitle>All Expense Vouchers</CardTitle></CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow><TableHead>Voucher #</TableHead><TableHead>Category</TableHead><TableHead>Description</TableHead><TableHead className="text-right">Amount</TableHead><TableHead>Date</TableHead><TableHead>Approved By</TableHead><TableHead>Payment</TableHead><TableHead>Status</TableHead></TableRow>
                </TableHeader>
                <TableBody>
                  {expenses.map(e => (
                    <TableRow key={e.id}>
                      <TableCell className="font-mono text-xs">{e.id}</TableCell>
                      <TableCell><Badge variant="outline">{e.category}</Badge></TableCell>
                      <TableCell className="text-sm">{e.description}</TableCell>
                      <TableCell className="text-right font-bold">{f(e.amount)}</TableCell>
                      <TableCell>{e.date}</TableCell>
                      <TableCell className="text-sm">{e.approvedBy}</TableCell>
                      <TableCell className="text-sm">{e.paymentMode}</TableCell>
                      <TableCell><Badge variant={e.status === "Paid" ? "default" : e.status === "Approved" ? "secondary" : "outline"}>{e.status}</Badge></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="budget">
        <Card>
          <CardHeader><CardTitle>Budget Allocation & Utilization</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-4">
              {budget.map(b => {
                const usedPercent = Math.round((b.spent / b.allocated) * 100);
                const committedPercent = Math.round(((b.spent + b.committed) / b.allocated) * 100);
                return (
                  <div key={b.category} className="p-4 rounded-lg border">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="font-medium">{b.category}</p>
                        <p className="text-xs text-muted-foreground">{b.items.join(" · ")}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{f(b.allocated)}</p>
                        <p className="text-xs text-muted-foreground">Allocated</p>
                      </div>
                    </div>
                    <Progress value={committedPercent} className="h-2 mb-2" />
                    <div className="grid grid-cols-4 gap-2 text-xs">
                      <div><span className="text-muted-foreground">Spent:</span> <strong className="text-destructive">{f(b.spent)}</strong></div>
                      <div><span className="text-muted-foreground">Committed:</span> <strong className="text-yellow-600">{f(b.committed)}</strong></div>
                      <div><span className="text-muted-foreground">Available:</span> <strong className="text-green-600">{f(b.available)}</strong></div>
                      <div><span className="text-muted-foreground">Used:</span> <strong>{usedPercent}%</strong></div>
                    </div>
                  </div>
                );
              })}
            </div>
            <Separator className="my-4" />
            <div className="grid grid-cols-4 gap-4 text-center font-bold">
              <div><p className="text-xs text-muted-foreground mb-1">Total Allocated</p>{f(totalAllocated)}</div>
              <div><p className="text-xs text-muted-foreground mb-1">Total Spent</p><span className="text-destructive">{f(totalSpent)}</span></div>
              <div><p className="text-xs text-muted-foreground mb-1">Total Committed</p><span className="text-yellow-600">{f(totalCommitted)}</span></div>
              <div><p className="text-xs text-muted-foreground mb-1">Total Available</p><span className="text-green-600">{f(totalAllocated - totalSpent - totalCommitted)}</span></div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  </div>
);

export default AdminExpenses;

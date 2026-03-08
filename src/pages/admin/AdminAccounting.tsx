import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Plus, DollarSign, TrendingUp, TrendingDown, Download, BookOpen,
  FileText, Calculator, BarChart3,
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Legend } from "recharts";

// ── P&L Data ──
const incomeItems = [
  { account: "Tuition Fee Revenue", code: "4001", amount: 2340000 },
  { account: "Lab & Library Fees", code: "4002", amount: 182000 },
  { account: "Hostel Revenue", code: "4003", amount: 540000 },
  { account: "Transport Revenue", code: "4004", amount: 216000 },
  { account: "Exam & Misc Fees", code: "4005", amount: 156000 },
  { account: "Grants & Donations", code: "4006", amount: 350000 },
  { account: "Interest Income", code: "4007", amount: 48000 },
];

const expenseItems = [
  { account: "Staff Salaries & Benefits", code: "5001", amount: 1920000 },
  { account: "Utilities (Electricity, Water)", code: "5002", amount: 75000 },
  { account: "Building Maintenance", code: "5003", amount: 42500 },
  { account: "IT Infrastructure", code: "5004", amount: 31200 },
  { account: "Library Procurement", code: "5005", amount: 22000 },
  { account: "Lab Equipment & Supplies", code: "5006", amount: 35000 },
  { account: "Events & Activities", code: "5007", amount: 45000 },
  { account: "Marketing & Admissions", code: "5008", amount: 28000 },
  { account: "Insurance", code: "5009", amount: 18000 },
  { account: "Depreciation", code: "5010", amount: 65000 },
  { account: "Miscellaneous", code: "5011", amount: 12000 },
];

const totalIncome = incomeItems.reduce((s, i) => s + i.amount, 0);
const totalExpense = expenseItems.reduce((s, e) => s + e.amount, 0);
const netProfit = totalIncome - totalExpense;

// ── Balance Sheet ──
const assets = [
  { category: "Current Assets", items: [
    { account: "Cash & Bank Balances", amount: 1250000 },
    { account: "Accounts Receivable (Student Fees)", amount: 380000 },
    { account: "Prepaid Expenses", amount: 45000 },
    { account: "Short-term Investments", amount: 200000 },
  ]},
  { category: "Fixed Assets", items: [
    { account: "Land & Buildings", amount: 12500000 },
    { account: "Furniture & Fixtures", amount: 850000 },
    { account: "IT Equipment", amount: 420000 },
    { account: "Lab Equipment", amount: 680000 },
    { account: "Vehicles (Buses)", amount: 380000 },
    { account: "Less: Accumulated Depreciation", amount: -1850000 },
  ]},
];

const liabilities = [
  { category: "Current Liabilities", items: [
    { account: "Accounts Payable", amount: 125000 },
    { account: "Salaries Payable", amount: 320000 },
    { account: "Tax Payable (TDS/GST)", amount: 85000 },
    { account: "Student Deposits (Caution Money)", amount: 260000 },
    { account: "Advance Fee Received", amount: 180000 },
  ]},
  { category: "Long-term Liabilities", items: [
    { account: "Bank Loan — Infrastructure", amount: 2500000 },
    { account: "Building Development Fund", amount: 500000 },
  ]},
  { category: "Equity / Fund Balance", items: [
    { account: "Accumulated Fund", amount: 10885000 },
    { account: "Current Year Surplus", amount: netProfit },
  ]},
];

const totalAssets = assets.reduce((s, c) => s + c.items.reduce((ss, i) => ss + i.amount, 0), 0);
const totalLiabilities = liabilities.reduce((s, c) => s + c.items.reduce((ss, i) => ss + i.amount, 0), 0);

// ── Journal Entries ──
const journalEntries = [
  { id: "JE-2026-0342", date: "2026-03-08", description: "Student fee collection — March batch", debitAccount: "Bank (SBI)", debitAmount: 520000, creditAccount: "Tuition Fee Revenue", creditAmount: 520000 },
  { id: "JE-2026-0341", date: "2026-03-07", description: "Salary disbursement — March", debitAccount: "Staff Salaries", debitAmount: 320000, creditAccount: "Bank (HDFC)", creditAmount: 320000 },
  { id: "JE-2026-0340", date: "2026-03-06", description: "Electricity bill payment", debitAccount: "Utilities Expense", debitAmount: 15000, creditAccount: "Bank (SBI)", creditAmount: 15000 },
  { id: "JE-2026-0339", date: "2026-03-05", description: "Lab equipment purchase", debitAccount: "Lab Equipment (Asset)", debitAmount: 85000, creditAccount: "Bank (SBI)", creditAmount: 85000 },
  { id: "JE-2026-0338", date: "2026-03-04", description: "Library book procurement", debitAccount: "Library Procurement", debitAmount: 7500, creditAccount: "Bank (HDFC)", creditAmount: 7500 },
  { id: "JE-2026-0337", date: "2026-03-03", description: "Donation received — Alumni Assoc.", debitAccount: "Bank (SBI)", debitAmount: 100000, creditAccount: "Grants & Donations", creditAmount: 100000 },
  { id: "JE-2026-0336", date: "2026-03-02", description: "Monthly depreciation", debitAccount: "Depreciation", debitAmount: 10833, creditAccount: "Accumulated Depreciation", creditAmount: 10833 },
  { id: "JE-2026-0335", date: "2026-03-01", description: "Insurance premium — Q4", debitAccount: "Insurance Expense", debitAmount: 4500, creditAccount: "Bank (SBI)", creditAmount: 4500 },
];

// ── Ledger (sample — Bank Account) ──
const ledger = [
  { date: "2026-03-01", particular: "Opening Balance", debit: 0, credit: 0, balance: 1250000 },
  { date: "2026-03-01", particular: "Insurance Premium Q4", debit: 0, credit: 4500, balance: 1245500 },
  { date: "2026-03-03", particular: "Donation — Alumni", debit: 100000, credit: 0, balance: 1345500 },
  { date: "2026-03-05", particular: "Lab Equipment Purchase", debit: 0, credit: 85000, balance: 1260500 },
  { date: "2026-03-06", particular: "Electricity Bill", debit: 0, credit: 15000, balance: 1245500 },
  { date: "2026-03-07", particular: "Salary Disbursement", debit: 0, credit: 320000, balance: 925500 },
  { date: "2026-03-08", particular: "Student Fee Collection", debit: 520000, credit: 0, balance: 1445500 },
];

// ── Trial Balance ──
const trialBalance = [
  { account: "Cash & Bank", code: "1001", debit: 1445500, credit: 0 },
  { account: "Accounts Receivable", code: "1002", debit: 380000, credit: 0 },
  { account: "Fixed Assets (Net)", code: "1100", debit: 12980000, credit: 0 },
  { account: "Accounts Payable", code: "2001", debit: 0, credit: 125000 },
  { account: "Salaries Payable", code: "2002", debit: 0, credit: 320000 },
  { account: "Student Deposits", code: "2003", debit: 0, credit: 260000 },
  { account: "Bank Loan", code: "2100", debit: 0, credit: 2500000 },
  { account: "Accumulated Fund", code: "3001", debit: 0, credit: 10885000 },
  { account: "Tuition Revenue", code: "4001", debit: 0, credit: 2340000 },
  { account: "Other Revenue", code: "4002", debit: 0, credit: 1492000 },
  { account: "Staff Salaries", code: "5001", debit: 1920000, credit: 0 },
  { account: "Other Expenses", code: "5002", debit: 373700, credit: 0 },
  { account: "Depreciation", code: "5010", debit: 65000, credit: 0 },
];

const trialDebit = trialBalance.reduce((s, t) => s + t.debit, 0);
const trialCredit = trialBalance.reduce((s, t) => s + t.credit, 0);

// ── Monthly P&L Chart ──
const monthlyPL = [
  { month: "Sep", income: 580, expense: 380 }, { month: "Oct", income: 520, expense: 390 },
  { month: "Nov", income: 540, expense: 385 }, { month: "Dec", income: 420, expense: 370 },
  { month: "Jan", income: 550, expense: 395 }, { month: "Feb", income: 560, expense: 388 },
  { month: "Mar", income: 662, expense: 394 },
];

const expenseBreakdown = [
  { name: "Salaries", value: 1920000 }, { name: "Utilities", value: 75000 },
  { name: "Maintenance", value: 42500 }, { name: "IT", value: 31200 },
  { name: "Library", value: 22000 }, { name: "Other", value: 203000 },
];

const COLORS = ["hsl(var(--primary))", "hsl(var(--accent))", "#f59e0b", "#10b981", "#8b5cf6", "#ec4899"];

const f = (n: number) => `$${Math.abs(n).toLocaleString()}`;

const AdminAccounting = () => (
  <div className="space-y-6">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
      <div>
        <h1 className="font-display text-2xl font-bold">Accounting & Finance</h1>
        <p className="text-sm text-muted-foreground">Financial Year 2025-26 · Period: Apr 2025 – Mar 2026</p>
      </div>
      <div className="flex gap-2">
        <Select defaultValue="fy2026"><SelectTrigger className="w-44"><SelectValue /></SelectTrigger>
          <SelectContent><SelectItem value="fy2026">FY 2025-26</SelectItem><SelectItem value="fy2025">FY 2024-25</SelectItem></SelectContent>
        </Select>
        <Button variant="outline"><Download className="h-4 w-4 mr-1" /> Export</Button>
      </div>
    </div>

    {/* ── KPI Cards ── */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <Card><CardContent className="p-4"><TrendingUp className="h-5 w-5 text-green-600 mb-1" /><p className="text-lg font-bold text-green-600">{f(totalIncome)}</p><p className="text-xs text-muted-foreground">Total Revenue (YTD)</p></CardContent></Card>
      <Card><CardContent className="p-4"><TrendingDown className="h-5 w-5 text-destructive mb-1" /><p className="text-lg font-bold text-destructive">{f(totalExpense)}</p><p className="text-xs text-muted-foreground">Total Expenses (YTD)</p></CardContent></Card>
      <Card><CardContent className="p-4"><DollarSign className="h-5 w-5 text-accent mb-1" /><p className={`text-lg font-bold ${netProfit >= 0 ? "text-green-600" : "text-destructive"}`}>{f(netProfit)}</p><p className="text-xs text-muted-foreground">Net {netProfit >= 0 ? "Surplus" : "Deficit"}</p></CardContent></Card>
      <Card><CardContent className="p-4"><Calculator className="h-5 w-5 text-accent mb-1" /><p className="text-lg font-bold">{Math.round((netProfit / totalIncome) * 100)}%</p><p className="text-xs text-muted-foreground">Net Margin</p></CardContent></Card>
    </div>

    {/* ── Charts ── */}
    <div className="grid lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader><CardTitle>Monthly Income vs Expenses ($K)</CardTitle></CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={monthlyPL}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="month" /><YAxis /><Tooltip formatter={(v: number) => `$${v}K`} />
              <Bar dataKey="income" fill="hsl(var(--primary))" name="Income" radius={[4,4,0,0]} />
              <Bar dataKey="expense" fill="hsl(var(--muted-foreground))" name="Expense" radius={[4,4,0,0]} opacity={0.4} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>Expense Distribution</CardTitle></CardHeader>
        <CardContent className="flex justify-center">
          <ResponsiveContainer width="100%" height={240}>
            <PieChart><Pie data={expenseBreakdown} cx="50%" cy="50%" outerRadius={85} dataKey="value" label={({ name }) => name}>
              {expenseBreakdown.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
            </Pie><Tooltip formatter={(v: number) => f(v)} /></PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>

    {/* ── Main Tabs ── */}
    <Tabs defaultValue="pnl">
      <TabsList className="flex-wrap h-auto gap-1">
        <TabsTrigger value="pnl"><BarChart3 className="h-3.5 w-3.5 mr-1" /> Profit & Loss</TabsTrigger>
        <TabsTrigger value="balance"><FileText className="h-3.5 w-3.5 mr-1" /> Balance Sheet</TabsTrigger>
        <TabsTrigger value="journal"><BookOpen className="h-3.5 w-3.5 mr-1" /> Journal Entries</TabsTrigger>
        <TabsTrigger value="ledger"><FileText className="h-3.5 w-3.5 mr-1" /> General Ledger</TabsTrigger>
        <TabsTrigger value="trial"><Calculator className="h-3.5 w-3.5 mr-1" /> Trial Balance</TabsTrigger>
      </TabsList>

      {/* P&L */}
      <TabsContent value="pnl">
        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader><CardTitle className="text-green-600">Income / Revenue</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow><TableHead>Account</TableHead><TableHead>Code</TableHead><TableHead className="text-right">Amount</TableHead></TableRow></TableHeader>
                <TableBody>
                  {incomeItems.map(i => (
                    <TableRow key={i.code}><TableCell className="font-medium">{i.account}</TableCell><TableCell className="font-mono text-xs">{i.code}</TableCell><TableCell className="text-right">{f(i.amount)}</TableCell></TableRow>
                  ))}
                  <TableRow className="bg-green-50 dark:bg-green-950/20 font-bold"><TableCell colSpan={2}>Total Revenue</TableCell><TableCell className="text-right text-green-600">{f(totalIncome)}</TableCell></TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-destructive">Expenses</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow><TableHead>Account</TableHead><TableHead>Code</TableHead><TableHead className="text-right">Amount</TableHead></TableRow></TableHeader>
                <TableBody>
                  {expenseItems.map(e => (
                    <TableRow key={e.code}><TableCell className="font-medium">{e.account}</TableCell><TableCell className="font-mono text-xs">{e.code}</TableCell><TableCell className="text-right">{f(e.amount)}</TableCell></TableRow>
                  ))}
                  <TableRow className="bg-red-50 dark:bg-red-950/20 font-bold"><TableCell colSpan={2}>Total Expenses</TableCell><TableCell className="text-right text-destructive">{f(totalExpense)}</TableCell></TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
        <Card className="mt-6">
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold">Net {netProfit >= 0 ? "Surplus" : "Deficit"}</span>
              <span className={`text-3xl font-bold ${netProfit >= 0 ? "text-green-600" : "text-destructive"}`}>{f(netProfit)}</span>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Balance Sheet */}
      <TabsContent value="balance">
        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader><CardTitle>Assets</CardTitle></CardHeader>
            <CardContent>
              {assets.map(cat => (
                <div key={cat.category} className="mb-4">
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">{cat.category}</h4>
                  <Table>
                    <TableBody>
                      {cat.items.map(i => (
                        <TableRow key={i.account}><TableCell className={`text-sm ${i.amount < 0 ? "italic text-muted-foreground" : ""}`}>{i.account}</TableCell><TableCell className="text-right">{i.amount < 0 ? `(${f(i.amount)})` : f(i.amount)}</TableCell></TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              ))}
              <Separator />
              <div className="flex justify-between items-center p-3 font-bold text-lg"><span>Total Assets</span><span>{f(totalAssets)}</span></div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Liabilities & Fund Balance</CardTitle></CardHeader>
            <CardContent>
              {liabilities.map(cat => (
                <div key={cat.category} className="mb-4">
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">{cat.category}</h4>
                  <Table>
                    <TableBody>
                      {cat.items.map(i => (
                        <TableRow key={i.account}><TableCell className="text-sm">{i.account}</TableCell><TableCell className="text-right">{f(i.amount)}</TableCell></TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              ))}
              <Separator />
              <div className="flex justify-between items-center p-3 font-bold text-lg"><span>Total Liabilities + Equity</span><span>{f(totalLiabilities)}</span></div>
            </CardContent>
          </Card>
        </div>
        {totalAssets === totalLiabilities && (
          <div className="mt-4 p-3 rounded-lg bg-green-50 dark:bg-green-950/20 text-center text-green-600 font-medium">
            ✓ Balance Sheet is balanced — Assets ({f(totalAssets)}) = Liabilities + Equity ({f(totalLiabilities)})
          </div>
        )}
      </TabsContent>

      {/* Journal Entries */}
      <TabsContent value="journal">
        <Card>
          <CardHeader className="flex-row items-center justify-between space-y-0">
            <CardTitle>Journal Entries</CardTitle>
            <Dialog>
              <DialogTrigger asChild><Button size="sm"><Plus className="h-4 w-4 mr-1" /> New Entry</Button></DialogTrigger>
              <DialogContent>
                <DialogHeader><DialogTitle>Create Journal Entry</DialogTitle></DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2"><Label>Date</Label><Input type="date" /></div>
                  <div className="space-y-2"><Label>Description</Label><Input placeholder="Narration" /></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2"><Label>Debit Account</Label><Input placeholder="Account name" /></div>
                    <div className="space-y-2"><Label>Debit Amount</Label><Input type="number" /></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2"><Label>Credit Account</Label><Input placeholder="Account name" /></div>
                    <div className="space-y-2"><Label>Credit Amount</Label><Input type="number" /></div>
                  </div>
                  <Button className="w-full">Post Entry</Button>
                </div>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow><TableHead>Entry #</TableHead><TableHead>Date</TableHead><TableHead>Description</TableHead><TableHead>Debit Account</TableHead><TableHead className="text-right">Debit ($)</TableHead><TableHead>Credit Account</TableHead><TableHead className="text-right">Credit ($)</TableHead></TableRow>
                </TableHeader>
                <TableBody>
                  {journalEntries.map(j => (
                    <TableRow key={j.id}>
                      <TableCell className="font-mono text-xs">{j.id}</TableCell><TableCell>{j.date}</TableCell><TableCell className="text-sm">{j.description}</TableCell>
                      <TableCell className="font-medium">{j.debitAccount}</TableCell><TableCell className="text-right">{f(j.debitAmount)}</TableCell>
                      <TableCell className="font-medium">{j.creditAccount}</TableCell><TableCell className="text-right">{f(j.creditAmount)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      {/* General Ledger */}
      <TabsContent value="ledger">
        <Card>
          <CardHeader className="flex-row items-center justify-between space-y-0">
            <CardTitle>General Ledger — Bank Account (SBI Main)</CardTitle>
            <Select defaultValue="bank"><SelectTrigger className="w-56"><SelectValue /></SelectTrigger>
              <SelectContent><SelectItem value="bank">Bank Account (SBI)</SelectItem><SelectItem value="salary">Staff Salaries</SelectItem><SelectItem value="tuition">Tuition Revenue</SelectItem></SelectContent>
            </Select>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow><TableHead>Date</TableHead><TableHead>Particular</TableHead><TableHead className="text-right">Debit</TableHead><TableHead className="text-right">Credit</TableHead><TableHead className="text-right">Balance</TableHead></TableRow>
              </TableHeader>
              <TableBody>
                {ledger.map((l, i) => (
                  <TableRow key={i}>
                    <TableCell>{l.date}</TableCell><TableCell className={i === 0 ? "font-bold" : ""}>{l.particular}</TableCell>
                    <TableCell className="text-right">{l.debit > 0 ? f(l.debit) : "—"}</TableCell>
                    <TableCell className="text-right">{l.credit > 0 ? f(l.credit) : "—"}</TableCell>
                    <TableCell className="text-right font-medium">{f(l.balance)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Trial Balance */}
      <TabsContent value="trial">
        <Card>
          <CardHeader><CardTitle>Trial Balance — As at March 8, 2026</CardTitle></CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow><TableHead>Account</TableHead><TableHead>Code</TableHead><TableHead className="text-right">Debit ($)</TableHead><TableHead className="text-right">Credit ($)</TableHead></TableRow>
              </TableHeader>
              <TableBody>
                {trialBalance.map(t => (
                  <TableRow key={t.code}><TableCell className="font-medium">{t.account}</TableCell><TableCell className="font-mono text-xs">{t.code}</TableCell>
                    <TableCell className="text-right">{t.debit > 0 ? f(t.debit) : "—"}</TableCell>
                    <TableCell className="text-right">{t.credit > 0 ? f(t.credit) : "—"}</TableCell>
                  </TableRow>
                ))}
                <TableRow className="bg-muted font-bold">
                  <TableCell colSpan={2}>Total</TableCell>
                  <TableCell className="text-right">{f(trialDebit)}</TableCell>
                  <TableCell className="text-right">{f(trialCredit)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            {Math.abs(trialDebit - trialCredit) < 1 && (
              <div className="mt-4 p-3 rounded-lg bg-green-50 dark:bg-green-950/20 text-center text-green-600 font-medium">
                ✓ Trial Balance is balanced — Debits ({f(trialDebit)}) = Credits ({f(trialCredit)})
              </div>
            )}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  </div>
);

export default AdminAccounting;

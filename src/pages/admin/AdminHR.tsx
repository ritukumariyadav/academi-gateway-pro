import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  Users, DollarSign, Calendar, Clock, Download, FileText, Send, Printer,
  CheckCircle, AlertTriangle, TrendingUp, Briefcase,
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { useState } from "react";

// ── Payroll Summary ──
const payrollSummary = {
  month: "March 2026", totalStaff: 124, processed: 120, pending: 4,
  totalGross: 4850000, totalDeductions: 1164000, totalNet: 3686000,
  totalTax: 582000, totalPF: 388000, totalESI: 97000, totalOther: 97000,
};

// ── Detailed Payslips ──
const payslips = [
  {
    id: 1, empId: "EMP-001", name: "Dr. Robert Smith", designation: "Professor", department: "Computer Science", panNo: "ABCPS1234R", bankAc: "XXXX-4521",
    earnings: { basic: 85000, hra: 34000, da: 17000, specialAllow: 8500, conveyance: 3200, medical: 2500, lta: 4000 },
    deductions: { pf: 10200, esi: 1700, tds: 18500, profTax: 200, loanEmi: 5000 },
    gross: 154200, totalDeductions: 35600, netPay: 118600, status: "Processed",
  },
  {
    id: 2, empId: "EMP-002", name: "Prof. Sarah Johnson", designation: "Associate Professor", department: "Computer Science", panNo: "XYZPJ5678K", bankAc: "XXXX-7832",
    earnings: { basic: 72000, hra: 28800, da: 14400, specialAllow: 7200, conveyance: 3200, medical: 2500, lta: 3000 },
    deductions: { pf: 8640, esi: 1440, tds: 14200, profTax: 200, loanEmi: 0 },
    gross: 131100, totalDeductions: 24480, netPay: 106620, status: "Processed",
  },
  {
    id: 3, empId: "EMP-003", name: "Mrs. Emily Davis", designation: "Assistant Professor", department: "Electronics", panNo: "LMNPD9012M", bankAc: "XXXX-3156",
    earnings: { basic: 58000, hra: 23200, da: 11600, specialAllow: 5800, conveyance: 3200, medical: 2500, lta: 2500 },
    deductions: { pf: 6960, esi: 1160, tds: 9800, profTax: 200, loanEmi: 8000 },
    gross: 106800, totalDeductions: 26120, netPay: 80680, status: "Processed",
  },
  {
    id: 4, empId: "EMP-004", name: "Mr. Rajesh Kumar", designation: "Lab Assistant", department: "Physics", panNo: "PQRPK3456N", bankAc: "XXXX-9487",
    earnings: { basic: 35000, hra: 14000, da: 7000, specialAllow: 3500, conveyance: 3200, medical: 1500, lta: 1500 },
    deductions: { pf: 4200, esi: 700, tds: 2800, profTax: 200, loanEmi: 0 },
    gross: 65700, totalDeductions: 7900, netPay: 57800, status: "Processed",
  },
  {
    id: 5, empId: "EMP-005", name: "Dr. Michael Brown", designation: "HOD", department: "Mechanical", panNo: "STMPB7890L", bankAc: "XXXX-2741",
    earnings: { basic: 95000, hra: 38000, da: 19000, specialAllow: 12000, conveyance: 3200, medical: 2500, lta: 5000 },
    deductions: { pf: 11400, esi: 0, tds: 25000, profTax: 200, loanEmi: 10000 },
    gross: 174700, totalDeductions: 46600, netPay: 128100, status: "Pending",
  },
];

// ── Monthly trend ──
const monthlyTrend = [
  { month: "Oct", gross: 4700, net: 3580 }, { month: "Nov", gross: 4750, net: 3610 },
  { month: "Dec", gross: 4800, net: 3640 }, { month: "Jan", gross: 4820, net: 3660 },
  { month: "Feb", gross: 4840, net: 3670 }, { month: "Mar", gross: 4850, net: 3686 },
];

// ── Deduction breakdown ──
const deductionBreakdown = [
  { name: "PF", value: 388000 }, { name: "TDS/Tax", value: 582000 },
  { name: "ESI", value: 97000 }, { name: "Prof. Tax", value: 24800 },
  { name: "Loan EMI", value: 72200 },
];

const COLORS = ["hsl(var(--primary))", "hsl(var(--accent))", "#f59e0b", "#10b981", "#8b5cf6"];

// ── Leave balance (for integration) ──
const leaveRequests = [
  { id: 1, name: "Dr. Smith", type: "Sick Leave", from: "2026-03-10", to: "2026-03-12", days: 3, status: "Pending", lopDays: 0 },
  { id: 2, name: "Prof. Johnson", type: "Casual Leave", from: "2026-03-15", to: "2026-03-15", days: 1, status: "Approved", lopDays: 0 },
  { id: 3, name: "Mrs. Davis", type: "Maternity", from: "2026-04-01", to: "2026-06-30", days: 90, status: "Approved", lopDays: 0 },
  { id: 4, name: "Mr. Wilson", type: "Earned Leave", from: "2026-03-20", to: "2026-03-25", days: 5, status: "Pending", lopDays: 0 },
  { id: 5, name: "Dr. Brown", type: "LOP (Unauthorized)", from: "2026-03-05", to: "2026-03-06", days: 2, status: "Applied", lopDays: 2 },
];

// ── YTD Summary ──
const ytdSummary = [
  { empId: "EMP-001", name: "Dr. Smith", grossYTD: 925200, taxYTD: 111000, pfYTD: 61200, netYTD: 711600 },
  { empId: "EMP-002", name: "Prof. Johnson", grossYTD: 786600, taxYTD: 85200, pfYTD: 51840, netYTD: 639720 },
  { empId: "EMP-003", name: "Mrs. Davis", grossYTD: 640800, taxYTD: 58800, pfYTD: 41760, netYTD: 484080 },
  { empId: "EMP-004", name: "Mr. Kumar", grossYTD: 394200, taxYTD: 16800, pfYTD: 25200, netYTD: 346800 },
];

const f = (n: number) => `$${n.toLocaleString()}`;

const AdminHR = () => {
  const [selectedPayslip, setSelectedPayslip] = useState<typeof payslips[0] | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold">HR & Payroll Management</h1>
          <p className="text-sm text-muted-foreground">Payroll Period: {payrollSummary.month} · Staff: {payrollSummary.totalStaff}</p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="mar2026"><SelectTrigger className="w-44"><SelectValue /></SelectTrigger>
            <SelectContent><SelectItem value="mar2026">March 2026</SelectItem><SelectItem value="feb2026">February 2026</SelectItem><SelectItem value="jan2026">January 2026</SelectItem></SelectContent>
          </Select>
          <Button variant="outline"><Download className="h-4 w-4 mr-1" /> Export</Button>
          <Button><Send className="h-4 w-4 mr-1" /> Process Payroll</Button>
        </div>
      </div>

      {/* ── KPI Cards ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        <Card><CardContent className="p-4"><Users className="h-5 w-5 text-accent mb-1" /><p className="text-lg font-bold">{payrollSummary.totalStaff}</p><p className="text-xs text-muted-foreground">Total Staff</p></CardContent></Card>
        <Card><CardContent className="p-4"><DollarSign className="h-5 w-5 text-accent mb-1" /><p className="text-lg font-bold">{f(payrollSummary.totalGross)}</p><p className="text-xs text-muted-foreground">Total Gross</p></CardContent></Card>
        <Card><CardContent className="p-4"><AlertTriangle className="h-5 w-5 text-destructive mb-1" /><p className="text-lg font-bold text-destructive">{f(payrollSummary.totalDeductions)}</p><p className="text-xs text-muted-foreground">Total Deductions</p></CardContent></Card>
        <Card><CardContent className="p-4"><CheckCircle className="h-5 w-5 text-green-600 mb-1" /><p className="text-lg font-bold text-green-600">{f(payrollSummary.totalNet)}</p><p className="text-xs text-muted-foreground">Net Disbursement</p></CardContent></Card>
        <Card><CardContent className="p-4"><TrendingUp className="h-5 w-5 text-accent mb-1" /><p className="text-lg font-bold">{payrollSummary.processed}/{payrollSummary.totalStaff}</p><p className="text-xs text-muted-foreground">Processed</p><Progress value={(payrollSummary.processed / payrollSummary.totalStaff) * 100} className="mt-2 h-1.5" /></CardContent></Card>
        <Card><CardContent className="p-4"><Clock className="h-5 w-5 text-yellow-600 mb-1" /><p className="text-lg font-bold text-yellow-600">{payrollSummary.pending}</p><p className="text-xs text-muted-foreground">Pending</p></CardContent></Card>
      </div>

      {/* ── Charts Row ── */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle>Monthly Payroll Trend (in $K)</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={monthlyTrend}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="month" /><YAxis /><Tooltip formatter={(v: number) => `$${v}K`} />
                <Bar dataKey="gross" fill="hsl(var(--muted-foreground))" name="Gross" radius={[4,4,0,0]} opacity={0.3} />
                <Bar dataKey="net" fill="hsl(var(--primary))" name="Net" radius={[4,4,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Deduction Breakdown — {payrollSummary.month}</CardTitle></CardHeader>
          <CardContent className="flex justify-center">
            <ResponsiveContainer width="100%" height={220}>
              <PieChart><Pie data={deductionBreakdown} cx="50%" cy="50%" outerRadius={85} dataKey="value" label={({ name, value }) => `${name}: $${(value / 1000).toFixed(0)}K`}>
                {deductionBreakdown.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
              </Pie><Tooltip formatter={(v: number) => f(v)} /></PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* ── Main Tabs ── */}
      <Tabs defaultValue="payslips">
        <TabsList className="flex-wrap h-auto gap-1">
          <TabsTrigger value="payslips"><FileText className="h-3.5 w-3.5 mr-1" /> Payslips</TabsTrigger>
          <TabsTrigger value="leave"><Calendar className="h-3.5 w-3.5 mr-1" /> Leave Mgmt</TabsTrigger>
          <TabsTrigger value="ytd"><TrendingUp className="h-3.5 w-3.5 mr-1" /> YTD Summary</TabsTrigger>
          <TabsTrigger value="structure"><Briefcase className="h-3.5 w-3.5 mr-1" /> Salary Structure</TabsTrigger>
        </TabsList>

        {/* ── Payslips Tab ── */}
        <TabsContent value="payslips">
          <Card>
            <CardHeader><CardTitle>Staff Payslips — {payrollSummary.month}</CardTitle></CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Emp ID</TableHead><TableHead>Name</TableHead><TableHead>Designation</TableHead><TableHead>Department</TableHead>
                      <TableHead className="text-right">Gross</TableHead><TableHead className="text-right">Deductions</TableHead><TableHead className="text-right">Net Pay</TableHead>
                      <TableHead>Status</TableHead><TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {payslips.map(p => (
                      <TableRow key={p.id}>
                        <TableCell className="font-mono text-xs">{p.empId}</TableCell>
                        <TableCell className="font-medium">{p.name}</TableCell>
                        <TableCell className="text-sm">{p.designation}</TableCell>
                        <TableCell className="text-sm">{p.department}</TableCell>
                        <TableCell className="text-right">{f(p.gross)}</TableCell>
                        <TableCell className="text-right text-destructive">{f(p.totalDeductions)}</TableCell>
                        <TableCell className="text-right font-bold">{f(p.netPay)}</TableCell>
                        <TableCell><Badge variant={p.status === "Processed" ? "default" : "outline"}>{p.status}</Badge></TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Dialog>
                              <DialogTrigger asChild><Button size="sm" variant="ghost" onClick={() => setSelectedPayslip(p)}><FileText className="h-3.5 w-3.5" /></Button></DialogTrigger>
                              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                                <DialogHeader><DialogTitle>Payslip — {p.name}</DialogTitle></DialogHeader>
                                <div className="space-y-4">
                                  <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div><span className="text-muted-foreground">Employee ID:</span> <strong>{p.empId}</strong></div>
                                    <div><span className="text-muted-foreground">PAN:</span> <strong>{p.panNo}</strong></div>
                                    <div><span className="text-muted-foreground">Designation:</span> <strong>{p.designation}</strong></div>
                                    <div><span className="text-muted-foreground">Bank A/C:</span> <strong>{p.bankAc}</strong></div>
                                    <div><span className="text-muted-foreground">Department:</span> <strong>{p.department}</strong></div>
                                    <div><span className="text-muted-foreground">Pay Period:</span> <strong>{payrollSummary.month}</strong></div>
                                  </div>
                                  <Separator />
                                  <div className="grid grid-cols-2 gap-6">
                                    <div>
                                      <h4 className="font-semibold text-green-600 mb-3">Earnings</h4>
                                      <div className="space-y-2 text-sm">
                                        <div className="flex justify-between"><span>Basic Salary</span><span>{f(p.earnings.basic)}</span></div>
                                        <div className="flex justify-between"><span>HRA (House Rent)</span><span>{f(p.earnings.hra)}</span></div>
                                        <div className="flex justify-between"><span>DA (Dearness)</span><span>{f(p.earnings.da)}</span></div>
                                        <div className="flex justify-between"><span>Special Allowance</span><span>{f(p.earnings.specialAllow)}</span></div>
                                        <div className="flex justify-between"><span>Conveyance</span><span>{f(p.earnings.conveyance)}</span></div>
                                        <div className="flex justify-between"><span>Medical Allowance</span><span>{f(p.earnings.medical)}</span></div>
                                        <div className="flex justify-between"><span>LTA</span><span>{f(p.earnings.lta)}</span></div>
                                        <Separator />
                                        <div className="flex justify-between font-bold"><span>Total Earnings</span><span className="text-green-600">{f(p.gross)}</span></div>
                                      </div>
                                    </div>
                                    <div>
                                      <h4 className="font-semibold text-destructive mb-3">Deductions</h4>
                                      <div className="space-y-2 text-sm">
                                        <div className="flex justify-between"><span>Provident Fund (12%)</span><span>{f(p.deductions.pf)}</span></div>
                                        <div className="flex justify-between"><span>ESI</span><span>{p.deductions.esi > 0 ? f(p.deductions.esi) : "N/A"}</span></div>
                                        <div className="flex justify-between"><span>TDS (Income Tax)</span><span>{f(p.deductions.tds)}</span></div>
                                        <div className="flex justify-between"><span>Professional Tax</span><span>{f(p.deductions.profTax)}</span></div>
                                        {p.deductions.loanEmi > 0 && <div className="flex justify-between"><span>Loan EMI</span><span>{f(p.deductions.loanEmi)}</span></div>}
                                        <Separator />
                                        <div className="flex justify-between font-bold"><span>Total Deductions</span><span className="text-destructive">{f(p.totalDeductions)}</span></div>
                                      </div>
                                    </div>
                                  </div>
                                  <Separator />
                                  <div className="flex justify-between items-center p-4 rounded-lg bg-accent/10">
                                    <span className="text-lg font-bold">Net Pay</span>
                                    <span className="text-2xl font-bold text-accent">{f(p.netPay)}</span>
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                            <Button size="sm" variant="ghost" title="Print"><Printer className="h-3.5 w-3.5" /></Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="mt-4 p-3 rounded-lg bg-muted/50 grid grid-cols-3 gap-4 text-center">
                <div><p className="text-xs text-muted-foreground">Total Gross</p><p className="font-bold">{f(payslips.reduce((s, p) => s + p.gross, 0))}</p></div>
                <div><p className="text-xs text-muted-foreground">Total Deductions</p><p className="font-bold text-destructive">{f(payslips.reduce((s, p) => s + p.totalDeductions, 0))}</p></div>
                <div><p className="text-xs text-muted-foreground">Total Net</p><p className="font-bold text-green-600">{f(payslips.reduce((s, p) => s + p.netPay, 0))}</p></div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ── Leave Management Tab ── */}
        <TabsContent value="leave">
          <Card>
            <CardHeader><CardTitle>Leave Requests & LOP Impact</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow><TableHead>Staff</TableHead><TableHead>Leave Type</TableHead><TableHead>From</TableHead><TableHead>To</TableHead><TableHead>Days</TableHead><TableHead>LOP Days</TableHead><TableHead>Status</TableHead><TableHead>Actions</TableHead></TableRow></TableHeader>
                <TableBody>
                  {leaveRequests.map(l => (
                    <TableRow key={l.id}>
                      <TableCell className="font-medium">{l.name}</TableCell><TableCell>{l.type}</TableCell><TableCell>{l.from}</TableCell><TableCell>{l.to}</TableCell><TableCell>{l.days}</TableCell>
                      <TableCell>{l.lopDays > 0 ? <Badge variant="destructive">{l.lopDays} LOP</Badge> : "0"}</TableCell>
                      <TableCell><Badge variant={l.status === "Approved" ? "secondary" : l.status === "Pending" ? "outline" : "default"}>{l.status}</Badge></TableCell>
                      <TableCell>{l.status === "Pending" && <div className="flex gap-1"><Button size="sm">Approve</Button><Button size="sm" variant="outline">Reject</Button></div>}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ── YTD Tab ── */}
        <TabsContent value="ytd">
          <Card>
            <CardHeader><CardTitle>Year-to-Date Summary (Apr 2025 – Mar 2026)</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow><TableHead>Emp ID</TableHead><TableHead>Name</TableHead><TableHead className="text-right">Gross YTD</TableHead><TableHead className="text-right">Tax YTD</TableHead><TableHead className="text-right">PF YTD</TableHead><TableHead className="text-right">Net YTD</TableHead></TableRow></TableHeader>
                <TableBody>
                  {ytdSummary.map(y => (
                    <TableRow key={y.empId}>
                      <TableCell className="font-mono text-xs">{y.empId}</TableCell>
                      <TableCell className="font-medium">{y.name}</TableCell>
                      <TableCell className="text-right">{f(y.grossYTD)}</TableCell>
                      <TableCell className="text-right text-destructive">{f(y.taxYTD)}</TableCell>
                      <TableCell className="text-right">{f(y.pfYTD)}</TableCell>
                      <TableCell className="text-right font-bold">{f(y.netYTD)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ── Salary Structure Tab ── */}
        <TabsContent value="structure">
          <Card>
            <CardHeader><CardTitle>Salary Grade Structure</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow><TableHead>Grade</TableHead><TableHead>Designation</TableHead><TableHead className="text-right">Basic Range</TableHead><TableHead>HRA</TableHead><TableHead>DA</TableHead><TableHead>Special Allow</TableHead><TableHead>PF</TableHead><TableHead>ESI Eligible</TableHead></TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { grade: "G1", designation: "Professor / HOD", basic: "$85K–$95K", hra: "40%", da: "20%", special: "10%", pf: "12%", esi: "No" },
                    { grade: "G2", designation: "Associate Professor", basic: "$65K–$80K", hra: "40%", da: "20%", special: "10%", pf: "12%", esi: "No" },
                    { grade: "G3", designation: "Assistant Professor", basic: "$50K–$62K", hra: "40%", da: "20%", special: "10%", pf: "12%", esi: "Yes" },
                    { grade: "G4", designation: "Lab Assistant / Staff", basic: "$30K–$45K", hra: "40%", da: "20%", special: "10%", pf: "12%", esi: "Yes" },
                    { grade: "G5", designation: "Support Staff", basic: "$20K–$30K", hra: "40%", da: "20%", special: "10%", pf: "12%", esi: "Yes" },
                  ].map(g => (
                    <TableRow key={g.grade}>
                      <TableCell><Badge variant="outline">{g.grade}</Badge></TableCell>
                      <TableCell className="font-medium">{g.designation}</TableCell>
                      <TableCell className="text-right">{g.basic}</TableCell>
                      <TableCell>{g.hra}</TableCell><TableCell>{g.da}</TableCell><TableCell>{g.special}</TableCell><TableCell>{g.pf}</TableCell>
                      <TableCell>{g.esi === "Yes" ? <Badge variant="secondary">Yes</Badge> : "No"}</TableCell>
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

export default AdminHR;

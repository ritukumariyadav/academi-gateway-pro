import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Plus, DollarSign, Percent, Gift, Settings2 } from "lucide-react";

const feeHeads = [
  { id: 1, head: "Tuition Fee", code: "TF-001", amount: 45000, frequency: "Per Semester", applicable: "All Students", lateFine: 500, lateFineType: "Per Day", gstRate: 0, active: true },
  { id: 2, head: "Library Fee", code: "LB-001", amount: 2000, frequency: "Annual", applicable: "All Students", lateFine: 100, lateFineType: "Per Day", gstRate: 18, active: true },
  { id: 3, head: "Laboratory Fee", code: "LAB-001", amount: 5000, frequency: "Per Semester", applicable: "Science & Engineering", lateFine: 200, lateFineType: "Per Day", gstRate: 18, active: true },
  { id: 4, head: "Sports & Activity Fee", code: "SA-001", amount: 1500, frequency: "Annual", applicable: "All Students", lateFine: 50, lateFineType: "Per Day", gstRate: 0, active: true },
  { id: 5, head: "Hostel Accommodation", code: "HS-001", amount: 30000, frequency: "Per Semester", applicable: "Hostelers Only", lateFine: 1000, lateFineType: "Per Week", gstRate: 12, active: true },
  { id: 6, head: "Transport Fee", code: "TR-001", amount: 12000, frequency: "Per Semester", applicable: "Bus Users", lateFine: 300, lateFineType: "Per Week", gstRate: 5, active: true },
  { id: 7, head: "Examination Fee", code: "EX-001", amount: 3000, frequency: "Per Semester", applicable: "All Students", lateFine: 150, lateFineType: "Per Day", gstRate: 0, active: true },
  { id: 8, head: "Development Fee", code: "DF-001", amount: 5000, frequency: "Annual", applicable: "All Students", lateFine: 200, lateFineType: "Per Day", gstRate: 0, active: true },
  { id: 9, head: "Caution Money (Refundable)", code: "CM-001", amount: 5000, frequency: "One Time", applicable: "New Admissions", lateFine: 0, lateFineType: "—", gstRate: 0, active: true },
];

const programFees = [
  { program: "B.Tech — Computer Science", semester: "Spring 2026", tuition: 45000, lab: 5000, library: 2000, exam: 3000, development: 5000, total: 60000 },
  { program: "B.Tech — Mechanical", semester: "Spring 2026", tuition: 45000, lab: 5000, library: 2000, exam: 3000, development: 5000, total: 60000 },
  { program: "MBA", semester: "Spring 2026", tuition: 55000, lab: 0, library: 2000, exam: 3000, development: 5000, total: 65000 },
  { program: "B.Sc — Physics", semester: "Spring 2026", tuition: 30000, lab: 4000, library: 2000, exam: 3000, development: 5000, total: 44000 },
  { program: "B.A. — English", semester: "Spring 2026", tuition: 25000, lab: 0, library: 2000, exam: 3000, development: 5000, total: 35000 },
];

const scholarships = [
  { id: 1, name: "Academic Merit — Gold", discount: "50%", type: "Percentage", criteria: "CGPA ≥ 9.5", maxAmount: 30000, beneficiaries: 15, renewable: true },
  { id: 2, name: "Academic Merit — Silver", discount: "25%", type: "Percentage", criteria: "CGPA ≥ 9.0", maxAmount: 15000, beneficiaries: 30, renewable: true },
  { id: 3, name: "Sports Excellence", discount: "25%", type: "Percentage", criteria: "National/State player", maxAmount: 15000, beneficiaries: 12, renewable: false },
  { id: 4, name: "EWS Full Scholarship", discount: "100%", type: "Percentage", criteria: "Annual income < $20K", maxAmount: 60000, beneficiaries: 80, renewable: true },
  { id: 5, name: "Sibling Concession", discount: "$5,000", type: "Fixed", criteria: "Sibling currently enrolled", maxAmount: 5000, beneficiaries: 35, renewable: true },
  { id: 6, name: "Early Bird Discount", discount: "5%", type: "Percentage", criteria: "Paid before deadline", maxAmount: 3000, beneficiaries: 0, renewable: false },
];

const finePolicy = {
  gracePeriod: 7,
  maxFinePercent: 10,
  waiverAuth: "Admin / Finance Head",
  autoReminder: true,
  reminderDays: [7, 3, 1, 0, -3, -7],
};

const AdminFeeStructure = () => (
  <div className="space-y-6">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
      <div>
        <h1 className="font-display text-2xl font-bold">Fee Structure & Configuration</h1>
        <p className="text-sm text-muted-foreground">Configure fee heads, program-wise fees, scholarships, and fine policies</p>
      </div>
      <Dialog>
        <DialogTrigger asChild><Button><Plus className="h-4 w-4 mr-1" /> Add Fee Head</Button></DialogTrigger>
        <DialogContent className="max-w-lg">
          <DialogHeader><DialogTitle>New Fee Head</DialogTitle></DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2"><Label>Fee Head Name</Label><Input placeholder="e.g. Development Fee" /></div>
              <div className="space-y-2"><Label>Code</Label><Input placeholder="e.g. DF-001" /></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2"><Label>Amount ($)</Label><Input type="number" placeholder="Amount" /></div>
              <div className="space-y-2"><Label>Frequency</Label>
                <Select><SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  <SelectContent><SelectItem value="semester">Per Semester</SelectItem><SelectItem value="annual">Annual</SelectItem><SelectItem value="onetime">One Time</SelectItem></SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2"><Label>Late Fine ($)</Label><Input type="number" /></div>
              <div className="space-y-2"><Label>Fine Type</Label>
                <Select><SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  <SelectContent><SelectItem value="daily">Per Day</SelectItem><SelectItem value="weekly">Per Week</SelectItem><SelectItem value="flat">Flat</SelectItem></SelectContent>
                </Select>
              </div>
              <div className="space-y-2"><Label>GST %</Label><Input type="number" placeholder="0" /></div>
            </div>
            <div className="space-y-2"><Label>Applicable To</Label>
              <Select><SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent><SelectItem value="all">All Students</SelectItem><SelectItem value="science">Science & Engineering</SelectItem><SelectItem value="hostel">Hostelers Only</SelectItem><SelectItem value="bus">Bus Users</SelectItem><SelectItem value="new">New Admissions</SelectItem></SelectContent>
              </Select>
            </div>
            <Button className="w-full">Add Fee Head</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>

    <Tabs defaultValue="heads">
      <TabsList className="flex-wrap h-auto gap-1">
        <TabsTrigger value="heads"><DollarSign className="h-3.5 w-3.5 mr-1" /> Fee Heads</TabsTrigger>
        <TabsTrigger value="programs"><Settings2 className="h-3.5 w-3.5 mr-1" /> Program-wise Fees</TabsTrigger>
        <TabsTrigger value="scholarships"><Gift className="h-3.5 w-3.5 mr-1" /> Scholarships</TabsTrigger>
        <TabsTrigger value="policy"><Percent className="h-3.5 w-3.5 mr-1" /> Fine Policy</TabsTrigger>
      </TabsList>

      <TabsContent value="heads">
        <Card>
          <CardHeader><CardTitle>All Fee Heads</CardTitle></CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow><TableHead>Code</TableHead><TableHead>Fee Head</TableHead><TableHead className="text-right">Amount</TableHead><TableHead>Frequency</TableHead><TableHead>Applicable</TableHead><TableHead>Late Fine</TableHead><TableHead>GST</TableHead><TableHead>Active</TableHead></TableRow>
                </TableHeader>
                <TableBody>
                  {feeHeads.map(f => (
                    <TableRow key={f.id}>
                      <TableCell className="font-mono text-xs">{f.code}</TableCell>
                      <TableCell className="font-medium">{f.head}</TableCell>
                      <TableCell className="text-right font-bold">${f.amount.toLocaleString()}</TableCell>
                      <TableCell><Badge variant="outline">{f.frequency}</Badge></TableCell>
                      <TableCell className="text-sm">{f.applicable}</TableCell>
                      <TableCell>{f.lateFine > 0 ? <span className="text-sm">${f.lateFine} {f.lateFineType}</span> : "—"}</TableCell>
                      <TableCell>{f.gstRate > 0 ? `${f.gstRate}%` : "Exempt"}</TableCell>
                      <TableCell><Switch defaultChecked={f.active} /></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="mt-4 p-3 rounded-lg bg-muted/50 flex justify-between items-center">
              <span className="font-medium">Total Fee Heads: {feeHeads.length}</span>
              <span className="font-bold">Semester Total (All): ${feeHeads.filter(f => f.frequency !== "One Time").reduce((s, f) => s + f.amount, 0).toLocaleString()}</span>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="programs">
        <Card>
          <CardHeader><CardTitle>Program-wise Fee Breakdown</CardTitle></CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow><TableHead>Program</TableHead><TableHead>Semester</TableHead><TableHead className="text-right">Tuition</TableHead><TableHead className="text-right">Lab</TableHead><TableHead className="text-right">Library</TableHead><TableHead className="text-right">Exam</TableHead><TableHead className="text-right">Dev Fee</TableHead><TableHead className="text-right font-bold">Total</TableHead></TableRow>
                </TableHeader>
                <TableBody>
                  {programFees.map((p, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{p.program}</TableCell>
                      <TableCell><Badge variant="outline">{p.semester}</Badge></TableCell>
                      <TableCell className="text-right">${p.tuition.toLocaleString()}</TableCell>
                      <TableCell className="text-right">{p.lab > 0 ? `$${p.lab.toLocaleString()}` : "—"}</TableCell>
                      <TableCell className="text-right">${p.library.toLocaleString()}</TableCell>
                      <TableCell className="text-right">${p.exam.toLocaleString()}</TableCell>
                      <TableCell className="text-right">${p.development.toLocaleString()}</TableCell>
                      <TableCell className="text-right font-bold">${p.total.toLocaleString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="scholarships">
        <Card>
          <CardHeader className="flex-row items-center justify-between space-y-0">
            <CardTitle>Scholarships & Concessions</CardTitle>
            <Button size="sm"><Plus className="h-4 w-4 mr-1" /> Add Scholarship</Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow><TableHead>Scholarship</TableHead><TableHead>Discount</TableHead><TableHead>Type</TableHead><TableHead>Criteria</TableHead><TableHead className="text-right">Max Amount</TableHead><TableHead>Beneficiaries</TableHead><TableHead>Renewable</TableHead><TableHead>Active</TableHead></TableRow>
              </TableHeader>
              <TableBody>
                {scholarships.map(s => (
                  <TableRow key={s.id}>
                    <TableCell className="font-medium">{s.name}</TableCell>
                    <TableCell><Badge>{s.discount}</Badge></TableCell>
                    <TableCell>{s.type}</TableCell>
                    <TableCell className="text-sm">{s.criteria}</TableCell>
                    <TableCell className="text-right">${s.maxAmount.toLocaleString()}</TableCell>
                    <TableCell>{s.beneficiaries}</TableCell>
                    <TableCell>{s.renewable ? <Badge variant="secondary">Yes</Badge> : "No"}</TableCell>
                    <TableCell><Switch defaultChecked /></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="policy">
        <Card>
          <CardHeader><CardTitle>Late Fine & Reminder Policy</CardTitle></CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold">Fine Configuration</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50"><span className="text-sm">Grace Period</span><Badge variant="outline">{finePolicy.gracePeriod} days</Badge></div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50"><span className="text-sm">Maximum Fine Cap</span><Badge variant="outline">{finePolicy.maxFinePercent}% of invoice</Badge></div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50"><span className="text-sm">Waiver Authority</span><Badge variant="outline">{finePolicy.waiverAuth}</Badge></div>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold">Auto-Reminder Schedule</h4>
                <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50 mb-2"><span className="text-sm">Auto Reminders</span><Switch defaultChecked={finePolicy.autoReminder} /></div>
                <div className="space-y-2">
                  {finePolicy.reminderDays.map(d => (
                    <div key={d} className="flex items-center gap-3 text-sm">
                      <div className={`w-2 h-2 rounded-full ${d > 0 ? "bg-yellow-500" : d === 0 ? "bg-destructive" : "bg-destructive"}`} />
                      <span>{d > 0 ? `${d} days before due` : d === 0 ? "On due date" : `${Math.abs(d)} days overdue`}</span>
                      <Badge variant="outline" className="ml-auto">{d >= 0 ? "Email" : "Email + SMS"}</Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  </div>
);

export default AdminFeeStructure;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, DollarSign } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

const feeHeads = [
  { id: 1, head: "Tuition Fee", amount: 45000, frequency: "Per Semester", applicable: "All", lateFine: 500 },
  { id: 2, head: "Library Fee", amount: 2000, frequency: "Annual", applicable: "All", lateFine: 100 },
  { id: 3, head: "Lab Fee", amount: 5000, frequency: "Per Semester", applicable: "Science/Eng", lateFine: 200 },
  { id: 4, head: "Sports Fee", amount: 1500, frequency: "Annual", applicable: "All", lateFine: 50 },
  { id: 5, head: "Hostel Fee", amount: 30000, frequency: "Per Semester", applicable: "Hostelers", lateFine: 1000 },
  { id: 6, head: "Transport Fee", amount: 12000, frequency: "Per Semester", applicable: "Bus Users", lateFine: 300 },
  { id: 7, head: "Exam Fee", amount: 3000, frequency: "Per Semester", applicable: "All", lateFine: 150 },
];

const scholarships = [
  { id: 1, name: "Merit Scholarship", discount: "50%", criteria: "CGPA ≥ 9.0", beneficiaries: 45 },
  { id: 2, name: "Sports Quota", discount: "25%", criteria: "National/State player", beneficiaries: 12 },
  { id: 3, name: "EWS Scholarship", discount: "100%", criteria: "Income < $20K", beneficiaries: 80 },
  { id: 4, name: "Sibling Discount", discount: "10%", criteria: "Sibling enrolled", beneficiaries: 35 },
];

const AdminFeeStructure = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="font-display text-2xl font-bold">Fee Structure</h1>
      <Dialog>
        <DialogTrigger asChild><Button><Plus className="h-4 w-4 mr-1" /> Add Fee Head</Button></DialogTrigger>
        <DialogContent>
          <DialogHeader><DialogTitle>New Fee Head</DialogTitle></DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2"><Label>Fee Head Name</Label><Input placeholder="e.g. Development Fee" /></div>
            <div className="space-y-2"><Label>Amount</Label><Input type="number" placeholder="Amount" /></div>
            <div className="space-y-2"><Label>Frequency</Label>
              <Select><SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent><SelectItem value="semester">Per Semester</SelectItem><SelectItem value="annual">Annual</SelectItem><SelectItem value="onetime">One Time</SelectItem></SelectContent>
              </Select>
            </div>
            <div className="space-y-2"><Label>Late Fine</Label><Input type="number" placeholder="Late fine amount" /></div>
            <Button className="w-full">Add Fee Head</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
    <Card>
      <CardHeader><CardTitle>Fee Heads</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow><TableHead>Fee Head</TableHead><TableHead>Amount</TableHead><TableHead>Frequency</TableHead><TableHead>Applicable To</TableHead><TableHead>Late Fine</TableHead><TableHead>Active</TableHead></TableRow></TableHeader>
          <TableBody>{feeHeads.map(f => (
            <TableRow key={f.id}><TableCell className="font-medium">{f.head}</TableCell><TableCell>${f.amount.toLocaleString()}</TableCell><TableCell>{f.frequency}</TableCell><TableCell><Badge variant="outline">{f.applicable}</Badge></TableCell><TableCell>${f.lateFine}</TableCell><TableCell><Switch defaultChecked /></TableCell></TableRow>
          ))}</TableBody>
        </Table>
      </CardContent>
    </Card>
    <Card>
      <CardHeader><CardTitle>Scholarships & Discounts</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow><TableHead>Scholarship</TableHead><TableHead>Discount</TableHead><TableHead>Criteria</TableHead><TableHead>Beneficiaries</TableHead><TableHead>Active</TableHead></TableRow></TableHeader>
          <TableBody>{scholarships.map(s => (
            <TableRow key={s.id}><TableCell className="font-medium">{s.name}</TableCell><TableCell><Badge>{s.discount}</Badge></TableCell><TableCell>{s.criteria}</TableCell><TableCell>{s.beneficiaries}</TableCell><TableCell><Switch defaultChecked /></TableCell></TableRow>
          ))}</TableBody>
        </Table>
      </CardContent>
    </Card>
  </div>
);

export default AdminFeeStructure;

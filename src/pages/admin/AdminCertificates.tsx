import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Download, FileText } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const certificates = [
  { id: 1, type: "Bonafide Certificate", student: "Raj Kumar (CS2024001)", requestDate: "2026-03-05", status: "Generated", issuedDate: "2026-03-06" },
  { id: 2, type: "Transfer Certificate", student: "Amit Singh (CS2024003)", requestDate: "2026-03-04", status: "Pending", issuedDate: "—" },
  { id: 3, type: "Character Certificate", student: "Priya Sharma (CS2024002)", requestDate: "2026-03-03", status: "Generated", issuedDate: "2026-03-04" },
  { id: 4, type: "Migration Certificate", student: "John Park (ME2024001)", requestDate: "2026-03-02", status: "Approved", issuedDate: "—" },
  { id: 5, type: "Bonafide Certificate", student: "Sarah Lee (EC2024001)", requestDate: "2026-03-01", status: "Generated", issuedDate: "2026-03-02" },
];

const AdminCertificates = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="font-display text-2xl font-bold">Certificate Generator</h1>
      <Dialog>
        <DialogTrigger asChild><Button><Plus className="h-4 w-4 mr-1" /> Issue Certificate</Button></DialogTrigger>
        <DialogContent>
          <DialogHeader><DialogTitle>Issue New Certificate</DialogTitle></DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2"><Label>Certificate Type</Label>
              <Select><SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                <SelectContent><SelectItem value="bonafide">Bonafide Certificate</SelectItem><SelectItem value="transfer">Transfer Certificate</SelectItem><SelectItem value="character">Character Certificate</SelectItem><SelectItem value="migration">Migration Certificate</SelectItem></SelectContent>
              </Select>
            </div>
            <div className="space-y-2"><Label>Student Roll No</Label><Input placeholder="e.g. CS2024001" /></div>
            <div className="space-y-2"><Label>Purpose / Remarks</Label><Input placeholder="Purpose of certificate" /></div>
            <Button className="w-full">Generate Certificate</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {[{ label: "Total Issued", value: "342" }, { label: "Pending", value: "5" }, { label: "This Month", value: "18" }, { label: "Types Available", value: "4" }].map((s, i) => (
        <Card key={i}><CardContent className="p-4"><FileText className="h-5 w-5 text-accent mb-2" /><p className="text-lg font-bold">{s.value}</p><p className="text-xs text-muted-foreground">{s.label}</p></CardContent></Card>
      ))}
    </div>
    <Card>
      <CardHeader><CardTitle>Certificate Requests</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow><TableHead>Type</TableHead><TableHead>Student</TableHead><TableHead>Request Date</TableHead><TableHead>Issued Date</TableHead><TableHead>Status</TableHead><TableHead>Actions</TableHead></TableRow></TableHeader>
          <TableBody>{certificates.map(c => (
            <TableRow key={c.id}><TableCell className="font-medium">{c.type}</TableCell><TableCell>{c.student}</TableCell><TableCell>{c.requestDate}</TableCell><TableCell>{c.issuedDate}</TableCell>
              <TableCell><Badge variant={c.status === "Generated" ? "secondary" : c.status === "Pending" ? "outline" : "default"}>{c.status}</Badge></TableCell>
              <TableCell>{c.status === "Generated" && <Button size="sm" variant="ghost"><Download className="h-3 w-3" /></Button>}</TableCell>
            </TableRow>
          ))}</TableBody>
        </Table>
      </CardContent>
    </Card>
  </div>
);

export default AdminCertificates;

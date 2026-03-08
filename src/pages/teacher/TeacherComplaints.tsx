import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, MessageSquare } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const complaints = [
  { id: 1, subject: "Projector not working — Room 102", category: "IT", date: "2026-03-06", status: "In Progress" },
  { id: 2, subject: "Lab equipment shortage", category: "Infrastructure", date: "2026-03-03", status: "Open" },
  { id: 3, subject: "AC repair needed — Staff Room", category: "Maintenance", date: "2026-02-28", status: "Resolved" },
];

const TeacherComplaints = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="font-display text-2xl font-bold">Complaints & Grievances</h1>
      <Dialog>
        <DialogTrigger asChild><Button><Plus className="h-4 w-4 mr-1" /> Raise Complaint</Button></DialogTrigger>
        <DialogContent>
          <DialogHeader><DialogTitle>New Complaint</DialogTitle></DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2"><Label>Category</Label>
              <Select><SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
                <SelectContent><SelectItem value="it">IT</SelectItem><SelectItem value="infra">Infrastructure</SelectItem><SelectItem value="admin">Administrative</SelectItem><SelectItem value="other">Other</SelectItem></SelectContent>
              </Select>
            </div>
            <div className="space-y-2"><Label>Subject</Label><Input placeholder="Brief subject" /></div>
            <div className="space-y-2"><Label>Description</Label><Textarea placeholder="Describe your complaint..." rows={4} /></div>
            <Button className="w-full">Submit Complaint</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
    <Card>
      <CardHeader><CardTitle>My Complaints</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow><TableHead>Subject</TableHead><TableHead>Category</TableHead><TableHead>Date</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
          <TableBody>{complaints.map(c => (
            <TableRow key={c.id}><TableCell className="font-medium">{c.subject}</TableCell><TableCell><Badge variant="outline">{c.category}</Badge></TableCell><TableCell>{c.date}</TableCell>
              <TableCell><Badge variant={c.status === "Resolved" ? "secondary" : c.status === "Open" ? "destructive" : "outline"}>{c.status}</Badge></TableCell>
            </TableRow>
          ))}</TableBody>
        </Table>
      </CardContent>
    </Card>
  </div>
);

export default TeacherComplaints;

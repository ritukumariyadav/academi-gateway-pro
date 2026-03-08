import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const complaints = [
  { id: 1, subject: "Attendance not updated correctly", category: "Academic", date: "2026-03-05", status: "Resolved" },
  { id: 2, subject: "Bus timing changed without notice", category: "Transport", date: "2026-03-02", status: "In Progress" },
];

const ParentComplaints = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="font-display text-2xl font-bold">Complaints</h1>
      <Dialog>
        <DialogTrigger asChild><Button><Plus className="h-4 w-4 mr-1" /> Raise Complaint</Button></DialogTrigger>
        <DialogContent>
          <DialogHeader><DialogTitle>Submit Complaint</DialogTitle></DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2"><Label>Category</Label>
              <Select><SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent><SelectItem value="academic">Academic</SelectItem><SelectItem value="transport">Transport</SelectItem><SelectItem value="hostel">Hostel</SelectItem><SelectItem value="other">Other</SelectItem></SelectContent>
              </Select>
            </div>
            <div className="space-y-2"><Label>Subject</Label><Input placeholder="Brief subject" /></div>
            <div className="space-y-2"><Label>Description</Label><Textarea rows={4} /></div>
            <Button className="w-full">Submit</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
    <Card>
      <CardHeader><CardTitle>My Complaints</CardTitle></CardHeader>
      <CardContent className="space-y-3">
        {complaints.map(c => (
          <div key={c.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
            <div><p className="font-medium">{c.subject}</p><p className="text-xs text-muted-foreground">{c.category} · {c.date}</p></div>
            <Badge variant={c.status === "Resolved" ? "secondary" : "outline"}>{c.status}</Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  </div>
);

export default ParentComplaints;

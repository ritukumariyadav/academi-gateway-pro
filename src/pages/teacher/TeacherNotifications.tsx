import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable, DataTableColumnHeader } from "@/components/ui/data-table";
import { Send, Users, Shield } from "lucide-react";
import { toast } from "sonner";

type Notification = {
  id: number;
  title: string;
  message: string;
  audience: string;
  priority: string;
  sentAt: string;
};

const initialNotifications: Notification[] = [
  { id: 1, title: "Assignment Deadline Reminder", message: "Binary Search Tree implementation due March 12.", audience: "Teachers", priority: "normal", sentAt: "Mar 5, 2026" },
  { id: 2, title: "Lab Equipment Request", message: "Requesting additional Raspberry Pi kits for CS201 lab.", audience: "Admins", priority: "high", sentAt: "Mar 3, 2026" },
  { id: 3, title: "Exam Invigilation Schedule", message: "Please confirm availability for mid-term invigilation.", audience: "Teachers", priority: "normal", sentAt: "Mar 1, 2026" },
];

const priorityVariant = (p: string) => {
  switch (p) { case "high": return "destructive"; case "low": return "secondary"; default: return "outline"; }
};

const columns: ColumnDef<Notification>[] = [
  { accessorKey: "title", header: ({ column }) => <DataTableColumnHeader column={column} title="Title" />, cell: ({ row }) => <span className="font-medium">{row.getValue("title")}</span> },
  { accessorKey: "audience", header: "Sent To", cell: ({ row }) => <Badge variant="outline" className="gap-1">{row.getValue("audience") === "Teachers" ? <Users className="h-3 w-3" /> : <Shield className="h-3 w-3" />}{row.getValue("audience")}</Badge> },
  { accessorKey: "priority", header: "Priority", cell: ({ row }) => <Badge variant={priorityVariant(row.getValue("priority")) as any} className="capitalize">{row.getValue("priority")}</Badge> },
  { accessorKey: "sentAt", header: ({ column }) => <DataTableColumnHeader column={column} title="Sent" /> },
];

const TeacherNotifications = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ title: "", message: "", audience: "teachers", priority: "normal" });

  const handleSend = () => {
    const audienceMap: Record<string, string> = { teachers: "Teachers", admins: "Admins" };
    setNotifications([{
      id: notifications.length + 1,
      title: form.title,
      message: form.message,
      audience: audienceMap[form.audience],
      priority: form.priority,
      sentAt: "Just now",
    }, ...notifications]);
    toast.success(`Notification sent to ${audienceMap[form.audience]}!`);
    setOpen(false);
    setForm({ title: "", message: "", audience: "teachers", priority: "normal" });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="font-display text-2xl font-bold">Send Notifications</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button><Send className="h-4 w-4 mr-1" /> Compose</Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader><DialogTitle>Send Notification</DialogTitle></DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Title</Label>
                <Input placeholder="Notification title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Message</Label>
                <Textarea placeholder="Write your message..." rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Send To</Label>
                  <Select value={form.audience} onValueChange={(v) => setForm({ ...form, audience: v })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="teachers">Fellow Teachers</SelectItem>
                      <SelectItem value="admins">Admins</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Priority</Label>
                  <Select value={form.priority} onValueChange={(v) => setForm({ ...form, priority: v })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="normal">Normal</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>
              <Button onClick={handleSend} disabled={!form.title || !form.message}><Send className="h-4 w-4 mr-1" /> Send</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader><CardTitle>Sent Notifications</CardTitle></CardHeader>
        <CardContent>
          <DataTable columns={columns} data={notifications} searchKey="title" searchPlaceholder="Search notifications..." />
        </CardContent>
      </Card>
    </div>
  );
};

export default TeacherNotifications;

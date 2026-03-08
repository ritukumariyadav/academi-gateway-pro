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
import { Send, Plus, Bell, Users, GraduationCap, Shield } from "lucide-react";
import { toast } from "sonner";

type Notification = {
  id: number;
  title: string;
  message: string;
  audience: string;
  priority: string;
  sentAt: string;
  sentBy: string;
};

const initialNotifications: Notification[] = [
  { id: 1, title: "Mid-Term Exam Schedule Released", message: "The mid-term examination schedule for Spring 2026 has been published.", audience: "All", priority: "high", sentAt: "Mar 5, 2026", sentBy: "Admin" },
  { id: 2, title: "Faculty Meeting — March 10", message: "All faculty members are requested to attend the meeting at 3 PM.", audience: "Teachers", priority: "normal", sentAt: "Mar 4, 2026", sentBy: "Admin" },
  { id: 3, title: "Fee Payment Reminder", message: "Semester 4 fees due by March 31, 2026.", audience: "Students", priority: "high", sentAt: "Mar 3, 2026", sentBy: "Admin" },
  { id: 4, title: "Library System Maintenance", message: "Library portal will be down for maintenance on March 8, 10 PM—6 AM.", audience: "All", priority: "normal", sentAt: "Mar 2, 2026", sentBy: "Admin" },
  { id: 5, title: "Sports Day Registration Closing", message: "Last date to register is March 10th.", audience: "Students", priority: "low", sentAt: "Mar 1, 2026", sentBy: "Admin" },
];

const audienceIcon = (a: string) => {
  switch (a) {
    case "Students": return <GraduationCap className="h-3 w-3" />;
    case "Teachers": return <Users className="h-3 w-3" />;
    case "Admins": return <Shield className="h-3 w-3" />;
    default: return <Bell className="h-3 w-3" />;
  }
};

const priorityVariant = (p: string) => {
  switch (p) { case "high": return "destructive"; case "low": return "secondary"; default: return "outline"; }
};

const columns: ColumnDef<Notification>[] = [
  { accessorKey: "title", header: ({ column }) => <DataTableColumnHeader column={column} title="Title" />, cell: ({ row }) => <span className="font-medium">{row.getValue("title")}</span> },
  { accessorKey: "audience", header: "Audience", cell: ({ row }) => <Badge variant="outline" className="gap-1">{audienceIcon(row.getValue("audience"))}{row.getValue("audience")}</Badge> },
  { accessorKey: "priority", header: "Priority", cell: ({ row }) => <Badge variant={priorityVariant(row.getValue("priority")) as any} className="capitalize">{row.getValue("priority")}</Badge> },
  { accessorKey: "sentAt", header: ({ column }) => <DataTableColumnHeader column={column} title="Sent" /> },
  { accessorKey: "sentBy", header: "By" },
];

const AdminNotifications = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ title: "", message: "", audience: "all", priority: "normal" });

  const handleSend = () => {
    const audienceMap: Record<string, string> = { all: "All", students: "Students", teachers: "Teachers", admins: "Admins" };
    setNotifications([{
      id: notifications.length + 1,
      title: form.title,
      message: form.message,
      audience: audienceMap[form.audience],
      priority: form.priority,
      sentAt: "Just now",
      sentBy: "Admin",
    }, ...notifications]);
    toast.success(`Notification sent to ${audienceMap[form.audience]}!`);
    setOpen(false);
    setForm({ title: "", message: "", audience: "all", priority: "normal" });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="font-display text-2xl font-bold">Notifications</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button><Send className="h-4 w-4 mr-1" /> Send Notification</Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader><DialogTitle>Compose Notification</DialogTitle></DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Title</Label>
                <Input placeholder="Notification title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Message</Label>
                <Textarea placeholder="Write your notification message..." rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Send To</Label>
                  <Select value={form.audience} onValueChange={(v) => setForm({ ...form, audience: v })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All (Students, Teachers, Admins)</SelectItem>
                      <SelectItem value="students">Students Only</SelectItem>
                      <SelectItem value="teachers">Teachers Only</SelectItem>
                      <SelectItem value="admins">Admins Only</SelectItem>
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

      <div className="grid sm:grid-cols-4 gap-4">
        <Card><CardContent className="p-4 text-center"><p className="text-3xl font-bold">{notifications.length}</p><p className="text-sm text-muted-foreground">Total Sent</p></CardContent></Card>
        <Card><CardContent className="p-4 text-center"><p className="text-3xl font-bold text-accent">{notifications.filter((n) => n.audience === "All").length}</p><p className="text-sm text-muted-foreground">To All</p></CardContent></Card>
        <Card><CardContent className="p-4 text-center"><p className="text-3xl font-bold">{notifications.filter((n) => n.audience === "Students").length}</p><p className="text-sm text-muted-foreground">To Students</p></CardContent></Card>
        <Card><CardContent className="p-4 text-center"><p className="text-3xl font-bold">{notifications.filter((n) => n.audience === "Teachers").length}</p><p className="text-sm text-muted-foreground">To Teachers</p></CardContent></Card>
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

export default AdminNotifications;

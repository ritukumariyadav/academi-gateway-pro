import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Send, Users, Mail } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const conversations = [
  { id: 1, from: "Dr. Smith", subject: "Lab equipment request", preview: "We need additional oscilloscopes for...", time: "2 hours ago", unread: true },
  { id: 2, from: "Raj Kumar (Student)", subject: "Fee payment query", preview: "I have paid the fee but it shows...", time: "3 hours ago", unread: true },
  { id: 3, from: "Prof. Johnson", subject: "Exam schedule conflict", preview: "The CS301 exam overlaps with...", time: "5 hours ago", unread: false },
  { id: 4, from: "Parent — Mrs. Sharma", subject: "Daughter's attendance", preview: "Could you please check Priya's...", time: "1 day ago", unread: false },
  { id: 5, from: "Mr. Kumar (Transport)", subject: "Route change request", preview: "Due to road construction, Route 2...", time: "1 day ago", unread: false },
];

const AdminMessaging = () => (
  <div className="space-y-6">
    <h1 className="font-display text-2xl font-bold">Internal Messaging</h1>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {[{ label: "Inbox", value: "12", icon: Mail }, { label: "Unread", value: "2", icon: MessageSquare }, { label: "Sent Today", value: "5", icon: Send }, { label: "Contacts", value: "348", icon: Users }].map((s, i) => (
        <Card key={i}><CardContent className="p-4"><s.icon className="h-5 w-5 text-accent mb-2" /><p className="text-lg font-bold">{s.value}</p><p className="text-xs text-muted-foreground">{s.label}</p></CardContent></Card>
      ))}
    </div>
    <div className="grid lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-1">
        <CardHeader><CardTitle>Conversations</CardTitle></CardHeader>
        <CardContent className="space-y-2">
          {conversations.map(c => (
            <div key={c.id} className={`p-3 rounded-lg cursor-pointer hover:bg-muted/50 ${c.unread ? "bg-accent/5 border-l-2 border-accent" : ""}`}>
              <div className="flex justify-between items-start"><span className="font-medium text-sm">{c.from}</span><span className="text-xs text-muted-foreground">{c.time}</span></div>
              <p className="text-sm font-medium mt-1">{c.subject}</p>
              <p className="text-xs text-muted-foreground mt-0.5 truncate">{c.preview}</p>
            </div>
          ))}
        </CardContent>
      </Card>
      <Card className="lg:col-span-2">
        <CardHeader><CardTitle>Compose Message</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <Select><SelectTrigger><SelectValue placeholder="Select recipient type" /></SelectTrigger>
            <SelectContent><SelectItem value="individual">Individual</SelectItem><SelectItem value="department">Department</SelectItem><SelectItem value="all-staff">All Staff</SelectItem><SelectItem value="all-students">All Students</SelectItem><SelectItem value="parents">All Parents</SelectItem></SelectContent>
          </Select>
          <Input placeholder="Recipient name or email" />
          <Input placeholder="Subject" />
          <Textarea placeholder="Type your message..." rows={5} />
          <div className="flex gap-2">
            <Button><Send className="h-4 w-4 mr-1" /> Send</Button>
            <Button variant="outline">Save Draft</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);

export default AdminMessaging;

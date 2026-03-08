import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

const conversations = [
  { id: 1, from: "Admin Office", subject: "Exam duty schedule", preview: "Please find attached your...", time: "1 hour ago", unread: true },
  { id: 2, from: "Raj Kumar (Student)", subject: "Assignment query", preview: "Sir, regarding assignment 3...", time: "3 hours ago", unread: false },
  { id: 3, from: "Dr. Brown (HOD)", subject: "Department meeting", preview: "Meeting scheduled for...", time: "1 day ago", unread: false },
];

const TeacherMessaging = () => (
  <div className="space-y-6">
    <h1 className="font-display text-2xl font-bold">Messages</h1>
    <div className="grid lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-1">
        <CardHeader><CardTitle>Inbox</CardTitle></CardHeader>
        <CardContent className="space-y-2">
          {conversations.map(c => (
            <div key={c.id} className={`p-3 rounded-lg cursor-pointer hover:bg-muted/50 ${c.unread ? "bg-accent/5 border-l-2 border-accent" : ""}`}>
              <div className="flex justify-between"><span className="font-medium text-sm">{c.from}</span><span className="text-xs text-muted-foreground">{c.time}</span></div>
              <p className="text-sm font-medium mt-1">{c.subject}</p>
              <p className="text-xs text-muted-foreground truncate">{c.preview}</p>
            </div>
          ))}
        </CardContent>
      </Card>
      <Card className="lg:col-span-2">
        <CardHeader><CardTitle>Compose</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="To (name or email)" />
          <Input placeholder="Subject" />
          <Textarea placeholder="Write your message..." rows={6} />
          <Button><Send className="h-4 w-4 mr-1" /> Send</Button>
        </CardContent>
      </Card>
    </div>
  </div>
);

export default TeacherMessaging;

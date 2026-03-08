import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, Calendar, FileText, Users } from "lucide-react";

const notices = [
  { id: 1, title: "Faculty Meeting — March 12", desc: "Mandatory faculty meeting in the conference room at 3:00 PM. Agenda: semester review and exam scheduling.", date: "Mar 7, 2026", type: "meeting" },
  { id: 2, title: "Mid-Term Exam Question Paper Submission", desc: "Submit mid-term question papers to the Exam Cell by March 10. Follow the prescribed format.", date: "Mar 6, 2026", type: "academic" },
  { id: 3, title: "Research Grant Application Deadline", desc: "Applications for the National Research Grant 2026 close on March 20. Submit proposals through the research portal.", date: "Mar 5, 2026", type: "research" },
  { id: 4, title: "Annual Performance Review Schedule", desc: "Annual performance reviews for all faculty will be conducted between March 25–30.", date: "Mar 3, 2026", type: "admin" },
  { id: 5, title: "Workshop on Outcome-Based Education", desc: "A workshop on OBE will be held on March 15 in the seminar hall. Attendance is recommended.", date: "Mar 1, 2026", type: "workshop" },
  { id: 6, title: "Updated Leave Policy Effective April 1", desc: "The revised leave policy has been circulated via email. Please review and acknowledge.", date: "Feb 28, 2026", type: "admin" },
];

const TeacherNotices = () => (
  <div className="space-y-6">
    <h1 className="font-display text-2xl font-bold">Faculty Notices</h1>
    <div className="space-y-3">
      {notices.map((n) => (
        <Card key={n.id}>
          <CardContent className="p-4 flex items-start gap-4">
            <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
              <Bell className="h-5 w-5 text-accent" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-medium">{n.title}</h3>
                <Badge variant="outline" className="capitalize text-[10px]">{n.type}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{n.desc}</p>
              <p className="text-xs text-muted-foreground mt-2">{n.date}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default TeacherNotices;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Phone, MapPin, BookOpen, Award } from "lucide-react";

const TeacherProfile = () => (
  <div className="space-y-6">
    <h1 className="font-display text-2xl font-bold">My Profile</h1>
    <div className="grid lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-1">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className="h-24 w-24 rounded-full bg-accent/20 flex items-center justify-center mb-4">
            <User className="h-12 w-12 text-accent" />
          </div>
          <h2 className="font-display text-xl font-bold">Dr. Robert Chen</h2>
          <p className="text-sm text-muted-foreground">Employee ID: FAC-2012-018</p>
          <Badge className="mt-2">Professor & HOD</Badge>
          <div className="w-full mt-6 space-y-3 text-left">
            <div className="flex items-center gap-2 text-sm"><Mail className="h-4 w-4 text-muted-foreground" /> r.chen@prestonacademy.edu</div>
            <div className="flex items-center gap-2 text-sm"><Phone className="h-4 w-4 text-muted-foreground" /> +1 (555) 234-5678</div>
            <div className="flex items-center gap-2 text-sm"><MapPin className="h-4 w-4 text-muted-foreground" /> Office: Block A, Room 304</div>
          </div>
        </CardContent>
      </Card>
      <Card className="lg:col-span-2">
        <CardHeader><CardTitle>Professional Information</CardTitle></CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Department", value: "Computer Science & Engineering" },
              { label: "Designation", value: "Professor & Head of Department" },
              { label: "Specialization", value: "Artificial Intelligence" },
              { label: "Experience", value: "18 Years" },
              { label: "Qualification", value: "Ph.D. (CS), M.Tech, B.Tech" },
              { label: "Joining Date", value: "August 2012" },
              { label: "Publications", value: "42 Research Papers" },
              { label: "Awards", value: "Best Faculty Award 2024" },
            ].map((item) => (
              <div key={item.label} className="p-3 rounded-lg bg-muted/50">
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="font-medium">{item.value}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
    <Card>
      <CardHeader><CardTitle>Courses Teaching (Current Semester)</CardTitle></CardHeader>
      <CardContent>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { code: "CS201", name: "Data Structures", students: 45 },
            { code: "CS301", name: "Algorithm Design", students: 38 },
            { code: "CS401", name: "AI Fundamentals", students: 52 },
          ].map((c) => (
            <div key={c.code} className="p-4 rounded-lg bg-muted/50 text-center">
              <p className="font-mono text-xs text-muted-foreground">{c.code}</p>
              <p className="font-medium mt-1">{c.name}</p>
              <p className="text-sm text-muted-foreground">{c.students} Students</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

export default TeacherProfile;

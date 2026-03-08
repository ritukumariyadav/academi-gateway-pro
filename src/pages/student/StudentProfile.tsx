import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Phone, MapPin, Calendar, BookOpen } from "lucide-react";

const StudentProfile = () => (
  <div className="space-y-6">
    <h1 className="font-display text-2xl font-bold">My Profile</h1>
    <div className="grid lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-1">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className="h-24 w-24 rounded-full bg-accent/20 flex items-center justify-center mb-4">
            <User className="h-12 w-12 text-accent" />
          </div>
          <h2 className="font-display text-xl font-bold">Rahul Sharma</h2>
          <p className="text-sm text-muted-foreground">Roll No: CS2024-042</p>
          <Badge className="mt-2">Active Student</Badge>
          <div className="w-full mt-6 space-y-3 text-left">
            <div className="flex items-center gap-2 text-sm"><Mail className="h-4 w-4 text-muted-foreground" /> rahul.sharma@student.edu</div>
            <div className="flex items-center gap-2 text-sm"><Phone className="h-4 w-4 text-muted-foreground" /> +91 98765 43210</div>
            <div className="flex items-center gap-2 text-sm"><MapPin className="h-4 w-4 text-muted-foreground" /> 45 Park Street, New Delhi</div>
            <div className="flex items-center gap-2 text-sm"><Calendar className="h-4 w-4 text-muted-foreground" /> DOB: 15 June 2004</div>
          </div>
        </CardContent>
      </Card>
      <Card className="lg:col-span-2">
        <CardHeader><CardTitle>Academic Information</CardTitle></CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Program", value: "B.Tech Computer Science" },
              { label: "Semester", value: "4th Semester" },
              { label: "Section", value: "Section A" },
              { label: "Batch", value: "2024–2028" },
              { label: "CGPA", value: "8.4 / 10" },
              { label: "Advisor", value: "Dr. Robert Chen" },
              { label: "Enrollment Date", value: "August 2024" },
              { label: "Blood Group", value: "B+" },
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
      <CardHeader><CardTitle>Guardian Information</CardTitle></CardHeader>
      <CardContent>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { label: "Father's Name", value: "Mr. Vikram Sharma" },
            { label: "Mother's Name", value: "Mrs. Sunita Sharma" },
            { label: "Guardian Phone", value: "+91 98765 12345" },
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
);

export default StudentProfile;

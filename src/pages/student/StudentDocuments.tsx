import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, CreditCard, Award, BookOpen } from "lucide-react";

const documents = [
  { icon: FileText, title: "Semester 3 Marksheet", desc: "Official grade report for Semester 3 (Fall 2025)", type: "PDF", size: "245 KB" },
  { icon: FileText, title: "Semester 2 Marksheet", desc: "Official grade report for Semester 2 (Spring 2025)", type: "PDF", size: "230 KB" },
  { icon: FileText, title: "Semester 1 Marksheet", desc: "Official grade report for Semester 1 (Fall 2024)", type: "PDF", size: "228 KB" },
  { icon: CreditCard, title: "Student ID Card", desc: "Digital copy of student identity card", type: "PDF", size: "180 KB" },
  { icon: Award, title: "Enrollment Certificate", desc: "Certificate of enrollment for academic year 2025–26", type: "PDF", size: "195 KB" },
  { icon: BookOpen, title: "Course Registration Slip", desc: "Semester 4 course registration confirmation", type: "PDF", size: "120 KB" },
  { icon: Award, title: "Bonafide Certificate", desc: "Bonafide student certificate for official use", type: "PDF", size: "150 KB" },
  { icon: FileText, title: "Fee Receipt (Sem 3)", desc: "Payment receipt for Semester 3 tuition fees", type: "PDF", size: "110 KB" },
];

const StudentDocuments = () => (
  <div className="space-y-6">
    <h1 className="font-display text-2xl font-bold">Documents & Certificates</h1>
    <p className="text-muted-foreground">Download your academic documents, certificates, and official records.</p>

    <div className="grid sm:grid-cols-2 gap-4">
      {documents.map((doc, i) => (
        <Card key={i}>
          <CardContent className="p-4 flex items-start gap-4">
            <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
              <doc.icon className="h-6 w-6 text-accent" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-sm">{doc.title}</h3>
              <p className="text-xs text-muted-foreground mt-0.5">{doc.desc}</p>
              <p className="text-xs text-muted-foreground mt-1">{doc.type} • {doc.size}</p>
            </div>
            <Button size="sm" variant="outline" className="shrink-0">
              <Download className="h-3 w-3 mr-1" /> Download
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default StudentDocuments;

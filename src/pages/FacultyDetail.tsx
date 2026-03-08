import { useParams, Link } from "react-router-dom";
import PageBanner from "@/components/layout/PageBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { faculty } from "@/data/sampleData";
import { ArrowLeft, Mail, BookOpen, Award, Clock, GraduationCap } from "lucide-react";

const publications = [
  "Machine Learning Approaches for Predictive Analytics in Education (2025)",
  "Distributed Computing: Challenges and Opportunities (2024)",
  "A Survey of Modern Database Architectures (2023)",
];

const FacultyDetail = () => {
  const { id } = useParams();
  const member = faculty.find((f) => f.id === id);

  if (!member) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Faculty Member Not Found</h2>
        <Link to="/faculty"><Button><ArrowLeft className="mr-2 h-4 w-4" /> All Faculty</Button></Link>
      </div>
    );
  }

  return (
    <>
      <PageBanner title={member.name} subtitle={member.designation} />
      <section className="container mx-auto px-4 py-12 space-y-10">
        <Link to="/faculty" className="inline-flex items-center text-primary hover:underline text-sm">
          <ArrowLeft className="mr-1 h-4 w-4" /> All Faculty
        </Link>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Profile Card */}
          <Card className="md:col-span-1">
            <CardContent className="p-6 text-center space-y-4">
              <div className="mx-auto h-32 w-32 rounded-full bg-primary/10 flex items-center justify-center">
                <GraduationCap className="h-16 w-16 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold">{member.name}</h2>
                <p className="text-sm text-muted-foreground">{member.designation}</p>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 justify-center text-muted-foreground">
                  <BookOpen className="h-4 w-4" /> {member.department}
                </div>
                <div className="flex items-center gap-2 justify-center text-muted-foreground">
                  <Award className="h-4 w-4" /> {member.specialization}
                </div>
                <div className="flex items-center gap-2 justify-center text-muted-foreground">
                  <Clock className="h-4 w-4" /> {member.experience}
                </div>
                <div className="flex items-center gap-2 justify-center text-muted-foreground">
                  <Mail className="h-4 w-4" /> {member.name.toLowerCase().replace(/\s|dr\.\s?|prof\.\s?/g, "").slice(0, 8)}@preston.edu
                </div>
              </div>
              <Link to="/contact"><Button variant="outline" className="w-full">Contact</Button></Link>
            </CardContent>
          </Card>

          {/* Details */}
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader><CardTitle>Biography</CardTitle></CardHeader>
              <CardContent className="text-muted-foreground space-y-3">
                <p>{member.name} is a distinguished {member.designation} in the Department of {member.department} at Preston Academy with {member.experience} of academic and research experience.</p>
                <p>Specializing in {member.specialization}, {member.name.split(" ").pop()} has contributed extensively to both teaching and research. Their work spans multiple funded projects and collaborative studies with national and international institutions.</p>
                <p>Known for a student-centered teaching philosophy, they integrate cutting-edge developments into coursework and mentor graduate students in advanced research projects.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Research & Publications</CardTitle></CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {publications.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Badge variant="outline" className="mt-0.5 shrink-0">Paper</Badge>
                      {p}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Courses Taught</CardTitle></CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {["Data Structures", "Algorithms", member.specialization, "Research Methodology", "Seminar"].map((c) => (
                  <Badge key={c} variant="secondary">{c}</Badge>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default FacultyDetail;

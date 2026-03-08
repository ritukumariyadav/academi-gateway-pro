import { useParams, Link } from "react-router-dom";
import PageBanner from "@/components/layout/PageBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { courses, faculty } from "@/data/sampleData";
import { Clock, Users, BookOpen, GraduationCap, ArrowLeft } from "lucide-react";

const semesterCurriculum: Record<string, string[][]> = {
  "1": [
    ["Introduction to Programming", "Discrete Mathematics", "Digital Logic", "English Communication", "Physics Lab"],
    ["Data Structures", "Linear Algebra", "Computer Architecture", "Technical Writing", "Programming Lab"],
    ["Algorithms", "Database Systems", "Operating Systems", "Probability & Statistics", "DBMS Lab"],
    ["Software Engineering", "Computer Networks", "Theory of Computation", "Elective I", "Networks Lab"],
    ["Artificial Intelligence", "Compiler Design", "Web Technologies", "Elective II", "AI Lab"],
    ["Machine Learning", "Distributed Systems", "Cloud Computing", "Elective III", "Project Phase I"],
    ["Deep Learning", "Cybersecurity", "Elective IV", "Elective V", "Project Phase II"],
    ["Industry Internship", "Capstone Project", "Seminar", "Comprehensive Viva"],
  ],
  "2": [
    ["Principles of Management", "Business Economics", "Financial Accounting", "Business Communication"],
    ["Marketing Management", "Organizational Behavior", "Cost Accounting", "Business Statistics"],
    ["Human Resource Management", "Operations Management", "Corporate Finance", "Business Law"],
    ["Strategic Management", "International Business", "Entrepreneurship", "Elective I"],
    ["Business Analytics", "Supply Chain Management", "Elective II", "Internship"],
    ["Capstone Project", "Elective III", "Seminar", "Comprehensive Viva"],
  ],
};

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Course Not Found</h2>
        <Link to="/courses"><Button><ArrowLeft className="mr-2 h-4 w-4" /> Back to Courses</Button></Link>
      </div>
    );
  }

  const relatedFaculty = faculty.filter((f) => f.department === course.department);
  const curriculum = semesterCurriculum[course.id] || semesterCurriculum["1"];

  return (
    <>
      <PageBanner title={course.name} subtitle={`Department of ${course.department}`} />
      <section className="container mx-auto px-4 py-12 space-y-10">
        <Link to="/courses" className="inline-flex items-center text-primary hover:underline text-sm">
          <ArrowLeft className="mr-1 h-4 w-4" /> All Courses
        </Link>

        {/* Overview */}
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { icon: Clock, label: "Duration", value: course.duration },
            { icon: Users, label: "Total Seats", value: String(course.seats) },
            { icon: BookOpen, label: "Department", value: course.department },
            { icon: GraduationCap, label: "Degree", value: course.duration === "4 Years" ? "B.Tech / B.E." : "Bachelor's" },
          ].map((s) => (
            <Card key={s.label}>
              <CardContent className="flex items-center gap-3 p-4">
                <s.icon className="h-8 w-8 text-primary" />
                <div><p className="text-xs text-muted-foreground">{s.label}</p><p className="font-semibold">{s.value}</p></div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader><CardTitle>About This Program</CardTitle></CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>{course.description}</p>
            <p>This program offers a comprehensive curriculum designed to equip students with both theoretical knowledge and practical skills. Graduates are prepared for successful careers in industry, research, and entrepreneurship.</p>
            <p>The department features state-of-the-art laboratories, experienced faculty, and strong industry partnerships that provide students with internship and placement opportunities.</p>
          </CardContent>
        </Card>

        {/* Curriculum */}
        <Card>
          <CardHeader><CardTitle>Semester-wise Curriculum</CardTitle></CardHeader>
          <CardContent className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {curriculum.map((subjects, i) => (
              <div key={i} className="border rounded-lg p-4 space-y-2">
                <Badge variant="secondary">Semester {i + 1}</Badge>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {subjects.map((s) => <li key={s}>• {s}</li>)}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Eligibility */}
        <Card>
          <CardHeader><CardTitle>Eligibility & Admission</CardTitle></CardHeader>
          <CardContent className="space-y-2 text-muted-foreground text-sm">
            <p><strong>Eligibility:</strong> 10+2 with minimum 60% marks in relevant stream.</p>
            <p><strong>Selection:</strong> Based on entrance exam scores, academic record, and personal interview.</p>
            <p><strong>Documents Required:</strong> 10th & 12th marksheets, transfer certificate, character certificate, passport-size photographs, Aadhaar card.</p>
            <Link to="/apply-online"><Button className="mt-3">Apply Now</Button></Link>
          </CardContent>
        </Card>

        {/* Faculty */}
        {relatedFaculty.length > 0 && (
          <Card>
            <CardHeader><CardTitle>Faculty</CardTitle></CardHeader>
            <CardContent className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedFaculty.map((f) => (
                <Link to={`/faculty/${f.id}`} key={f.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                  <p className="font-semibold">{f.name}</p>
                  <p className="text-sm text-muted-foreground">{f.designation}</p>
                  <p className="text-xs text-muted-foreground">{f.specialization}</p>
                </Link>
              ))}
            </CardContent>
          </Card>
        )}
      </section>
    </>
  );
};

export default CourseDetail;

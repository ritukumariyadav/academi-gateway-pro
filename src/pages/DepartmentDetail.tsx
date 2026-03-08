import { useParams, Link } from "react-router-dom";
import PageBanner from "@/components/layout/PageBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { departments, courses, faculty } from "@/data/sampleData";
import { ArrowLeft, Users, BookOpen, GraduationCap, Award } from "lucide-react";

const DepartmentDetail = () => {
  const { id } = useParams();
  const dept = departments.find((d) => d.id === id);

  if (!dept) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Department Not Found</h2>
        <Link to="/departments"><Button><ArrowLeft className="mr-2 h-4 w-4" /> All Departments</Button></Link>
      </div>
    );
  }

  const deptCourses = courses.filter((c) => c.department === dept.name || (dept.name === "Arts & Humanities" && c.department === "Arts"));
  const deptFaculty = faculty.filter((f) => f.department === dept.name || (dept.name === "Arts & Humanities" && f.department === "Arts & Humanities"));

  return (
    <>
      <PageBanner title={`Department of ${dept.name}`} subtitle={`Headed by ${dept.head}`} />
      <section className="container mx-auto px-4 py-12 space-y-10">
        <Link to="/departments" className="inline-flex items-center text-primary hover:underline text-sm">
          <ArrowLeft className="mr-1 h-4 w-4" /> All Departments
        </Link>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Users, label: "Faculty Members", value: String(dept.faculty) },
            { icon: GraduationCap, label: "Students", value: String(dept.students) },
            { icon: BookOpen, label: "Courses", value: String(dept.courses) },
            { icon: Award, label: "Head of Dept.", value: dept.head },
          ].map((s) => (
            <Card key={s.label}>
              <CardContent className="flex items-center gap-3 p-4">
                <s.icon className="h-8 w-8 text-primary" />
                <div><p className="text-xs text-muted-foreground">{s.label}</p><p className="font-semibold text-sm">{s.value}</p></div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader><CardTitle>About the Department</CardTitle></CardHeader>
          <CardContent className="text-muted-foreground space-y-3">
            <p>The Department of {dept.name} at Preston Academy is one of the institution's premier academic divisions. With {dept.faculty} dedicated faculty members and {dept.students} enrolled students, the department offers a rigorous yet supportive learning environment.</p>
            <p>Our curriculum blends theoretical foundations with hands-on practical experience, ensuring graduates are well-prepared for both industry careers and advanced research. The department also hosts regular seminars, workshops, and industry guest lectures.</p>
            <p>State-of-the-art laboratories, a dedicated departmental library, and collaborative research centers form the backbone of our academic infrastructure.</p>
          </CardContent>
        </Card>

        {/* Courses */}
        {deptCourses.length > 0 && (
          <Card>
            <CardHeader><CardTitle>Programs Offered</CardTitle></CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-4">
              {deptCourses.map((c) => (
                <Link to={`/courses/${c.id}`} key={c.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                  <p className="font-semibold">{c.name}</p>
                  <p className="text-sm text-muted-foreground">{c.duration} · {c.seats} seats</p>
                  <p className="text-xs text-muted-foreground mt-1">{c.description}</p>
                </Link>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Faculty */}
        {deptFaculty.length > 0 && (
          <Card>
            <CardHeader><CardTitle>Faculty Members</CardTitle></CardHeader>
            <CardContent className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {deptFaculty.map((f) => (
                <Link to={`/faculty/${f.id}`} key={f.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                  <p className="font-semibold">{f.name}</p>
                  <p className="text-sm text-muted-foreground">{f.designation}</p>
                  <p className="text-xs text-muted-foreground">{f.specialization} · {f.experience}</p>
                </Link>
              ))}
            </CardContent>
          </Card>
        )}

        <div className="flex gap-3">
          <Link to="/apply-online"><Button>Apply to This Department</Button></Link>
          <Link to="/contact"><Button variant="outline">Contact Us</Button></Link>
        </div>
      </section>
    </>
  );
};

export default DepartmentDetail;

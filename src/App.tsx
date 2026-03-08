import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";

import PublicLayout from "@/components/layout/PublicLayout";
import StudentLayout from "@/components/layout/StudentLayout";
import TeacherLayout from "@/components/layout/TeacherLayout";
import AdminLayout from "@/components/layout/AdminLayout";

// Public pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import PrincipalMessage from "@/pages/PrincipalMessage";
import VisionMission from "@/pages/VisionMission";
import Courses from "@/pages/Courses";
import Departments from "@/pages/Departments";
import Faculty from "@/pages/Faculty";
import Admission from "@/pages/Admission";
import ApplyOnline from "@/pages/ApplyOnline";
import Notices from "@/pages/Notices";
import Events from "@/pages/Events";
import Gallery from "@/pages/Gallery";
import Testimonials from "@/pages/Testimonials";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";
import Login from "@/pages/Login";
import AcademicCalendar from "@/pages/AcademicCalendar";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsConditions from "@/pages/TermsConditions";
import NotFound from "@/pages/NotFound";
import CourseDetail from "@/pages/CourseDetail";
import DepartmentDetail from "@/pages/DepartmentDetail";
import FacultyDetail from "@/pages/FacultyDetail";
import NoticeDetail from "@/pages/NoticeDetail";
import EventDetail from "@/pages/EventDetail";

// Student pages
import StudentDashboard from "@/pages/dashboard/StudentDashboard";
import StudentProfile from "@/pages/student/StudentProfile";
import StudentAttendance from "@/pages/student/StudentAttendance";
import StudentResults from "@/pages/student/StudentResults";
import StudentAssignments from "@/pages/student/StudentAssignments";
import StudentSyllabus from "@/pages/student/StudentSyllabus";
import StudentTimetable from "@/pages/student/StudentTimetable";
import StudentFees from "@/pages/student/StudentFees";
import StudentLibrary from "@/pages/student/StudentLibrary";
import StudentNotifications from "@/pages/student/StudentNotifications";
import StudentDocuments from "@/pages/student/StudentDocuments";

// Teacher pages
import TeacherDashboard from "@/pages/dashboard/TeacherDashboard";
import TeacherProfile from "@/pages/teacher/TeacherProfile";
import TeacherAttendance from "@/pages/teacher/TeacherAttendance";
import TeacherAssignments from "@/pages/teacher/TeacherAssignments";
import TeacherMarksheets from "@/pages/teacher/TeacherMarksheets";
import TeacherResults from "@/pages/teacher/TeacherResults";
import TeacherSchedule from "@/pages/teacher/TeacherSchedule";
import TeacherNotices from "@/pages/teacher/TeacherNotices";
import TeacherNotifications from "@/pages/teacher/TeacherNotifications";
import TeacherStudents from "@/pages/teacher/TeacherStudents";
import TeacherSyllabus from "@/pages/teacher/TeacherSyllabus";

// Admin pages
import AdminDashboard from "@/pages/dashboard/AdminDashboard";
import AdminStudents from "@/pages/admin/AdminStudents";
import AdminTeachers from "@/pages/admin/AdminTeachers";
import AdminCourses from "@/pages/admin/AdminCourses";
import AdminDepartments from "@/pages/admin/AdminDepartments";
import AdminAdmissions from "@/pages/admin/AdminAdmissions";
import AdminNotices from "@/pages/admin/AdminNotices";
import AdminNotifications from "@/pages/admin/AdminNotifications";
import AdminMarksheets from "@/pages/admin/AdminMarksheets";
import AdminSyllabus from "@/pages/admin/AdminSyllabus";
import AdminEvents from "@/pages/admin/AdminEvents";
import AdminGallery from "@/pages/admin/AdminGallery";
import AdminResults from "@/pages/admin/AdminResults";
import AdminFees from "@/pages/admin/AdminFees";
import AdminSettings from "@/pages/admin/AdminSettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/message/principal" element={<PrincipalMessage />} />
            <Route path="/vision-mission" element={<VisionMission />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetail />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/departments/:id" element={<DepartmentDetail />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/faculty/:id" element={<FacultyDetail />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/apply-online" element={<ApplyOnline />} />
            <Route path="/academic-calendar" element={<AcademicCalendar />} />
            <Route path="/notices" element={<Notices />} />
            <Route path="/notices/:id" element={<NoticeDetail />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
          </Route>

          {/* Login */}
          <Route path="/login" element={<Login />} />

          {/* Student Routes */}
          <Route element={<StudentLayout />}>
            <Route path="/student/dashboard" element={<StudentDashboard />} />
            <Route path="/student/profile" element={<StudentProfile />} />
            <Route path="/student/attendance" element={<StudentAttendance />} />
            <Route path="/student/results" element={<StudentResults />} />
            <Route path="/student/assignments" element={<StudentAssignments />} />
            <Route path="/student/syllabus" element={<StudentSyllabus />} />
            <Route path="/student/timetable" element={<StudentTimetable />} />
            <Route path="/student/fees" element={<StudentFees />} />
            <Route path="/student/library" element={<StudentLibrary />} />
            <Route path="/student/notifications" element={<StudentNotifications />} />
            <Route path="/student/documents" element={<StudentDocuments />} />
          </Route>

          {/* Teacher Routes */}
          <Route element={<TeacherLayout />}>
            <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
            <Route path="/teacher/profile" element={<TeacherProfile />} />
            <Route path="/teacher/attendance" element={<TeacherAttendance />} />
            <Route path="/teacher/assignments" element={<TeacherAssignments />} />
            <Route path="/teacher/marksheets" element={<TeacherMarksheets />} />
            <Route path="/teacher/results" element={<TeacherResults />} />
            <Route path="/teacher/schedule" element={<TeacherSchedule />} />
            <Route path="/teacher/syllabus" element={<TeacherSyllabus />} />
            <Route path="/teacher/notices" element={<TeacherNotices />} />
            <Route path="/teacher/notifications" element={<TeacherNotifications />} />
            <Route path="/teacher/students" element={<TeacherStudents />} />
          </Route>

          {/* Admin Routes */}
          <Route element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/students" element={<AdminStudents />} />
            <Route path="/admin/teachers" element={<AdminTeachers />} />
            <Route path="/admin/courses" element={<AdminCourses />} />
            <Route path="/admin/departments" element={<AdminDepartments />} />
            <Route path="/admin/admissions" element={<AdminAdmissions />} />
            <Route path="/admin/marksheets" element={<AdminMarksheets />} />
            <Route path="/admin/syllabus" element={<AdminSyllabus />} />
            <Route path="/admin/notices" element={<AdminNotices />} />
            <Route path="/admin/notifications" element={<AdminNotifications />} />
            <Route path="/admin/events" element={<AdminEvents />} />
            <Route path="/admin/gallery" element={<AdminGallery />} />
            <Route path="/admin/results" element={<AdminResults />} />
            <Route path="/admin/fees" element={<AdminFees />} />
            <Route path="/admin/settings" element={<AdminSettings />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

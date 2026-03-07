import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicLayout from "@/components/layout/PublicLayout";
import DashboardLayout from "@/components/layout/DashboardLayout";

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
import NotFound from "@/pages/NotFound";

// Dashboard pages
import StudentDashboard from "@/pages/dashboard/StudentDashboard";
import TeacherDashboard from "@/pages/dashboard/TeacherDashboard";
import AdminDashboard from "@/pages/dashboard/AdminDashboard";
import PlaceholderPage from "@/pages/dashboard/PlaceholderPage";

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
            <Route path="/departments" element={<Departments />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/apply-online" element={<ApplyOnline />} />
            <Route path="/notices" element={<Notices />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          {/* Login */}
          <Route path="/login" element={<Login />} />

          {/* Student Routes */}
          <Route element={<DashboardLayout role="student" />}>
            <Route path="/student/dashboard" element={<StudentDashboard />} />
            <Route path="/student/profile" element={<PlaceholderPage title="My Profile" />} />
            <Route path="/student/attendance" element={<PlaceholderPage title="Attendance Records" />} />
            <Route path="/student/results" element={<PlaceholderPage title="Exam Results" />} />
            <Route path="/student/assignments" element={<PlaceholderPage title="Assignments" />} />
            <Route path="/student/timetable" element={<PlaceholderPage title="Class Timetable" />} />
            <Route path="/student/fees" element={<PlaceholderPage title="Fee Details" />} />
            <Route path="/student/library" element={<PlaceholderPage title="Library" />} />
            <Route path="/student/notifications" element={<PlaceholderPage title="Notifications" />} />
            <Route path="/student/documents" element={<PlaceholderPage title="Documents & Certificates" />} />
          </Route>

          {/* Teacher Routes */}
          <Route element={<DashboardLayout role="teacher" />}>
            <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
            <Route path="/teacher/profile" element={<PlaceholderPage title="My Profile" />} />
            <Route path="/teacher/attendance" element={<PlaceholderPage title="Manage Attendance" />} />
            <Route path="/teacher/assignments" element={<PlaceholderPage title="Manage Assignments" />} />
            <Route path="/teacher/results" element={<PlaceholderPage title="Upload Results" />} />
            <Route path="/teacher/schedule" element={<PlaceholderPage title="Class Schedule" />} />
            <Route path="/teacher/notices" element={<PlaceholderPage title="Notices" />} />
            <Route path="/teacher/students" element={<PlaceholderPage title="Student List" />} />
          </Route>

          {/* Admin Routes */}
          <Route element={<DashboardLayout role="admin" />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/students" element={<PlaceholderPage title="Manage Students" />} />
            <Route path="/admin/teachers" element={<PlaceholderPage title="Manage Teachers" />} />
            <Route path="/admin/courses" element={<PlaceholderPage title="Manage Courses" />} />
            <Route path="/admin/departments" element={<PlaceholderPage title="Manage Departments" />} />
            <Route path="/admin/admissions" element={<PlaceholderPage title="Manage Admissions" />} />
            <Route path="/admin/notices" element={<PlaceholderPage title="Manage Notices" />} />
            <Route path="/admin/events" element={<PlaceholderPage title="Manage Events" />} />
            <Route path="/admin/gallery" element={<PlaceholderPage title="Manage Gallery" />} />
            <Route path="/admin/results" element={<PlaceholderPage title="Manage Results" />} />
            <Route path="/admin/fees" element={<PlaceholderPage title="Manage Fees" />} />
            <Route path="/admin/settings" element={<PlaceholderPage title="Site Settings" />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

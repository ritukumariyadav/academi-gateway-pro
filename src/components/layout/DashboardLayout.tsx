import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  LayoutDashboard, User, Calendar, FileText, BookOpen, ClipboardList,
  Bell, Download, DollarSign, Users, Settings, LogOut, Menu, X,
  GraduationCap, Upload, List
} from "lucide-react";
import { Button } from "@/components/ui/button";

type Role = "student" | "teacher" | "admin";

const sidebarConfig: Record<Role, { label: string; icon: any; path: string }[]> = {
  student: [
    { label: "Dashboard", icon: LayoutDashboard, path: "/student/dashboard" },
    { label: "Profile", icon: User, path: "/student/profile" },
    { label: "Attendance", icon: Calendar, path: "/student/attendance" },
    { label: "Results", icon: FileText, path: "/student/results" },
    { label: "Assignments", icon: ClipboardList, path: "/student/assignments" },
    { label: "Timetable", icon: BookOpen, path: "/student/timetable" },
    { label: "Fees", icon: DollarSign, path: "/student/fees" },
    { label: "Library", icon: BookOpen, path: "/student/library" },
    { label: "Notifications", icon: Bell, path: "/student/notifications" },
    { label: "Documents", icon: Download, path: "/student/documents" },
  ],
  teacher: [
    { label: "Dashboard", icon: LayoutDashboard, path: "/teacher/dashboard" },
    { label: "Profile", icon: User, path: "/teacher/profile" },
    { label: "Attendance", icon: Calendar, path: "/teacher/attendance" },
    { label: "Assignments", icon: Upload, path: "/teacher/assignments" },
    { label: "Results", icon: FileText, path: "/teacher/results" },
    { label: "Schedule", icon: BookOpen, path: "/teacher/schedule" },
    { label: "Notices", icon: Bell, path: "/teacher/notices" },
    { label: "Students", icon: Users, path: "/teacher/students" },
  ],
  admin: [
    { label: "Dashboard", icon: LayoutDashboard, path: "/admin/dashboard" },
    { label: "Students", icon: Users, path: "/admin/students" },
    { label: "Teachers", icon: Users, path: "/admin/teachers" },
    { label: "Courses", icon: BookOpen, path: "/admin/courses" },
    { label: "Departments", icon: List, path: "/admin/departments" },
    { label: "Admissions", icon: ClipboardList, path: "/admin/admissions" },
    { label: "Notices", icon: Bell, path: "/admin/notices" },
    { label: "Events", icon: Calendar, path: "/admin/events" },
    { label: "Gallery", icon: FileText, path: "/admin/gallery" },
    { label: "Results", icon: FileText, path: "/admin/results" },
    { label: "Fees", icon: DollarSign, path: "/admin/fees" },
    { label: "Settings", icon: Settings, path: "/admin/settings" },
  ],
};

const roleLabels: Record<Role, string> = { student: "Student Portal", teacher: "Faculty Portal", admin: "Admin Panel" };

const DashboardLayout = ({ role }: { role: Role }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const items = sidebarConfig[role];

  return (
    <div className="min-h-screen flex bg-muted/30">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-sidebar text-sidebar-foreground transform transition-transform lg:translate-x-0 lg:static lg:inset-auto ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="h-16 flex items-center gap-2 px-4 border-b border-sidebar-border">
          <GraduationCap className="h-7 w-7 text-sidebar-primary" />
          <div className="leading-tight">
            <span className="font-display text-sm font-bold">{roleLabels[role]}</span>
            <span className="block text-[10px] text-sidebar-foreground/60">Preston Academy</span>
          </div>
          <button className="lg:hidden ml-auto" onClick={() => setSidebarOpen(false)}>
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="p-3 space-y-1 overflow-y-auto h-[calc(100vh-4rem)]">
          {items.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${active ? "bg-sidebar-accent text-sidebar-primary font-medium" : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"}`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
          <button
            onClick={() => navigate("/login")}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-sidebar-foreground/50 hover:text-destructive transition-colors w-full mt-4"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </button>
        </nav>
      </aside>

      {/* Overlay */}
      {sidebarOpen && <div className="fixed inset-0 bg-foreground/20 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-card border-b flex items-center px-4 gap-4 sticky top-0 z-20">
          <button className="lg:hidden" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-5 w-5" />
          </button>
          <h2 className="font-display text-lg font-semibold truncate">
            {items.find((i) => i.path === location.pathname)?.label || "Dashboard"}
          </h2>
          <div className="ml-auto flex items-center gap-3">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground text-sm font-bold">
              {role[0].toUpperCase()}
            </div>
          </div>
        </header>
        <main className="flex-1 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

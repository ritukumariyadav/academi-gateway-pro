import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard, Users, BookOpen, List, ClipboardList, Bell, Calendar, FileText,
  DollarSign, Settings, LogOut, GraduationCap, Image, Shield, Briefcase, Home,
  Bus, Package, Library, BarChart3, ScrollText, MessageSquare, Monitor, Award,
} from "lucide-react";
import {
  Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent,
  SidebarGroupLabel, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton,
  SidebarMenuItem, SidebarProvider, SidebarRail, SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Button } from "../ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const mainNav = [
  { title: "Dashboard", url: "/admin/dashboard", icon: LayoutDashboard },
  { title: "Students", url: "/admin/students", icon: Users },
  { title: "Teachers", url: "/admin/teachers", icon: Users },
  { title: "Courses", url: "/admin/courses", icon: BookOpen },
  { title: "Departments", url: "/admin/departments", icon: List },
  { title: "Classes & Sections", url: "/admin/classes", icon: Users },
  { title: "Subject Mapping", url: "/admin/subject-mapping", icon: BookOpen },
  { title: "Admissions", url: "/admin/admissions", icon: ClipboardList },
];

const academicNav = [
  { title: "Exams", url: "/admin/exams", icon: Calendar },
  { title: "Marksheets", url: "/admin/marksheets", icon: ClipboardList },
  { title: "Results", url: "/admin/results", icon: FileText },
  { title: "Report Cards", url: "/admin/report-cards", icon: Award },
  { title: "Syllabus", url: "/admin/syllabus", icon: BookOpen },
  { title: "Online Exams", url: "/admin/online-exams", icon: Monitor },
  { title: "Certificates", url: "/admin/certificates", icon: ScrollText },
];

const contentNav = [
  { title: "Notices", url: "/admin/notices", icon: Bell },
  { title: "Notifications", url: "/admin/notifications", icon: Bell },
  { title: "Events", url: "/admin/events", icon: Calendar },
  { title: "Gallery", url: "/admin/gallery", icon: Image },
  { title: "Messaging", url: "/admin/messaging", icon: MessageSquare },
  { title: "Complaints", url: "/admin/complaints", icon: MessageSquare },
];

const financeNav = [
  { title: "Fees", url: "/admin/fees", icon: DollarSign },
  { title: "Fee Structure", url: "/admin/fee-structure", icon: DollarSign },
  { title: "Expenses", url: "/admin/expenses", icon: DollarSign },
];

const infraNav = [
  { title: "HR & Payroll", url: "/admin/hr", icon: Briefcase },
  { title: "Hostel", url: "/admin/hostel", icon: Home },
  { title: "Transport", url: "/admin/transport", icon: Bus },
  { title: "Inventory", url: "/admin/inventory", icon: Package },
  { title: "Library", url: "/admin/library", icon: Library },
];

const systemNav = [
  { title: "Analytics", url: "/admin/analytics", icon: BarChart3 },
  { title: "Audit Logs", url: "/admin/audit-logs", icon: Shield },
  { title: "Settings", url: "/admin/settings", icon: Settings },
];

const allNav = [...mainNav, ...academicNav, ...contentNav, ...financeNav, ...infraNav, ...systemNav];

const AdminLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPage = allNav.find(i => i.url === location.pathname)?.title || "Dashboard";

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar collapsible="icon">
          <SidebarHeader>
            <SidebarMenu><SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <Link to="/admin/dashboard">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"><GraduationCap className="size-4" /></div>
                  <div className="flex flex-col gap-0.5 leading-none">
                    <span className="font-display font-semibold">Admin Panel</span>
                    <span className="text-xs text-sidebar-foreground/60">Preston Academy</span>
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem></SidebarMenu>
          </SidebarHeader>
          <SidebarContent>
            {[
              { label: "Management", items: mainNav },
              { label: "Academic", items: academicNav },
              { label: "Communication", items: contentNav },
              { label: "Finance", items: financeNav },
              { label: "Infrastructure", items: infraNav },
              { label: "System", items: systemNav },
            ].map(group => (
              <SidebarGroup key={group.label}>
                <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
                <SidebarGroupContent><SidebarMenu>
                  {group.items.map(item => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild isActive={location.pathname === item.url} tooltip={item.title}>
                        <Link to={item.url}><item.icon /><span>{item.title}</span></Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu></SidebarGroupContent>
              </SidebarGroup>
            ))}
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu><SidebarMenuItem>
              <SidebarMenuButton onClick={() => navigate("/login")} tooltip="Sign Out"><LogOut /><span>Sign Out</span></SidebarMenuButton>
            </SidebarMenuItem></SidebarMenu>
          </SidebarFooter>
          <SidebarRail />
        </Sidebar>
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb><BreadcrumbList><BreadcrumbItem><BreadcrumbPage>{currentPage}</BreadcrumbPage></BreadcrumbItem></BreadcrumbList></Breadcrumb>
            <div className="ml-auto flex items-center gap-3">
              <Link to="/student/dashboard"><Button variant={location.pathname.startsWith("/student") ? "default" : "ghost"} size="icon"><LayoutDashboard className="h-5 w-5" /></Button></Link>
              <Link to="/admin/dashboard"><Button variant={location.pathname.startsWith("/admin") ? "default" : "ghost"} size="icon"><Shield className="h-5 w-5" /></Button></Link>
              <Link to="/teacher/dashboard"><Button variant={location.pathname.startsWith("/teacher") ? "default" : "ghost"} size="icon"><GraduationCap className="h-5 w-5" /></Button></Link>
              <Link to="/parent/dashboard"><Button variant={location.pathname.startsWith("/parent") ? "default" : "ghost"} size="icon"><Users className="h-5 w-5" /></Button></Link>
              <ThemeToggle />
              <Bell className="h-5 w-5 text-muted-foreground" />
              <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground text-sm font-bold">A</div>
            </div>
          </header>
          <main className="flex-1 p-4 md:p-6"><Outlet /></main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;

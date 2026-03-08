import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  User,
  Calendar,
  FileText,
  ClipboardList,
  BookOpen,
  DollarSign,
  Bell,
  Download,
  Library,
  LogOut,
  GraduationCap,
  Shield,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "../ui/button";

const navItems = [
  { title: "Dashboard", url: "/student/dashboard", icon: LayoutDashboard },
  { title: "Profile", url: "/student/profile", icon: User },
  { title: "Attendance", url: "/student/attendance", icon: Calendar },
  { title: "Results", url: "/student/results", icon: FileText },
  { title: "Assignments", url: "/student/assignments", icon: ClipboardList },
  { title: "Timetable", url: "/student/timetable", icon: BookOpen },
  { title: "Fees", url: "/student/fees", icon: DollarSign },
  { title: "Library", url: "/student/library", icon: Library },
  { title: "Notifications", url: "/student/notifications", icon: Bell },
  { title: "Documents", url: "/student/documents", icon: Download },
];

const StudentLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPage =
    navItems.find((i) => i.url === location.pathname)?.title || "Dashboard";

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar collapsible="icon">
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg" asChild>
                  <Link to="/student/dashboard">
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                      <GraduationCap className="size-4" />
                    </div>
                    <div className="flex flex-col gap-0.5 leading-none">
                      <span className="font-display font-semibold">
                        Student Portal
                      </span>
                      <span className="text-xs text-sidebar-foreground/60">
                        Preston Academy
                      </span>
                    </div>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        isActive={location.pathname === item.url}
                        tooltip={item.title}
                      >
                        <Link to={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => navigate("/login")}
                  tooltip="Sign Out"
                >
                  <LogOut />
                  <span>Sign Out</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
          <SidebarRail />
        </Sidebar>

        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage>{currentPage}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="ml-auto flex items-center gap-3">
              <Link to="/student/dashboard">
                <Button variant="ghost" size="icon">
                  <LayoutDashboard className="h-5 w-5" />
                </Button>
              </Link>

              <Link to="/admin/dashboard">
                <Button variant="ghost" size="icon">
                  <Shield className="h-5 w-5" />
                </Button>
              </Link>

              {/* teacher dashboard link */}
              <Link to="/teacher/dashboard">
                <Button variant="ghost" size="icon">
                  <GraduationCap className="h-5 w-5" />
                </Button>
              </Link>

              <Bell className="h-5 w-5 text-muted-foreground" />
              <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground text-sm font-bold">
                S
              </div>
            </div>
          </header>
          <main className="flex-1 p-4 md:p-6">
            <Outlet />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default StudentLayout;

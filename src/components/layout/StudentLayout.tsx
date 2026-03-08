import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard, User, Calendar, FileText, ClipboardList, BookOpen,
  DollarSign, Bell, Download, Library, LogOut, GraduationCap, Shield,
  Monitor, MessageSquare, Home, Bus, Users, ChevronRight,
} from "lucide-react";
import {
  Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarInset,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubItem,
  SidebarMenuSubButton, SidebarProvider, SidebarRail, SidebarTrigger,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Button } from "../ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LucideIcon } from "lucide-react";

interface NavItem { title: string; url: string; icon: LucideIcon; }
interface NavGroup { label: string; icon: LucideIcon; items: NavItem[]; }

const topNav: NavItem[] = [
  { title: "Dashboard", url: "/student/dashboard", icon: LayoutDashboard },
  { title: "Profile", url: "/student/profile", icon: User },
];

const groups: NavGroup[] = [
  {
    label: "Academic",
    icon: GraduationCap,
    items: [
      { title: "Attendance", url: "/student/attendance", icon: Calendar },
      { title: "Timetable", url: "/student/timetable", icon: BookOpen },
      { title: "Results", url: "/student/results", icon: FileText },
      { title: "Report Card", url: "/student/report-card", icon: FileText },
      { title: "Assignments", url: "/student/assignments", icon: ClipboardList },
      { title: "Syllabus", url: "/student/syllabus", icon: BookOpen },
      { title: "Exams", url: "/student/exams", icon: Calendar },
      { title: "Online Quizzes", url: "/student/online-exams", icon: Monitor },
    ],
  },
  {
    label: "Services",
    icon: Home,
    items: [
      { title: "Fees", url: "/student/fees", icon: DollarSign },
      { title: "Library", url: "/student/library", icon: Library },
      { title: "Hostel", url: "/student/hostel", icon: Home },
      { title: "Transport", url: "/student/transport", icon: Bus },
      { title: "Documents", url: "/student/documents", icon: Download },
    ],
  },
  {
    label: "Communication",
    icon: MessageSquare,
    items: [
      { title: "Notifications", url: "/student/notifications", icon: Bell },
      { title: "Messages", url: "/student/messages", icon: MessageSquare },
      { title: "Complaints", url: "/student/complaints", icon: MessageSquare },
    ],
  },
];

const allNav = [...topNav, ...groups.flatMap(g => g.items)];

const StudentLayout = () => {
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
                <Link to="/student/dashboard">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"><GraduationCap className="size-4" /></div>
                  <div className="flex flex-col gap-0.5 leading-none">
                    <span className="font-display font-semibold">Student Portal</span>
                    <span className="text-xs text-sidebar-foreground/60">Preston Academy</span>
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem></SidebarMenu>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                {topNav.map(item => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={location.pathname === item.url} tooltip={item.title}>
                      <Link to={item.url}><item.icon /><span>{item.title}</span></Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>
            {groups.map(group => {
              const isGroupActive = group.items.some(i => location.pathname === i.url);
              return (
                <SidebarGroup key={group.label}>
                  <SidebarMenu>
                    <Collapsible defaultOpen={isGroupActive} className="group/collapsible">
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton tooltip={group.label}>
                            <group.icon />
                            <span>{group.label}</span>
                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {group.items.map(item => (
                              <SidebarMenuSubItem key={item.title}>
                                <SidebarMenuSubButton asChild isActive={location.pathname === item.url}>
                                  <Link to={item.url}><item.icon /><span>{item.title}</span></Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  </SidebarMenu>
                </SidebarGroup>
              );
            })}
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
              <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground text-sm font-bold">S</div>
            </div>
          </header>
          <main className="flex-1 p-4 md:p-6"><Outlet /></main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default StudentLayout;
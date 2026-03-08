import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard, User, Calendar, Upload, FileText, BookOpen, Bell, Users,
  LogOut, GraduationCap, Shield, Send, ClipboardList, Award, MessageSquare,
  Monitor, Library, ChevronRight,
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
  { title: "Dashboard", url: "/teacher/dashboard", icon: LayoutDashboard },
  { title: "Profile", url: "/teacher/profile", icon: User },
];

const groups: NavGroup[] = [
  {
    label: "Teaching",
    icon: BookOpen,
    items: [
      { title: "Schedule", url: "/teacher/schedule", icon: BookOpen },
      { title: "Students", url: "/teacher/students", icon: Users },
      { title: "Attendance", url: "/teacher/attendance", icon: Calendar },
      { title: "Assignments", url: "/teacher/assignments", icon: Upload },
    ],
  },
  {
    label: "Academic",
    icon: GraduationCap,
    items: [
      { title: "Marksheets", url: "/teacher/marksheets", icon: ClipboardList },
      { title: "Results", url: "/teacher/results", icon: FileText },
      { title: "Syllabus", url: "/teacher/syllabus", icon: BookOpen },
      { title: "Exams", url: "/teacher/exams", icon: Calendar },
      { title: "Report Cards", url: "/teacher/report-cards", icon: Award },
      { title: "Online Quizzes", url: "/teacher/online-exams", icon: Monitor },
    ],
  },
  {
    label: "Communication",
    icon: MessageSquare,
    items: [
      { title: "Library", url: "/teacher/library", icon: Library },
      { title: "Notices", url: "/teacher/notices", icon: Bell },
      { title: "Notifications", url: "/teacher/notifications", icon: Send },
      { title: "Messages", url: "/teacher/messages", icon: MessageSquare },
      { title: "Complaints", url: "/teacher/complaints", icon: MessageSquare },
    ],
  },
];

const allNav = [...topNav, ...groups.flatMap(g => g.items)];

const TeacherLayout = () => {
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
                <Link to="/teacher/dashboard">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"><GraduationCap className="size-4" /></div>
                  <div className="flex flex-col gap-0.5 leading-none">
                    <span className="font-display font-semibold">Faculty Portal</span>
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
              <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground text-sm font-bold">T</div>
            </div>
          </header>
          <main className="flex-1 p-4 md:p-6"><Outlet /></main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default TeacherLayout;
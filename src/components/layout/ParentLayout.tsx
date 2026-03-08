import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard, Calendar, FileText, DollarSign, Bell, MessageSquare,
  LogOut, GraduationCap, Shield, Users, ChevronRight,
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
  { title: "Dashboard", url: "/parent/dashboard", icon: LayoutDashboard },
];

const groups: NavGroup[] = [
  {
    label: "Child Info",
    icon: Users,
    items: [
      { title: "Child Progress", url: "/parent/progress", icon: FileText },
      { title: "Attendance", url: "/parent/attendance", icon: Calendar },
      { title: "Fees", url: "/parent/fees", icon: DollarSign },
    ],
  },
  {
    label: "Communication",
    icon: MessageSquare,
    items: [
      { title: "Messages", url: "/parent/messages", icon: MessageSquare },
      { title: "Complaints", url: "/parent/complaints", icon: Bell },
    ],
  },
];

const allNav = [...topNav, ...groups.flatMap(g => g.items)];

const ParentLayout = () => {
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
                <Link to="/parent/dashboard">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"><Users className="size-4" /></div>
                  <div className="flex flex-col gap-0.5 leading-none">
                    <span className="font-display font-semibold">Parent Portal</span>
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
              <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground text-sm font-bold">P</div>
            </div>
          </header>
          <main className="flex-1 p-4 md:p-6"><Outlet /></main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default ParentLayout;
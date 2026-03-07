import { Card, CardContent } from "@/components/ui/card";
import { Users, GraduationCap, BookOpen, Bell, TrendingUp, DollarSign } from "lucide-react";

const AdminDashboard = () => (
  <div className="space-y-6">
    <h1 className="font-display text-2xl font-bold">Admin Dashboard</h1>
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      {[
        { icon: Users, label: "Students", value: "5,240" },
        { icon: GraduationCap, label: "Faculty", value: "124" },
        { icon: BookOpen, label: "Courses", value: "47" },
        { icon: Bell, label: "New Applications", value: "89" },
        { icon: DollarSign, label: "Revenue", value: "$2.4M" },
        { icon: TrendingUp, label: "Placement", value: "94%" },
      ].map((s, i) => (
        <Card key={i}><CardContent className="p-4">
          <s.icon className="h-5 w-5 text-accent mb-2" />
          <p className="text-lg font-bold">{s.value}</p>
          <p className="text-xs text-muted-foreground">{s.label}</p>
        </CardContent></Card>
      ))}
    </div>
    <div className="grid lg:grid-cols-2 gap-6">
      <Card><CardContent className="p-6">
        <h3 className="font-display font-semibold mb-4">Recent Applications</h3>
        <div className="space-y-2">
          {["Aisha Kumar — Computer Science", "John Park — Business Admin", "Maria Lopez — Physics", "David Chen — Mechanical Eng."].map((a, i) => (
            <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <span className="text-sm">{a}</span>
              <span className="text-xs px-2 py-1 rounded bg-accent/10 text-accent font-medium">Pending</span>
            </div>
          ))}
        </div>
      </CardContent></Card>
      <Card><CardContent className="p-6">
        <h3 className="font-display font-semibold mb-4">System Alerts</h3>
        <div className="space-y-2">
          {["Fee payment deadline approaching", "New faculty onboarding pending", "Server maintenance scheduled Mar 15", "Annual report generation ready"].map((a, i) => (
            <div key={i} className="flex items-start gap-2 p-3 rounded-lg bg-muted/50">
              <Bell className="h-4 w-4 text-accent mt-0.5 shrink-0" />
              <span className="text-sm">{a}</span>
            </div>
          ))}
        </div>
      </CardContent></Card>
    </div>
  </div>
);

export default AdminDashboard;

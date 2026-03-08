import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, GraduationCap, DollarSign, BookOpen, Calendar } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

const enrollmentData = [
  { year: "2021", students: 4200 }, { year: "2022", students: 4500 }, { year: "2023", students: 4800 },
  { year: "2024", students: 5000 }, { year: "2025", students: 5100 }, { year: "2026", students: 5240 },
];

const attendanceData = [
  { month: "Sep", rate: 92 }, { month: "Oct", rate: 89 }, { month: "Nov", rate: 91 },
  { month: "Dec", rate: 85 }, { month: "Jan", rate: 88 }, { month: "Feb", rate: 90 }, { month: "Mar", rate: 93 },
];

const feeData = [
  { month: "Sep", collected: 420, pending: 80 }, { month: "Oct", collected: 380, pending: 120 },
  { month: "Nov", collected: 450, pending: 50 }, { month: "Dec", collected: 300, pending: 200 },
  { month: "Jan", collected: 410, pending: 90 }, { month: "Feb", collected: 430, pending: 70 },
];

const deptDistribution = [
  { name: "CS", value: 1200 }, { name: "Mech", value: 800 }, { name: "ECE", value: 700 },
  { name: "Business", value: 900 }, { name: "Physics", value: 400 }, { name: "Others", value: 1240 },
];

const COLORS = ["hsl(var(--primary))", "hsl(var(--accent))", "hsl(var(--muted-foreground))", "#f59e0b", "#10b981", "#8b5cf6"];

const AdminAnalytics = () => (
  <div className="space-y-6">
    <h1 className="font-display text-2xl font-bold">Analytics Dashboard</h1>
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      {[{ icon: Users, label: "Students", value: "5,240", change: "+2.8%" }, { icon: GraduationCap, label: "Faculty", value: "124", change: "+4" }, { icon: BookOpen, label: "Courses", value: "47", change: "+3" }, { icon: DollarSign, label: "Revenue", value: "$2.4M", change: "+12%" }, { icon: TrendingUp, label: "Placement", value: "94%", change: "+2%" }, { icon: Calendar, label: "Avg Attendance", value: "90%", change: "+1%" }].map((s, i) => (
        <Card key={i}><CardContent className="p-4"><s.icon className="h-5 w-5 text-accent mb-2" /><p className="text-lg font-bold">{s.value}</p><p className="text-xs text-muted-foreground">{s.label}</p><p className="text-xs text-green-600 mt-1">{s.change}</p></CardContent></Card>
      ))}
    </div>
    <div className="grid lg:grid-cols-2 gap-6">
      <Card><CardHeader><CardTitle>Enrollment Trend</CardTitle></CardHeader><CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={enrollmentData}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="year" /><YAxis /><Tooltip /><Bar dataKey="students" fill="hsl(var(--primary))" radius={[4,4,0,0]} /></BarChart>
        </ResponsiveContainer>
      </CardContent></Card>
      <Card><CardHeader><CardTitle>Attendance Rate</CardTitle></CardHeader><CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={attendanceData}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="month" /><YAxis domain={[80, 100]} /><Tooltip /><Line type="monotone" dataKey="rate" stroke="hsl(var(--accent))" strokeWidth={2} /></LineChart>
        </ResponsiveContainer>
      </CardContent></Card>
      <Card><CardHeader><CardTitle>Fee Collection (in $K)</CardTitle></CardHeader><CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={feeData}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="month" /><YAxis /><Tooltip /><Bar dataKey="collected" fill="hsl(var(--primary))" radius={[4,4,0,0]} /><Bar dataKey="pending" fill="hsl(var(--muted-foreground))" radius={[4,4,0,0]} /></BarChart>
        </ResponsiveContainer>
      </CardContent></Card>
      <Card><CardHeader><CardTitle>Department Distribution</CardTitle></CardHeader><CardContent className="flex justify-center">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart><Pie data={deptDistribution} cx="50%" cy="50%" outerRadius={90} dataKey="value" label={({ name, value }) => `${name}: ${value}`}>
            {deptDistribution.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
          </Pie><Tooltip /></PieChart>
        </ResponsiveContainer>
      </CardContent></Card>
    </div>
  </div>
);

export default AdminAnalytics;

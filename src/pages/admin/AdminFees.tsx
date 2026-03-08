import { ColumnDef } from "@tanstack/react-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp, AlertTriangle, Users } from "lucide-react";
import { DataTable, DataTableColumnHeader } from "@/components/ui/data-table";

type FeeStructure = { program: string; tuition: string; lab: string; hostel: string; total: string };
type Payment = { student: string; roll: string; amount: string; date: string; status: string };

const feeStructure: FeeStructure[] = [
  { program: "B.Tech (All Branches)", tuition: "$2,400", lab: "$300", hostel: "$1,800", total: "$4,500" },
  { program: "MBA", tuition: "$3,200", lab: "$200", hostel: "$1,800", total: "$5,200" },
  { program: "B.Sc (All Branches)", tuition: "$1,800", lab: "$250", hostel: "$1,500", total: "$3,550" },
  { program: "B.A. (All Branches)", tuition: "$1,500", lab: "$100", hostel: "$1,500", total: "$3,100" },
  { program: "MBBS", tuition: "$5,000", lab: "$500", hostel: "$2,000", total: "$7,500" },
];

const recentPayments: Payment[] = [
  { student: "Rahul Sharma", roll: "CS2024-034", amount: "$2,700", date: "Mar 7, 2026", status: "completed" },
  { student: "Aisha Kumar", roll: "CS2024-001", amount: "$2,700", date: "Mar 6, 2026", status: "completed" },
  { student: "David Kim", roll: "CS2024-005", amount: "$1,200", date: "Mar 5, 2026", status: "partial" },
  { student: "Emma Wilson", roll: "MBA2024-012", amount: "$3,400", date: "Mar 4, 2026", status: "completed" },
];

const feeColumns: ColumnDef<FeeStructure>[] = [
  { accessorKey: "program", header: ({ column }) => <DataTableColumnHeader column={column} title="Program" />, cell: ({ row }) => <span className="font-medium">{row.getValue("program")}</span> },
  { accessorKey: "tuition", header: "Tuition" },
  { accessorKey: "lab", header: "Lab Fee" },
  { accessorKey: "hostel", header: "Hostel" },
  { accessorKey: "total", header: "Total", cell: ({ row }) => <span className="font-bold">{row.getValue("total")}</span> },
];

const paymentColumns: ColumnDef<Payment>[] = [
  { accessorKey: "student", header: ({ column }) => <DataTableColumnHeader column={column} title="Student" />, cell: ({ row }) => <span className="font-medium">{row.getValue("student")}</span> },
  { accessorKey: "roll", header: "Roll No", cell: ({ row }) => <span className="font-mono text-sm">{row.getValue("roll")}</span> },
  { accessorKey: "amount", header: "Amount" },
  { accessorKey: "date", header: ({ column }) => <DataTableColumnHeader column={column} title="Date" /> },
  { accessorKey: "status", header: "Status", cell: ({ row }) => <Badge variant={row.getValue("status") === "completed" ? "default" : "secondary"} className="capitalize">{row.getValue("status")}</Badge> },
];

const AdminFees = () => (
  <div className="space-y-6">
    <h1 className="font-display text-2xl font-bold">Manage Fees</h1>
    <div className="grid sm:grid-cols-4 gap-4">
      <Card><CardContent className="p-4 flex items-center gap-3"><DollarSign className="h-8 w-8 text-accent" /><div><p className="text-xl font-bold">$2.4M</p><p className="text-xs text-muted-foreground">Total Collected</p></div></CardContent></Card>
      <Card><CardContent className="p-4 flex items-center gap-3"><AlertTriangle className="h-8 w-8 text-destructive" /><div><p className="text-xl font-bold">$380K</p><p className="text-xs text-muted-foreground">Outstanding</p></div></CardContent></Card>
      <Card><CardContent className="p-4 flex items-center gap-3"><Users className="h-8 w-8 text-primary" /><div><p className="text-xl font-bold">4,820</p><p className="text-xs text-muted-foreground">Fees Paid</p></div></CardContent></Card>
      <Card><CardContent className="p-4 flex items-center gap-3"><TrendingUp className="h-8 w-8 text-success" /><div><p className="text-xl font-bold">92%</p><p className="text-xs text-muted-foreground">Collection Rate</p></div></CardContent></Card>
    </div>
    <Card>
      <CardHeader><CardTitle>Fee Structure (Annual)</CardTitle></CardHeader>
      <CardContent>
        <DataTable columns={feeColumns} data={feeStructure} showPagination={false} showColumnToggle={false} />
      </CardContent>
    </Card>
    <Card>
      <CardHeader><CardTitle>Recent Payments</CardTitle></CardHeader>
      <CardContent>
        <DataTable columns={paymentColumns} data={recentPayments} searchKey="student" searchPlaceholder="Search payments..." showPagination={false} />
      </CardContent>
    </Card>
  </div>
);

export default AdminFees;

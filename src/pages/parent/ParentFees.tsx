import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign } from "lucide-react";

const fees = [
  { head: "Tuition Fee", amount: 45000, due: "2026-03-01", status: "Paid", paidDate: "2026-02-25" },
  { head: "Lab Fee", amount: 5000, due: "2026-03-01", status: "Paid", paidDate: "2026-02-25" },
  { head: "Library Fee", amount: 2000, due: "2026-03-01", status: "Paid", paidDate: "2026-02-25" },
  { head: "Hostel Fee", amount: 30000, due: "2026-03-15", status: "Pending", paidDate: "—" },
  { head: "Transport Fee", amount: 12000, due: "2026-03-15", status: "Pending", paidDate: "—" },
];

const ParentFees = () => (
  <div className="space-y-6">
    <h1 className="font-display text-2xl font-bold">Fee Details</h1>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[["Total Fee", "$94,000"], ["Paid", "$52,000"], ["Pending", "$42,000"], ["Due Date", "Mar 15"]].map(([k, v]) => (
        <Card key={k}><CardContent className="p-4"><DollarSign className="h-5 w-5 text-accent mb-2" /><p className="text-lg font-bold">{v}</p><p className="text-xs text-muted-foreground">{k}</p></CardContent></Card>
      ))}
    </div>
    <Card>
      <CardHeader><CardTitle>Fee Breakdown</CardTitle></CardHeader>
      <CardContent>
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted"><tr><th className="p-3 text-left">Fee Head</th><th className="p-3">Amount</th><th className="p-3">Due Date</th><th className="p-3">Paid Date</th><th className="p-3">Status</th></tr></thead>
            <tbody>{fees.map(f => (
              <tr key={f.head} className="border-t"><td className="p-3 font-medium">{f.head}</td><td className="p-3 text-center">${f.amount.toLocaleString()}</td><td className="p-3 text-center">{f.due}</td><td className="p-3 text-center">{f.paidDate}</td>
                <td className="p-3 text-center"><Badge variant={f.status === "Paid" ? "secondary" : "destructive"}>{f.status}</Badge></td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  </div>
);

export default ParentFees;

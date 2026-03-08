import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, DollarSign, TrendingUp, TrendingDown } from "lucide-react";

const expenses = [
  { id: 1, category: "Salaries", description: "Staff salaries — March 2026", amount: 320000, date: "2026-03-01", status: "Paid" },
  { id: 2, category: "Utilities", description: "Electricity & Water — Feb", amount: 15000, date: "2026-02-28", status: "Paid" },
  { id: 3, category: "Maintenance", description: "Building repair — Block B", amount: 8500, date: "2026-03-05", status: "Pending" },
  { id: 4, category: "IT", description: "Server hosting & software licenses", amount: 5200, date: "2026-03-01", status: "Paid" },
  { id: 5, category: "Events", description: "Annual Day preparations", amount: 12000, date: "2026-03-10", status: "Approved" },
  { id: 6, category: "Library", description: "New book procurement", amount: 7500, date: "2026-03-08", status: "Pending" },
];

const budget = [
  { category: "Salaries", budget: 3800000, spent: 960000, percentage: 25 },
  { category: "Infrastructure", budget: 500000, spent: 125000, percentage: 25 },
  { category: "IT & Tech", budget: 200000, spent: 62000, percentage: 31 },
  { category: "Events", budget: 150000, spent: 45000, percentage: 30 },
  { category: "Library", budget: 100000, spent: 22000, percentage: 22 },
];

const AdminExpenses = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="font-display text-2xl font-bold">Expense Tracking</h1>
      <Button><Plus className="h-4 w-4 mr-1" /> Add Expense</Button>
    </div>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {[{ label: "Total Budget", value: "$4.75M", icon: DollarSign }, { label: "Spent YTD", value: "$1.21M", icon: TrendingDown }, { label: "Remaining", value: "$3.54M", icon: TrendingUp }, { label: "This Month", value: "$368K", icon: DollarSign }].map((s, i) => (
        <Card key={i}><CardContent className="p-4"><s.icon className="h-5 w-5 text-accent mb-2" /><p className="text-lg font-bold">{s.value}</p><p className="text-xs text-muted-foreground">{s.label}</p></CardContent></Card>
      ))}
    </div>
    <Card>
      <CardHeader><CardTitle>Recent Expenses</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow><TableHead>Category</TableHead><TableHead>Description</TableHead><TableHead>Amount</TableHead><TableHead>Date</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
          <TableBody>{expenses.map(e => (
            <TableRow key={e.id}><TableCell><Badge variant="outline">{e.category}</Badge></TableCell><TableCell>{e.description}</TableCell><TableCell className="font-medium">${e.amount.toLocaleString()}</TableCell><TableCell>{e.date}</TableCell>
              <TableCell><Badge variant={e.status === "Paid" ? "secondary" : e.status === "Approved" ? "default" : "outline"}>{e.status}</Badge></TableCell>
            </TableRow>
          ))}</TableBody>
        </Table>
      </CardContent>
    </Card>
    <Card>
      <CardHeader><CardTitle>Budget Overview (Annual)</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow><TableHead>Category</TableHead><TableHead>Budget</TableHead><TableHead>Spent</TableHead><TableHead>% Used</TableHead><TableHead>Remaining</TableHead></TableRow></TableHeader>
          <TableBody>{budget.map((b, i) => (
            <TableRow key={i}><TableCell className="font-medium">{b.category}</TableCell><TableCell>${b.budget.toLocaleString()}</TableCell><TableCell>${b.spent.toLocaleString()}</TableCell>
              <TableCell><Badge variant={b.percentage > 50 ? "destructive" : "outline"}>{b.percentage}%</Badge></TableCell>
              <TableCell>${(b.budget - b.spent).toLocaleString()}</TableCell>
            </TableRow>
          ))}</TableBody>
        </Table>
      </CardContent>
    </Card>
  </div>
);

export default AdminExpenses;

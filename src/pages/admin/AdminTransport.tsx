import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Bus, Users, MapPin, DollarSign } from "lucide-react";

const routes = [
  { id: 1, route: "Route 1 — Downtown", bus: "BUS-001", driver: "Mr. James", capacity: 50, students: 45, stops: 8, fee: 1200 },
  { id: 2, route: "Route 2 — Suburb East", bus: "BUS-002", driver: "Mr. Ahmed", capacity: 50, students: 42, stops: 10, fee: 1500 },
  { id: 3, route: "Route 3 — North Hills", bus: "BUS-003", driver: "Mr. Patel", capacity: 40, students: 38, stops: 6, fee: 1000 },
  { id: 4, route: "Route 4 — West End", bus: "BUS-004", driver: "Mr. Garcia", capacity: 50, students: 30, stops: 7, fee: 1300 },
  { id: 5, route: "Route 5 — Airport Rd.", bus: "BUS-005", driver: "Mr. Lee", capacity: 40, students: 35, stops: 5, fee: 1800 },
];

const AdminTransport = () => (
  <div className="space-y-6">
    <h1 className="font-display text-2xl font-bold">Transport Management</h1>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {[{ label: "Total Buses", value: "12", icon: Bus }, { label: "Active Routes", value: "5", icon: MapPin }, { label: "Students Using", value: "420", icon: Users }, { label: "Monthly Revenue", value: "$54K", icon: DollarSign }].map((s, i) => (
        <Card key={i}><CardContent className="p-4"><s.icon className="h-5 w-5 text-accent mb-2" /><p className="text-lg font-bold">{s.value}</p><p className="text-xs text-muted-foreground">{s.label}</p></CardContent></Card>
      ))}
    </div>
    <Card>
      <CardHeader><CardTitle>Bus Routes</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow><TableHead>Route</TableHead><TableHead>Bus</TableHead><TableHead>Driver</TableHead><TableHead>Capacity</TableHead><TableHead>Students</TableHead><TableHead>Stops</TableHead><TableHead>Fee/Sem</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
          <TableBody>
            {routes.map(r => (
              <TableRow key={r.id}>
                <TableCell className="font-medium">{r.route}</TableCell><TableCell>{r.bus}</TableCell><TableCell>{r.driver}</TableCell><TableCell>{r.capacity}</TableCell><TableCell>{r.students}</TableCell><TableCell>{r.stops}</TableCell><TableCell>${r.fee}</TableCell>
                <TableCell><Badge variant={r.students >= r.capacity ? "secondary" : "outline"}>{r.students >= r.capacity ? "Full" : "Active"}</Badge></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </div>
);

export default AdminTransport;

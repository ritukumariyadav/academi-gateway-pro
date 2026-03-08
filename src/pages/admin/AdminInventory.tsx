import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Plus, Package, AlertTriangle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const labEquipment = [
  { id: 1, name: "Oscilloscope", location: "Electronics Lab", qty: 15, working: 14, condition: "Good" },
  { id: 2, name: "Microscope", location: "Biology Lab", qty: 20, working: 18, condition: "Fair" },
  { id: 3, name: "CNC Machine", location: "Workshop", qty: 3, working: 3, condition: "Good" },
  { id: 4, name: "3D Printer", location: "Design Lab", qty: 5, working: 4, condition: "Fair" },
];

const itAssets = [
  { id: 1, name: "Desktop PCs", location: "Computer Lab 1", qty: 60, working: 58, assigned: "CS Dept" },
  { id: 2, name: "Laptops (Staff)", location: "Admin Office", qty: 30, working: 30, assigned: "All Depts" },
  { id: 3, name: "Projectors", location: "Various", qty: 25, working: 23, assigned: "Classrooms" },
  { id: 4, name: "Printers", location: "Various", qty: 12, working: 11, assigned: "Offices" },
];

const furniture = [
  { id: 1, name: "Student Desks", location: "Classrooms", qty: 500, condition: "Good", lastAudit: "2026-01-15" },
  { id: 2, name: "Chairs", location: "Classrooms", qty: 520, condition: "Good", lastAudit: "2026-01-15" },
  { id: 3, name: "Lab Stools", location: "Labs", qty: 120, condition: "Fair", lastAudit: "2025-12-20" },
  { id: 4, name: "Office Desks", location: "Offices", qty: 80, condition: "Good", lastAudit: "2026-02-01" },
];

const AdminInventory = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="font-display text-2xl font-bold">Inventory & Assets</h1>
      <Button><Plus className="h-4 w-4 mr-1" /> Add Item</Button>
    </div>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {[{ label: "Total Items", value: "870" }, { label: "Categories", value: "12" }, { label: "Needs Repair", value: "9" }, { label: "Last Audit", value: "Feb 2026" }].map((s, i) => (
        <Card key={i}><CardContent className="p-4"><Package className="h-5 w-5 text-accent mb-2" /><p className="text-lg font-bold">{s.value}</p><p className="text-xs text-muted-foreground">{s.label}</p></CardContent></Card>
      ))}
    </div>
    <Tabs defaultValue="lab">
      <TabsList><TabsTrigger value="lab">Lab Equipment</TabsTrigger><TabsTrigger value="it">IT Assets</TabsTrigger><TabsTrigger value="furniture">Furniture</TabsTrigger></TabsList>
      <TabsContent value="lab">
        <Card><CardContent className="pt-6">
          <Table>
            <TableHeader><TableRow><TableHead>Equipment</TableHead><TableHead>Location</TableHead><TableHead>Qty</TableHead><TableHead>Working</TableHead><TableHead>Condition</TableHead></TableRow></TableHeader>
            <TableBody>{labEquipment.map(e => (
              <TableRow key={e.id}><TableCell className="font-medium">{e.name}</TableCell><TableCell>{e.location}</TableCell><TableCell>{e.qty}</TableCell><TableCell>{e.working}/{e.qty}</TableCell><TableCell><Badge variant={e.condition === "Good" ? "secondary" : "outline"}>{e.condition}</Badge></TableCell></TableRow>
            ))}</TableBody>
          </Table>
        </CardContent></Card>
      </TabsContent>
      <TabsContent value="it">
        <Card><CardContent className="pt-6">
          <Table>
            <TableHeader><TableRow><TableHead>Asset</TableHead><TableHead>Location</TableHead><TableHead>Qty</TableHead><TableHead>Working</TableHead><TableHead>Assigned To</TableHead></TableRow></TableHeader>
            <TableBody>{itAssets.map(a => (
              <TableRow key={a.id}><TableCell className="font-medium">{a.name}</TableCell><TableCell>{a.location}</TableCell><TableCell>{a.qty}</TableCell><TableCell>{a.working}/{a.qty}</TableCell><TableCell>{a.assigned}</TableCell></TableRow>
            ))}</TableBody>
          </Table>
        </CardContent></Card>
      </TabsContent>
      <TabsContent value="furniture">
        <Card><CardContent className="pt-6">
          <Table>
            <TableHeader><TableRow><TableHead>Item</TableHead><TableHead>Location</TableHead><TableHead>Qty</TableHead><TableHead>Condition</TableHead><TableHead>Last Audit</TableHead></TableRow></TableHeader>
            <TableBody>{furniture.map(f => (
              <TableRow key={f.id}><TableCell className="font-medium">{f.name}</TableCell><TableCell>{f.location}</TableCell><TableCell>{f.qty}</TableCell><TableCell><Badge variant={f.condition === "Good" ? "secondary" : "outline"}>{f.condition}</Badge></TableCell><TableCell>{f.lastAudit}</TableCell></TableRow>
            ))}</TableBody>
          </Table>
        </CardContent></Card>
      </TabsContent>
    </Tabs>
  </div>
);

export default AdminInventory;

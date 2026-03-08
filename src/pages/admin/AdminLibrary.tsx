import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Search, BookOpen, Users, AlertTriangle } from "lucide-react";
import { useState } from "react";

const books = [
  { id: 1, title: "Introduction to Algorithms", author: "Cormen et al.", isbn: "978-0262033848", copies: 15, available: 8, category: "Computer Science" },
  { id: 2, title: "Engineering Mathematics", author: "B.S. Grewal", isbn: "978-8174091234", copies: 20, available: 12, category: "Mathematics" },
  { id: 3, title: "Physics for Scientists", author: "Serway & Jewett", isbn: "978-1133947271", copies: 10, available: 3, category: "Physics" },
  { id: 4, title: "Principles of Management", author: "P.C. Tripathi", isbn: "978-0070680128", copies: 12, available: 9, category: "Business" },
  { id: 5, title: "Digital Electronics", author: "Morris Mano", isbn: "978-0132774208", copies: 18, available: 5, category: "Electronics" },
];

const issued = [
  { id: 1, book: "Introduction to Algorithms", student: "Raj Kumar (CS-A)", issueDate: "2026-02-20", dueDate: "2026-03-06", status: "Overdue" },
  { id: 2, book: "Engineering Mathematics", student: "Priya Sharma (ME-A)", issueDate: "2026-03-01", dueDate: "2026-03-15", status: "Active" },
  { id: 3, book: "Physics for Scientists", student: "John Park (PH-A)", issueDate: "2026-03-05", dueDate: "2026-03-19", status: "Active" },
  { id: 4, book: "Digital Electronics", student: "Sarah Lee (EC-A)", issueDate: "2026-02-15", dueDate: "2026-03-01", status: "Overdue" },
];

const AdminLibrary = () => {
  const [search, setSearch] = useState("");
  const filtered = books.filter(b => b.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="font-display text-2xl font-bold">Library Management</h1>
        <Button><Plus className="h-4 w-4 mr-1" /> Add Book</Button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[{ label: "Total Books", value: "12,450", icon: BookOpen }, { label: "Issued", value: "340", icon: Users }, { label: "Overdue", value: "18", icon: AlertTriangle }, { label: "Digital Resources", value: "2,100", icon: BookOpen }].map((s, i) => (
          <Card key={i}><CardContent className="p-4"><s.icon className="h-5 w-5 text-accent mb-2" /><p className="text-lg font-bold">{s.value}</p><p className="text-xs text-muted-foreground">{s.label}</p></CardContent></Card>
        ))}
      </div>
      <Tabs defaultValue="catalog">
        <TabsList><TabsTrigger value="catalog">Book Catalog</TabsTrigger><TabsTrigger value="issued">Issued Books</TabsTrigger></TabsList>
        <TabsContent value="catalog">
          <Card>
            <CardHeader className="flex-row items-center justify-between space-y-0"><CardTitle>Books</CardTitle>
              <div className="relative w-64"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /><Input className="pl-9" placeholder="Search books..." value={search} onChange={e => setSearch(e.target.value)} /></div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow><TableHead>Title</TableHead><TableHead>Author</TableHead><TableHead>ISBN</TableHead><TableHead>Copies</TableHead><TableHead>Available</TableHead><TableHead>Category</TableHead></TableRow></TableHeader>
                <TableBody>{filtered.map(b => (
                  <TableRow key={b.id}><TableCell className="font-medium">{b.title}</TableCell><TableCell>{b.author}</TableCell><TableCell className="text-xs">{b.isbn}</TableCell><TableCell>{b.copies}</TableCell><TableCell><Badge variant={b.available < 5 ? "destructive" : "secondary"}>{b.available}</Badge></TableCell><TableCell>{b.category}</TableCell></TableRow>
                ))}</TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="issued">
          <Card><CardContent className="pt-6">
            <Table>
              <TableHeader><TableRow><TableHead>Book</TableHead><TableHead>Student</TableHead><TableHead>Issue Date</TableHead><TableHead>Due Date</TableHead><TableHead>Status</TableHead><TableHead>Actions</TableHead></TableRow></TableHeader>
              <TableBody>{issued.map(i => (
                <TableRow key={i.id}><TableCell className="font-medium">{i.book}</TableCell><TableCell>{i.student}</TableCell><TableCell>{i.issueDate}</TableCell><TableCell>{i.dueDate}</TableCell>
                  <TableCell><Badge variant={i.status === "Overdue" ? "destructive" : "secondary"}>{i.status}</Badge></TableCell>
                  <TableCell><Button size="sm" variant="ghost">Return</Button></TableCell>
                </TableRow>
              ))}</TableBody>
            </Table>
          </CardContent></Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminLibrary;

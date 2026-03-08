import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const books = [
  { id: 1, title: "Introduction to Algorithms", author: "Cormen et al.", available: 8, status: "Available" },
  { id: 2, title: "Design Patterns", author: "GoF", available: 3, status: "Available" },
  { id: 3, title: "Clean Code", author: "Robert Martin", available: 0, status: "All Issued" },
  { id: 4, title: "Database System Concepts", author: "Silberschatz", available: 5, status: "Available" },
];

const myIssued = [
  { title: "Compilers: Principles & Techniques", issueDate: "2026-02-20", dueDate: "2026-03-20", status: "Active" },
  { title: "Operating System Concepts", issueDate: "2026-01-15", dueDate: "2026-02-15", status: "Returned" },
];

const TeacherLibrary = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-bold">Library</h1>
      <Card>
        <CardHeader className="flex-row items-center justify-between space-y-0"><CardTitle>Book Catalog</CardTitle>
          <div className="relative w-64"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /><Input className="pl-9" placeholder="Search books..." value={search} onChange={e => setSearch(e.target.value)} /></div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader><TableRow><TableHead>Title</TableHead><TableHead>Author</TableHead><TableHead>Available</TableHead><TableHead>Status</TableHead><TableHead>Actions</TableHead></TableRow></TableHeader>
            <TableBody>{books.filter(b => b.title.toLowerCase().includes(search.toLowerCase())).map(b => (
              <TableRow key={b.id}><TableCell className="font-medium">{b.title}</TableCell><TableCell>{b.author}</TableCell><TableCell>{b.available}</TableCell>
                <TableCell><Badge variant={b.available > 0 ? "secondary" : "destructive"}>{b.status}</Badge></TableCell>
                <TableCell><Button size="sm" variant="ghost" disabled={b.available === 0}>Request</Button></TableCell>
              </TableRow>
            ))}</TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>My Issued Books</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader><TableRow><TableHead>Title</TableHead><TableHead>Issue Date</TableHead><TableHead>Due Date</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
            <TableBody>{myIssued.map((b, i) => (
              <TableRow key={i}><TableCell className="font-medium">{b.title}</TableCell><TableCell>{b.issueDate}</TableCell><TableCell>{b.dueDate}</TableCell>
                <TableCell><Badge variant={b.status === "Active" ? "default" : "secondary"}>{b.status}</Badge></TableCell>
              </TableRow>
            ))}</TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeacherLibrary;

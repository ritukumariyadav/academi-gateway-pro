import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, AlertTriangle } from "lucide-react";

const borrowedBooks = [
  { id: 1, title: "Introduction to Algorithms", author: "Cormen et al.", borrowed: "Feb 20, 2026", due: "Mar 20, 2026", status: "active" },
  { id: 2, title: "Computer Networking: A Top-Down Approach", author: "Kurose & Ross", borrowed: "Mar 1, 2026", due: "Mar 31, 2026", status: "active" },
  { id: 3, title: "Digital Design", author: "Morris Mano", borrowed: "Feb 10, 2026", due: "Mar 10, 2026", status: "overdue" },
];

const history = [
  { title: "Clean Code", author: "Robert C. Martin", borrowed: "Jan 5, 2026", returned: "Feb 2, 2026" },
  { title: "Design Patterns", author: "Gang of Four", borrowed: "Dec 1, 2025", returned: "Jan 3, 2026" },
  { title: "The Pragmatic Programmer", author: "Hunt & Thomas", borrowed: "Nov 10, 2025", returned: "Dec 8, 2025" },
];

const StudentLibrary = () => (
  <div className="space-y-6">
    <h1 className="font-display text-2xl font-bold">Library</h1>
    <div className="grid sm:grid-cols-3 gap-4">
      <Card><CardContent className="p-4 flex items-center gap-3">
        <BookOpen className="h-8 w-8 text-accent" />
        <div><p className="text-2xl font-bold">3</p><p className="text-sm text-muted-foreground">Books Borrowed</p></div>
      </CardContent></Card>
      <Card><CardContent className="p-4 flex items-center gap-3">
        <Clock className="h-8 w-8 text-primary" />
        <div><p className="text-2xl font-bold">12</p><p className="text-sm text-muted-foreground">Total Borrows (Year)</p></div>
      </CardContent></Card>
      <Card><CardContent className="p-4 flex items-center gap-3">
        <AlertTriangle className="h-8 w-8 text-destructive" />
        <div><p className="text-2xl font-bold">1</p><p className="text-sm text-muted-foreground">Overdue</p></div>
      </CardContent></Card>
    </div>

    <Card>
      <CardHeader><CardTitle>Currently Borrowed</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Book</TableHead><TableHead>Author</TableHead><TableHead>Borrowed</TableHead><TableHead>Due</TableHead><TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {borrowedBooks.map((b) => (
              <TableRow key={b.id}>
                <TableCell className="font-medium">{b.title}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{b.author}</TableCell>
                <TableCell className="text-sm">{b.borrowed}</TableCell>
                <TableCell className="text-sm">{b.due}</TableCell>
                <TableCell><Badge variant={b.status === "overdue" ? "destructive" : "default"} className="capitalize">{b.status}</Badge></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>

    <Card>
      <CardHeader><CardTitle>Borrowing History</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Book</TableHead><TableHead>Author</TableHead><TableHead>Borrowed</TableHead><TableHead>Returned</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {history.map((b, i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{b.title}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{b.author}</TableCell>
                <TableCell className="text-sm">{b.borrowed}</TableCell>
                <TableCell className="text-sm">{b.returned}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </div>
);

export default StudentLibrary;

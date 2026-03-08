import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Plus, Save, BookOpen } from "lucide-react";
import { toast } from "sonner";

type SyllabusItem = {
  id: number;
  subject: string;
  code: string;
  units: { title: string; topics: string }[];
  status: string;
};

const initialSyllabus: SyllabusItem[] = [
  { id: 1, subject: "Data Structures", code: "CS201", units: [{ title: "Arrays & Linked Lists", topics: "Static arrays, Dynamic arrays, Singly/Doubly linked lists" }, { title: "Trees & Graphs", topics: "BST, AVL, BFS, DFS" }], status: "published" },
  { id: 2, subject: "Algorithm Design", code: "CS301", units: [{ title: "Divide & Conquer", topics: "Merge sort, Quick sort" }, { title: "Dynamic Programming", topics: "Memoization, Tabulation, Knapsack" }], status: "published" },
  { id: 3, subject: "AI Fundamentals", code: "CS401", units: [{ title: "Introduction to AI", topics: "History, Turing Test, Agents" }], status: "draft" },
];

const TeacherSyllabus = () => {
  const [syllabus, setSyllabus] = useState(initialSyllabus);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ subject: "", code: "" });
  const [units, setUnits] = useState([{ title: "", topics: "" }]);

  const addUnit = () => setUnits([...units, { title: "", topics: "" }]);
  const updateUnit = (idx: number, field: string, value: string) => {
    const updated = [...units];
    updated[idx] = { ...updated[idx], [field]: value };
    setUnits(updated);
  };

  const handleSave = () => {
    setSyllabus([...syllabus, {
      id: syllabus.length + 1,
      subject: form.subject,
      code: form.code,
      units: units.filter((u) => u.title),
      status: "draft",
    }]);
    toast.success("Syllabus added successfully!");
    setOpen(false);
    setForm({ subject: "", code: "" });
    setUnits([{ title: "", topics: "" }]);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="font-display text-2xl font-bold">Course Syllabus</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button><Plus className="h-4 w-4 mr-1" /> Add Syllabus</Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto">
            <DialogHeader><DialogTitle>Add Course Syllabus</DialogTitle></DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Subject Name</Label>
                  <Input placeholder="e.g. Data Structures" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label>Course Code</Label>
                  <Input placeholder="e.g. CS201" value={form.code} onChange={(e) => setForm({ ...form, code: e.target.value })} />
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label className="text-base font-semibold">Units</Label>
                  <Button type="button" size="sm" variant="outline" onClick={addUnit}><Plus className="h-3 w-3 mr-1" /> Add Unit</Button>
                </div>
                {units.map((u, idx) => (
                  <Card key={idx}><CardContent className="p-3 space-y-2">
                    <Input placeholder={`Unit ${idx + 1} Title`} value={u.title} onChange={(e) => updateUnit(idx, "title", e.target.value)} />
                    <Textarea placeholder="Topics (comma-separated)" rows={2} value={u.topics} onChange={(e) => updateUnit(idx, "topics", e.target.value)} />
                  </CardContent></Card>
                ))}
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>
              <Button onClick={handleSave} disabled={!form.subject || !form.code}><Save className="h-4 w-4 mr-1" /> Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {syllabus.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center"><BookOpen className="h-5 w-5 text-accent" /></div>
                  <div>
                    <CardTitle className="text-lg">{course.subject}</CardTitle>
                    <p className="text-sm text-muted-foreground">{course.code}</p>
                  </div>
                </div>
                <Badge variant={course.status === "published" ? "default" : "secondary"} className="capitalize">{course.status}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <Accordion type="multiple" className="w-full">
                {course.units.map((unit, idx) => (
                  <AccordionItem key={idx} value={`${course.id}-${idx}`}>
                    <AccordionTrigger className="text-sm font-medium">{unit.title}</AccordionTrigger>
                    <AccordionContent><p className="text-sm text-muted-foreground">{unit.topics}</p></AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TeacherSyllabus;

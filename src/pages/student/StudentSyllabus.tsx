import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen } from "lucide-react";

const syllabusData = [
  {
    subject: "Data Structures",
    code: "CS201",
    semester: "Sem 3",
    units: [
      { title: "Unit 1: Arrays & Linked Lists", topics: ["Static & Dynamic Arrays", "Singly Linked Lists", "Doubly Linked Lists", "Circular Linked Lists"] },
      { title: "Unit 2: Stacks & Queues", topics: ["Stack operations", "Queue operations", "Priority Queue", "Deque"] },
      { title: "Unit 3: Trees", topics: ["Binary Trees", "BST", "AVL Trees", "Heap"] },
      { title: "Unit 4: Graphs", topics: ["BFS", "DFS", "Shortest Path", "Minimum Spanning Tree"] },
    ],
  },
  {
    subject: "Computer Networks",
    code: "CS202",
    semester: "Sem 3",
    units: [
      { title: "Unit 1: OSI Model", topics: ["7 Layers", "Protocols", "TCP/IP Model"] },
      { title: "Unit 2: Data Link Layer", topics: ["Error Detection", "Flow Control", "MAC protocols"] },
      { title: "Unit 3: Network Layer", topics: ["IP Addressing", "Routing Algorithms", "Subnetting"] },
    ],
  },
  {
    subject: "Discrete Mathematics",
    code: "MA201",
    semester: "Sem 3",
    units: [
      { title: "Unit 1: Logic & Proofs", topics: ["Propositional Logic", "Predicate Logic", "Proof Techniques"] },
      { title: "Unit 2: Set Theory & Relations", topics: ["Sets", "Relations", "Functions", "Equivalence"] },
      { title: "Unit 3: Graph Theory", topics: ["Euler Paths", "Hamilton Paths", "Planar Graphs", "Coloring"] },
    ],
  },
];

const StudentSyllabus = () => (
  <div className="space-y-6">
    <h1 className="font-display text-2xl font-bold">Course Syllabus</h1>
    <div className="grid gap-4">
      {syllabusData.map((course) => (
        <Card key={course.code}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <CardTitle className="text-lg">{course.subject}</CardTitle>
                  <p className="text-sm text-muted-foreground">{course.code} • {course.semester}</p>
                </div>
              </div>
              <Badge>{course.units.length} Units</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <Accordion type="multiple" className="w-full">
              {course.units.map((unit, idx) => (
                <AccordionItem key={idx} value={`${course.code}-unit-${idx}`}>
                  <AccordionTrigger className="text-sm font-medium">{unit.title}</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {unit.topics.map((topic, i) => <li key={i}>{topic}</li>)}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default StudentSyllabus;

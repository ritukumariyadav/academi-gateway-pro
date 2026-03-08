import MessengerChat, { ChatContact, ChatMessage } from "@/components/chat/MessengerChat";

const contacts: ChatContact[] = [
  { id: "t1", name: "Dr. Sarah Smith", initials: "SS", role: "HOD — Computer Science", lastMessage: "Lab equipment has been approved", time: "2m", unread: 3, online: true },
  { id: "t2", name: "Prof. James Wilson", initials: "JW", role: "Mathematics Dept.", lastMessage: "Exam papers are ready for review", time: "15m", unread: 1, online: true },
  { id: "t3", name: "Ms. Priya Sharma", initials: "PS", role: "Hindi Faculty", lastMessage: "Sent the updated syllabus", time: "1h", unread: 0, online: false },
  { id: "s1", name: "Raj Kumar", initials: "RK", role: "Student — BCA 3rd Year", lastMessage: "Sir, regarding my fee receipt...", time: "2h", unread: 2, online: true },
  { id: "p1", name: "Mrs. Anjali Gupta", initials: "AG", role: "Parent of Neha Gupta", lastMessage: "Thank you for the update", time: "3h", unread: 0, online: false },
  { id: "t4", name: "Mr. Kumar Singh", initials: "KS", role: "Transport Manager", lastMessage: "Route 3 schedule updated", time: "5h", unread: 0, online: true },
  { id: "t5", name: "Dr. Emily Brown", initials: "EB", role: "Physics Dept.", lastMessage: "Meeting rescheduled to 4 PM", time: "1d", unread: 0, online: false },
  { id: "s2", name: "Anita Verma", initials: "AV", role: "Student — MBA 1st Year", lastMessage: "Assignment submitted, please check", time: "1d", unread: 0, online: false },
];

const messagesMap: Record<string, ChatMessage[]> = {
  t1: [
    { id: "1", senderId: "t1", text: "Good morning! I wanted to discuss the lab equipment budget for next semester.", time: "9:00 AM", status: "read" },
    { id: "2", senderId: "admin", text: "Sure, please send me the detailed requirement list.", time: "9:05 AM", status: "read" },
    { id: "3", senderId: "t1", text: "I've shared the document via email. We need 5 new oscilloscopes and 3 spectrum analyzers.", time: "9:10 AM", status: "read" },
    { id: "4", senderId: "admin", text: "Got it. I'll review with the finance team and approve by tomorrow.", time: "9:15 AM", status: "read" },
    { id: "5", senderId: "t1", text: "That would be great. Also, the projector in Lab 3 needs replacement.", time: "9:20 AM", status: "read" },
    { id: "6", senderId: "admin", text: "I'll add that to the maintenance request. Anything else?", time: "9:25 AM", status: "read" },
    { id: "7", senderId: "t1", text: "Lab equipment has been approved", time: "10:30 AM", status: "read" },
  ],
  t2: [
    { id: "1", senderId: "t2", text: "The midterm exam papers for Calculus II are ready.", time: "11:00 AM", status: "read" },
    { id: "2", senderId: "admin", text: "Great! Please upload them to the exam portal by Thursday.", time: "11:10 AM", status: "read" },
    { id: "3", senderId: "t2", text: "Exam papers are ready for review", time: "11:15 AM", status: "read" },
  ],
  s1: [
    { id: "1", senderId: "s1", text: "Good afternoon sir. I paid my tuition fee online but haven't received a receipt.", time: "2:00 PM", status: "read" },
    { id: "2", senderId: "admin", text: "Let me check with the accounts department. What's your student ID?", time: "2:10 PM", status: "read" },
    { id: "3", senderId: "s1", text: "It's BCA-2023-045. The transaction was done yesterday.", time: "2:12 PM", status: "read" },
    { id: "4", senderId: "s1", text: "Sir, regarding my fee receipt...", time: "2:30 PM", status: "read" },
  ],
};

const AdminMessaging = () => (
  <MessengerChat
    contacts={contacts}
    currentUserId="admin"
    currentUserName="Admin"
    currentUserInitials="AD"
    getMessages={(contactId) => messagesMap[contactId] || []}
  />
);

export default AdminMessaging;
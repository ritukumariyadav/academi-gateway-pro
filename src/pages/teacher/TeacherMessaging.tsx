import MessengerChat, { ChatContact, ChatMessage } from "@/components/chat/MessengerChat";

const contacts: ChatContact[] = [
  // Group chats
  {
    id: "g-bca3", name: "BCA 3rd Year — Class", initials: "B3", role: "Class Group", lastMessage: "You: Assignment 4 due date extended to Friday", time: "20m", unread: 0, online: false,
    isGroup: true, memberCount: 32,
    members: [
      { id: "teacher", name: "Dr. Smith", initials: "DS", online: true },
      { id: "s1", name: "Raj Kumar", initials: "RK", online: true },
      { id: "s2", name: "Priya Patel", initials: "PP", online: true },
      { id: "s3", name: "Ankit Sharma", initials: "AS", online: false },
      { id: "s4", name: "Neha Gupta", initials: "NG", online: true },
      { id: "s5", name: "Rohan Mehta", initials: "RM", online: false },
    ],
  },
  {
    id: "g-cs-faculty", name: "CS Faculty Group", initials: "CF", role: "Department", lastMessage: "Dr. Brown: Syllabus revision meeting at 3 PM", time: "45m", unread: 3, online: false,
    isGroup: true, memberCount: 8,
    members: [
      { id: "teacher", name: "Dr. Smith", initials: "DS", online: true },
      { id: "t2", name: "Mr. Rahul Verma", initials: "RV", online: true },
      { id: "t3", name: "Ms. Neha Kapoor", initials: "NK", online: false },
      { id: "t4", name: "Dr. Emily Brown", initials: "EB", online: true },
    ],
  },
  {
    id: "g-exam-committee", name: "Exam Committee", initials: "EC", role: "Committee", lastMessage: "Admin: Exam halls confirmed", time: "2h", unread: 0, online: false,
    isGroup: true, memberCount: 6,
    members: [
      { id: "teacher", name: "Dr. Smith", initials: "DS", online: true },
      { id: "admin", name: "Admin Office", initials: "AO", online: true },
      { id: "t5", name: "Prof. James Wilson", initials: "JW", online: false },
    ],
  },
  // Direct chats
  { id: "admin", name: "Admin Office", initials: "AO", role: "Administration", lastMessage: "Exam duty roster has been shared", time: "30m", unread: 2, online: true },
  { id: "s1", name: "Raj Kumar", initials: "RK", role: "Student — BCA 3rd Year", lastMessage: "Sir, regarding assignment 3...", time: "1h", unread: 1, online: true },
  { id: "s2", name: "Priya Patel", initials: "PP", role: "Student — BCA 3rd Year", lastMessage: "Thank you for the feedback!", time: "2h", unread: 0, online: true },
  { id: "t1", name: "Dr. Emily Brown", initials: "EB", role: "HOD — Physics Dept.", lastMessage: "Department meeting at 3 PM", time: "3h", unread: 0, online: false },
  { id: "p1", name: "Mrs. Sharma", initials: "MS", role: "Parent of Rohan Sharma", lastMessage: "How is Rohan performing?", time: "5h", unread: 1, online: false },
  { id: "t2r", name: "Prof. James Wilson", initials: "JW", role: "Mathematics Dept.", lastMessage: "Shared the semester plan", time: "1d", unread: 0, online: false },
];

const messagesMap: Record<string, ChatMessage[]> = {
  "g-bca3": [
    { id: "1", senderId: "teacher", senderName: "Dr. Smith", text: "Good morning class! 📚 A few important announcements:", time: "8:00 AM", status: "read" },
    { id: "2", senderId: "teacher", senderName: "Dr. Smith", text: "1. Assignment 4 on Data Structures is due this Friday.\n2. Lab session tomorrow is rescheduled to 3-5 PM.\n3. Mid-semester exam dates will be announced this week.", time: "8:01 AM", status: "read" },
    { id: "3", senderId: "s1", senderName: "Raj Kumar", text: "Good morning sir! Can we get an extension on Assignment 4? Many of us are still working on Q3.", time: "8:15 AM", status: "read" },
    { id: "4", senderId: "s4", senderName: "Neha Gupta", text: "Yes sir, the recursion problem is quite challenging 😅", time: "8:20 AM", status: "read" },
    { id: "5", senderId: "teacher", senderName: "Dr. Smith", text: "Alright, I'll extend the deadline to next Friday. But no further extensions after that!", time: "8:30 AM", status: "read" },
    { id: "6", senderId: "s2", senderName: "Priya Patel", text: "Thank you sir! 🙏", time: "8:32 AM", status: "read" },
    { id: "7", senderId: "s5", senderName: "Rohan Mehta", text: "Thanks a lot sir!", time: "8:35 AM", status: "read" },
    { id: "8", senderId: "teacher", senderName: "Dr. Smith", text: "Assignment 4 due date extended to Friday", time: "8:40 AM", status: "read" },
  ],
  "g-cs-faculty": [
    { id: "1", senderId: "t4", senderName: "Dr. Emily Brown", text: "Hi team, we need to finalize the revised syllabus for next semester.", time: "10:00 AM", status: "read" },
    { id: "2", senderId: "teacher", senderName: "Dr. Smith", text: "I've updated the Data Structures module. Shared the doc on Drive.", time: "10:15 AM", status: "read" },
    { id: "3", senderId: "t2", senderName: "Mr. Rahul Verma", text: "The web development curriculum needs an update too. React 19 is out.", time: "10:30 AM", status: "read" },
    { id: "4", senderId: "t4", senderName: "Dr. Emily Brown", text: "Syllabus revision meeting at 3 PM", time: "10:45 AM", status: "read" },
  ],
  "g-exam-committee": [
    { id: "1", senderId: "admin", senderName: "Admin Office", text: "Exam halls A1, A2, and B1 are confirmed for the mid-semester exams.", time: "11:00 AM", status: "read" },
    { id: "2", senderId: "teacher", senderName: "Dr. Smith", text: "Great. I'll prepare the seating arrangement for CS courses.", time: "11:15 AM", status: "read" },
    { id: "3", senderId: "admin", senderName: "Admin Office", text: "Exam halls confirmed", time: "11:30 AM", status: "read" },
  ],
  admin: [
    { id: "1", senderId: "admin", text: "Good morning! Please check the exam duty roster for next week.", time: "8:30 AM", status: "read" },
    { id: "2", senderId: "teacher", text: "Received. I see I'm assigned to Hall 3 on Monday and Wednesday.", time: "8:45 AM", status: "read" },
    { id: "3", senderId: "admin", text: "Exam duty roster has been shared", time: "9:00 AM", status: "read" },
  ],
  s1: [
    { id: "1", senderId: "s1", text: "Good afternoon sir. I have a doubt in Assignment 3, Question 5.", time: "2:00 PM", status: "read" },
    { id: "2", senderId: "teacher", text: "Sure, which part are you stuck on?", time: "2:15 PM", status: "read" },
    { id: "3", senderId: "s1", text: "The part about binary tree traversal.", time: "2:20 PM", status: "read" },
    { id: "4", senderId: "teacher", text: "In inorder traversal, you visit left subtree first, then root, then right subtree. Try implementing it recursively first.", time: "2:30 PM", status: "read" },
    { id: "5", senderId: "s1", text: "Sir, regarding assignment 3...", time: "3:00 PM", status: "read" },
  ],
  p1: [
    { id: "1", senderId: "p1", text: "Hello sir, I wanted to ask about Rohan's recent test performance.", time: "4:00 PM", status: "read" },
    { id: "2", senderId: "teacher", text: "Hello Mrs. Sharma. Rohan scored 78/100 in the mid-term.", time: "4:15 PM", status: "read" },
    { id: "3", senderId: "p1", text: "How is Rohan performing?", time: "4:20 PM", status: "read" },
  ],
};

const TeacherMessaging = () => (
  <MessengerChat
    contacts={contacts}
    currentUserId="teacher"
    currentUserName="Dr. Smith"
    currentUserInitials="DS"
    getMessages={(contactId) => messagesMap[contactId] || []}
  />
);

export default TeacherMessaging;
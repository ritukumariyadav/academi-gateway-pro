import MessengerChat, { ChatContact, ChatMessage } from "@/components/chat/MessengerChat";

const contacts: ChatContact[] = [
  // Group chats
  {
    id: "g-bca3", name: "BCA 3rd Year — Class", initials: "B3", role: "Class Group", lastMessage: "Dr. Smith: Assignment 4 due date extended to Friday", time: "20m", unread: 1, online: false,
    isGroup: true, memberCount: 32,
    members: [
      { id: "t1", name: "Dr. Smith", initials: "DS", online: true },
      { id: "student", name: "Raj Kumar", initials: "RK", online: true },
      { id: "s2", name: "Priya Patel", initials: "PP", online: true },
      { id: "s3", name: "Ankit Sharma", initials: "AS", online: false },
      { id: "s4", name: "Neha Gupta", initials: "NG", online: true },
    ],
  },
  {
    id: "g-study", name: "Study Group — DSA", initials: "SG", role: "Study Group", lastMessage: "Anita: Let's meet in the library at 4 PM", time: "1h", unread: 5, online: false,
    isGroup: true, memberCount: 6,
    members: [
      { id: "student", name: "Raj Kumar", initials: "RK", online: true },
      { id: "s1", name: "Anita Verma", initials: "AV", online: true },
      { id: "s5", name: "Rohan Mehta", initials: "RM", online: false },
      { id: "s6", name: "Deepak Jain", initials: "DJ", online: true },
    ],
  },
  // Direct chats
  { id: "t1", name: "Dr. Sarah Smith", initials: "SS", role: "Computer Science Faculty", lastMessage: "Good work on assignment 3! 👍", time: "1h", unread: 1, online: true },
  { id: "admin", name: "Admin Office", initials: "AO", role: "Administration", lastMessage: "Your ID card is ready for pickup", time: "2h", unread: 1, online: true },
  { id: "t2", name: "Prof. James Wilson", initials: "JW", role: "Mathematics Faculty", lastMessage: "Don't forget the quiz tomorrow", time: "3h", unread: 0, online: false },
  { id: "s1", name: "Anita Verma", initials: "AV", role: "Classmate — BCA 3rd Year", lastMessage: "Did you complete the lab work?", time: "4h", unread: 2, online: true },
  { id: "s2r", name: "Rohan Mehta", initials: "RM", role: "Classmate — BCA 3rd Year", lastMessage: "Let's study together for finals", time: "1d", unread: 0, online: false },
  { id: "lib", name: "Library Desk", initials: "LB", role: "Library Services", lastMessage: "Your book return is overdue", time: "2d", unread: 0, online: false },
];

const messagesMap: Record<string, ChatMessage[]> = {
  "g-bca3": [
    { id: "1", senderId: "t1", senderName: "Dr. Smith", text: "Good morning class! Assignment 4 on Data Structures is due this Friday.", time: "8:00 AM", status: "read" },
    { id: "2", senderId: "student", senderName: "Raj Kumar", text: "Sir, can we get an extension? Q3 is quite tough.", time: "8:15 AM", status: "read" },
    { id: "3", senderId: "s4", senderName: "Neha Gupta", text: "Yes sir, the recursion problem is really challenging 😅", time: "8:20 AM", status: "read" },
    { id: "4", senderId: "t1", senderName: "Dr. Smith", text: "Alright, extended to next Friday. No further extensions!", time: "8:30 AM", status: "read" },
    { id: "5", senderId: "s2", senderName: "Priya Patel", text: "Thank you sir! 🙏", time: "8:32 AM", status: "read" },
    { id: "6", senderId: "t1", senderName: "Dr. Smith", text: "Assignment 4 due date extended to Friday", time: "8:40 AM", status: "read" },
  ],
  "g-study": [
    { id: "1", senderId: "s1", senderName: "Anita Verma", text: "Hey guys, should we revise binary trees today?", time: "1:00 PM", status: "read" },
    { id: "2", senderId: "student", senderName: "Raj Kumar", text: "Yes! I need help with AVL tree rotations.", time: "1:10 PM", status: "read" },
    { id: "3", senderId: "s6", senderName: "Deepak Jain", text: "I can explain those. I just finished practicing them.", time: "1:15 PM", status: "read" },
    { id: "4", senderId: "s1", senderName: "Anita Verma", text: "Let's meet in the library at 4 PM", time: "1:30 PM", status: "read" },
  ],
  t1: [
    { id: "1", senderId: "student", text: "Good morning ma'am. I've submitted Assignment 3 on the portal.", time: "10:00 AM", status: "read" },
    { id: "2", senderId: "t1", text: "I received it. Let me review and share feedback.", time: "10:30 AM", status: "read" },
    { id: "3", senderId: "t1", text: "Your approach to the sorting algorithm was really creative!", time: "11:00 AM", status: "read" },
    { id: "4", senderId: "student", text: "Thank you ma'am! I spent a lot of time on the optimization part.", time: "11:05 AM", status: "read" },
    { id: "5", senderId: "t1", text: "Good work on assignment 3! 👍", time: "11:10 AM", status: "read" },
  ],
  admin: [
    { id: "1", senderId: "student", text: "Hello, I applied for a new ID card last week. Is it ready?", time: "1:00 PM", status: "read" },
    { id: "2", senderId: "admin", text: "Yes, your ID card is ready. Collect between 10 AM - 4 PM.", time: "1:30 PM", status: "read" },
    { id: "3", senderId: "admin", text: "Your ID card is ready for pickup", time: "1:35 PM", status: "read" },
  ],
  s1: [
    { id: "1", senderId: "s1", text: "Hey! Did you complete the lab work for tomorrow?", time: "5:00 PM", status: "read" },
    { id: "2", senderId: "student", text: "Almost done! Just the last two questions left.", time: "5:10 PM", status: "read" },
    { id: "3", senderId: "s1", text: "Did you complete the lab work?", time: "5:15 PM", status: "read" },
  ],
};

const StudentMessaging = () => (
  <MessengerChat
    contacts={contacts}
    currentUserId="student"
    currentUserName="Raj Kumar"
    currentUserInitials="RK"
    getMessages={(contactId) => messagesMap[contactId] || []}
  />
);

export default StudentMessaging;
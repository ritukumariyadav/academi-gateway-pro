import MessengerChat, { ChatContact, ChatMessage } from "@/components/chat/MessengerChat";

const contacts: ChatContact[] = [
  { id: "t1", name: "Dr. Sarah Smith", initials: "SS", role: "Computer Science Faculty", lastMessage: "Good work on assignment 3! 👍", time: "1h", unread: 1, online: true },
  { id: "admin", name: "Admin Office", initials: "AO", role: "Administration", lastMessage: "Your ID card is ready for pickup", time: "2h", unread: 1, online: true },
  { id: "t2", name: "Prof. James Wilson", initials: "JW", role: "Mathematics Faculty", lastMessage: "Don't forget the quiz tomorrow", time: "3h", unread: 0, online: false },
  { id: "s1", name: "Anita Verma", initials: "AV", role: "Classmate — BCA 3rd Year", lastMessage: "Did you complete the lab work?", time: "4h", unread: 2, online: true },
  { id: "s2", name: "Rohan Mehta", initials: "RM", role: "Classmate — BCA 3rd Year", lastMessage: "Let's study together for finals", time: "1d", unread: 0, online: false },
  { id: "lib", name: "Library Desk", initials: "LB", role: "Library Services", lastMessage: "Your book return is overdue", time: "2d", unread: 0, online: false },
];

const messagesMap: Record<string, ChatMessage[]> = {
  t1: [
    { id: "1", senderId: "student", text: "Good morning ma'am. I've submitted Assignment 3 on the portal.", time: "10:00 AM", status: "read" },
    { id: "2", senderId: "t1", text: "I received it. Let me review and share feedback.", time: "10:30 AM", status: "read" },
    { id: "3", senderId: "t1", text: "I've reviewed your assignment. Your approach to the sorting algorithm was really creative!", time: "11:00 AM", status: "read" },
    { id: "4", senderId: "student", text: "Thank you ma'am! I spent a lot of time on the optimization part.", time: "11:05 AM", status: "read" },
    { id: "5", senderId: "t1", text: "Good work on assignment 3! 👍", time: "11:10 AM", status: "read" },
  ],
  admin: [
    { id: "1", senderId: "student", text: "Hello, I applied for a new ID card last week. Is it ready?", time: "1:00 PM", status: "read" },
    { id: "2", senderId: "admin", text: "Yes, your ID card is ready. You can collect it from the admin office between 10 AM - 4 PM.", time: "1:30 PM", status: "read" },
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
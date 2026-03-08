import MessengerChat, { ChatContact, ChatMessage } from "@/components/chat/MessengerChat";

const contacts: ChatContact[] = [
  { id: "t1", name: "Dr. Sarah Smith", initials: "SS", role: "Class Teacher — Computer Science", lastMessage: "Raj has been performing well this semester", time: "1h", unread: 1, online: true },
  { id: "admin", name: "Admin Office", initials: "AO", role: "Administration", lastMessage: "Fee receipt has been generated", time: "3h", unread: 0, online: true },
  { id: "t2", name: "Prof. James Wilson", initials: "JW", role: "Mathematics Faculty", lastMessage: "Raj needs to focus more on calculus", time: "1d", unread: 0, online: false },
  { id: "t3", name: "Mr. Kumar Singh", initials: "KS", role: "Transport Coordinator", lastMessage: "Bus route timings updated for winter", time: "2d", unread: 0, online: false },
];

const messagesMap: Record<string, ChatMessage[]> = {
  t1: [
    { id: "1", senderId: "parent", text: "Hello Dr. Smith. How is Raj doing in his studies this month?", time: "10:00 AM", status: "read" },
    { id: "2", senderId: "t1", text: "Good morning! Raj has been very consistent this semester. He scored 85/100 in the last test.", time: "10:20 AM", status: "read" },
    { id: "3", senderId: "parent", text: "That's great to hear! Is he regular with assignments?", time: "10:25 AM", status: "read" },
    { id: "4", senderId: "t1", text: "Yes, all assignments are submitted on time. He's also actively participating in class discussions.", time: "10:30 AM", status: "read" },
    { id: "5", senderId: "parent", text: "Thank you so much for the update!", time: "10:35 AM", status: "read" },
    { id: "6", senderId: "t1", text: "Raj has been performing well this semester", time: "10:40 AM", status: "read" },
  ],
  admin: [
    { id: "1", senderId: "parent", text: "I made the fee payment online yesterday but haven't received a receipt.", time: "2:00 PM", status: "read" },
    { id: "2", senderId: "admin", text: "Let me check. Could you share the transaction reference number?", time: "2:15 PM", status: "read" },
    { id: "3", senderId: "parent", text: "It's TXN-2024-78923. Amount was ₹45,000.", time: "2:20 PM", status: "read" },
    { id: "4", senderId: "admin", text: "Fee receipt has been generated", time: "3:00 PM", status: "read" },
  ],
};

const ParentMessages = () => (
  <MessengerChat
    contacts={contacts}
    currentUserId="parent"
    currentUserName="Mr. Kumar"
    currentUserInitials="MK"
    getMessages={(contactId) => messagesMap[contactId] || []}
  />
);

export default ParentMessages;
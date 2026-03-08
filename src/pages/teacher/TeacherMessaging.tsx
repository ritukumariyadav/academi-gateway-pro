import MessengerChat, { ChatContact, ChatMessage } from "@/components/chat/MessengerChat";

const contacts: ChatContact[] = [
  { id: "admin", name: "Admin Office", initials: "AO", role: "Administration", lastMessage: "Exam duty roster has been shared", time: "30m", unread: 2, online: true },
  { id: "s1", name: "Raj Kumar", initials: "RK", role: "Student — BCA 3rd Year", lastMessage: "Sir, regarding assignment 3...", time: "1h", unread: 1, online: true },
  { id: "s2", name: "Priya Patel", initials: "PP", role: "Student — BCA 3rd Year", lastMessage: "Thank you for the feedback!", time: "2h", unread: 0, online: true },
  { id: "t1", name: "Dr. Emily Brown", initials: "EB", role: "HOD — Physics Dept.", lastMessage: "Department meeting at 3 PM", time: "3h", unread: 0, online: false },
  { id: "p1", name: "Mrs. Sharma", initials: "MS", role: "Parent of Rohan Sharma", lastMessage: "How is Rohan performing?", time: "5h", unread: 1, online: false },
  { id: "t2", name: "Prof. James Wilson", initials: "JW", role: "Mathematics Dept.", lastMessage: "Shared the semester plan", time: "1d", unread: 0, online: false },
];

const messagesMap: Record<string, ChatMessage[]> = {
  admin: [
    { id: "1", senderId: "admin", text: "Good morning! Please check the exam duty roster for next week.", time: "8:30 AM", status: "read" },
    { id: "2", senderId: "teacher", text: "Received. I see I'm assigned to Hall 3 on Monday and Wednesday.", time: "8:45 AM", status: "read" },
    { id: "3", senderId: "admin", text: "That's correct. Please reach 30 minutes before the exam starts.", time: "8:50 AM", status: "read" },
    { id: "4", senderId: "admin", text: "Exam duty roster has been shared", time: "9:00 AM", status: "read" },
  ],
  s1: [
    { id: "1", senderId: "s1", text: "Good afternoon sir. I have a doubt in Assignment 3, Question 5.", time: "2:00 PM", status: "read" },
    { id: "2", senderId: "teacher", text: "Sure, which part are you stuck on?", time: "2:15 PM", status: "read" },
    { id: "3", senderId: "s1", text: "The part about binary tree traversal. I'm not sure about the inorder approach.", time: "2:20 PM", status: "read" },
    { id: "4", senderId: "teacher", text: "In inorder traversal, you visit left subtree first, then root, then right subtree. Try implementing it recursively first.", time: "2:30 PM", status: "read" },
    { id: "5", senderId: "s1", text: "Sir, regarding assignment 3...", time: "3:00 PM", status: "read" },
  ],
  p1: [
    { id: "1", senderId: "p1", text: "Hello sir, I wanted to ask about Rohan's recent test performance.", time: "4:00 PM", status: "read" },
    { id: "2", senderId: "teacher", text: "Hello Mrs. Sharma. Rohan scored 78/100 in the mid-term. He's doing well overall.", time: "4:15 PM", status: "read" },
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
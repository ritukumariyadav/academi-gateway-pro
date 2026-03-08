import MessengerChat, { ChatContact, ChatMessage } from "@/components/chat/MessengerChat";

const contacts: ChatContact[] = [
  // Group chats
  {
    id: "g-all-staff", name: "All Staff", initials: "AS", role: "Broadcast", lastMessage: "Admin: Staff meeting tomorrow at 10 AM", time: "10m", unread: 0, online: false,
    isGroup: true, memberCount: 45,
    members: [
      { id: "admin", name: "Admin", initials: "AD", online: true },
      { id: "t1", name: "Dr. Sarah Smith", initials: "SS", online: true },
      { id: "t2", name: "Prof. James Wilson", initials: "JW", online: true },
      { id: "t3", name: "Ms. Priya Sharma", initials: "PS", online: false },
      { id: "t4", name: "Mr. Kumar Singh", initials: "KS", online: true },
      { id: "t5", name: "Dr. Emily Brown", initials: "EB", online: false },
    ],
  },
  {
    id: "g-cs-dept", name: "Computer Science Dept.", initials: "CS", role: "Department", lastMessage: "Dr. Smith: Lab schedules updated for next week", time: "30m", unread: 2, online: false,
    isGroup: true, memberCount: 12,
    members: [
      { id: "admin", name: "Admin", initials: "AD", online: true },
      { id: "t1", name: "Dr. Sarah Smith", initials: "SS", online: true },
      { id: "t6", name: "Mr. Rahul Verma", initials: "RV", online: true },
      { id: "t7", name: "Ms. Neha Kapoor", initials: "NK", online: false },
    ],
  },
  {
    id: "g-math-dept", name: "Mathematics Dept.", initials: "MT", role: "Department", lastMessage: "Prof. Wilson: Mid-sem papers ready for review", time: "1h", unread: 0, online: false,
    isGroup: true, memberCount: 8,
    members: [
      { id: "admin", name: "Admin", initials: "AD", online: true },
      { id: "t2", name: "Prof. James Wilson", initials: "JW", online: true },
      { id: "t8", name: "Dr. Meena Iyer", initials: "MI", online: false },
    ],
  },
  {
    id: "g-parents-bca3", name: "BCA 3rd Year — Parents", initials: "BP", role: "Parent Group", lastMessage: "Admin: PTM scheduled for March 15", time: "2h", unread: 0, online: false,
    isGroup: true, memberCount: 60,
    members: [
      { id: "admin", name: "Admin", initials: "AD", online: true },
      { id: "p1", name: "Mrs. Anjali Gupta", initials: "AG", online: false },
      { id: "p2", name: "Mr. Sharma", initials: "MS", online: false },
      { id: "p3", name: "Mrs. Verma", initials: "MV", online: true },
    ],
  },
  // Direct chats
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
  "g-all-staff": [
    { id: "1", senderId: "admin", senderName: "Admin", text: "Good morning everyone! 🌅", time: "8:00 AM", status: "read", type: "text" },
    { id: "2", senderId: "admin", senderName: "Admin", text: "Reminder: Staff meeting tomorrow at 10 AM in the auditorium. Attendance is mandatory.", time: "8:01 AM", status: "read" },
    { id: "3", senderId: "t1", senderName: "Dr. Sarah Smith", text: "Noted. Will the agenda be shared beforehand?", time: "8:15 AM", status: "read" },
    { id: "4", senderId: "admin", senderName: "Admin", text: "Yes, I'll share the agenda by this evening. Main topics: semester planning, budget allocation, and new lab approvals.", time: "8:20 AM", status: "read" },
    { id: "5", senderId: "t2", senderName: "Prof. James Wilson", text: "Thanks for the heads up! Will be there. 👍", time: "8:30 AM", status: "read" },
    { id: "6", senderId: "t5", senderName: "Dr. Emily Brown", text: "Can we also discuss the research grant applications?", time: "8:45 AM", status: "read" },
    { id: "7", senderId: "admin", senderName: "Admin", text: "Absolutely, I'll add it to the agenda.", time: "9:00 AM", status: "read" },
  ],
  "g-cs-dept": [
    { id: "1", senderId: "t1", senderName: "Dr. Sarah Smith", text: "Team, the lab schedules for next week have been updated on the portal.", time: "9:00 AM", status: "read" },
    { id: "2", senderId: "t6", senderName: "Mr. Rahul Verma", text: "Thanks! I see my slot is Tuesday 2-4 PM. Perfect.", time: "9:10 AM", status: "read" },
    { id: "3", senderId: "admin", senderName: "Admin", text: "The new projectors for Lab 2 and 3 will be installed this weekend.", time: "9:30 AM", status: "read" },
    { id: "4", senderId: "t1", senderName: "Dr. Sarah Smith", text: "Lab schedules updated for next week", time: "9:45 AM", status: "read" },
  ],
  "g-math-dept": [
    { id: "1", senderId: "t2", senderName: "Prof. James Wilson", text: "The mid-semester papers are ready. Please review by Friday.", time: "10:00 AM", status: "read" },
    { id: "2", senderId: "t8", senderName: "Dr. Meena Iyer", text: "I'll review the Calculus II paper today.", time: "10:15 AM", status: "read" },
    { id: "3", senderId: "t2", senderName: "Prof. James Wilson", text: "Mid-sem papers ready for review", time: "10:30 AM", status: "read" },
  ],
  "g-parents-bca3": [
    { id: "sys1", senderId: "system", text: "Admin created this group", time: "8:00 AM", status: "read", type: "system" },
    { id: "1", senderId: "admin", senderName: "Admin", text: "Dear Parents, the Parent-Teacher Meeting for BCA 3rd Year is scheduled for March 15, Saturday at 10 AM.", time: "9:00 AM", status: "read" },
    { id: "2", senderId: "p1", senderName: "Mrs. Anjali Gupta", text: "Thank you for the information. I'll be there.", time: "9:30 AM", status: "read" },
    { id: "3", senderId: "p3", senderName: "Mrs. Verma", text: "Will the results be discussed as well?", time: "10:00 AM", status: "read" },
    { id: "4", senderId: "admin", senderName: "Admin", text: "Yes, individual student progress reports will be shared during the meeting.", time: "10:15 AM", status: "read" },
  ],
  t1: [
    { id: "1", senderId: "t1", text: "Good morning! I wanted to discuss the lab equipment budget for next semester.", time: "9:00 AM", status: "read" },
    { id: "2", senderId: "admin", text: "Sure, please send me the detailed requirement list.", time: "9:05 AM", status: "read" },
    { id: "3", senderId: "t1", text: "I've shared the document via email. We need 5 new oscilloscopes and 3 spectrum analyzers.", time: "9:10 AM", status: "read" },
    { id: "4", senderId: "admin", text: "Got it. I'll review with the finance team and approve by tomorrow.", time: "9:15 AM", status: "read" },
    { id: "5", senderId: "t1", text: "Lab equipment has been approved", time: "10:30 AM", status: "read" },
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
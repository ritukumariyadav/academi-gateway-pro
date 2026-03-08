import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import {
  Send, Search, Phone, Video, Info, Image, Paperclip, Smile,
  MoreHorizontal, Check, CheckCheck, ArrowLeft, Plus, Mic,
} from "lucide-react";

export interface ChatContact {
  id: string;
  name: string;
  avatar?: string;
  initials: string;
  role: string;
  lastMessage: string;
  time: string;
  unread: number;
  online: boolean;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  text: string;
  time: string;
  status: "sent" | "delivered" | "read";
  type?: "text" | "image" | "file";
}

interface MessengerChatProps {
  contacts: ChatContact[];
  currentUserId: string;
  currentUserName: string;
  currentUserInitials: string;
  getMessages: (contactId: string) => ChatMessage[];
}

const MessengerChat: React.FC<MessengerChatProps> = ({
  contacts,
  currentUserId,
  currentUserName,
  currentUserInitials,
  getMessages,
}) => {
  const [selectedContact, setSelectedContact] = useState<ChatContact | null>(null);
  const [messageInput, setMessageInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [mobileShowChat, setMobileShowChat] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const filteredContacts = contacts.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    if (selectedContact) {
      setMessages(getMessages(selectedContact.id));
    }
  }, [selectedContact, getMessages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!messageInput.trim() || !selectedContact) return;
    const newMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      senderId: currentUserId,
      text: messageInput.trim(),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      status: "sent",
    };
    setMessages(prev => [...prev, newMsg]);
    setMessageInput("");

    // Simulate typing + reply
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const reply: ChatMessage = {
        id: `msg-${Date.now() + 1}`,
        senderId: selectedContact.id,
        text: getAutoReply(messageInput.trim()),
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        status: "read",
      };
      setMessages(prev => [...prev, reply]);
    }, 1500 + Math.random() * 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const selectContact = (contact: ChatContact) => {
    setSelectedContact(contact);
    setMobileShowChat(true);
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex rounded-xl border bg-card overflow-hidden">
      {/* Contacts sidebar */}
      <div className={cn(
        "w-full md:w-80 lg:w-96 border-r flex flex-col bg-card",
        mobileShowChat ? "hidden md:flex" : "flex"
      )}>
        {/* Search header */}
        <div className="p-4 border-b space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Chats</h2>
            <div className="flex gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="pl-9 bg-muted/50 border-0 rounded-full h-9"
            />
          </div>
        </div>

        {/* Contact list */}
        <ScrollArea className="flex-1">
          <div className="py-1">
            {filteredContacts.map(contact => (
              <div
                key={contact.id}
                onClick={() => selectContact(contact)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors hover:bg-muted/50",
                  selectedContact?.id === contact.id && "bg-muted"
                )}
              >
                <div className="relative">
                  <Avatar className="h-12 w-12">
                    {contact.avatar && <AvatarImage src={contact.avatar} />}
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold text-sm">
                      {contact.initials}
                    </AvatarFallback>
                  </Avatar>
                  {contact.online && (
                    <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full bg-emerald-500 border-2 border-card" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className={cn("font-medium text-sm truncate", contact.unread > 0 && "font-bold")}>{contact.name}</span>
                    <span className="text-[11px] text-muted-foreground shrink-0 ml-2">{contact.time}</span>
                  </div>
                  <div className="flex items-center justify-between mt-0.5">
                    <p className={cn(
                      "text-xs truncate",
                      contact.unread > 0 ? "text-foreground font-medium" : "text-muted-foreground"
                    )}>{contact.lastMessage}</p>
                    {contact.unread > 0 && (
                      <Badge className="h-5 min-w-5 rounded-full px-1.5 text-[10px] bg-primary text-primary-foreground ml-2 shrink-0">
                        {contact.unread}
                      </Badge>
                    )}
                  </div>
                  <span className="text-[10px] text-muted-foreground">{contact.role}</span>
                </div>
              </div>
            ))}
            {filteredContacts.length === 0 && (
              <div className="p-8 text-center text-muted-foreground text-sm">No conversations found</div>
            )}
          </div>
        </ScrollArea>
      </div>

      {/* Chat area */}
      <div className={cn(
        "flex-1 flex flex-col",
        !mobileShowChat ? "hidden md:flex" : "flex"
      )}>
        {selectedContact ? (
          <>
            {/* Chat header */}
            <div className="h-16 border-b flex items-center justify-between px-4">
              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 md:hidden"
                  onClick={() => setMobileShowChat(false)}
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <div className="relative">
                  <Avatar className="h-10 w-10">
                    {selectedContact.avatar && <AvatarImage src={selectedContact.avatar} />}
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold text-xs">
                      {selectedContact.initials}
                    </AvatarFallback>
                  </Avatar>
                  {selectedContact.online && (
                    <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-card" />
                  )}
                </div>
                <div>
                  <p className="font-semibold text-sm leading-tight">{selectedContact.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {selectedContact.online ? "Active now" : `Last seen ${selectedContact.time}`}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-primary">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-primary">
                  <Video className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-primary">
                  <Info className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Messages area */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-1 max-w-3xl mx-auto">
                {/* Date separator */}
                <div className="flex items-center justify-center py-4">
                  <span className="text-[11px] text-muted-foreground bg-muted px-3 py-1 rounded-full">Today</span>
                </div>
                {messages.map((msg, idx) => {
                  const isMine = msg.senderId === currentUserId;
                  const showAvatar = !isMine && (idx === 0 || messages[idx - 1]?.senderId !== msg.senderId);
                  const isLast = idx === messages.length - 1 || messages[idx + 1]?.senderId !== msg.senderId;

                  return (
                    <div
                      key={msg.id}
                      className={cn("flex items-end gap-2", isMine ? "justify-end" : "justify-start", !isLast && "mb-0.5")}
                    >
                      {!isMine && (
                        <div className="w-8 shrink-0">
                          {showAvatar ? (
                            <Avatar className="h-8 w-8">
                              {selectedContact.avatar && <AvatarImage src={selectedContact.avatar} />}
                              <AvatarFallback className="bg-primary/10 text-primary text-[10px] font-semibold">
                                {selectedContact.initials}
                              </AvatarFallback>
                            </Avatar>
                          ) : null}
                        </div>
                      )}
                      <div className={cn(
                        "max-w-[70%] group relative",
                      )}>
                        <div className={cn(
                          "px-3.5 py-2 text-sm leading-relaxed",
                          isMine
                            ? "bg-primary text-primary-foreground rounded-2xl rounded-br-md"
                            : "bg-muted rounded-2xl rounded-bl-md",
                        )}>
                          {msg.text}
                        </div>
                        {isLast && (
                          <div className={cn(
                            "flex items-center gap-1 mt-1",
                            isMine ? "justify-end" : "justify-start"
                          )}>
                            <span className="text-[10px] text-muted-foreground">{msg.time}</span>
                            {isMine && (
                              msg.status === "read" ? <CheckCheck className="h-3 w-3 text-primary" /> :
                              msg.status === "delivered" ? <CheckCheck className="h-3 w-3 text-muted-foreground" /> :
                              <Check className="h-3 w-3 text-muted-foreground" />
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}

                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex items-end gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary/10 text-primary text-[10px] font-semibold">
                        {selectedContact.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3">
                      <div className="flex gap-1">
                        <span className="h-2 w-2 rounded-full bg-muted-foreground/50 animate-bounce [animation-delay:0ms]" />
                        <span className="h-2 w-2 rounded-full bg-muted-foreground/50 animate-bounce [animation-delay:150ms]" />
                        <span className="h-2 w-2 rounded-full bg-muted-foreground/50 animate-bounce [animation-delay:300ms]" />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Message input */}
            <div className="border-t p-3">
              <div className="flex items-end gap-2 max-w-3xl mx-auto">
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-primary shrink-0">
                    <Plus className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-primary shrink-0 hidden sm:flex">
                    <Image className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-primary shrink-0 hidden sm:flex">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex-1 relative">
                  <Input
                    placeholder="Aa"
                    value={messageInput}
                    onChange={e => setMessageInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="rounded-full bg-muted/50 border-0 pr-10 h-10"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 absolute right-1 top-1 rounded-full text-primary"
                  >
                    <Smile className="h-4 w-4" />
                  </Button>
                </div>
                {messageInput.trim() ? (
                  <Button
                    size="icon"
                    className="h-10 w-10 rounded-full shrink-0"
                    onClick={handleSend}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full text-primary shrink-0">
                    <Mic className="h-5 w-5" />
                  </Button>
                )}
              </div>
            </div>
          </>
        ) : (
          /* Empty state */
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center space-y-3">
              <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center mx-auto">
                <Send className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-semibold text-lg">Your Messages</h3>
              <p className="text-muted-foreground text-sm max-w-xs">
                Select a conversation from the list to start chatting
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

function getAutoReply(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes("hello") || lower.includes("hi")) return "Hi there! How can I help you? 😊";
  if (lower.includes("fee") || lower.includes("payment")) return "Let me check the fee details and get back to you shortly.";
  if (lower.includes("exam") || lower.includes("test")) return "The exam schedule has been updated. Please check the notice board for details.";
  if (lower.includes("assignment")) return "I'll review your assignment and share feedback by tomorrow.";
  if (lower.includes("thanks") || lower.includes("thank")) return "You're welcome! Let me know if you need anything else. 👍";
  if (lower.includes("attendance")) return "I'll look into the attendance records and update you.";
  return "Got it! I'll look into this and get back to you soon.";
}

export default MessengerChat;
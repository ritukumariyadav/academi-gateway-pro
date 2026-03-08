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
  Users, UserPlus, Settings, Pin, BellOff, LogOut as LeaveIcon,
  PanelLeftClose, PanelLeftOpen,
} from "lucide-react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
  isGroup?: boolean;
  memberCount?: number;
  members?: { id: string; name: string; initials: string; online: boolean }[];
}

export interface ChatMessage {
  id: string;
  senderId: string;
  senderName?: string;
  text: string;
  time: string;
  status: "sent" | "delivered" | "read";
  type?: "text" | "image" | "file" | "system";
}

interface MessengerChatProps {
  contacts: ChatContact[];
  currentUserId: string;
  currentUserName: string;
  currentUserInitials: string;
  getMessages: (contactId: string) => ChatMessage[];
  availableContacts?: ChatContact[];
}

const MessengerChat: React.FC<MessengerChatProps> = ({
  contacts: initialContacts,
  currentUserId,
  currentUserName,
  currentUserInitials,
  getMessages,
  availableContacts = [],
}) => {
  const [contacts, setContacts] = useState<ChatContact[]>(initialContacts);
  const [selectedContact, setSelectedContact] = useState<ChatContact | null>(null);
  const [messageInput, setMessageInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [mobileShowChat, setMobileShowChat] = useState(false);
  const [showGroupInfo, setShowGroupInfo] = useState(false);
  const [showCreateGroup, setShowCreateGroup] = useState(false);
  const [newGroupName, setNewGroupName] = useState("");
  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<"all" | "direct" | "groups">("all");
  const [chatListCollapsed, setChatListCollapsed] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const filteredContacts = contacts.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.role.toLowerCase().includes(searchQuery.toLowerCase());
    if (activeTab === "direct") return matchesSearch && !c.isGroup;
    if (activeTab === "groups") return matchesSearch && c.isGroup;
    return matchesSearch;
  });

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
      senderName: currentUserName,
      text: messageInput.trim(),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      status: "sent",
    };
    setMessages(prev => [...prev, newMsg]);
    setMessageInput("");

    if (selectedContact.isGroup) {
      // Group: simulate multiple member replies
      const members = selectedContact.members || [];
      const responder = members[Math.floor(Math.random() * members.length)];
      if (responder) {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          const reply: ChatMessage = {
            id: `msg-${Date.now() + 1}`,
            senderId: responder.id,
            senderName: responder.name,
            text: getGroupAutoReply(messageInput.trim(), responder.name),
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            status: "read",
          };
          setMessages(prev => [...prev, reply]);
        }, 1500 + Math.random() * 1500);
      }
    } else {
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
    }
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
    setShowGroupInfo(false);
  };

  const handleCreateGroup = () => {
    if (!newGroupName.trim() || selectedMembers.length === 0) return;
    const membersData = selectedMembers.map(id => {
      const c = [...contacts, ...availableContacts].find(x => x.id === id);
      return c ? { id: c.id, name: c.name, initials: c.initials, online: c.online } : null;
    }).filter(Boolean) as { id: string; name: string; initials: string; online: boolean }[];

    const newGroup: ChatContact = {
      id: `group-${Date.now()}`,
      name: newGroupName.trim(),
      initials: newGroupName.trim().split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase(),
      role: `${membersData.length + 1} members`,
      lastMessage: "Group created",
      time: "Just now",
      unread: 0,
      online: false,
      isGroup: true,
      memberCount: membersData.length + 1,
      members: [
        { id: currentUserId, name: currentUserName, initials: currentUserInitials, online: true },
        ...membersData,
      ],
    };
    setContacts(prev => [newGroup, ...prev]);
    setShowCreateGroup(false);
    setNewGroupName("");
    setSelectedMembers([]);
    selectContact(newGroup);
  };

  const toggleMember = (id: string) => {
    setSelectedMembers(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  // Get sender info for group messages
  const getSenderInfo = (senderId: string) => {
    if (senderId === currentUserId) return null;
    if (!selectedContact?.isGroup) return null;
    const member = selectedContact.members?.find(m => m.id === senderId);
    return member || null;
  };

  return (
    <>
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
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={() => setShowCreateGroup(true)} title="Create Group">
                  <Users className="h-4 w-4" />
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
            {/* Tabs */}
            <div className="flex gap-1">
              {(["all", "direct", "groups"] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "px-3 py-1 rounded-full text-xs font-medium transition-colors",
                    activeTab === tab
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  )}
                >
                  {tab === "all" ? "All" : tab === "direct" ? "Direct" : "Groups"}
                </button>
              ))}
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
                    {contact.isGroup ? (
                      <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center">
                        <Users className="h-5 w-5 text-accent-foreground" />
                      </div>
                    ) : (
                      <Avatar className="h-12 w-12">
                        {contact.avatar && <AvatarImage src={contact.avatar} />}
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold text-sm">
                          {contact.initials}
                        </AvatarFallback>
                      </Avatar>
                    )}
                    {!contact.isGroup && contact.online && (
                      <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full bg-emerald-500 border-2 border-card" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className={cn("font-medium text-sm truncate", contact.unread > 0 && "font-bold")}>{contact.name}</span>
                        {contact.isGroup && (
                          <Badge variant="secondary" className="text-[9px] px-1 py-0 h-4 shrink-0">Group</Badge>
                        )}
                      </div>
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
                    <span className="text-[10px] text-muted-foreground">
                      {contact.isGroup ? `${contact.memberCount || 0} members` : contact.role}
                    </span>
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
                  <Button variant="ghost" size="icon" className="h-8 w-8 md:hidden" onClick={() => setMobileShowChat(false)}>
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  <div className="relative">
                    {selectedContact.isGroup ? (
                      <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center">
                        <Users className="h-4 w-4 text-accent-foreground" />
                      </div>
                    ) : (
                      <Avatar className="h-10 w-10">
                        {selectedContact.avatar && <AvatarImage src={selectedContact.avatar} />}
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold text-xs">
                          {selectedContact.initials}
                        </AvatarFallback>
                      </Avatar>
                    )}
                    {!selectedContact.isGroup && selectedContact.online && (
                      <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 border-2 border-card" />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-sm leading-tight">{selectedContact.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {selectedContact.isGroup
                        ? `${selectedContact.memberCount || selectedContact.members?.length || 0} members · ${selectedContact.members?.filter(m => m.online).length || 0} online`
                        : selectedContact.online ? "Active now" : `Last seen ${selectedContact.time}`}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {!selectedContact.isGroup && (
                    <>
                      <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-primary">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-primary">
                        <Video className="h-4 w-4" />
                      </Button>
                    </>
                  )}
                  {selectedContact.isGroup ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-primary">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuItem onClick={() => setShowGroupInfo(true)}>
                          <Info className="h-4 w-4 mr-2" /> Group Info
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <UserPlus className="h-4 w-4 mr-2" /> Add Members
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Pin className="h-4 w-4 mr-2" /> Pin Conversation
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <BellOff className="h-4 w-4 mr-2" /> Mute Notifications
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          <LeaveIcon className="h-4 w-4 mr-2" /> Leave Group
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-primary">
                      <Info className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>

              {/* Messages area */}
              <div className="flex-1 flex overflow-hidden">
                <ScrollArea className="flex-1 p-4">
                  <div className="space-y-1 max-w-3xl mx-auto">
                    <div className="flex items-center justify-center py-4">
                      <span className="text-[11px] text-muted-foreground bg-muted px-3 py-1 rounded-full">Today</span>
                    </div>
                    {messages.map((msg, idx) => {
                      if (msg.type === "system") {
                        return (
                          <div key={msg.id} className="flex items-center justify-center py-2">
                            <span className="text-[11px] text-muted-foreground bg-muted px-3 py-1 rounded-full">{msg.text}</span>
                          </div>
                        );
                      }

                      const isMine = msg.senderId === currentUserId;
                      const showAvatar = !isMine && (idx === 0 || messages[idx - 1]?.senderId !== msg.senderId);
                      const isLast = idx === messages.length - 1 || messages[idx + 1]?.senderId !== msg.senderId;
                      const senderInfo = getSenderInfo(msg.senderId);

                      return (
                        <div
                          key={msg.id}
                          className={cn("flex items-end gap-2", isMine ? "justify-end" : "justify-start", !isLast && "mb-0.5")}
                        >
                          {!isMine && (
                            <div className="w-8 shrink-0">
                              {showAvatar ? (
                                <Avatar className="h-8 w-8">
                                  <AvatarFallback className="bg-primary/10 text-primary text-[10px] font-semibold">
                                    {senderInfo?.initials || selectedContact.initials}
                                  </AvatarFallback>
                                </Avatar>
                              ) : null}
                            </div>
                          )}
                          <div className="max-w-[70%] group relative">
                            {/* Show sender name in group chats */}
                            {selectedContact.isGroup && !isMine && showAvatar && (
                              <p className="text-[10px] font-medium text-primary ml-1 mb-0.5">
                                {msg.senderName || senderInfo?.name || "Unknown"}
                              </p>
                            )}
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

                {/* Group info panel */}
                {showGroupInfo && selectedContact.isGroup && (
                  <div className="w-72 border-l bg-card flex flex-col hidden lg:flex">
                    <div className="p-4 border-b flex items-center justify-between">
                      <h3 className="font-semibold text-sm">Group Info</h3>
                      <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => setShowGroupInfo(false)}>
                        <ArrowLeft className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                    <div className="p-4 text-center border-b">
                      <div className="h-16 w-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-3">
                        <Users className="h-7 w-7 text-accent-foreground" />
                      </div>
                      <h4 className="font-bold">{selectedContact.name}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{selectedContact.members?.length || 0} members</p>
                    </div>
                    <div className="p-3">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-xs font-semibold text-muted-foreground uppercase">Members</p>
                        <Button variant="ghost" size="sm" className="h-6 text-xs">
                          <UserPlus className="h-3 w-3 mr-1" /> Add
                        </Button>
                      </div>
                      <ScrollArea className="max-h-64">
                        <div className="space-y-1">
                          {selectedContact.members?.map(member => (
                            <div key={member.id} className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/50">
                              <div className="relative">
                                <Avatar className="h-8 w-8">
                                  <AvatarFallback className="bg-primary/10 text-primary text-[10px] font-semibold">{member.initials}</AvatarFallback>
                                </Avatar>
                                {member.online && (
                                  <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-emerald-500 border border-card" />
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-xs font-medium truncate">{member.name}</p>
                                <p className="text-[10px] text-muted-foreground">{member.id === currentUserId ? "You" : member.online ? "Online" : "Offline"}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </div>
                  </div>
                )}
              </div>

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
                    <Button variant="ghost" size="icon" className="h-8 w-8 absolute right-1 top-1 rounded-full text-primary">
                      <Smile className="h-4 w-4" />
                    </Button>
                  </div>
                  {messageInput.trim() ? (
                    <Button size="icon" className="h-10 w-10 rounded-full shrink-0" onClick={handleSend}>
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
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center space-y-3">
                <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center mx-auto">
                  <Send className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-lg">Your Messages</h3>
                <p className="text-muted-foreground text-sm max-w-xs">
                  Select a conversation or create a group to start chatting
                </p>
                <Button variant="outline" onClick={() => setShowCreateGroup(true)}>
                  <Users className="h-4 w-4 mr-2" /> Create Group Chat
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Create Group Dialog */}
      <Dialog open={showCreateGroup} onOpenChange={setShowCreateGroup}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Create Group Chat</DialogTitle>
            <DialogDescription>Add a name and select members for your new group.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div>
              <Label htmlFor="group-name" className="text-sm font-medium">Group Name</Label>
              <Input
                id="group-name"
                placeholder="e.g. BCA 3rd Year, Science Department"
                value={newGroupName}
                onChange={e => setNewGroupName(e.target.value)}
                className="mt-1.5"
              />
            </div>
            <div>
              <Label className="text-sm font-medium">Select Members ({selectedMembers.length} selected)</Label>
              <ScrollArea className="h-56 mt-1.5 border rounded-lg p-2">
                <div className="space-y-1">
                  {[...contacts.filter(c => !c.isGroup), ...availableContacts].filter((c, i, a) => a.findIndex(x => x.id === c.id) === i).map(contact => (
                    <label
                      key={contact.id}
                      className={cn(
                        "flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-muted/50 transition-colors",
                        selectedMembers.includes(contact.id) && "bg-primary/5"
                      )}
                    >
                      <Checkbox
                        checked={selectedMembers.includes(contact.id)}
                        onCheckedChange={() => toggleMember(contact.id)}
                      />
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary/10 text-primary text-[10px] font-semibold">{contact.initials}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{contact.name}</p>
                        <p className="text-[10px] text-muted-foreground">{contact.role}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </ScrollArea>
            </div>
            {selectedMembers.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {selectedMembers.map(id => {
                  const c = [...contacts, ...availableContacts].find(x => x.id === id);
                  return c ? (
                    <Badge key={id} variant="secondary" className="text-xs gap-1 pr-1">
                      {c.name}
                      <button onClick={() => toggleMember(id)} className="ml-0.5 hover:text-destructive">×</button>
                    </Badge>
                  ) : null;
                })}
              </div>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowCreateGroup(false)}>Cancel</Button>
            <Button onClick={handleCreateGroup} disabled={!newGroupName.trim() || selectedMembers.length === 0}>
              <Users className="h-4 w-4 mr-2" /> Create Group
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
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

function getGroupAutoReply(input: string, senderName: string): string {
  const lower = input.toLowerCase();
  if (lower.includes("exam") || lower.includes("test")) return `Thanks for the update! I'll prepare accordingly. - ${senderName}`;
  if (lower.includes("assignment") || lower.includes("homework")) return `Noted! When is the deadline? 📝`;
  if (lower.includes("meeting") || lower.includes("schedule")) return `I'll be there. Thanks for letting us know! 👍`;
  if (lower.includes("hello") || lower.includes("hi")) return `Hey! 👋`;
  return `Thanks for sharing! 👍`;
}

export default MessengerChat;
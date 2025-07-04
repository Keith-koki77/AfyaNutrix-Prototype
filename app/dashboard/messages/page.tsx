"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageSquare, Send, Search, Filter, Phone, Video, MoreHorizontal, Paperclip, Smile } from "lucide-react"

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState(1)
  const [newMessage, setNewMessage] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  const conversations = [
    {
      id: 1,
      client: "Sarah Johnson",
      avatar: "/placeholder-user.jpg",
      lastMessage: "Thank you for the meal plan! I have a question about the breakfast options.",
      timestamp: "2 min ago",
      unread: 2,
      online: true,
    },
    {
      id: 2,
      client: "Michael Chen",
      avatar: "/placeholder-user.jpg",
      lastMessage: "I've been following the plan for a week now and feeling great!",
      timestamp: "1 hour ago",
      unread: 0,
      online: false,
    },
    {
      id: 3,
      client: "Emma Wilson",
      avatar: "/placeholder-user.jpg",
      lastMessage: "Can we reschedule tomorrow's appointment?",
      timestamp: "3 hours ago",
      unread: 1,
      online: true,
    },
    {
      id: 4,
      client: "David Brown",
      avatar: "/placeholder-user.jpg",
      lastMessage: "The progress photos are attached. Looking forward to your feedback.",
      timestamp: "1 day ago",
      unread: 0,
      online: false,
    },
  ]

  const messages = [
    {
      id: 1,
      sender: "client",
      content: "Hi! I just wanted to check in about my meal plan.",
      timestamp: "10:30 AM",
      date: "Today",
    },
    {
      id: 2,
      sender: "nutritionist",
      content: "Hello Sarah! I'm glad you reached out. How has the first week been going?",
      timestamp: "10:32 AM",
      date: "Today",
    },
    {
      id: 3,
      sender: "client",
      content:
        "It's been good overall, but I'm having trouble with the breakfast options. Are there any alternatives to oatmeal?",
      timestamp: "10:35 AM",
      date: "Today",
    },
    {
      id: 4,
      sender: "nutritionist",
      content:
        "You can try Greek yogurt with berries, scrambled eggs with vegetables, or a protein smoothie. Would you like me to send you some specific recipes?",
      timestamp: "10:38 AM",
      date: "Today",
    },
    {
      id: 5,
      sender: "client",
      content: "That would be perfect! The protein smoothie sounds interesting.",
      timestamp: "10:40 AM",
      date: "Today",
    },
    {
      id: 6,
      sender: "client",
      content: "Thank you for the meal plan! I have a question about the breakfast options.",
      timestamp: "10:42 AM",
      date: "Today",
    },
  ]

  const filteredConversations = conversations.filter((conv) =>
    conv.client.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const selectedConversation = conversations.find((conv) => conv.id === selectedChat)

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Here you would typically send the message to your backend
      console.log("Sending message:", newMessage)
      setNewMessage("")
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
          <p className="text-gray-600 mt-1">Communicate with your clients and provide support</p>
        </div>
        <div className="flex space-x-3">
          <Select defaultValue="all">
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Messages</SelectItem>
              <SelectItem value="unread">Unread</SelectItem>
              <SelectItem value="online">Online</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Conversations</p>
                <p className="text-2xl font-bold text-gray-900">{conversations.length}</p>
              </div>
              <MessageSquare className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Unread Messages</p>
                <p className="text-2xl font-bold text-gray-900">
                  {conversations.reduce((acc, conv) => acc + conv.unread, 0)}
                </p>
              </div>
              <Badge className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center">!</Badge>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Online Clients</p>
                <p className="text-2xl font-bold text-gray-900">{conversations.filter((conv) => conv.online).length}</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Response Time</p>
                <p className="text-2xl font-bold text-gray-900">5m</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                <span className="text-orange-600 text-sm font-bold">⚡</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Chat Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
        {/* Conversations List */}
        <Card>
          <CardHeader>
            <CardTitle>Conversations</CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search conversations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[450px]">
              <div className="space-y-1">
                {filteredConversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    className={`flex items-center space-x-3 p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                      selectedChat === conversation.id ? "bg-blue-50 border-r-2 border-blue-500" : ""
                    }`}
                    onClick={() => setSelectedChat(conversation.id)}
                  >
                    <div className="relative">
                      <Avatar>
                        <AvatarImage src={conversation.avatar || "/placeholder.svg"} alt={conversation.client} />
                        <AvatarFallback>
                          {conversation.client
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      {conversation.online && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-gray-900 truncate">{conversation.client}</p>
                        <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                      </div>
                      <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                    </div>
                    {conversation.unread > 0 && (
                      <Badge className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        {conversation.unread}
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Chat Window */}
        <Card className="lg:col-span-2">
          {selectedConversation ? (
            <>
              {/* Chat Header */}
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Avatar>
                        <AvatarImage
                          src={selectedConversation.avatar || "/placeholder.svg"}
                          alt={selectedConversation.client}
                        />
                        <AvatarFallback>
                          {selectedConversation.client
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      {selectedConversation.online && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium">{selectedConversation.client}</h3>
                      <p className="text-sm text-gray-500">
                        {selectedConversation.online ? "Online" : "Last seen 2 hours ago"}
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Video className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="p-0">
                <ScrollArea className="h-[350px] p-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.sender === "nutritionist" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            message.sender === "nutritionist" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-900"
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                          <p
                            className={`text-xs mt-1 ${
                              message.sender === "nutritionist" ? "text-blue-100" : "text-gray-500"
                            }`}
                          >
                            {message.timestamp}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>

                {/* Message Input */}
                <div className="border-t p-4">
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Paperclip className="w-4 h-4" />
                    </Button>
                    <div className="flex-1 relative">
                      <Textarea
                        placeholder="Type your message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        className="min-h-[40px] max-h-[120px] resize-none pr-12"
                        onKeyPress={(e) => {
                          if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault()
                            handleSendMessage()
                          }
                        }}
                      />
                      <Button variant="ghost" size="sm" className="absolute right-2 top-1/2 transform -translate-y-1/2">
                        <Smile className="w-4 h-4" />
                      </Button>
                    </div>
                    <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </>
          ) : (
            <CardContent className="flex items-center justify-center h-full">
              <div className="text-center">
                <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No conversation selected</h3>
                <p className="text-gray-500">Choose a conversation from the list to start messaging</p>
              </div>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  )
}

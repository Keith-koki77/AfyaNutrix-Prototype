"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  MessageSquare,
  Send,
  Search,
  Phone,
  Video,
  MoreHorizontal,
  Paperclip,
  Smile,
  Users,
  Clock,
  CheckCheck,
} from "lucide-react"

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState(1)
  const [newMessage, setNewMessage] = useState("")

  const conversations = [
    {
      id: 1,
      client: "Grace Mwangi",
      lastMessage: "Thank you for the meal plan! I'm already feeling more energetic.",
      timestamp: "2 min ago",
      unread: 2,
      status: "online",
      avatar: "GM",
    },
    {
      id: 2,
      client: "John Kamau",
      lastMessage: "Can we reschedule tomorrow's appointment?",
      timestamp: "1 hour ago",
      unread: 1,
      status: "offline",
      avatar: "JK",
    },
    {
      id: 3,
      client: "Mary Wanjiku",
      lastMessage: "The ugali recipe you shared is perfect!",
      timestamp: "3 hours ago",
      unread: 0,
      status: "online",
      avatar: "MW",
    },
    {
      id: 4,
      client: "Faith Akinyi",
      lastMessage: "I have some questions about the supplements",
      timestamp: "1 day ago",
      unread: 0,
      status: "offline",
      avatar: "FA",
    },
  ]

  const messages = [
    {
      id: 1,
      sender: "client",
      content: "Hi Dr. Amina! I wanted to update you on my progress.",
      timestamp: "10:30 AM",
      status: "read",
    },
    {
      id: 2,
      sender: "nutritionist",
      content: "That's wonderful to hear! How are you feeling with the new meal plan?",
      timestamp: "10:32 AM",
      status: "read",
    },
    {
      id: 3,
      sender: "client",
      content:
        "Much better! I've been following the ugali and sukuma wiki combinations you suggested. My energy levels are up and I've lost 2kg this week!",
      timestamp: "10:35 AM",
      status: "read",
    },
    {
      id: 4,
      sender: "nutritionist",
      content: "That's excellent progress! 2kg in a week is perfect. How are you finding the portion sizes?",
      timestamp: "10:37 AM",
      status: "read",
    },
    {
      id: 5,
      sender: "client",
      content:
        "The portions are just right. I don't feel hungry between meals anymore. Thank you for the meal plan! I'm already feeling more energetic.",
      timestamp: "10:40 AM",
      status: "delivered",
    },
  ]

  const selectedConversation = conversations.find((c) => c.id === selectedChat)

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Handle sending message
      setNewMessage("")
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
          <p className="text-gray-600 mt-1">Secure communication with your clients</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge className="bg-[#1B5E20]">DPA Compliant</Badge>
          <Badge variant="outline">End-to-End Encrypted</Badge>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Conversations</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{conversations.length}</p>
              </div>
              <div className="p-3 rounded-full bg-gray-100 text-blue-600">
                <MessageSquare className="w-6 h-6" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Unread Messages</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {conversations.reduce((sum, conv) => sum + conv.unread, 0)}
                </p>
              </div>
              <div className="p-3 rounded-full bg-gray-100 text-orange-600">
                <Clock className="w-6 h-6" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Online Clients</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {conversations.filter((c) => c.status === "online").length}
                </p>
              </div>
              <div className="p-3 rounded-full bg-gray-100 text-green-600">
                <Users className="w-6 h-6" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Chat Interface */}
      <div className="grid lg:grid-cols-3 gap-6 h-[600px]">
        {/* Conversations List */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Conversations</CardTitle>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Search conversations..." className="pl-10" />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-1">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => setSelectedChat(conversation.id)}
                  className={`flex items-center space-x-3 p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                    selectedChat === conversation.id ? "bg-[#1B5E20]/10 border-r-2 border-[#1B5E20]" : ""
                  }`}
                >
                  <div className="relative">
                    <Avatar>
                      <AvatarFallback className="bg-[#1B5E20] text-white">{conversation.avatar}</AvatarFallback>
                    </Avatar>
                    <div
                      className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                        conversation.status === "online" ? "bg-green-500" : "bg-gray-400"
                      }`}
                    ></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-gray-900 truncate">{conversation.client}</p>
                      <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                    </div>
                    <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                  </div>
                  {conversation.unread > 0 && <Badge className="bg-[#1B5E20] text-white">{conversation.unread}</Badge>}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chat Window */}
        <Card className="lg:col-span-2 flex flex-col">
          {selectedConversation ? (
            <>
              {/* Chat Header */}
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarFallback className="bg-[#1B5E20] text-white">{selectedConversation.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-gray-900">{selectedConversation.client}</p>
                      <p className="text-sm text-gray-500">
                        {selectedConversation.status === "online" ? "Online" : "Last seen 2 hours ago"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
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
              <CardContent className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === "nutritionist" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          message.sender === "nutritionist" ? "bg-[#1B5E20] text-white" : "bg-gray-100 text-gray-900"
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <div
                          className={`flex items-center justify-between mt-1 ${
                            message.sender === "nutritionist" ? "text-green-100" : "text-gray-500"
                          }`}
                        >
                          <span className="text-xs">{message.timestamp}</span>
                          {message.sender === "nutritionist" && <CheckCheck className="w-3 h-3 ml-2" />}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>

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
                    <Button variant="ghost" size="sm" className="absolute right-2 top-2">
                      <Smile className="w-4 h-4" />
                    </Button>
                  </div>
                  <Button
                    onClick={handleSendMessage}
                    className="bg-[#1B5E20] hover:bg-[#2E7D32]"
                    disabled={!newMessage.trim()}
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Select a conversation to start messaging</p>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}

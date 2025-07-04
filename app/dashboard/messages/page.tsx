"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Send, Search, Paperclip, MoreHorizontal } from "lucide-react"

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState(1)
  const [newMessage, setNewMessage] = useState("")

  const conversations = [
    {
      id: 1,
      clientName: "Sarah Johnson",
      clientAvatar: "/placeholder-user.jpg",
      lastMessage: "Thank you for the meal plan adjustments!",
      timestamp: "2 min ago",
      unread: 0,
      online: true,
    },
    {
      id: 2,
      clientName: "Michael Chen",
      clientAvatar: "/placeholder-user.jpg",
      lastMessage: "Can we schedule a follow-up session?",
      timestamp: "1 hour ago",
      unread: 2,
      online: false,
    },
    {
      id: 3,
      clientName: "Emma Wilson",
      clientAvatar: "/placeholder-user.jpg",
      lastMessage: "I have some questions about the supplements",
      timestamp: "3 hours ago",
      unread: 1,
      online: true,
    },
  ]

  const messages = [
    {
      id: 1,
      sender: "client",
      message: "Hi! I wanted to ask about the meal plan you sent me yesterday.",
      timestamp: "10:30 AM",
      clientName: "Sarah Johnson",
    },
    {
      id: 2,
      sender: "nutritionist",
      message: "Hello Sarah! I'd be happy to help. What specific questions do you have about the meal plan?",
      timestamp: "10:32 AM",
    },
    {
      id: 3,
      sender: "client",
      message: "I'm wondering if I can substitute the quinoa with brown rice in the lunch meals?",
      timestamp: "10:35 AM",
      clientName: "Sarah Johnson",
    },
    {
      id: 4,
      sender: "nutritionist",
      message:
        "Brown rice is a great substitute for quinoa. They have similar nutritional profiles, so it won't affect your meal plan goals. Just make sure to use the same portion size - about 1/2 cup cooked.",
      timestamp: "10:37 AM",
    },
    {
      id: 5,
      sender: "client",
      message: "Perfect! Thank you for the meal plan adjustments!",
      timestamp: "10:40 AM",
      clientName: "Sarah Johnson",
    },
  ]

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Handle sending message
      setNewMessage("")
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
        <p className="text-gray-600 mt-2">Communicate with your clients</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
        {/* Conversations List */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Conversations</CardTitle>
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
                  className={`p-4 cursor-pointer hover:bg-gray-50 border-b ${
                    selectedChat === conversation.id ? "bg-blue-50 border-l-4 border-l-blue-500" : ""
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Avatar>
                        <AvatarImage src={conversation.clientAvatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {conversation.clientName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      {conversation.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-sm truncate">{conversation.clientName}</p>
                        <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                      </div>
                      <p className="text-sm text-gray-600 truncate mt-1">{conversation.lastMessage}</p>
                    </div>
                    {conversation.unread > 0 && (
                      <Badge className="bg-red-500 text-white text-xs">{conversation.unread}</Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chat Area */}
        <Card className="lg:col-span-2 flex flex-col">
          <CardHeader className="border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">Sarah Johnson</CardTitle>
                  <p className="text-sm text-green-600">Online</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>

          {/* Messages */}
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
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
                  <p className="text-sm">{message.message}</p>
                  <p
                    className={`text-xs mt-1 ${message.sender === "nutritionist" ? "text-green-100" : "text-gray-500"}`}
                  >
                    {message.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>

          {/* Message Input */}
          <div className="border-t p-4">
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Paperclip className="w-4 h-4" />
              </Button>
              <Textarea
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1 min-h-[40px] max-h-[120px] resize-none"
                onKeyPress={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    handleSendMessage()
                  }
                }}
              />
              <Button
                onClick={handleSendMessage}
                className="bg-[#1B5E20] hover:bg-[#2E7D32]"
                disabled={!newMessage.trim()}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

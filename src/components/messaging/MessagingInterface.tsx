'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  senderType: 'partner' | 'renter';
  receiverId: string;
  receiverType: 'partner' | 'renter';
  message: string;
  timestamp: string;
  read: boolean;
  equipmentId?: string;
}

interface Conversation {
  id: string;
  participants: Array<{
    id: string;
    type: 'partner' | 'renter';
    name: string;
    avatar: string;
  }>;
  equipmentId?: string;
  equipmentName?: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  status: string;
}

interface MessagingInterfaceProps {
  userId: string;
  userType: 'partner' | 'renter';
  userName: string;
}

export default function MessagingInterface({ userId, userType, userName }: MessagingInterfaceProps) {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Fetch conversations
  useEffect(() => {
    fetchConversations();
  }, [userId, userType]);

  // Fetch messages when conversation is selected
  useEffect(() => {
    if (selectedConversation) {
      fetchMessages(selectedConversation.id);
      markAsRead(selectedConversation.id);
    }
  }, [selectedConversation]);

  // Auto scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const fetchConversations = async () => {
    try {
      const response = await fetch(`/api/messages?userId=${userId}&userType=${userType}`);
      const data = await response.json();
      setConversations(data.conversations || []);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch conversations:', error);
      setLoading(false);
    }
  };

  const fetchMessages = async (conversationId: string) => {
    try {
      const response = await fetch(`/api/messages?conversationId=${conversationId}`);
      const data = await response.json();
      setMessages(data.messages || []);
    } catch (error) {
      console.error('Failed to fetch messages:', error);
    }
  };

  const markAsRead = async (conversationId: string) => {
    try {
      await fetch('/api/messages', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ conversationId, userId })
      });
      
      // Update local state
      setConversations(prev => 
        prev.map(conv => 
          conv.id === conversationId 
            ? { ...conv, unreadCount: 0 }
            : conv
        )
      );
    } catch (error) {
      console.error('Failed to mark as read:', error);
    }
  };

  const sendMessage = async () => {
    if (!newMessage.trim() || !selectedConversation || sending) return;

    setSending(true);
    const otherParticipant = selectedConversation.participants.find(p => p.id !== userId);
    
    if (!otherParticipant) {
      setSending(false);
      return;
    }

    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          senderId: userId,
          senderType: userType,
          receiverId: otherParticipant.id,
          receiverType: otherParticipant.type,
          message: newMessage,
          conversationId: selectedConversation.id,
          equipmentId: selectedConversation.equipmentId
        })
      });

      if (response.ok) {
        const data = await response.json();
        setMessages(prev => [...prev, data.message]);
        setNewMessage('');
        
        // Update conversation list
        setConversations(prev => 
          prev.map(conv => 
            conv.id === selectedConversation.id 
              ? { ...conv, lastMessage: newMessage, lastMessageTime: data.message.timestamp }
              : conv
          )
        );
      }
    } catch (error) {
      console.error('Failed to send message:', error);
    }
    
    setSending(false);
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
    
    if (diffInHours < 24) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else {
      return date.toLocaleDateString();
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl h-[700px] md:h-[600px] flex overflow-hidden">
      {/* Conversations List */}
      <div className="w-full md:w-1/3 border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200 bg-gray-50">
          <h3 className="text-xl md:text-lg font-bold text-gray-900">Messages</h3>
          <p className="text-base md:text-sm text-gray-600">
            {userType === 'partner' ? 'Customer inquiries' : 'Equipment discussions'}
          </p>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {conversations.length === 0 ? (
            <div className="p-8 text-center">
              <div className="text-6xl mb-6">💬</div>
              <p className="text-gray-500 text-lg">No conversations yet</p>
              <p className="text-base text-gray-400 mt-3">
                {userType === 'partner' 
                  ? 'Customers will message you about equipment rentals'
                  : 'Start browsing equipment to begin conversations'
                }
              </p>
              <Link
                href={userType === 'partner' ? '/partners/equipment/manage' : '/renters/search'}
                className="inline-block mt-6 text-blue-500 hover:text-blue-700 font-medium text-lg px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                {userType === 'partner' ? 'Manage Equipment' : 'Browse Equipment'}
              </Link>
            </div>
          ) : (
            conversations.map((conversation) => {
              const otherParticipant = conversation.participants.find(p => p.id !== userId);
              return (
                <div
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation)}
                  className={`p-6 cursor-pointer border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                    selectedConversation?.id === conversation.id ? 'bg-blue-50 border-blue-200' : ''
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{otherParticipant?.avatar || '👤'}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-base font-semibold text-gray-900 truncate">
                          {otherParticipant?.name || 'Unknown User'}
                        </p>
                        {conversation.unreadCount > 0 && (
                          <span className="bg-red-500 text-white text-sm rounded-full px-3 py-1 min-w-[24px] text-center font-medium">
                            {conversation.unreadCount}
                          </span>
                        )}
                      </div>
                      {conversation.equipmentName && (
                        <p className="text-sm text-blue-600 font-medium mb-2">
                          {conversation.equipmentName}
                        </p>
                      )}
                      <p className="text-base text-gray-600 truncate">
                        {conversation.lastMessage}
                      </p>
                      <p className="text-sm text-gray-400 mt-2">
                        {formatTime(conversation.lastMessageTime)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 flex flex-col">
        {selectedConversation ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">
                  {selectedConversation.participants.find(p => p.id !== userId)?.avatar || '👤'}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {selectedConversation.participants.find(p => p.id !== userId)?.name || 'Unknown User'}
                  </h4>
                  {selectedConversation.equipmentName && (
                    <p className="text-sm text-blue-600 font-medium">
                      Re: {selectedConversation.equipmentName}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {messages.map((message) => {
                const isOwnMessage = message.senderId === userId;
                return (
                  <div
                    key={message.id}
                    className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-6 py-4 rounded-lg ${
                        isOwnMessage
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p className="text-base leading-relaxed">{message.message}</p>
                      <p
                        className={`text-sm mt-2 ${
                          isOwnMessage ? 'text-blue-100' : 'text-gray-500'
                        }`}
                      >
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </div>
                );
              })}
              <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <div className="p-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 border-2 border-gray-300 rounded-lg px-6 py-4 text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={sending}
                />
                <button
                  onClick={sendMessage}
                  disabled={sending || !newMessage.trim()}
                  className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold text-base min-w-[100px]"
                >
                  {sending ? '...' : '📤 Send'}
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">💬</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Select a Conversation
              </h3>
              <p className="text-gray-600">
                Choose a conversation from the left to start messaging
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

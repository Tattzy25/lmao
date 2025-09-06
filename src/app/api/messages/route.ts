import { NextRequest, NextResponse } from 'next/server';

// Mock database for messages
let messages: any[] = [
  {
    id: '1',
    conversationId: 'conv-1',
    senderId: 'partner-1',
    senderType: 'partner',
    receiverId: 'renter-1',
    receiverType: 'renter',
    message: 'Hi! I see you\'re interested in renting our premium mobility scooter for Disneyland. I\'d be happy to help arrange the delivery details.',
    timestamp: new Date('2025-09-04T10:30:00Z').toISOString(),
    read: false,
    equipmentId: 'scooter-123'
  },
  {
    id: '2',
    conversationId: 'conv-1',
    senderId: 'renter-1',
    senderType: 'renter',
    receiverId: 'partner-1',
    receiverType: 'partner',
    message: 'Hello! Yes, we\'re planning a 3-day trip to Disneyland Resort. Could you deliver to the Grand Californian Hotel on September 15th?',
    timestamp: new Date('2025-09-04T11:15:00Z').toISOString(),
    read: true,
    equipmentId: 'scooter-123'
  },
  {
    id: '3',
    conversationId: 'conv-1',
    senderId: 'partner-1',
    senderType: 'partner',
    receiverId: 'renter-1',
    receiverType: 'renter',
    message: 'Absolutely! We offer complimentary white-glove delivery to all Disney Resort hotels. I can have it delivered to your room by 9 AM on September 15th. The scooter comes fully charged with a backup battery.',
    timestamp: new Date('2025-09-04T11:45:00Z').toISOString(),
    read: false,
    equipmentId: 'scooter-123'
  }
];

let conversations: any[] = [
  {
    id: 'conv-1',
    participants: [
      { id: 'partner-1', type: 'partner', name: 'Sarah Johnson - Premium Mobility Solutions', avatar: '🚀' },
      { id: 'renter-1', type: 'renter', name: 'Michael Chen', avatar: '👨‍💼' }
    ],
    equipmentId: 'scooter-123',
    equipmentName: 'Pride Victory 10 - Premium Mobility Scooter',
    lastMessage: 'Absolutely! We offer complimentary white-glove delivery to all Disney Resort hotels...',
    lastMessageTime: new Date('2025-09-04T11:45:00Z').toISOString(),
    unreadCount: 2,
    status: 'active'
  }
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');
  const userType = searchParams.get('userType');
  const conversationId = searchParams.get('conversationId');

  if (conversationId) {
    // Get messages for a specific conversation
    const conversationMessages = messages.filter(m => m.conversationId === conversationId);
    return NextResponse.json({ messages: conversationMessages });
  }

  if (userId && userType) {
    // Get all conversations for a user
    const userConversations = conversations.filter(conv => 
      conv.participants.some((p: any) => p.id === userId && p.type === userType)
    );
    return NextResponse.json({ conversations: userConversations });
  }

  return NextResponse.json({ conversations: [] });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      senderId, 
      senderType, 
      receiverId, 
      receiverType, 
      message, 
      conversationId,
      equipmentId 
    } = body;

    if (!senderId || !receiverId || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create new message
    const newMessage = {
      id: Date.now().toString(),
      conversationId: conversationId || `conv-${Date.now()}`,
      senderId,
      senderType,
      receiverId,
      receiverType,
      message,
      timestamp: new Date().toISOString(),
      read: false,
      equipmentId
    };

    messages.push(newMessage);

    // Update or create conversation
    let conversation = conversations.find(c => c.id === newMessage.conversationId);
    
    if (!conversation) {
      // Create new conversation
      conversation = {
        id: newMessage.conversationId,
        participants: [
          { id: senderId, type: senderType, name: `${senderType === 'partner' ? 'Partner' : 'Renter'} ${senderId}`, avatar: senderType === 'partner' ? '🏢' : '👤' },
          { id: receiverId, type: receiverType, name: `${receiverType === 'partner' ? 'Partner' : 'Renter'} ${receiverId}`, avatar: receiverType === 'partner' ? '🏢' : '👤' }
        ],
        equipmentId,
        equipmentName: 'Equipment',
        lastMessage: message,
        lastMessageTime: newMessage.timestamp,
        unreadCount: 1,
        status: 'active'
      };
      conversations.push(conversation);
    } else {
      // Update existing conversation
      conversation.lastMessage = message;
      conversation.lastMessageTime = newMessage.timestamp;
      conversation.unreadCount += 1;
    }

    return NextResponse.json({ 
      message: newMessage, 
      conversation 
    });

  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { conversationId, userId } = body;

    if (!conversationId || !userId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Mark messages as read
    messages.forEach(message => {
      if (message.conversationId === conversationId && message.receiverId === userId) {
        message.read = true;
      }
    });

    // Update conversation unread count
    const conversation = conversations.find(c => c.id === conversationId);
    if (conversation) {
      conversation.unreadCount = 0;
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to mark messages as read' },
      { status: 500 }
    );
  }
}

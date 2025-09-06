'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface MessageNotificationProps {
  userId: string;
  userType: 'partner' | 'renter';
  className?: string;
}

export default function MessageNotification({ userId, userType, className = '' }: MessageNotificationProps) {
  const [unreadCount, setUnreadCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUnreadCount();
    
    // Poll for new messages every 30 seconds
    const interval = setInterval(fetchUnreadCount, 30000);
    return () => clearInterval(interval);
  }, [userId, userType]);

  const fetchUnreadCount = async () => {
    try {
      const response = await fetch(`/api/messages?userId=${userId}&userType=${userType}`);
      const data = await response.json();
      
      const totalUnread = (data.conversations || []).reduce(
        (total: number, conv: any) => total + (conv.unreadCount || 0),
        0
      );
      
      setUnreadCount(totalUnread);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch unread count:', error);
      setLoading(false);
    }
  };

  const messagesUrl = userType === 'partner' ? '/partners/messages' : '/renters/messages';

  return (
    <Link
      href={messagesUrl}
      className={`relative inline-flex items-center p-2 rounded-lg hover:bg-gray-100 transition-colors ${className}`}
    >
      <svg 
        className="w-6 h-6 text-gray-600" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
        />
      </svg>
      
      {!loading && unreadCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center min-w-[20px]">
          {unreadCount > 99 ? '99+' : unreadCount}
        </span>
      )}
      
      <span className="ml-2 text-sm text-gray-700 hidden md:inline">
        Messages
      </span>
    </Link>
  );
}

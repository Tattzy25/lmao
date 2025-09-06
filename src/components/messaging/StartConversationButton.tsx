'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface StartConversationButtonProps {
  partnerId: string;
  partnerName?: string;
  equipmentId: string;
  equipmentName: string;
  renterId?: string;
  renterName?: string;
  buttonText?: string;
  className?: string;
}

export default function StartConversationButton({
  partnerId,
  partnerName = 'Equipment Owner',
  equipmentId,
  equipmentName,
  renterId,
  renterName = 'Interested Renter',
  buttonText = 'Message Owner',
  className = ''
}: StartConversationButtonProps) {
  const [isCreating, setIsCreating] = useState(false);

  const createConversation = async () => {
    if (!renterId) {
      // Redirect to login if not authenticated
      window.location.href = '/login?redirect=/renters/messages';
      return;
    }

    setIsCreating(true);
    
    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          senderId: renterId,
          senderType: 'renter',
          receiverId: partnerId,
          receiverType: 'partner',
          message: `Hi! I'm interested in renting your ${equipmentName}. Could you please provide more details about availability and delivery options?`,
          equipmentId
        })
      });

      if (response.ok) {
        const data = await response.json();
        // Redirect to messages page with the conversation
        window.location.href = `/renters/messages?conversation=${data.conversation.id}`;
      } else {
        console.error('Failed to create conversation');
      }
    } catch (error) {
      console.error('Error creating conversation:', error);
    }
    
    setIsCreating(false);
  };

  const defaultClasses = "inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <button
      onClick={createConversation}
      disabled={isCreating}
      className={className || defaultClasses}
    >
      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
      {isCreating ? 'Starting...' : buttonText}
    </button>
  );
}

// Quick message component for equipment cards
export function QuickMessageButton({
  partnerId,
  equipmentId,
  equipmentName,
  renterId
}: {
  partnerId: string;
  equipmentId: string;
  equipmentName: string;
  renterId?: string;
}) {
  return (
    <StartConversationButton
      partnerId={partnerId}
      equipmentId={equipmentId}
      equipmentName={equipmentName}
      renterId={renterId}
      buttonText="💬 Message"
      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-medium"
    />
  );
}

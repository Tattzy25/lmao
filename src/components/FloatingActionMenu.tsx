'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function FloatingActionMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      href: '/renters/search',
      icon: '🔍',
      label: 'Find Equipment',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      href: '/renters/messages',
      icon: '💬',
      label: 'Messages',
      color: 'bg-purple-500 hover:bg-purple-600'
    },
    {
      href: '/ask-scoovio',
      icon: '❓',
      label: 'Get Help',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      href: 'tel:+1-800-SCOOVIO',
      icon: '📞',
      label: 'Call Support',
      color: 'bg-red-500 hover:bg-red-600'
    }
  ];

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-25 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Floating Action Menu */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Menu Items */}
        <div className={`flex flex-col-reverse gap-3 mb-4 transition-all duration-300 ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}>
          {menuItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${item.color} text-white p-4 rounded-full shadow-lg transform transition-all duration-200 hover:scale-110 flex items-center min-w-[60px] justify-center`}
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => setIsOpen(false)}
            >
              <span className="text-2xl">{item.icon}</span>
              {/* Label - shown on hover for desktop */}
              <span className="hidden md:inline ml-3 font-medium text-sm whitespace-nowrap">
                {item.label}
              </span>
              {/* Label - always visible on mobile when open */}
              <span className="md:hidden ml-3 font-medium text-sm whitespace-nowrap">
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Main FAB Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-16 h-16 bg-gradient-to-r from-turo-blue to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-110 flex items-center justify-center ${
            isOpen ? 'rotate-45' : ''
          }`}
          aria-label="Quick actions menu"
        >
          <svg 
            className="w-8 h-8" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 6v6m0 0v6m0-6h6m-6 0H6" 
            />
          </svg>
        </button>
      </div>
    </>
  );
}

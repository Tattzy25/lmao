'use client';

import React from 'react';
import Link from 'next/link';
import MessagingInterface from '@/components/messaging/MessagingInterface';

export default function RenterMessagesPage() {
  // In a real app, this would come from authentication
  const renterId = 'renter-1';
  const renterName = 'Michael Chen';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link
                href="/renters"
                className="text-gray-600 hover:text-gray-900"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
                <p className="text-sm text-gray-600">Chat with equipment providers</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Signed in as <span className="font-medium">{renterName}</span>
              </div>
              <Link
                href="/renters/search"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Browse Equipment
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <div className="text-purple-500 text-xl">🎯</div>
              <div>
                <h3 className="text-purple-900 font-semibold">Get the Best Experience</h3>
                <ul className="text-purple-800 text-sm mt-2 space-y-1">
                  <li>• Ask about delivery times and locations</li>
                  <li>• Confirm equipment specifications and features</li>
                  <li>• Discuss any special requirements or accessibility needs</li>
                  <li>• Get tips from local equipment providers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <MessagingInterface 
          userId={renterId}
          userType="renter"
          userName={renterName}
        />

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/renters/search"
            className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
          >
            <div className="text-3xl mb-3">🔍</div>
            <h3 className="font-semibold text-gray-900 mb-2">Browse Equipment</h3>
            <p className="text-gray-600 text-sm">Find mobility equipment for your destination</p>
          </Link>
          
          <Link
            href="/renters/profile"
            className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
          >
            <div className="text-3xl mb-3">👤</div>
            <h3 className="font-semibold text-gray-900 mb-2">My Profile</h3>
            <p className="text-gray-600 text-sm">Manage your account and rental history</p>
          </Link>
          
          <Link
            href="/support"
            className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
          >
            <div className="text-3xl mb-3">💬</div>
            <h3 className="font-semibold text-gray-900 mb-2">Support</h3>
            <p className="text-gray-600 text-sm">Get help with your Scoovio experience</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

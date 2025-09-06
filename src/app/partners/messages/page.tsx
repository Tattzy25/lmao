'use client';

import React from 'react';
import Link from 'next/link';
import MessagingInterface from '@/components/messaging/MessagingInterface';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function PartnerMessagesPage() {
  // In a real app, this would come from authentication
  const partnerId = 'partner-1';
  const partnerName = 'Sarah Johnson - Premium Mobility Solutions';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link
                href="/partners/dashboard"
                className="text-gray-600 hover:text-gray-900"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
                <p className="text-sm text-gray-600">Communicate with potential renters</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Signed in as <span className="font-medium">{partnerName}</span>
              </div>
              <Link
                href="/partners/dashboard"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <div className="text-blue-500 text-xl">💡</div>
              <div>
                <h3 className="text-blue-900 font-semibold">Messaging Best Practices</h3>
                <ul className="text-blue-800 text-sm mt-2 space-y-1">
                  <li>• Respond to inquiries within 2 hours for better booking rates</li>
                  <li>• Provide detailed delivery and pickup information</li>
                  <li>• Share equipment specifications and care instructions</li>
                  <li>• Confirm booking details and special requirements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <MessagingInterface 
          userId={partnerId}
          userType="partner"
          userName={partnerName}
        />

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/partners/equipment/manage"
            className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
          >
            <div className="text-3xl mb-3">🛴</div>
            <h3 className="font-semibold text-gray-900 mb-2">Manage Equipment</h3>
            <p className="text-gray-600 text-sm">Update your equipment listings and availability</p>
          </Link>
          
          <Link
            href="/partners/dashboard"
            className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
          >
            <div className="text-3xl mb-3">📊</div>
            <h3 className="font-semibold text-gray-900 mb-2">View Analytics</h3>
            <p className="text-gray-600 text-sm">Track your booking performance and earnings</p>
          </Link>
          
          <Link
            href="/partners/equipment/upload"
            className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
          >
            <div className="text-3xl mb-3">➕</div>
            <h3 className="font-semibold text-gray-900 mb-2">Add Equipment</h3>
            <p className="text-gray-600 text-sm">List new mobility equipment for rent</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

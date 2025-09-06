'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BreadcrumbItem {
  label: string;
  href: string;
  icon?: string;
}

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  // Define breadcrumb mappings
  const breadcrumbMap: Record<string, BreadcrumbItem[]> = {
    '/': [
      { label: 'Home', href: '/', icon: '🏠' }
    ],
    '/renters': [
      { label: 'Home', href: '/', icon: '🏠' },
      { label: 'Find Equipment', href: '/renters', icon: '🔍' }
    ],
    '/renters/search': [
      { label: 'Home', href: '/', icon: '🏠' },
      { label: 'Find Equipment', href: '/renters', icon: '🔍' },
      { label: 'Search Results', href: '/renters/search', icon: '📝' }
    ],
    '/renters/messages': [
      { label: 'Home', href: '/', icon: '🏠' },
      { label: 'Find Equipment', href: '/renters', icon: '🔍' },
      { label: 'Messages', href: '/renters/messages', icon: '💬' }
    ],
    '/renters/profile': [
      { label: 'Home', href: '/', icon: '🏠' },
      { label: 'Find Equipment', href: '/renters', icon: '🔍' },
      { label: 'My Profile', href: '/renters/profile', icon: '👤' }
    ],
    '/partners': [
      { label: 'Home', href: '/', icon: '🏠' },
      { label: 'Partners', href: '/partners', icon: '🏢' }
    ],
    '/partners/dashboard': [
      { label: 'Home', href: '/', icon: '🏠' },
      { label: 'Partners', href: '/partners', icon: '🏢' },
      { label: 'Dashboard', href: '/partners/dashboard', icon: '📊' }
    ],
    '/partners/messages': [
      { label: 'Home', href: '/', icon: '🏠' },
      { label: 'Partners', href: '/partners', icon: '🏢' },
      { label: 'Dashboard', href: '/partners/dashboard', icon: '📊' },
      { label: 'Messages', href: '/partners/messages', icon: '💬' }
    ],
    '/partners/equipment/manage': [
      { label: 'Home', href: '/', icon: '🏠' },
      { label: 'Partners', href: '/partners', icon: '🏢' },
      { label: 'Dashboard', href: '/partners/dashboard', icon: '📊' },
      { label: 'Manage Equipment', href: '/partners/equipment/manage', icon: '⚙️' }
    ],
    '/partners/equipment/upload': [
      { label: 'Home', href: '/', icon: '🏠' },
      { label: 'Partners', href: '/partners', icon: '🏢' },
      { label: 'Dashboard', href: '/partners/dashboard', icon: '📊' },
      { label: 'Add Equipment', href: '/partners/equipment/upload', icon: '➕' }
    ],
    '/how-it-works': [
      { label: 'Home', href: '/', icon: '🏠' },
      { label: 'How It Works', href: '/how-it-works', icon: '❓' }
    ],
    '/ask-scoovio': [
      { label: 'Home', href: '/', icon: '🏠' },
      { label: 'Get Help', href: '/ask-scoovio', icon: '💬' }
    ],
    '/support': [
      { label: 'Home', href: '/', icon: '🏠' },
      { label: 'Support', href: '/support', icon: '🛟' }
    ]
  };

  const breadcrumbs = breadcrumbMap[pathname] || [
    { label: 'Home', href: '/', icon: '🏠' }
  ];

  // Don't show breadcrumbs on home page
  if (pathname === '/') return null;

  return (
    <nav className="bg-white border-b border-gray-200 py-3 md:py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 text-sm md:text-base">
          {breadcrumbs.map((item, index) => (
            <React.Fragment key={item.href}>
              {index > 0 && (
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-gray-900 font-semibold flex items-center py-2 px-3 bg-gray-50 rounded-lg">
                  {item.icon && <span className="mr-2 text-lg">{item.icon}</span>}
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  {item.icon && <span className="mr-2 text-lg">{item.icon}</span>}
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
}

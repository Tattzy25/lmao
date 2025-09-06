'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img 
                src="https://i.imgur.com/JQIz3Q6.png" 
                alt="Scoovio" 
                className="h-8 w-8 mr-2"
              />
              <div className="text-2xl font-bold text-turo-blue">Scoovio</div>
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/renters" className="text-gray-700 hover:text-turo-blue">
              Rent Equipment
            </Link>
            <Link href="/partners" className="text-gray-700 hover:text-turo-blue">
              Become Partner
            </Link>
            <Link href="/how-it-works" className="text-gray-700 hover:text-turo-blue">
              How it works
            </Link>
            <Link href="/ask-scoovio" className="text-gray-700 hover:text-turo-blue">
              Support
            </Link>
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-gray-700 hover:text-turo-blue">
              Log in
            </Link>
            <Link 
              href="/signup" 
              className="bg-turo-blue text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-turo-blue"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/renters" className="block px-3 py-2 text-gray-700">
                Rent Equipment
              </Link>
              <Link href="/partners" className="block px-3 py-2 text-gray-700">
                Become Partner
              </Link>
              <Link href="/how-it-works" className="block px-3 py-2 text-gray-700">
                How it works
              </Link>
              <Link href="/ask-scoovio" className="block px-3 py-2 text-gray-700">
                Support
              </Link>
              <Link href="/login" className="block px-3 py-2 text-gray-700">
                Log in
              </Link>
              <Link href="/signup" className="block px-3 py-2 text-turo-blue font-medium">
                Sign up
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md border-b-2 border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center p-2 rounded-lg hover:bg-gray-50 transition-colors">
              <img 
                src="https://i.imgur.com/JQIz3Q6.png" 
                alt="Scoovio" 
                className="h-10 w-10 mr-3"
              />
              <div className="text-2xl md:text-3xl font-bold text-turo-blue">Scoovio</div>
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            <Link 
              href="/renters" 
              className="text-gray-800 hover:text-turo-blue font-medium px-4 py-3 rounded-lg hover:bg-blue-50 transition-all text-lg"
            >
              🔍 Find Equipment
            </Link>
            <Link 
              href="/partners" 
              className="text-gray-800 hover:text-turo-blue font-medium px-4 py-3 rounded-lg hover:bg-blue-50 transition-all text-lg"
            >
              🏢 Partner With Us
            </Link>
            <Link 
              href="/how-it-works" 
              className="text-gray-800 hover:text-turo-blue font-medium px-4 py-3 rounded-lg hover:bg-blue-50 transition-all text-lg"
            >
              ❓ How It Works
            </Link>
            <Link 
              href="/ask-scoovio" 
              className="text-gray-800 hover:text-turo-blue font-medium px-4 py-3 rounded-lg hover:bg-blue-50 transition-all text-lg"
            >
              💬 Get Help
            </Link>
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Link 
              href="/login" 
              className="text-gray-800 hover:text-turo-blue font-medium px-6 py-3 rounded-lg hover:bg-gray-50 transition-all text-lg"
            >
              Log in
            </Link>
            <Link 
              href="/signup" 
              className="bg-turo-blue text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold text-lg shadow-md hover:shadow-lg transition-all"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-turo-blue p-3 rounded-lg hover:bg-gray-50 transition-colors"
              aria-label="Open menu"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 pt-4 pb-6 space-y-2">
              <Link 
                href="/renters" 
                className="flex items-center px-4 py-4 text-gray-800 hover:bg-blue-50 hover:text-turo-blue rounded-lg transition-colors text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-2xl mr-4">🔍</span>
                Find Equipment
              </Link>
              <Link 
                href="/partners" 
                className="flex items-center px-4 py-4 text-gray-800 hover:bg-blue-50 hover:text-turo-blue rounded-lg transition-colors text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-2xl mr-4">🏢</span>
                Partner With Us
              </Link>
              <Link 
                href="/how-it-works" 
                className="flex items-center px-4 py-4 text-gray-800 hover:bg-blue-50 hover:text-turo-blue rounded-lg transition-colors text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-2xl mr-4">❓</span>
                How It Works
              </Link>
              <Link 
                href="/ask-scoovio" 
                className="flex items-center px-4 py-4 text-gray-800 hover:bg-blue-50 hover:text-turo-blue rounded-lg transition-colors text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-2xl mr-4">💬</span>
                Get Help
              </Link>
              
              <div className="border-t border-gray-200 pt-4 mt-4 space-y-2">
                <Link 
                  href="/login" 
                  className="block px-4 py-4 text-gray-800 hover:bg-gray-50 rounded-lg transition-colors text-lg font-medium text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link 
                  href="/signup" 
                  className="block px-4 py-4 bg-turo-blue text-white hover:bg-blue-700 rounded-lg font-semibold text-lg text-center transition-colors shadow-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

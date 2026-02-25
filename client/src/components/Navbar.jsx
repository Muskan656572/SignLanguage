import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const navLink = (path, label) => (
    <Link
      to={path}
      className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg no-underline ${
        isActive(path)
          ? 'text-brand-600 bg-brand-50'
          : 'text-slate-600 hover:text-brand-600 hover:bg-slate-50'
      }`}
    >
      {label}
    </Link>
  )

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 no-underline group">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-brand-700 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
              </svg>
            </div>
            <div>
              <span className="text-slate-900 font-bold text-lg tracking-tight">SignLingo</span>
              <span className="hidden sm:block text-xs text-slate-400 font-medium -mt-1">Learn Sign Language</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLink('/', 'Home')}
            {navLink('/alphabet', 'Alphabet')}
            {navLink('/words', 'Words')}
            {navLink('/quiz', 'Quiz')}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-3">
            <div className="hidden sm:flex items-center space-x-2 bg-brand-50 text-brand-700 px-3 py-1.5 rounded-full text-xs font-semibold">
              <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse"></span>
              <span>Online</span>
            </div>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-colors border-none bg-transparent cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 pt-2 space-y-1 border-t border-slate-100 mt-2">
            {[['/', 'Home'], ['/alphabet', 'Alphabet'], ['/words', 'Words'], ['/quiz', 'Quiz']].map(([path, label]) => (
              <Link
                key={path}
                to={path}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors no-underline ${
                  isActive(path)
                    ? 'text-brand-600 bg-brand-50'
                    : 'text-slate-600 hover:text-brand-600 hover:bg-slate-50'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

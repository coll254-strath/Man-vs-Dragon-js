import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="sticky top-0 z-50 bg-[var(--background)] border-b border-[var(--border)] backdrop-blur-sm bg-opacity-80">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <span className="text-xl font-bold gradient-text">DevPortfolio</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-[var(--text)] hover:text-[var(--primary)] transition-colors">
              Home
            </Link>
            <Link href="/projects" className="text-[var(--text)] hover:text-[var(--primary)] transition-colors">
              Projects
            </Link>
            <Link href="/about" className="text-[var(--text)] hover:text-[var(--primary)] transition-colors">
              About
            </Link>
            <ThemeToggle />
          </div>
          
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-2 text-[var(--text)] hover:text-[var(--primary)]"
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden py-4 pb-6 space-y-4">
            <Link href="/" className="block text-[var(--text)] hover:text-[var(--primary)]" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/projects" className="block text-[var(--text)] hover:text-[var(--primary)]" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
            <Link href="/about" className="block text-[var(--text)] hover:text-[var(--primary)]" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
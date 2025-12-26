import { Link } from 'react-router-dom'
import ThemeToggle from './ui/ThemeToggle'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Name */}
          <div className="flex-1">
            <Link to="/" className="text-xl font-bold hover:text-blue-600 dark:hover:text-blue-400 transition">
              Luke Smith
            </Link>
          </div>
          
          {/* Center: Navigation */}
          <nav className="flex-1 flex justify-center items-center gap-8">
            <Link 
              to="/" 
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Home
            </Link>
            <Link 
              to="/gallery" 
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Gallery
            </Link>
            <Link 
              to="/resume" 
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Resume
            </Link>
            <Link 
              to="/contact" 
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Contact
            </Link>
          </nav>
          
          {/* Right: LinkedIn + Theme toggle */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <a 
              href="https://google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              aria-label="LinkedIn"
            >
              <svg 
                className="w-6 h-6" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}


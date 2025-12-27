import { NavLink, Link } from 'react-router-dom'
import ThemeToggle from './ui/ThemeToggle'

const getNavLinkClass = (isActive: boolean) => {
  return `relative hover:text-gray-600 dark:hover:text-gray-400 transition pb-1 ${
    isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-gray-900 dark:after:bg-gray-100 after:transition-all after:duration-300 after:ease-out`
}

export default function Header() {
  return (
    <header className="sticky top-0 py-8 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm ">
      <div className="px-6 sm:px-12 lg:px-20 xl:px-28">
        <div className="flex justify-between items-center h-16 gap-8">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold hover:text-gray-600 dark:hover:text-gray-400 transition">
              Luke Smith
            </Link>
          </div>
          
          <nav className="flex-1 flex justify-center items-center gap-8">
            <NavLink to="/" className={({ isActive }) => getNavLinkClass(isActive)}>
              Home
            </NavLink>
            <NavLink to="/gallery" className={({ isActive }) => getNavLinkClass(isActive)}>
              Gallery
            </NavLink>
            <NavLink to="/resume" className={({ isActive }) => getNavLinkClass(isActive)}>
              Resume
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => getNavLinkClass(isActive)}>
              Contact
            </NavLink>
          </nav>
          
          <div className="flex-shrink-0 flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
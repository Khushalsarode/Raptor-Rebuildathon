import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'NEWSROOM', href: '/newsroom' },
  { label: 'SEARCH', href: '/search' },
  { label: 'UPLOAD', href: '/uploadinfo' },
  { label: 'MATCH', href: '/match' },
  { label: 'ABOUT', href: '/about' },
  { label: 'CONTACT', href: '/contact' },
  { label: 'JOIN', href: '/join' },
]

const Navbar = () => {
  const location = useLocation()

  return (
    <nav className="bg-ocean-lightPrimary dark:bg-ocean-darkPrimary text-ocean-lightBg2 dark:text-ocean-darkText shadow-md transition-colors">
      <ul className="flex flex-wrap justify-center sm:justify-between max-w-5xl mx-auto px-6 py-3 space-x-4 sm:space-x-8 text-sm sm:text-base font-semibold tracking-wide uppercase">
        {navItems.map(({ label, href }) => {
          const isActive = location.pathname === href

          return (
            <li key={label}>
              <Link
                to={href}
                className={`block px-3 py-2 rounded-md cursor-pointer transition-colors duration-300
                  ${
                    isActive
                      ? 'text-ocean-lightPrimary dark:text-ocean-darkPrimary bg-ocean-lightSecondary dark:bg-ocean-darkSecondary border-b-2 border-ocean-lightPrimary dark:border-ocean-darkPrimary'
                      : 'text-ocean-lightBg2 dark:text-ocean-darkText hover:bg-ocean-lightSecondary dark:hover:bg-ocean-darkSecondary hover:text-ocean-lightPrimary dark:hover:text-ocean-darkPrimary'
                  }
                `}
                aria-label={label}
              >
                {label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar

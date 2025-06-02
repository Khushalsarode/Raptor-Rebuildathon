import React, { useState, useEffect, useRef } from 'react'
import pagesData from '../PagesData/PagesData' 
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar' 
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
const Header = () => {
  const [theme, setTheme] = useState('light')
  const [user, setUser] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const menuRef = useRef(null)
  const navigate = useNavigate()

  const handleSearchSubmit = (e) => {
  e.preventDefault()
  if (searchQuery.trim() === '') return

  const query = searchQuery.toLowerCase()
  const matchedPage = pagesData.find(page =>
    page.title.toLowerCase().includes(query) ||
    page.keywords.some(keyword => keyword.includes(query))
  )

  if (matchedPage) {
    navigate(matchedPage.path)
  } else {
    alert('No matching page found.')
  }
}


  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const handleLogin = () => {
    setUser({
      name: 'JaneDoe',
      avatarUrl: '/user-avatar.png',
    })
  }

  const handleLogout = () => {
    setUser(null)
    setMenuOpen(false)
  }


  return (
<header className="bg-ocean-lightPrimary dark:bg-ocean-darkPrimary text-ocean-lightBg2 dark:text-ocean-darkText shadow-md transition-colors duration-500 rounded-b-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">
        {/* Left: Logo + Title */}
<div className="flex items-center space-x-6">
    <div className="w-16 h-16 rounded-full bg-[#FFF7ED] flex items-center justify-center shadow-md">
      <img
        src={logo}
        alt="WatchWhale Logo"
        className="w-14 h-14 object-cover rounded-full"
      />
    </div>
     <h1 className="text-3xl font-bold tracking-wide select-none text-ocean-lightText dark:text-ocean-darkText">
      WHALE<span className="font-extrabold">MATCH</span>
    </h1>
  </div>


        {/* Right: User info + Logout + Theme toggle + Search */}
        <div className="flex right-0 items-center space-x-4 text-sm sm:text-base relative" ref={menuRef}>
          {user ? (
            <>
              {/* Avatar - toggles menu */}
              <img
                src={user.avatarUrl}
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover cursor-pointer hover:ring-2 hover:ring-ocean-lightSecondary dark:hover:ring-ocean-darkSecondary transition"
                title={user.name}
                onClick={() => setMenuOpen(!menuOpen)}
              />
              <span className="font-semibold select-none">{user.name}</span>

             {/* Dropdown menu */}
{menuOpen && (
  <div className="absolute right-0 top-full mt-2 w-40 bg-ocean-lightButton dark:bg-ocean-darkButton rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
    <ul className="py-1 text-ocean-lightPrimary dark:text-ocean-darkPrimary text-base">
      <li className="px-4 py-2 hover:bg-ocean-lightSecondary dark:hover:bg-ocean-darkSecondary cursor-pointer flex items-center gap-2">
        <Link
          to="/profile"
          className="flex items-center gap-2 text-ocean-lightPrimary dark:text-ocean-darkPrimary hover:underline"
        >
          <span>👤</span>
          <span>Profile</span>
        </Link>
      </li>
      <li className="px-4 py-2 hover:bg-ocean-lightSecondary dark:hover:bg-ocean-darkSecondary cursor-pointer flex items-center gap-2">
        <Link
          to="/settings"
          className="flex items-center gap-2 text-ocean-lightPrimary dark:text-ocean-darkPrimary hover:underline"
        >
          <span>⚙️</span>
          <span>Settings</span>
        </Link>
      </li>
      <li className="px-4 py-2 hover:bg-ocean-lightSecondary dark:hover:bg-ocean-darkSecondary cursor-pointer flex items-center gap-2">
        <Link
          to="/dashboard"
          className="flex items-center gap-2 text-ocean-lightPrimary dark:text-ocean-darkPrimary hover:underline"
        >
          <span>📊</span>
          <span>Dashboard</span>
        </Link>
      </li>
    </ul>
  </div>
)}


              {/* Logout button */}
              <button
                onClick={handleLogout}
                className="text-red-600 hover:text-red-800 font-semibold transition"
                aria-label="Logout"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={handleLogin}
              className="bg-ocean-lightButton dark:bg-ocean-darkButton text-ocean-lightPrimary dark:text-ocean-darkPrimary px-3 py-1 rounded shadow hover:bg-ocean-lightSecondary dark:hover:bg-ocean-darkSecondary transition-colors"
            >
              Login
            </button>
          )}

          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            className="bg-ocean-lightButton dark:bg-ocean-darkButton text-ocean-lightPrimary dark:text-ocean-darkPrimary px-3 py-1 rounded shadow hover:bg-ocean-lightSecondary dark:hover:bg-ocean-darkSecondary transition-colors whitespace-nowrap"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌅 Coral Bay' : '🌊 Deep Dive'}
          </button>

            {/* Search form */}
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center border border-ocean-lightSecondary dark:border-ocean-darkSecondary rounded-md overflow-hidden"
          >
            <input
              type="text"
              aria-label="Search the web"
              placeholder="Search the web..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-3 py-1 w-48 text-ocean-lightSecondary dark:text-ocean-darkSecondary bg-transparent placeholder-ocean-lightSecondary dark:placeholder-ocean-darkSecondary focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Search"
              className="px-3 py-1 bg-ocean-lightPrimary dark:bg-ocean-darkPrimary text-ocean-lightBg2 dark:text-ocean-darkText hover:bg-ocean-lightSecondary dark:hover:bg-ocean-darkSecondary transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
      <Navbar />
    </header>
  )
}

export default Header

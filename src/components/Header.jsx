import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'
import { site } from '../data/site'

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Header({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // Close the mobile menu whenever the page changes.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const linkClass = ({ isActive }) =>
    `relative px-1 py-1 text-[0.95rem] font-medium no-underline transition-colors ${
      isActive ? 'text-[var(--text)]' : 'text-[var(--muted)] hover:text-[var(--text)]'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--bg)_85%,transparent)] backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 no-underline" aria-label="Home">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--text)] font-display text-xl text-[var(--bg)]">
            M
          </span>
          <span className="font-display text-xl">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={linkClass}>
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-0 right-0 h-px bg-[var(--accent)]"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-[var(--line)] bg-[var(--surface)]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <motion.path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                animate={{ d: open ? 'M6 6L18 18' : 'M4 7H20' }}
              />
              <motion.path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                animate={{ opacity: open ? 0 : 1 }}
                d="M4 12H20"
              />
              <motion.path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                animate={{ d: open ? 'M6 18L18 6' : 'M4 17H20' }}
              />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-[var(--line)] bg-[var(--bg)] md:hidden"
          >
            <ul className="wrap m-0 flex list-none flex-col gap-1 py-4 pl-0">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    className={({ isActive }) =>
                      `block rounded-xl px-3 py-3 text-lg no-underline ${
                        isActive
                          ? 'bg-[var(--surface)] text-[var(--text)]'
                          : 'text-[var(--muted)]'
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

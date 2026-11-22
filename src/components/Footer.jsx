import { Link } from 'react-router-dom'
import { site } from '../data/site'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--line)]">
      <div className="wrap flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
        <div>
          <p className="m-0 font-display text-2xl">{site.name}</p>
          <p className="m-0 text-sm text-[var(--muted)]">
            React developer building dashboards, POS systems and AI web apps.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm" aria-label="Footer">
          <Link to="/projects" className="text-[var(--muted)] no-underline hover:text-[var(--text)]">
            Projects
          </Link>
          <Link to="/contact" className="text-[var(--muted)] no-underline hover:text-[var(--text)]">
            Contact
          </Link>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="text-[var(--muted)] no-underline hover:text-[var(--text)]"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-[var(--muted)] no-underline hover:text-[var(--text)]"
          >
            LinkedIn
          </a>
        </nav>
      </div>
      <div className="wrap pb-8 text-xs text-[var(--muted)]">
        &copy; {new Date().getFullYear()} {site.name}. Built with React, Vite and Tailwind CSS.
      </div>
    </footer>
  )
}

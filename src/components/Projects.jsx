import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { categories, projects } from '../data/projects'

// `limit` shows only the first few projects (used on the home page).
// `filterable` turns on the category filter, which is kept in state.
export default function Projects({ limit, filterable = false }) {
  const [active, setActive] = useState('All')

  const visible = useMemo(() => {
    const list = active === 'All' ? projects : projects.filter((p) => p.category === active)
    return limit ? list.slice(0, limit) : list
  }, [active, limit])

  return (
    <div>
      {filterable && (
        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
          {categories.map((c) => {
            const isActive = c === active
            return (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                aria-pressed={isActive}
                className="relative cursor-pointer rounded-full border border-[var(--line)] px-4 py-2 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--text)] aria-pressed:text-[var(--bg)]"
              >
                {isActive && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-[var(--text)]"
                    transition={{ type: 'spring', stiffness: 500, damping: 36 }}
                  />
                )}
                <span className="relative">{c}</span>
              </button>
            )
          })}
        </div>
      )}

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </AnimatePresence>
      </motion.div>

      {visible.length === 0 && (
        <p className="text-[var(--muted)]">No projects in this category yet.</p>
      )}
    </div>
  )
}

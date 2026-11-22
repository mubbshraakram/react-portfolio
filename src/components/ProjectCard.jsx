import { motion } from 'framer-motion'
import ProjectArt from './ProjectArt'

// React 19 passes `ref` as a normal prop. AnimatePresence needs it to measure the card while it exits.
export default function ProjectCard({ project, ref }) {
  const { title, category, summary, stack, live, code, art, image } = project

  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="surface group flex flex-col overflow-hidden"
    >
      <div className="aspect-[16/8.5] overflow-hidden border-b border-[var(--line)]">
        {image ? (
          <img src={image} alt={`${title} screenshot`} className="h-full w-full object-cover" loading="lazy" />
        ) : (
          <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.04]">
            <ProjectArt type={art} />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="m-0 text-3xl">{title}</h3>
          <span className="mt-1 shrink-0 rounded-full border border-[var(--line)] px-2.5 py-0.5 text-xs text-[var(--muted)]">
            {category}
          </span>
        </div>

        <p className="mb-4 mt-3 flex-1 text-[0.95rem] text-[var(--muted)]">{summary}</p>

        <ul className="m-0 mb-5 flex list-none flex-wrap gap-1.5 p-0">
          {stack.map((s) => (
            <li key={s} className="rounded-md bg-[var(--raised)] px-2 py-1 text-xs text-[var(--text)]">
              {s}
            </li>
          ))}
        </ul>

        <div className="flex gap-4 text-sm font-semibold">
          {live ? (
            <a href={live} target="_blank" rel="noreferrer" className="text-[var(--text)] underline decoration-[var(--accent)] underline-offset-4">
              Live demo
            </a>
          ) : (
            <span className="text-[var(--muted)]">Not deployed yet</span>
          )}
          {code && (
            <a href={code} target="_blank" rel="noreferrer" className="text-[var(--muted)] underline underline-offset-4 hover:text-[var(--text)]">
              Code on GitHub
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

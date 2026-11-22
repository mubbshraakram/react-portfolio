import { skillGroups } from '../data/site'

const all = skillGroups.flatMap((g) => g.items)

export default function Skills() {
  return (
    <div>
      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((g) => (
          <div key={g.title} className="surface p-6">
            <h3 className="m-0 mb-4 text-2xl">{g.title}</h3>
            <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-[var(--line)] bg-[var(--bg)] px-3.5 py-1.5 text-sm transition-colors hover:border-[var(--accent)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Decorative tool strip. Hidden from screen readers because the lists above carry the same content. */}
      <div className="marquee mt-8 overflow-hidden border-y border-[var(--line)] py-4" aria-hidden="true">
        <div className="marquee-track">
          {[...all, ...all].map((item, i) => (
            <span key={i} className="mx-6 whitespace-nowrap font-display text-2xl text-[var(--muted)]">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

import { services } from '../data/site'

export default function Services() {
  return (
    <ul className="m-0 grid list-none gap-5 p-0 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((s) => (
        <li key={s.title} className="border-t border-[var(--line)] pt-5">
          <h3 className="m-0 mb-2 text-3xl">{s.title}</h3>
          <p className="m-0 text-[0.95rem] text-[var(--muted)]">{s.text}</p>
        </li>
      ))}
    </ul>
  )
}

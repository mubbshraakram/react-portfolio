export default function SectionHeading({ title, id, children }) {
  return (
    <div className="mb-10 max-w-[38rem]">
      <h2 id={id} className="m-0 text-[clamp(2.2rem,4.5vw,3.4rem)]">{title}</h2>
      {children && <p className="mb-0 mt-3 text-[var(--muted)]">{children}</p>}
    </div>
  )
}

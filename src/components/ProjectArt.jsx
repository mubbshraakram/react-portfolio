// Small SVG illustrations used on project cards until real screenshots are added.
// They use theme colors, so they follow dark and light mode automatically.

const stroke = {
  fill: 'none',
  stroke: 'var(--muted)',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export default function ProjectArt({ type }) {
  return (
    <svg viewBox="0 0 320 170" className="block h-full w-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <rect width="320" height="170" fill="var(--bg)" />
      {type === 'chat' && <Chat />}
      {type === 'chart' && <Chart />}
      {type === 'kanban' && <Kanban />}
      {type === 'pos' && <Pos />}
      {type === 'bloom' && <Bloom />}
      {type === 'radar' && <Radar />}
    </svg>
  )
}

function Chat() {
  return (
    <g>
      <rect x="40" y="26" width="150" height="40" rx="14" fill="var(--raised)" />
      <path d="M60 46h86M60 56h54" {...stroke} />
      <rect x="130" y="82" width="150" height="48" rx="14" fill="var(--accent-soft)" stroke="var(--accent)" strokeWidth="2" />
      <path d="M150 100h96M150 112h60" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
      <path d="M262 28l3 8 8 3-8 3-3 8-3-8-8-3 8-3 3-8Z" fill="var(--accent)" />
    </g>
  )
}

function Chart() {
  const heights = [34, 58, 44, 76, 62, 96]
  return (
    <g>
      {heights.map((h, i) => (
        <rect key={i} x={46 + i * 38} y={140 - h} width="24" height={h} rx="5" fill="var(--raised)" />
      ))}
      <path d="M58 100L96 78L134 90L172 56L210 66L248 34" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="248" cy="34" r="5" fill="var(--accent)" />
      <path d="M36 142H284" {...stroke} stroke="var(--line)" />
    </g>
  )
}

function Kanban() {
  const cols = [
    { x: 30, cards: [34, 26] },
    { x: 118, cards: [26, 34, 26] },
    { x: 206, cards: [30] },
  ]
  return (
    <g>
      {cols.map((c, ci) => (
        <g key={ci}>
          <rect x={c.x} y="24" width="84" height="122" rx="12" fill="var(--surface)" stroke="var(--line)" />
          <rect x={c.x + 12} y="34" width="30" height="5" rx="2.5" fill="var(--muted)" />
          {c.cards.map((h, i) => {
            const y = 50 + c.cards.slice(0, i).reduce((a, b) => a + b + 8, 0)
            const lit = ci === 1 && i === 0
            return (
              <rect
                key={i}
                x={c.x + 10}
                y={y}
                width="64"
                height={h}
                rx="7"
                fill={lit ? 'var(--accent-soft)' : 'var(--raised)'}
                stroke={lit ? 'var(--accent)' : 'none'}
                strokeWidth="1.5"
              />
            )
          })}
        </g>
      ))}
    </g>
  )
}

function Pos() {
  return (
    <g>
      <path d="M92 20h96v124l-16-10-16 10-16-10-16 10-16-10V20Z" fill="var(--raised)" />
      <path d="M108 44h64M108 62h64M108 80h40" {...stroke} />
      <path d="M108 104h64" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" />
      <g transform="translate(212 54)">
        {[0, 8, 14, 22, 28, 38, 44].map((x, i) => (
          <rect key={i} x={x} width={i % 2 ? 3 : 5} height="40" fill="var(--muted)" />
        ))}
      </g>
    </g>
  )
}

function Bloom() {
  return (
    <g transform="translate(160 84)">
      {[0, 60, 120, 180, 240, 300].map((r) => (
        <ellipse key={r} cx="0" cy="-30" rx="15" ry="28" transform={`rotate(${r})`} fill="var(--raised)" stroke="var(--line)" />
      ))}
      <circle r="12" fill="var(--accent)" />
    </g>
  )
}

function Radar() {
  return (
    <g transform="translate(160 86)">
      {[64, 44, 24].map((r) => (
        <circle key={r} r={r} fill="none" stroke="var(--line)" />
      ))}
      <path d="M0 0L52 -34" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="52" cy="-34" r="5" fill="var(--accent)" />
      <circle cx="-30" cy="22" r="4" fill="var(--muted)" />
      <circle cx="18" cy="38" r="4" fill="var(--muted)" />
    </g>
  )
}

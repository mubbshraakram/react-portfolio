import { motion } from 'framer-motion'

const bars = [38, 62, 48, 80, 66, 96, 74, 112]
const linePoints = [
  [0, 120],
  [1, 98],
  [2, 108],
  [3, 76],
  [4, 86],
  [5, 52],
  [6, 62],
  [7, 28],
]

const xFor = (i) => 44 + i * 52
const linePath = linePoints
  .map(([i, y], idx) => `${idx === 0 ? 'M' : 'L'} ${xFor(i) + 14} ${y + 70}`)
  .join(' ')

// One orchestrated entrance: panel, then bars, then the line, then the chips.
export default function DashboardGraphic() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]" aria-hidden="true">
      <div className="grid-bg absolute inset-0 sm:inset-[-12%]" />

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="surface relative overflow-hidden p-5"
        style={{ boxShadow: 'var(--shadow)' }}
      >
        <div className="mb-4 flex items-center justify-between">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--line)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--line)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--line)]" />
          </div>
          <div className="h-2 w-24 rounded-full bg-[var(--raised)]" />
        </div>

        <svg viewBox="0 0 480 240" className="block w-full">
          {[0, 1, 2, 3].map((n) => (
            <line
              key={n}
              x1="20"
              x2="470"
              y1={40 + n * 52}
              y2={40 + n * 52}
              stroke="var(--line)"
              strokeDasharray="3 6"
            />
          ))}

          {bars.map((h, i) => (
            <motion.rect
              key={i}
              x={xFor(i)}
              width="28"
              rx="6"
              y={216 - h}
              height={h}
              fill="var(--line)"
              style={{ transformOrigin: `${xFor(i) + 14}px 216px` }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.5 + i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}

          <motion.path
            d={linePath}
            fill="none"
            stroke="var(--accent)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.1, duration: 1.2, ease: 'easeInOut' }}
          />

          {linePoints.map(([i, y], idx) => (
            <motion.circle
              key={idx}
              cx={xFor(i) + 14}
              cy={y + 70}
              r={idx === linePoints.length - 1 ? 6 : 3.5}
              fill={idx === linePoints.length - 1 ? 'var(--accent)' : 'var(--surface)'}
              stroke="var(--accent)"
              strokeWidth="2"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ transformOrigin: `${xFor(i) + 14}px ${y + 70}px` }}
              transition={{ delay: 1.1 + idx * 0.15, duration: 0.3 }}
            />
          ))}
        </svg>
      </motion.div>

      <Chip className="-left-3 top-[58%] sm:-left-8" delay={2.0} label="POS" icon="receipt" />
      <Chip className="-right-2 top-[10%] sm:-right-6" delay={2.2} label="AI" icon="spark" />
      <Chip className="-right-1 bottom-[-4%] sm:-right-4" delay={2.4} label="Dashboards" icon="chart" />
    </div>
  )
}

function Chip({ className, delay, label, icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--raised)] px-3.5 py-2 text-sm font-semibold ${className}`}
      style={{ boxShadow: 'var(--shadow)' }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {icon === 'receipt' && (
          <>
            <path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z" />
            <path d="M9 8h6M9 12h6" />
          </>
        )}
        {icon === 'spark' && <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />}
        {icon === 'chart' && <path d="M4 20V10M10 20V4M16 20v-8M22 20H2" />}
      </svg>
      {label}
    </motion.div>
  )
}

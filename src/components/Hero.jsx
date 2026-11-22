import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import DashboardGraphic from './DashboardGraphic'
import { site } from '../data/site'

const rise = {
  hidden: { opacity: 0, y: 22 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section className="wrap grid items-center gap-14 pb-10 pt-14 md:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
      <div>
        <motion.p
          custom={0}
          variants={rise}
          initial="hidden"
          animate="show"
          className="m-0 mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-3.5 py-1.5 text-sm text-[var(--muted)]"
        >
          <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
          {site.role} from Pakistan
        </motion.p>

        <motion.h1
          custom={1}
          variants={rise}
          initial="hidden"
          animate="show"
          className="m-0 text-[clamp(2.8rem,7vw,5.2rem)]"
        >
          I build dashboards, POS systems and AI web apps.
        </motion.h1>

        <motion.p
          custom={2}
          variants={rise}
          initial="hidden"
          animate="show"
          className="mb-0 mt-6 max-w-[34rem] text-lg text-[var(--muted)]"
        >
          I am a BSIT student at the University of the Punjab. I turn business ideas into fast,
          clean React apps that people can actually use.
        </motion.p>

        <motion.div
          custom={3}
          variants={rise}
          initial="hidden"
          animate="show"
          className="mt-9 flex flex-wrap gap-3"
        >
          <Link to="/projects" className="btn btn-primary">
            View projects
          </Link>
          <Link to="/contact" className="btn">
            Contact me
          </Link>
        </motion.div>
      </div>

      <DashboardGraphic />
    </section>
  )
}

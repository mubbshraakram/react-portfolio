import { Link } from 'react-router-dom'
import Skills from '../components/Skills'
import SectionHeading from '../components/SectionHeading'

export default function About() {
  return (
    <>
      <section className="wrap grid gap-12 pt-16 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <SectionHeading title="About me" />
          <div className="flex max-w-[36rem] flex-col gap-5 text-lg">
            <p className="m-0">
              I am a React developer. I build admin dashboards, POS systems and web apps with AI
              features, and I deploy them so you can use them straight away.
            </p>
            <p className="m-0 text-[var(--muted)]">
              I started in cybersecurity and moved fully into full-stack and frontend development
              because I enjoy building things people use every day.
            </p>
            <div className="pt-2">
              <Link to="/contact" className="btn btn-primary">
                Work with me
              </Link>
            </div>
          </div>
        </div>

        <aside className="surface h-fit p-6" aria-label="Education">
          <h3 className="m-0 mb-4 text-3xl">Education</h3>
          <p className="m-0 font-semibold">BS Information Technology</p>
          <p className="m-0 text-[var(--muted)]">University of the Punjab</p>
          <div className="mt-5 flex items-baseline gap-2 border-t border-[var(--line)] pt-5">
            <span className="font-display text-5xl">3.58</span>
            <span className="text-sm text-[var(--muted)]">CGPA</span>
          </div>
        </aside>
      </section>

      <section className="wrap pt-24">
        <SectionHeading title="Skills">The tools I use to build and ship.</SectionHeading>
        <Skills />
      </section>
    </>
  )
}

import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Projects from '../components/Projects'
import SectionHeading from '../components/SectionHeading'

export default function Home() {
  return (
    <>
      <Hero />

      <section className="wrap pt-24" aria-labelledby="services-title">
        <SectionHeading id="services-title" title="What I can build for you" />
        <Services />
      </section>

      <section className="wrap pt-24" aria-labelledby="featured-title">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading id="featured-title" title="Recent projects">
            Live apps you can open and try right now.
          </SectionHeading>
          <Link to="/projects" className="btn mb-10">
            See all projects
          </Link>
        </div>
        <Projects limit={3} />
      </section>
    </>
  )
}

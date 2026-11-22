import Projects from '../components/Projects'
import SectionHeading from '../components/SectionHeading'

export default function ProjectsPage() {
  return (
    <section className="wrap pt-16">
      <SectionHeading title="Projects">
        Dashboards, a POS system and AI apps. Use the filters to narrow them down.
      </SectionHeading>
      <Projects filterable />
    </section>
  )
}

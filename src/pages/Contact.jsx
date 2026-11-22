import ContactForm from '../components/ContactForm'
import SectionHeading from '../components/SectionHeading'
import { site } from '../data/site'

export default function Contact() {
  return (
    <section className="wrap grid gap-12 pt-16 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <SectionHeading title="Let's talk">
          Have a dashboard, POS or AI idea? Tell me what you need and I will get back to you.
        </SectionHeading>
        <ul className="m-0 list-none space-y-3 p-0">
          {site.email && (
            <li>
              <a href={`mailto:${site.email}`} className="underline underline-offset-4">
                {site.email}
              </a>
            </li>
          )}
          <li>
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="underline underline-offset-4">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={site.github} target="_blank" rel="noreferrer" className="underline underline-offset-4">
              GitHub
            </a>
          </li>
        </ul>
      </div>
      <ContactForm />
    </section>
  )
}

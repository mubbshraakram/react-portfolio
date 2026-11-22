import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="wrap pt-24 text-center">
      <h1 className="m-0 text-[clamp(3rem,8vw,6rem)]">Page not found</h1>
      <p className="mx-auto mb-8 mt-4 max-w-md text-[var(--muted)]">
        This address does not exist. Go back to the home page or browse the projects.
      </p>
      <div className="flex justify-center gap-3">
        <Link to="/" className="btn btn-primary">
          Back to home
        </Link>
        <Link to="/projects" className="btn">
          View projects
        </Link>
      </div>
    </section>
  )
}

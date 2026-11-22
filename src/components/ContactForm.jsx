import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { site } from '../data/site'

const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT

const initial = { name: '', email: '', message: '' }

function validate(values) {
  const errors = {}
  if (values.name.trim().length < 2) errors.name = 'Enter your name (at least 2 characters).'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    errors.email = 'Enter a valid email address, like name@example.com.'
  if (values.message.trim().length < 10)
    errors.message = 'Write a message of at least 10 characters.'
  return errors
}

export default function ContactForm() {
  const [values, setValues] = useState(initial)
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | unconfigured | error

  const errors = validate(values)

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }))
  const onBlur = (e) => setTouched((t) => ({ ...t, [e.target.name]: true }))
  const showError = (field) => touched[field] && errors[field]

  async function onSubmit(e) {
    e.preventDefault()
    setTouched({ name: true, email: true, message: true })
    if (Object.keys(errors).length > 0) return

    if (!ENDPOINT) {
      setStatus('unconfigured')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      setValues(initial)
      setTouched({})
    } catch {
      setStatus('error')
    }
  }

  const fields = [
    { name: 'name', label: 'Your name', type: 'text', autoComplete: 'name' },
    { name: 'email', label: 'Your email', type: 'email', autoComplete: 'email' },
  ]

  return (
    <form onSubmit={onSubmit} noValidate className="surface p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((f) => (
          <div key={f.name}>
            <label htmlFor={f.name} className="mb-1.5 block text-sm font-medium">
              {f.label}
            </label>
            <input
              id={f.name}
              name={f.name}
              type={f.type}
              autoComplete={f.autoComplete}
              value={values[f.name]}
              onChange={onChange}
              onBlur={onBlur}
              className="field"
              aria-invalid={Boolean(showError(f.name))}
              aria-describedby={showError(f.name) ? `${f.name}-error` : undefined}
            />
            <FieldError id={`${f.name}-error`} message={showError(f.name)} />
          </div>
        ))}
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={values.message}
          onChange={onChange}
          onBlur={onBlur}
          className="field resize-y"
          placeholder="Tell me about your project."
          aria-invalid={Boolean(showError('message'))}
          aria-describedby={showError('message') ? 'message-error' : undefined}
        />
        <FieldError id="message-error" message={showError('message')} />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Send message'}
        </button>

        <div aria-live="polite" className="text-sm">
          {status === 'sent' && <p className="m-0 text-[var(--text)]">Message sent. I will reply soon.</p>}
          {status === 'error' && (
            <p className="m-0 text-[#d9605a]">
              The message did not send. Check your connection and try again.
            </p>
          )}
          {status === 'unconfigured' && (
            <p className="m-0 text-[var(--muted)]">
              Your details look good, but this form is not connected to an inbox yet. Please reach me
              on{' '}
              <a href={site.linkedin} target="_blank" rel="noreferrer" className="text-[var(--text)] underline">
                LinkedIn
              </a>{' '}
              instead.
            </p>
          )}
        </div>
      </div>
    </form>
  )
}

function FieldError({ id, message }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.p
          id={id}
          role="alert"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="m-0 mt-1.5 overflow-hidden text-sm text-[#d9605a]"
        >
          {message}
        </motion.p>
      )}
    </AnimatePresence>
  )
}

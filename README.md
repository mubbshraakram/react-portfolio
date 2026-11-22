# react-portfolio

Personal portfolio of Mubbshra Akram, a React developer who builds admin dashboards, POS systems and AI-integrated web apps.

Built for the AppRo8 frontend internship (Task 2).

## Features

- React app made with Vite
- Reusable components: Header, Hero, Projects, Skills, Contact form, Footer
- React Router with Home, Projects, About, Contact and a 404 page
- Projects section with project cards. The category filter is managed with React state
- Contact form with validation (name, email format, message length)
- Dark and light mode toggle. It follows the system theme on first visit and remembers your choice
- Fully responsive, with a mobile menu
- Animations with Framer Motion. They are turned off for visitors who prefer reduced motion

## Tech stack

React 19, Vite, React Router, Tailwind CSS v4, Framer Motion

## Run it locally

You need Node.js 18 or newer.

```bash
git clone https://github.com/mubbshraakram/react-portfolio.git
cd react-portfolio
npm install
npm run dev
```

Open the address shown in the terminal (usually http://localhost:5173).

Other commands:

```bash
npm run build     # production build in /dist
npm run preview   # preview the production build
```

## Edit your content

| What to change | File |
| --- | --- |
| Name, links, email, services, skills | `src/data/site.js` |
| Projects (title, text, links, tags) | `src/data/projects.js` |
| Colors for dark and light mode | `src/index.css` (the `:root` blocks at the top) |

To show real screenshots instead of the illustrations, put images in `public/projects/` and add `image: '/projects/name.png'` to the project in `src/data/projects.js`.

## Make the contact form send messages

The form validates input in the browser. To receive messages, create a free form endpoint (for example on Formspree), then:

1. Copy `.env.example` to `.env`
2. Set `VITE_FORM_ENDPOINT` to your endpoint URL
3. Restart `npm run dev`. On Vercel or Netlify, add the same variable in the project's environment settings and redeploy

Until an endpoint is set, the form shows a note that it is not connected yet.

## Deploy

**Vercel:** import the GitHub repo. Vercel detects Vite automatically. `vercel.json` already handles page refreshes on routes such as `/projects`.

**Netlify:** import the repo with build command `npm run build` and publish directory `dist`. `public/_redirects` already handles routing.

## Project structure

```
src/
  components/   Header, Hero, Projects, Skills, ContactForm, Footer and more
  pages/        Home, ProjectsPage, About, Contact, NotFound
  data/         site.js and projects.js (all editable content)
  hooks/        useTheme.js (dark and light mode)
```

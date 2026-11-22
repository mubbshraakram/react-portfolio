# react-portfolio

Personal portfolio website of Mubbshra Akram, a React developer who builds admin dashboards, POS systems and AI-integrated web apps.

Built for the AppRo8 frontend internship (Task 2).

## Live demo

https://react-portfolio-drab-ten.vercel.app/

## Features

- Built with React and Vite
- Reusable components: Header, Hero, Projects, Skills, Contact form, Footer
- Page navigation with React Router (Home, Projects, About, Contact)
- Project cards with a category filter managed using React state
- Contact form with validation for name, email and message
- Dark and light mode toggle that remembers your choice
- Fully responsive layout with a mobile menu
- Smooth animations with Framer Motion

## Tech stack

React 19, Vite, React Router, Tailwind CSS, Framer Motion

## Projects shown on the portfolio

- **Ascend AI:** career guidance app (React, Node.js, Groq, Llama 3)
- **SalesMate:** sales dashboard (React, Recharts)
- **TaskFlow:** Kanban board (React, Vite)
- **Vendora POS:** point of sale system (MongoDB, Express, React, Node.js)
- **Beans Blossom:** responsive landing page (React)

## Setup

You need Node.js 18 or newer.

```bash
git clone https://github.com/mubbshraakram/react-portfolio.git
cd react-portfolio
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

To create a production build:

```bash
npm run build
```

## Project structure

```
src/
  components/   Header, Hero, Projects, Skills, ContactForm, Footer
  pages/        Home, Projects, About, Contact, NotFound
  data/         Project and profile data
  hooks/        Dark and light mode hook
```

## Contact

- Email: mubbshraakram@gmail.com
- LinkedIn: https://www.linkedin.com/in/mubbshra-akram-32b556328/
- GitHub: https://github.com/mubbshraakram

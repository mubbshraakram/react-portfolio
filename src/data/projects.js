// All project content lives here. Edit this file to add, remove or change projects.
// `art` picks the illustration shown on the card (see components/ProjectArt.jsx).
// When you have real screenshots, put them in /public/projects and add `image: '/projects/name.png'`.

export const categories = ['All', 'AI', 'Dashboards', 'Full-stack', 'Frontend']

export const projects = [
  {
    id: 'ascend-ai',
    title: 'Ascend AI',
    category: 'AI',
    art: 'chat',
    summary: 'A career guidance app powered by Groq and Llama 3, with a React front end and a Node.js back end.',
    stack: ['React', 'Node.js', 'Groq API', 'Llama 3'],
    live: 'https://ascend-ai-pied.vercel.app/',
    code: 'https://github.com/mubbshraakram',
  },
  {
    id: 'salesmate',
    title: 'SalesMate',
    category: 'Dashboards',
    art: 'chart',
    summary: 'A sales dashboard that turns sales data into charts, built with React and Recharts.',
    stack: ['React', 'Recharts', 'Vercel'],
    live: 'https://sales-dashboard-bice-eight.vercel.app/',
    code: 'https://github.com/mubbshraakram',
  },
  {
    id: 'taskflow',
    title: 'TaskFlow',
    category: 'Frontend',
    art: 'kanban',
    summary:
      'A Kanban board that saves your tasks in the browser, shows a live activity log and works on mobile with a drawer menu.',
    stack: ['React', 'Vite', 'localStorage'],
    live: 'https://task-flow-nine-pink.vercel.app/',
    code: 'https://github.com/mubbshraakram',
  },
  {
    id: 'vendora',
    title: 'Vendora POS',
    category: 'Full-stack',
    art: 'pos',
    summary:
      'A point of sale system with inventory, billing in PKR with GST, barcode support, customers, invoices and sales reports. Admin and cashier roles.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    // Not deployed yet. Replace this with the Vendora repo link.
    code: 'https://github.com/mubbshraakram',
  },
  {
    id: 'beans-blossom',
    title: 'Beans Blossom',
    category: 'Frontend',
    art: 'bloom',
    summary: 'A responsive landing page built as the first task of the AppRo8 frontend internship.',
    stack: ['React', 'Responsive design'],
    live: 'https://landing-page-project-blush.vercel.app/',
  },
]

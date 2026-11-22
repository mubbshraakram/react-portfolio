import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { MotionConfig, motion } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import useTheme from './hooks/useTheme'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    // Braces matter: an effect must not return scrollTo's result.
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  const { theme, toggle } = useTheme()
  const location = useLocation()

  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="skip">
        Skip to content
      </a>
      <ScrollToTop />
      <Header theme={theme} onToggleTheme={toggle} />

      <main id="main">
        {/* Keyed by path so each page fades in when you navigate. */}
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.div>
      </main>

      <Footer />
    </MotionConfig>
  )
}

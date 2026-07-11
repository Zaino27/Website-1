import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import SiteLayout from '@/components/SiteLayout'

import Home from '@/pages/Home'
import About from '@/pages/About'
import Research from '@/pages/Research'
import Projects from '@/pages/Projects'
import Publications from '@/pages/Publications'
import Blog from '@/pages/Blog'
import CV from '@/pages/CV'
import Contact from '@/pages/Contact'
import Interests from '@/pages/Interests'
import InterestDetail from '@/pages/InterestDetail'

function PageNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-obsidian text-bone px-6 text-center">
      <div>
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-emerald-pulse/60">404</p>
        <h1 className="mt-4 text-3xl md:text-5xl font-heading">Page not found</h1>
        <p className="mt-4 text-vellum max-w-md mx-auto">The page you requested does not exist.</p>
        <Link
          to="/"
          className="inline-flex mt-8 items-center justify-center border border-emerald-pulse/30 px-6 py-3 text-[12px] font-mono uppercase tracking-[0.1em] text-emerald-pulse hover:bg-emerald-pulse/10 transition-colors"
        >
          Go home
        </Link>
      </div>
    </div>
  )
}

const routerBase = import.meta.env.BASE_URL === '/' ? undefined : import.meta.env.BASE_URL.replace(/\/$/, '')

function App() {
  return (
    <Router basename={routerBase || undefined}>
      <Routes>
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="research" element={<Research />} />
          <Route path="projects" element={<Projects />} />
          <Route path="publications" element={<Publications />} />
          <Route path="blog" element={<Blog />} />
          <Route path="cv" element={<CV />} />
          <Route path="contact" element={<Contact />} />
          <Route path="interests" element={<Interests />} />
          <Route path="interests/:slug" element={<InterestDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

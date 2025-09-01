import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'

async function loadPreline() {
  return import('preline/dist/index.js')
}

export default function App() {
  const location = useLocation()

  useEffect(() => {
    const initPreline = async () => {
      try {
        await loadPreline()
        if (window.HSStaticMethods?.autoInit) {
          window.HSStaticMethods.autoInit()
        }
      } catch (error) {
        console.error('Error initializing Preline:', error)
      }
    }

    initPreline()
  }, [location.pathname])

  // Smooth scroll to hash targets like /#portfolio
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        // Allow route paint, then scroll
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0)
      }
    }
  }, [location.hash])

  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className="min-h-screen flex flex-col bg-blob-gradient">
      <Header />
      <main className="container mx-auto flex-1">
        <Outlet />
      </main>
      {/* Back to top button */}
      <button
        onClick={toTop}
        aria-label="Back to top"
        className="fixed bottom-6 right-6 z-40 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white shadow-md hover:bg-slate-800"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>
      <Footer />
    </div>
  )
}

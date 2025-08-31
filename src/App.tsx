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

  return (
    <div className="min-h-screen flex flex-col bg-blob-gradient">
      <Header />
      <main className="container mx-auto flex-1 p-6">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

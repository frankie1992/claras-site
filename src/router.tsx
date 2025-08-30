import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import NotFound from './pages/NotFound'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

export default router


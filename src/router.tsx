import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import UBYouProject from './pages/projects/UBYou'
import GatherlyProject from './pages/projects/Gatherly'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="projects/ubyou" element={<UBYouProject />} />
      <Route path="projects/gatherly" element={<GatherlyProject />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

export default router

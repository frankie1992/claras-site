import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">404 — Not Found</h1>
      <p className="mb-4">The page you’re looking for doesn’t exist.</p>
      <Link className="text-blue-600 underline" to="/">Go back home</Link>
    </section>
  )
}


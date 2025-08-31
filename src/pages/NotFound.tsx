import { Link } from 'react-router-dom'
import { NOT_FOUND_TITLE, NOT_FOUND_MESSAGE, NOT_FOUND_BACK_HOME } from '../utils/Constants'

export default function NotFound() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">{NOT_FOUND_TITLE}</h1>
      <p className="mb-4">{NOT_FOUND_MESSAGE}</p>
      <Link className="text-blue-600 underline" to="/">{NOT_FOUND_BACK_HOME}</Link>
    </section>
  )
}

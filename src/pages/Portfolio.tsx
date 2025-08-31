import { PORTFOLIO_TITLE, PORTFOLIO_INTRO } from '../utils/Constants'

export default function Portfolio() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">{PORTFOLIO_TITLE}</h1>
      <p>{PORTFOLIO_INTRO}</p>
    </section>
  )
}

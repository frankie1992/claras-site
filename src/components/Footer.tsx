export default function Footer() {
  return (
    <footer className="border-t bg-lime-50/60">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-3 flex items-center justify-between text-sm">
        <div className="inline-flex items-center gap-2 text-rose-600">
          <svg
            className="size-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          <span>
            Designed with love by <span className="font-medium">Clara Oliva</span>
          </span>
        </div>

        <a
          href="https://github.com/frankie1992"
          target="_blank"
          rel="noreferrer noopener"
          className="text-blue-600 hover:underline"
        >
          Developed by Francisco Miranda
        </a>
      </div>
    </footer>
  )
}


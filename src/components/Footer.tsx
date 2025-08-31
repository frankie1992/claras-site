import { FOOTER_DESIGNED_BY_PREFIX, FOOTER_DESIGNED_BY_NAME, FOOTER_DEV_LINK_URL, FOOTER_DEV_LINK_LABEL } from '../utils/Constants'
import { HeartIcon } from '../utils/icons'

export default function Footer() {
  return (
    <footer className="border-t bg-lime-50/60">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-3 flex items-center justify-between text-sm">
        <div className="inline-flex items-center gap-2 text-rose-600">
          <HeartIcon className="size-4" />
          <span>
            {FOOTER_DESIGNED_BY_PREFIX} <span className="font-medium">{FOOTER_DESIGNED_BY_NAME}</span>
          </span>
        </div>

        <a
          href={FOOTER_DEV_LINK_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="text-blue-600 hover:underline"
        >
          {FOOTER_DEV_LINK_LABEL}
        </a>
      </div>
    </footer>
  )
}

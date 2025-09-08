import { 
  FOOTER_DESIGNED_BY_PREFIX, 
  FOOTER_DESIGNED_BY_NAME, 
  FOOTER_DEV_LINK_URL, 
  FOOTER_DEV_LINK_LABEL,
  FOOTER_DESIGNED_LINK_URL 
} from '../utils/Constants'
import { HeartIcon } from '../utils/icons'

export default function Footer() {
  return (
    <footer className="border-t border-slate-300">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-3 flex flex-col md:flex-row items-center justify-center md:justify-between text-sm">
        <div className="inline-flex items-center gap-2  md:mb-0 mb-1">
          <HeartIcon className="size-4" />
          <a
          href={FOOTER_DESIGNED_LINK_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="text-rose-600 hover:underline"
          data-umami-event="DesignerLinkClicked"
        >
          {FOOTER_DESIGNED_BY_PREFIX} <strong> {FOOTER_DESIGNED_BY_NAME} </strong>
        </a>
        </div>

        <a
          href={FOOTER_DEV_LINK_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="text-blue-600 hover:underline"
          data-umami-event="DeveloperLinkClicked"
        >
          {FOOTER_DEV_LINK_LABEL}
        </a>
      </div>
    </footer>
  )
}

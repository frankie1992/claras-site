import {
  CONTACT_BUTTON_LABEL,
  CONTACT_MODAL_TITLE,
  CONTACT_EMAIL_LABEL,
  CONTACT_EMAIL_PLACEHOLDER,
  CONTACT_MESSAGE_PLACEHOLDER,
  CONTACT_CANCEL_BUTTON,
  CONTACT_SEND_BUTTON,
} from '../utils/Constants'
import { XIcon } from '../utils/icons'

export default function ContactButton() {
    return (
      <div>
        <button
          type="button"
          data-hs-overlay="#hs-basic-modal"
          className="hidden md:inline-flex py-1.5 px-3 items-center gap-x-2 text-sm font-medium text-nowrap rounded-xl border border-transparent bg-rose-500 text-white hover:bg-rose-600 focus:outline-hidden transition disabled:opacity-50 disabled:pointer-events-none"
        >
          {CONTACT_BUTTON_LABEL}
        </button>

        <div
          id="hs-basic-modal"
          className="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-500 hs-overlay-open:pointer-events-auto hidden size-full fixed inset-0 z-50 opacity-0 overflow-x-hidden transition-all overflow-y-auto pointer-events-none flex items-center justify-center p-4"
          role="dialog"
          aria-labelledby="hs-basic-modal-label"
        >
          <div className="w-full sm:max-w-lg">
            <div className="pointer-events-auto overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-xl">
              {/* Header */}
              <div className="relative px-6 py-4 bg-lime-50">
                <h3 id="hs-basic-modal-label" className="text-center font-semibold text-slate-900">
                  {CONTACT_MODAL_TITLE}
                </h3>
                <button
                  type="button"
                  aria-label="Close"
                  data-hs-overlay="#hs-basic-modal"
                  className="absolute right-3 top-3 inline-flex size-8 items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
                >
                  <XIcon className="size-4" />
                </button>
              </div>

              {/* Body */}
              <form className="px-6 py-4 space-y-4 bg-lime-50">
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{CONTACT_EMAIL_LABEL}</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400" aria-hidden="true">
                      <svg className="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </span>
                    <input
                      type="email"
                      required
                      placeholder={CONTACT_EMAIL_PLACEHOLDER}
                      className="w-full rounded-lg border border-slate-200 bg-white pl-9 pr-3 py-2 text-slate-900 placeholder-slate-400 outline-none focus:border-slate-300 focus:ring-2 focus:ring-slate-200"
                    />
                  </div>
                </div>

                {/* Message editor */}
                <div className="rounded-xl border border-slate-200 bg-white">
                  {/* Textarea */}
                  <textarea
                    rows={5}
                    placeholder={CONTACT_MESSAGE_PLACEHOLDER}
                    className="w-full resize-y p-3 outline-none rounded-b-xl bg-white"
                  />
                </div>
              </form>
              {/* Pixel heart */}
              <div className="py-6 flex justify-center" aria-hidden>
                <svg
                  className="w-10 h-10"
                  viewBox="0 0 10 9"
                  shapeRendering="crispEdges"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* red pixels */}
                  <rect x="2" y="1" width="2" height="1" fill="#ef4444"/>
                  <rect x="6" y="1" width="2" height="1" fill="#ef4444"/>
                  <rect x="1" y="2" width="4" height="1" fill="#ef4444"/>
                  <rect x="5" y="2" width="4" height="1" fill="#ef4444"/>
                  <rect x="0" y="3" width="10" height="1" fill="#ef4444"/>
                  <rect x="0" y="4" width="10" height="1" fill="#ef4444"/>
                  <rect x="1" y="5" width="8" height="1" fill="#ef4444"/>
                  <rect x="2" y="6" width="6" height="1" fill="#ef4444"/>
                  <rect x="3" y="7" width="4" height="1" fill="#ef4444"/>
                  <rect x="4" y="8" width="2" height="1" fill="#ef4444"/>
                  {/* tiny highlight */}
                  <rect x="2" y="2" width="1" height="1" fill="#fde68a"/>
                </svg>
              </div>

              {/* Footer */}
              <div className="px-6 py-3 bg-violet-100 flex justify-end gap-2">
                <button
                  type="button"
                  data-hs-overlay="#hs-basic-modal"
                  className="px-3.5 py-2 rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                >
                  {CONTACT_CANCEL_BUTTON}
                </button>
                <button
                  type="submit"
                  form=""
                  className="px-3.5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                >
                  {CONTACT_SEND_BUTTON}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

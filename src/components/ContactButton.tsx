export default function ContactButton() {
    return (
      <div>
        <button
          type="button"
          data-hs-overlay="#hs-basic-modal"
          className="hidden md:inline-flex py-1.5 px-3 items-center gap-x-2 text-sm font-medium text-nowrap rounded-xl border border-transparent bg-rose-500 text-white hover:bg-rose-600 focus:outline-hidden transition disabled:opacity-50 disabled:pointer-events-none"
        >
          contact
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
                  let’s connect!
                </h3>
                <button
                  type="button"
                  aria-label="Close"
                  data-hs-overlay="#hs-basic-modal"
                  className="absolute right-3 top-3 inline-flex size-8 items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
                >
                  <svg className="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18" />
                    <path d="M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Body */}
              <form className="px-6 py-4 space-y-4 bg-lime-50">
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">E-mail</label>
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
                      placeholder="you@email.com"
                      className="w-full rounded-lg border border-slate-200 bg-white pl-9 pr-3 py-2 text-slate-900 placeholder-slate-400 outline-none focus:border-slate-300 focus:ring-2 focus:ring-slate-200"
                    />
                  </div>
                </div>

                {/* Message editor */}
                <div className="rounded-xl border border-slate-200 bg-white">
                  {/* Toolbar */}
                  <div className="flex items-center gap-2 px-2.5 py-2 border-b border-slate-200 text-slate-500 bg-white">
                    {['B','I','U'].map((t) => (
                      <button key={t} type="button" className="px-2 py-1 rounded hover:bg-slate-100">
                        <span className="text-sm font-medium">{t}</span>
                      </button>
                    ))}
                    <span className="mx-1 h-4 w-px bg-slate-200" />
                    <button type="button" className="px-2 py-1 rounded hover:bg-slate-100" aria-label="Bulleted list">•</button>
                    <button type="button" className="px-2 py-1 rounded hover:bg-slate-100" aria-label="Link">🔗</button>
                    <button type="button" className="px-2 py-1 rounded hover:bg-slate-100" aria-label="Code">{`</>`}</button>
                  </div>
                  {/* Textarea */}
                  <textarea
                    rows={5}
                    placeholder="Type your message"
                    className="w-full resize-y p-3 outline-none rounded-b-xl bg-white"
                  />
                </div>
              </form>

              {/* Footer */}
              <div className="px-6 py-3 bg-violet-100 flex justify-end gap-2">
                <button
                  type="button"
                  data-hs-overlay="#hs-basic-modal"
                  className="px-3.5 py-2 rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  form=""
                  className="px-3.5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

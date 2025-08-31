import type { TimelineEntry } from '../utils/Constants'
import { TIMELINE_ITEMS } from '../utils/Constants'

type TimelineProps = {
  items?: TimelineEntry[]
  className?: string
}

export default function Timeline({ items, className = '' }: TimelineProps) {
  const data = items ?? TIMELINE_ITEMS

  return (
    <div className={className}>
      <ol className="space-y-6">
        {data.map((item, idx) => (
          <li key={idx} className="relative pl-12">
            {/* vertical connector */}
            <span className="absolute left-4 top-3 bottom-0 w-px bg-slate-200" aria-hidden="true" />

            {/* icon or default dot */}
            {item.icon ? (
              <span className={[
                'absolute left-1.5 top-1.5 inline-flex items-center justify-center size-7 rounded-full border border-slate-200 shadow-sm',
                item.iconBgClassName ?? 'bg-amber-50',
              ].join(' ')} aria-hidden="true">
                {(() => {
                  const Icon = item.icon!
                  return <Icon className={['size-4', item.iconClassName ?? 'text-slate-700'].join(' ')} />
                })()}
              </span>
            ) : (
              <span className="absolute left-[14px] top-2 inline-flex h-2.5 w-2.5 rounded-full bg-slate-300 ring-2 ring-white" aria-hidden="true" />
            )}
            {item.date && <p className="text-xs text-slate-500 mb-1">{item.date}</p>}
            <p className="font-medium text-slate-900">{item.title}</p>
            {item.subtitle && <p className="text-sm text-slate-600">{item.subtitle}</p>}
          </li>
        ))}
      </ol>
    </div>
  )
}

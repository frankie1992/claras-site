import type { ProjectDetails } from '../utils/Constants'

type Props = ProjectDetails & {
  reverse?: boolean
}

export default function ProjectSummary({ title, subtitle, description, imageSrc, projectLink = '#', reverse }: Props) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${reverse ? 'md:[&>div:first-child]:order-2 md:[&>div:last-child]:order-1' : ''}`}>
      {/* Media */}
      <div className="flex justify-center">
        {imageSrc ? (
          <img src={imageSrc} alt={title} className="max-w-full" />
        ) : (
          <div className="w-[560px] max-w-full aspect-[16/9] rounded-xl bg-slate-200 shadow-inner" aria-hidden />
        )}
      </div>

      <div>
        <h3 className="text-xl md:text-2xl font-semibold text-slate-900">{title}</h3>
        {subtitle && (
          <div className="md:mt-0 mt-3">
            <p className="text-base font-semibold text-slate-900 md:text-slate-500 md:text-sm md:font-normal">
              {subtitle}
            </p>
            <div className="md:hidden border-t border-slate-200 mt-2" />
          </div>
        )}
        {description && (
          <p className="mt-3 text-slate-900 md:text-slate-700 text-base md:text-[15px] leading-relaxed">
            {description}
          </p>
        )}
        <div className="mt-6 md:mt-4 text-center md:text-left">
          <a
            href={projectLink}
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold md:font-medium rounded-lg border border-transparent bg-red-100 text-red-800 hover:bg-red-200 focus:outline-hidden focus:bg-red-200 disabled:opacity-50 disabled:pointer-events-none dark:text-red-500 dark:bg-red-800/30 dark:hover:bg-red-800/20 dark:focus:bg-red-800/20"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  )
}

export type ProjectHeroProps = {
  /** Main heading */
  title: string;
  /** Optional subheading */
  subtitle?: string;
  /** Main hero image (URL or imported asset) */
  image: string;
  /** Accessible alt text for the main image */
  imageAlt?: string;
  /** Optional decorative background image 1 */
  background1?: string;
  /** Optional decorative background image 2 */
  background2?: string;
  /** Additional classes for the outer section */
  className?: string;
};

/**
 * ProjectHero – standard hero used across project pages.
 * - Renders a big title + optional subtitle
 * - Shows one primary hero image
 * - Supports up to two decorative background images (hidden on small screens)
 */
export default function ProjectHero({
  title,
  subtitle,
  image,
  imageAlt = '',
  background1,
  background2,
  className,
}: ProjectHeroProps) {
  return (
    <section className={`relative overflow-hidden ${className ?? ''}`}>
      {/* Decorative backgrounds */}
      {background1 && (
        <img
          src={background1}
          alt=""
          aria-hidden
          className="hidden md:block pointer-events-none select-none absolute right-6 bottom-6 w-28 lg:w-40 opacity-80"
          loading="lazy"
        />
      )}
      {background2 && (
        <img
          src={background2}
          alt=""
          aria-hidden
          className="hidden md:block pointer-eventsc-none select-none absolute left-6 top-6 w-24 lg:w-36 opacity-60"
          loading="lazy"
        />
      )}

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-8 md:mb-10">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            <span>{title}</span>
          {subtitle && (
            <p className="ml-2">{subtitle}</p>
          )}
          </h1>
        </div>
        <div className="flex justify-center">
          <img
            src={image}
            alt={imageAlt}
            className="w-full max-w-4xl h-auto"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
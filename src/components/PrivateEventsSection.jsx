import site from '../content/site.json'

const CheckIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

export default function PrivateEventsSection() {
  const { events } = site
  const [hero, ...rest] = events.photos

  return (
    <section
      id="events"
      className="w-full bg-brand-light text-brand-dark py-24 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-brand-red font-bold mb-4">
            {events.eyebrow}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-dark mb-6">
            {events.heading}
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {events.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="grid grid-cols-2 gap-4 h-[500px]">
            {hero && (
              <div className="row-span-2 overflow-hidden shadow-xl">
                <img
                  src={hero.src}
                  alt={hero.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            )}
            {rest.map((photo) => (
              <div key={photo.src} className="overflow-hidden shadow-xl">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>

          <div>
            <ul className="space-y-4 mb-10">
              {events.details.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-red text-brand-gold flex items-center justify-center mt-0.5">
                    <CheckIcon className="w-4 h-4" />
                  </span>
                  <span className="text-base md:text-lg text-brand-dark">
                    {d}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href={events.ctaHref}
              className="inline-block bg-brand-red hover:bg-brand-darkred text-white font-bold text-base md:text-lg uppercase tracking-widest px-10 py-4 transition-all duration-300 border-2 border-brand-red hover:border-brand-darkred shadow-[0_0_20px_rgba(139,21,21,0.3)] hover:shadow-[0_0_30px_rgba(139,21,21,0.6)]"
            >
              {events.ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

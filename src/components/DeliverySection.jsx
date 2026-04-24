import site from '../content/site.json'

export default function DeliverySection() {
  const { delivery } = site
  return (
    <section className="w-full bg-brand-light text-brand-dark py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-brand-red font-bold mb-4">
          {delivery.eyebrow}
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-dark mb-4">
          {delivery.heading}
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          {delivery.subheading}
        </p>
        {delivery.rating && (
          <div className="inline-flex items-center gap-3 bg-white border border-brand-gold/40 rounded-full px-6 py-3 mb-12 shadow-sm">
            <div className="flex items-center gap-1 text-brand-gold">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              ))}
            </div>
            <span className="text-base md:text-lg font-bold text-brand-dark">
              {delivery.rating}
            </span>
            <span className="text-sm text-gray-600">
              {delivery.ratingNote}
            </span>
          </div>
        )}
        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4 md:gap-6">
          {delivery.platforms.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="flex-1 max-w-xs mx-auto sm:mx-0 px-8 py-5 text-white font-bold text-lg uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
              style={{ backgroundColor: p.bg }}
            >
              {p.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

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
        <p className="text-base md:text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          {delivery.subheading}
        </p>
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

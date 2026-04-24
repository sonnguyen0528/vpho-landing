import site from '../content/site.json'

const StarRow = ({ rating }) => {
  if (!rating) return null
  const filled = Math.round(parseFloat(rating))
  return (
    <div className="flex items-center justify-center gap-1 text-brand-gold">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={i < filled ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      ))}
    </div>
  )
}

export default function SocialProofSection() {
  const { socialProof } = site
  return (
    <section className="w-full bg-brand-dark text-white py-20 px-6 md:px-16 lg:px-24 border-y border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-brand-gold font-bold mb-4">
          {socialProof.eyebrow}
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-12">
          {socialProof.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          {socialProof.stats.map((s) => (
            <a
              key={s.platform}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center justify-center gap-3 p-6 border border-gray-800 hover:border-brand-gold transition-all duration-300 hover:-translate-y-1"
            >
              <p className="text-sm uppercase tracking-widest text-gray-400 group-hover:text-brand-gold transition-colors">
                {s.platform}
              </p>
              {s.rating && (
                <p className="text-5xl font-serif font-bold text-white">
                  {s.rating}
                  <span className="text-2xl text-gray-500">/5</span>
                </p>
              )}
              <StarRow rating={s.rating} />
              <p className="text-sm text-gray-300 group-hover:text-white transition-colors">
                {s.reviews}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

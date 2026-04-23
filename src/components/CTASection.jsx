import site from '../content/site.json'

export default function CTASection() {
  const { cta } = site
  return (
    <section
      id="cta"
      className="relative w-full py-32 md:py-48 flex items-center justify-center text-center bg-brand-dark bg-fixed"
    >
      <div className="absolute inset-0 w-full h-full">
        <img
          src={cta.image}
          alt=""
          className="w-full h-full object-cover object-center opacity-40 grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-darkred/90 via-black/80 to-brand-dark/90 mix-blend-multiply" />
      </div>

      <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center">
        <a
          href={cta.buttonHref}
          className="bg-brand-gold hover:bg-white text-brand-dark font-black text-lg md:text-xl uppercase tracking-widest px-12 py-5 rounded-none transition-all duration-300 shadow-[0_10px_30px_rgba(229,169,60,0.3)] hover:shadow-[0_10px_40px_rgba(255,255,255,0.4)] mb-12 border-2 border-brand-gold hover:border-white inline-block"
        >
          {cta.buttonLabel}
        </a>

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight drop-shadow-2xl whitespace-pre-line">
          {cta.heading}
        </h2>

        <div className="mt-8 w-24 h-1 bg-brand-gold mx-auto" />
      </div>
    </section>
  )
}

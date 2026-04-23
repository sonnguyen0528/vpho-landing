import site from '../content/site.json'

export default function Hero() {
  const { hero } = site
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img
          src={hero.image}
          alt="VPho hero"
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 w-full px-4 text-center mt-20">
        <h2 className="text-brand-gold font-serif italic text-2xl md:text-3xl lg:text-4xl mb-4">
          {hero.tagline}
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] drop-shadow-2xl mb-8">
          {hero.headlineLine1} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-yellow-200 to-brand-gold">
            {hero.headlineLine2}
          </span>
        </h1>
        <p className="text-gray-200 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 tracking-wide">
          {hero.description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href={hero.primaryButtonHref}
            className="w-full sm:w-auto bg-brand-red hover:bg-brand-darkred text-white font-bold text-lg uppercase tracking-widest px-10 py-4 rounded-none transition-all duration-300 border-2 border-brand-red hover:border-brand-darkred shadow-[0_0_20px_rgba(139,21,21,0.5)] hover:shadow-[0_0_30px_rgba(139,21,21,0.8)]"
          >
            {hero.primaryButtonLabel}
          </a>
          <a
            href={hero.secondaryButtonHref}
            className="w-full sm:w-auto bg-transparent hover:bg-white text-white hover:text-brand-dark font-bold text-lg uppercase tracking-widest px-10 py-4 rounded-none transition-all duration-300 border-2 border-white"
          >
            {hero.secondaryButtonLabel}
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-white/70">
        <span className="text-xs uppercase tracking-widest mb-2 font-semibold">
          Scroll
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </section>
  )
}

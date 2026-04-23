import site from '../content/site.json'

export default function BannerSection() {
  const { banner } = site
  return (
    <section className="w-full bg-brand-gold text-brand-dark py-16 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black via-transparent to-transparent bg-[length:20px_20px]" />
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight drop-shadow-sm whitespace-pre-line">
          {banner.text}
        </h2>
      </div>
    </section>
  )
}

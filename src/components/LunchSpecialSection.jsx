import site from '../content/site.json'

function isLive(item) {
  if (!item?.enabled) return false
  if (!item.expires) return true
  const end = new Date(`${item.expires}T23:59:59`)
  return Number.isNaN(end.getTime()) || Date.now() <= end.getTime()
}

export default function LunchSpecialSection() {
  const { lunchSpecial } = site
  if (!isLive(lunchSpecial)) return null
  return (
    <section id="lunch-special" className="w-full bg-black text-white py-14 md:py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] font-bold mb-4">
          {lunchSpecial.eyebrow}
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-none mb-3">
          {lunchSpecial.heading}
        </h2>
        <p className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-5">
          {lunchSpecial.price}
        </p>
        <p className="text-lg md:text-xl font-light tracking-wide">
          {lunchSpecial.details}
        </p>
        {lunchSpecial.startsNote && (
          <p className="mt-3 text-sm md:text-base uppercase tracking-[0.2em] font-semibold">
            {lunchSpecial.startsNote}
          </p>
        )}
      </div>
    </section>
  )
}

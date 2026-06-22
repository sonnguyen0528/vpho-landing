import site from '../content/site.json'

function DishCard({ dishName, image, alt }) {
  return (
    <div className="group relative overflow-hidden bg-brand-dark shadow-lg hover:shadow-2xl transition-all duration-500">
      <div className="aspect-[5/4] overflow-hidden">
        <img
          src={image}
          alt={alt || dishName}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pt-10 pb-4 px-4">
        <h4 className="text-white font-black uppercase tracking-wide text-base md:text-lg leading-tight drop-shadow">
          {dishName}
        </h4>
        <div className="mt-1 w-8 h-0.5 bg-brand-gold" />
      </div>
    </div>
  )
}

export default function FeaturedDishesSection() {
  const { featuredDishes } = site
  if (!featuredDishes || !featuredDishes.items?.length) return null

  return (
    <section className="w-full py-20 md:py-24 px-6 md:px-16 lg:px-24 bg-brand-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          {featuredDishes.eyebrow && (
            <h3 className="text-brand-red font-bold tracking-widest uppercase text-sm mb-2">
              {featuredDishes.eyebrow}
            </h3>
          )}
          <h2 className="text-4xl md:text-5xl font-black text-brand-dark uppercase tracking-tight">
            {featuredDishes.heading}
          </h2>
          <div className="mt-6 w-16 h-1 bg-brand-gold mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredDishes.items.map((item) => (
            <DishCard key={item.dishName} {...item} />
          ))}
        </div>

        {featuredDishes.menuLinkHref && (
          <div className="text-center mt-12">
            <a
              href={featuredDishes.menuLinkHref}
              className="inline-flex items-center gap-2 text-brand-red font-bold uppercase tracking-widest text-sm border-b-2 border-brand-gold pb-1 hover:text-brand-darkred transition-colors"
            >
              {featuredDishes.menuLinkLabel || 'See full menu'}
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

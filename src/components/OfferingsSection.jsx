import site from '../content/site.json'

const LeafIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
    />
  </svg>
)

const BookIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
    />
  </svg>
)

const HeartIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
    />
  </svg>
)

const StarIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
    />
  </svg>
)

const ICONS = {
  leaf: LeafIcon,
  book: BookIcon,
  heart: HeartIcon,
  star: StarIcon,
}

function OfferingCard({ title, description, image, alt, icon }) {
  const Icon = ICONS[icon] || LeafIcon
  return (
    <div className="bg-white group overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      <div className="h-64 overflow-hidden relative">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-8 text-center relative bg-white">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-brand-red text-brand-gold p-4 rounded-full shadow-lg z-20">
          <Icon className="w-8 h-8" />
        </div>
        <h4 className="text-2xl font-black text-brand-dark uppercase tracking-wide mb-4 mt-4 group-hover:text-brand-red transition-colors">
          {title}
        </h4>
        <p className="text-gray-600 leading-relaxed font-light">
          {description}
        </p>
      </div>
    </div>
  )
}

export default function OfferingsSection() {
  const { offerings } = site
  return (
    <section className="w-full py-24 px-6 md:px-16 lg:px-24 bg-brand-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-brand-red font-bold tracking-widest uppercase text-sm mb-2">
            {offerings.eyebrow}
          </h3>
          <h2 className="text-4xl md:text-5xl font-black text-brand-dark uppercase tracking-tight">
            {offerings.heading}
          </h2>
          <div className="mt-6 w-16 h-1 bg-brand-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {offerings.items.map((item) => (
            <OfferingCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

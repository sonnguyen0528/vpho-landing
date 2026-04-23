import site from '../content/site.json'

export default function WelcomeSection() {
  const { welcome } = site
  return (
    <section className="w-full bg-black text-white py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-xl md:text-2xl lg:text-3xl font-serif leading-relaxed text-gray-200">
          <span className="font-bold text-white">{welcome.leadText}</span>{' '}
          {welcome.bodyText}
        </p>
        <div className="mt-12 w-24 h-1 bg-brand-red mx-auto" />
      </div>
    </section>
  )
}

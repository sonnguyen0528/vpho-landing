import { HeaderSocialIcons } from './SocialIcons'
import site from '../content/site.json'

export default function Header() {
  const { nav } = site
  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-gradient-to-b from-black/80 via-black/40 to-transparent pt-6 pb-12 px-8 lg:px-16">
      <nav className="w-full flex items-center justify-between">
        <ul className="hidden lg:flex items-center gap-8 text-white text-sm font-semibold tracking-widest uppercase">
          {nav.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="hover:text-brand-gold transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[2px] after:bg-brand-gold hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label="Open menu"
          className="lg:hidden text-white hover:text-brand-gold transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        <div className="absolute left-1/2 top-6 -translate-x-1/2 flex flex-col items-center">
          <div className="text-brand-gold flex items-center gap-2 mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </div>
          <a
            href="#"
            className="text-4xl lg:text-5xl font-black text-white tracking-[0.2em] uppercase"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
          >
            V<span className="text-brand-gold">PHO</span>
          </a>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <HeaderSocialIcons />
        </div>
      </nav>
    </header>
  )
}

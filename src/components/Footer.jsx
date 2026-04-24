import { FooterSocialIcons } from './SocialIcons'
import site from '../content/site.json'

const quickLinks = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#' },
  { label: 'Hungry? Call us!', href: 'tel:+14083782234' },
  { label: 'Catering Services', href: '#' },
  { label: 'Contact Us', href: '#' },
]

const LocationIcon = (props) => (
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
      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
    />
  </svg>
)

const PhoneIcon = (props) => (
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
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.08-7.074-6.959l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
    />
  </svg>
)

const MailIcon = (props) => (
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
      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
    />
  </svg>
)

export default function Footer() {
  const { business, hours } = site
  return (
    <footer className="w-full bg-[#111111] text-gray-400 py-16 px-6 md:px-16 lg:px-24 border-t-4 border-brand-red">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="flex flex-col items-start">
          <a
            href="#"
            className="text-3xl font-black text-white tracking-[0.2em] uppercase mb-6 flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-brand-gold"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
            V<span className="text-brand-gold">PHO</span>
          </a>
          <p className="text-sm leading-relaxed mb-6">
            {business.brandTagline}
          </p>
          <FooterSocialIcons />
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-widest mb-6">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="hover:text-brand-gold transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-widest mb-6">
            Visit Us
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <LocationIcon className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-gold transition-colors"
              >
                {business.addressLine1}
                <br />
                {business.addressLine2}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <PhoneIcon className="w-5 h-5 text-brand-gold shrink-0" />
              <a
                href={`tel:${business.phoneTel}`}
                className="hover:text-brand-gold transition-colors"
              >
                {business.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MailIcon className="w-5 h-5 text-brand-gold shrink-0" />
              <a
                href={`mailto:${business.email}`}
                className="hover:text-brand-gold transition-colors"
              >
                {business.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-widest mb-6">
            Hours
          </h4>
          <p className="text-xs uppercase tracking-widest text-brand-gold mb-3">
            Open Everyday
          </p>
          <ul className="space-y-3 text-sm">
            {hours.map((row) => (
              <li
                key={row.label}
                className="flex justify-between border-b border-gray-800 pb-2"
              >
                <span>{row.label}</span>
                <span className="text-white">{row.value}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-gray-500 leading-relaxed">
            {business.hoursNote}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 text-center text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>
          © {new Date().getFullYear()} VPHO Restaurant. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  )
}

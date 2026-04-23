import site from '../content/site.json'

const YELP_RED = '#D32323'

const FacebookIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const InstagramIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const GoogleIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    aria-hidden="true"
    {...props}
  >
    <path
      fill="#FFC107"
      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
    />
    <path
      fill="#FF3D00"
      d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
    />
    <path
      fill="#4CAF50"
      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
    />
    <path
      fill="#1976D2"
      d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
    />
  </svg>
)

const YelpIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M20.16 12.594l-1.107-.361c-.927-.305-1.576.05-1.576.05-.636.208-.823.746-.438 1.277l3.604 4.931s.419.579.881.146c.111-.105.175-.221.245-.332.005-.018.021-.036.03-.054.755-1.272 1.212-3.172 1.217-4.439 0-.053.005-.125 0-.171-.009-.319-.083-.712-.519-.839-.055-.017-.337-.208-2.337-.208zm-5.434 3.35c-.193-.051-1.133-.342-1.832.711 0 0-2.799 4.153-2.821 4.191-.339.528-.084 1.017-.004 1.152.003.006.006.013.009.019.034.061.082.143.118.199.314.48.75.52.75.52 1.259.191 4.187-.931 5.273-1.587 0 0 .421-.23.489-.607-.004-.162-.027-.258-.052-.337-.114-.363-.403-.547-.403-.547-.079-.061-3.968-3.263-3.968-3.263s-.717-.566-1.559-.451zm-4.344-1.013c.092-.114.35-.539.19-1.054-.124-.462-.465-.665-.774-.836-.118-.06-3.572-1.812-3.572-1.812-.753-.382-1.212-.121-1.327-.041-.113.076-.19.148-.258.29-.022.041-.082.097-.075.078-.459.945-.851 3.042-.809 4.281.016.314.039.582.133.79.074.154.205.28.392.336 0 0 .214.028.345.011 2.047-.37 5.507-1.768 5.672-1.833 0 0 .095-.037.182-.146zm2.055-11.916c-.344-.453-.857-.372-.857-.372-.107.013-.204.036-.284.074-.059.027-.151.101-.196.146-1.052 1.037-1.866 3.735-1.974 5.121 0 0-.041.482.125.687.085.099.172.157.271.189.127.037.265.064.446.086 1.096.052 3.766.05 4.525.049 0 0 .521-.013.663-.302.089-.18.059-.412-.006-.521-.035-.056-3.027-4.48-3.027-4.48s-.293-.455-.447-.637c-.01-.015-.025-.026-.035-.04-.055-.043-.118-.07-.201-.089z" />
  </svg>
)

export function HeaderSocialIcons() {
  const { social } = site
  const iconProps = { width: 20, height: 20 }
  return (
    <div className="flex items-center gap-4 text-white">
      <a
        href={social.facebook}
        target="_blank"
        rel="noreferrer"
        aria-label="VPho on Facebook"
        className="hover:text-brand-gold transition-colors duration-300"
      >
        <FacebookIcon {...iconProps} />
      </a>
      <a
        href={social.instagram}
        target="_blank"
        rel="noreferrer"
        aria-label="VPho on Instagram"
        className="hover:text-brand-gold transition-colors duration-300"
      >
        <InstagramIcon {...iconProps} />
      </a>
      <a
        href={social.yelp}
        target="_blank"
        rel="noreferrer"
        aria-label="VPho on Yelp"
        className="hover:opacity-80 transition-opacity duration-300"
        style={{ color: YELP_RED }}
      >
        <YelpIcon {...iconProps} />
      </a>
      <a
        href={social.google}
        target="_blank"
        rel="noreferrer"
        aria-label="VPho on Google"
        className="hover:opacity-80 transition-opacity duration-300 bg-white rounded-full p-0.5 flex items-center justify-center"
      >
        <GoogleIcon width={18} height={18} />
      </a>
    </div>
  )
}

export function FooterSocialIcons() {
  const { social } = site
  const iconProps = { width: 18, height: 18 }
  return (
    <div className="flex gap-4">
      <a
        href={social.facebook}
        target="_blank"
        rel="noreferrer"
        aria-label="VPho on Facebook"
        className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-brand-red transition-colors"
      >
        <FacebookIcon {...iconProps} />
      </a>
      <a
        href={social.instagram}
        target="_blank"
        rel="noreferrer"
        aria-label="VPho on Instagram"
        className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-brand-red transition-colors"
      >
        <InstagramIcon {...iconProps} />
      </a>
      <a
        href={social.yelp}
        target="_blank"
        rel="noreferrer"
        aria-label="VPho on Yelp"
        className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-red transition-colors"
        style={{ color: YELP_RED }}
      >
        <YelpIcon {...iconProps} />
      </a>
      <a
        href={social.google}
        target="_blank"
        rel="noreferrer"
        aria-label="VPho on Google"
        className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
      >
        <GoogleIcon width={20} height={20} />
      </a>
    </div>
  )
}

import { useEffect, useState } from 'react'
import site from '../content/site.json'

const STORAGE_KEY = 'vpho-announcement-dismissed'

export default function AnnouncementBar() {
  const { announcement } = site
  const [visible, setVisible] = useState(false)
  const [showTerms, setShowTerms] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const dismissed = window.localStorage.getItem(STORAGE_KEY)
    if (!dismissed) setVisible(true)
  }, [])

  if (!visible || !announcement?.enabled) return null

  const dismiss = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, '1')
    }
    setVisible(false)
  }

  return (
    <div className="w-full bg-brand-gold text-brand-dark relative">
      <div className="max-w-7xl mx-auto px-12 py-2.5 text-center">
        <p className="text-sm md:text-base font-semibold leading-snug">
          {announcement.headline}
          {announcement.terms && (
            <button
              type="button"
              onClick={() => setShowTerms((s) => !s)}
              className="ml-2 underline opacity-80 hover:opacity-100 text-xs md:text-sm font-normal"
            >
              {showTerms ? 'Hide details' : 'See details'}
            </button>
          )}
        </p>
        {showTerms && announcement.terms && (
          <p className="mt-1.5 text-xs md:text-sm opacity-80 leading-relaxed">
            {announcement.terms}
          </p>
        )}
      </div>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss announcement"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full hover:bg-brand-dark/10 transition-colors text-lg font-bold leading-none"
      >
        ×
      </button>
    </div>
  )
}

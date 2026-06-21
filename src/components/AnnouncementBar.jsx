import { useEffect, useState } from 'react'
import site from '../content/site.json'

const STORAGE_KEY = 'vpho-announcement-dismissed'

// Keep an item if it has no expiry, or its expiry date (end of day) is today or later.
function isLive(item) {
  if (!item?.headline) return false
  if (!item.expires) return true
  const end = new Date(`${item.expires}T23:59:59`)
  if (Number.isNaN(end.getTime())) return true
  return Date.now() <= end.getTime()
}

export default function AnnouncementBar() {
  const { announcement } = site
  const items = (announcement?.items || []).filter(isLive)

  const [visible, setVisible] = useState(false)
  const [showTerms, setShowTerms] = useState(false)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const dismissed = window.localStorage.getItem(STORAGE_KEY)
    if (!dismissed) setVisible(true)
  }, [])

  // Auto-rotate when more than one live message and terms aren't expanded.
  useEffect(() => {
    if (!visible || showTerms || items.length < 2) return
    const ms = (announcement?.rotateSeconds || 6) * 1000
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length)
    }, ms)
    return () => clearInterval(id)
  }, [visible, showTerms, items.length, announcement?.rotateSeconds])

  if (!visible || !announcement?.enabled || items.length === 0) return null

  const current = items[index % items.length]

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
          {current.headline}
          {current.terms && (
            <button
              type="button"
              onClick={() => setShowTerms((s) => !s)}
              className="ml-2 underline opacity-80 hover:opacity-100 text-xs md:text-sm font-normal"
            >
              {showTerms ? 'Hide details' : 'See details'}
            </button>
          )}
        </p>
        {showTerms && current.terms && (
          <p className="mt-1.5 text-xs md:text-sm opacity-80 leading-relaxed">
            {current.terms}
          </p>
        )}
        {items.length > 1 && (
          <div className="mt-1.5 flex justify-center gap-1.5" aria-hidden="true">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setShowTerms(false)
                  setIndex(i)
                }}
                aria-label={`Show announcement ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index % items.length
                    ? 'w-4 bg-brand-dark/70'
                    : 'w-1.5 bg-brand-dark/30 hover:bg-brand-dark/50'
                }`}
              />
            ))}
          </div>
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

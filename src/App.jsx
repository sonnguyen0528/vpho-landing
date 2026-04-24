import AnnouncementBar from './components/AnnouncementBar'
import Header from './components/Header'
import Hero from './components/Hero'
import DeliverySection from './components/DeliverySection'
import WelcomeSection from './components/WelcomeSection'
import SocialProofSection from './components/SocialProofSection'
import BannerSection from './components/BannerSection'
import OfferingsSection from './components/OfferingsSection'
import PrivateEventsSection from './components/PrivateEventsSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative w-full min-h-screen bg-brand-light text-brand-dark antialiased font-sans flex flex-col selection:bg-brand-gold selection:text-brand-darkred">
      <div className="absolute top-0 left-0 w-full z-50">
        <AnnouncementBar />
        <Header />
      </div>
      <Hero />
      <DeliverySection />
      <WelcomeSection />
      <SocialProofSection />
      <BannerSection />
      <OfferingsSection />
      <PrivateEventsSection />
      <CTASection />
      <Footer />
    </div>
  )
}

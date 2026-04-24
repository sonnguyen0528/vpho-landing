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
    <div className="w-full min-h-screen bg-brand-light text-brand-dark antialiased font-sans flex flex-col selection:bg-brand-gold selection:text-brand-darkred">
      <Header />
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

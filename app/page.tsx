import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import HeroSection from '@/sections/HeroSection'
import StatsStrip from '@/sections/StatsStrip'
import PropertiesSection from '@/sections/PropertiesSection'
import WhatsAppCTA from '@/sections/WhatsAppCTA'
import InvestmentSection from '@/sections/InvestmentSection'
import LocationSection from '@/sections/LocationSection'
import LeadFormSection from '@/sections/LeadFormSection'
import WhyChooseSection from '@/sections/WhyChooseSection'
import AboutSection from '@/sections/AboutSection'

export default function Home() {
  return (
    <main>
      <Navigation />
      <section id="home">
        <HeroSection />
      </section>
      <StatsStrip />
      <section id="properties">
        <PropertiesSection />
      </section>
      <WhatsAppCTA
        title="Ready to Find Your Perfect Commercial Space?"
        subtitle="Connect with our expert advisors instantly on WhatsApp for personalized property recommendations."
        ctaText="Chat on WhatsApp"
      />
      <section id="investment">
        <InvestmentSection />
      </section>
      <section id="locations">
        <LocationSection />
      </section>
      <section id="contact">
        <LeadFormSection />
      </section>
      <WhatsAppCTA
        title="Have Questions? We're Here to Help"
        subtitle="Our team of commercial real estate experts is available to guide you through every step of the process."
        ctaText="Get Instant Assistance"
      />
      <WhyChooseSection />
      <section id="about">
        <AboutSection />
      </section>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

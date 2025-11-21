import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FeaturedDesignsCarousel from '@/components/sections/FeaturedDesignsCarousel'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import HowItWorks from '@/components/sections/HowItWorks'
import WhyChoose from '@/components/sections/WhyChoose'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedDesignsCarousel />
      <Services />
      <HowItWorks />
      <WhyChoose />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}

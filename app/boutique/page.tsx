

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FeaturedDesignsCarousel from '@/components/sections/FeaturedDesignsCarousel'
import CTA from '@/components/sections/CTA'


export default function Boutique() {
  

  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-b from-pink-900 to-pink-300 text-white py-8 sm:py-12 md:py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Boutique Collection</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300">Explore our curated collection of premium designs</p>
        </div>
      </section>

      <FeaturedDesignsCarousel />
      <CTA />

      <Footer />
    </>
  )
}

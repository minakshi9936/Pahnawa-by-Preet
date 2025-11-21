

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FeaturedDesignsCarousel from '@/components/sections/FeaturedDesignsCarousel'
import CTA from '@/components/sections/CTA'


export default function Boutique() {
  

  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white text-center py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Our Boutique Collection</h1>
          <p className="text-xl text-gray-300">Explore our curated collection of premium designs</p>
        </div>
      </section>

      <FeaturedDesignsCarousel />
      <CTA />

      <Footer />
    </>
  )
}

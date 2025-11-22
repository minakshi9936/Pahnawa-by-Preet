'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import designsData from '@/public/data/designs.json'

export default function FeaturedDesignsCarousel() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [isPaused, setIsPaused] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedDesign, setSelectedDesign] = useState<any>(null)

  const designs = designsData.designs

  const categories = ['All', 'Bridal', 'Ethnic', 'Traditional', 'Contemporary', 'Party', 'Casual']

  const filteredDesigns = activeCategory === 'All' 
    ? designs 
    : designs.filter(design => design.tags.some(tag => tag.toLowerCase() === activeCategory.toLowerCase()))

  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const [isMediumScreen, setIsMediumScreen] = useState(false)
  
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768)
      setIsMediumScreen(window.innerWidth < 1024)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const cardsPerView = isSmallScreen ? 1 : isMediumScreen ? 2 : 3

  useEffect(() => {
    if (isPaused) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + cardsPerView) % filteredDesigns.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [isPaused, filteredDesigns.length, cardsPerView])

  return (
    <section className="py-20 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="section-title">Featured Designs</h2>
        
        <div className="mb-8 flex gap-2 justify-center flex-wrap pb-2 px-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category)
                setCurrentIndex(0)
              }}
              className={`px-3 sm:px-4 py-2 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#D66B7F] text-white'
                  : 'bg-white text-[#8B3A62] border border-[#D66B7F] hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div className="flex transition-all duration-500 ease-in-out"
              style={{
                transform: `translateX(-${Math.floor(currentIndex / cardsPerView) * 100}%)`
              }}>
              {filteredDesigns.map((design, index) => (
                <div key={index} className={`${isSmallScreen ? 'w-full' : isMediumScreen ? 'w-1/2' : 'w-1/3'} flex-shrink-0 px-2 sm:px-4`}>
                  <div className="rounded-lg overflow-hidden bg-white border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer h-full">
                    <div className="relative w-full h-48 sm:h-56 md:h-64">
                      <Image 
                        src={design.image} 
                        alt={design.title}
                        fill
                        className="w-full h-64 object-contain"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-[#8B3A62] mb-3">{design.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {design.tags.map((tag, i) => (
                          <span key={i} className="bg-gray-100 text-[#D66B7F] px-3 py-1 rounded-full text-xs font-semibold">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button onClick={() => setSelectedDesign(design)} className="w-full btn-outline text-sm">Know More</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setCurrentIndex((prev) => (prev - cardsPerView + filteredDesigns.length) % filteredDesigns.length)}
            className="absolute left-0 top-1/3 -translate-y-1/2 -translate-x-2 sm:-translate-x-3 md:-translate-x-4 bg-[#af0353] hover:bg-black text-[#D66B7F] w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all z-10 text-sm sm:text-base"
          >
            ❮
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => (prev + cardsPerView) % filteredDesigns.length)}
            className="absolute right-0 top-1/3 -translate-y-1/2 translate-x-2 sm:translate-x-3 md:translate-x-4 bg-[#af0353] hover:bg-black text-[#D66B7F] w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all z-10 text-sm sm:text-base"
          >
            ❯
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: Math.ceil(filteredDesigns.length / cardsPerView) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * cardsPerView)}
                className={`w-2 h-2 rounded-full transition-all ${
                  Math.floor(currentIndex / cardsPerView) === index ? 'bg-[#D66B7F] w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {selectedDesign && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white flex justify-between items-center p-4 sm:p-6 border-b">
              <h2 className="text-lg sm:text-2xl font-bold text-[#8B3A62]">{selectedDesign.title}</h2>
              <button 
                onClick={() => setSelectedDesign(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            <div className="p-6">
              <div className="relative w-full h-96 mb-6">
                <Image 
                  src={selectedDesign.image} 
                  alt={selectedDesign.title}
                  fill
                  className="w-full h-96 object-contain rounded-lg"
                />
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {selectedDesign.description}
              </p>

              <div className="flex items-center gap-4 mb-6 bg-gray-50 p-4 rounded-lg">
                <span className="text-gray-600">Starting Price:</span>
                <span className="text-3xl font-bold text-[#D66B7F]">₹{selectedDesign.price}/-</span>
                <span className="text-gray-600">onwards</span>
              </div>

              <div className="bg-gradient-to-r from-[#8B3A62] to-[#D66B7F] text-white p-6 rounded-lg mb-6">
                <h3 className="text-lg font-bold mb-3">✨ Customization Available</h3>
                <p className="leading-relaxed">
                  You can also customize your dream dresses! We offer personalized design modifications including custom colors, fabrics, embroidery patterns, and sizing to perfectly match your vision.
                </p>
              </div>

              <a
                href={`https://wa.me/919569151037?text=Hi! I'm interested in "${selectedDesign.title}". Could you provide more details or discuss customization options?`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#1da851] text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all"
              >
                <span>💬</span>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

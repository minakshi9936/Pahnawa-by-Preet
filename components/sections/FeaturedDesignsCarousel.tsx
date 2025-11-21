'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function FeaturedDesignsCarousel() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [isPaused, setIsPaused] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedDesign, setSelectedDesign] = useState<any>(null)

  const designs = [
    { title: 'Royal Bridal Lehenga', tags: ['Bridal', 'Ethnic'], image: 'https://res.cloudinary.com/dh9uxczld/image/upload/v1763719670/royal-bridal-lehenga_rr1pjv.png', price: '25000', description: 'Exquisite royal bridal lehenga crafted with traditional embroidery and zari work. Perfect for your special day with luxurious fabric and intricate detailing.' },
    { title: 'Light Weight Lehenga', tags: ['Fusion', 'Ethnic'], image: 'https://res.cloudinary.com/dh9uxczld/image/upload/v1763638854/IMG-20251120-WA0038_p7jgqz.jpg', price: '2500', description: 'Comfortable and stylish lightweight lehenga perfect for festivals and celebrations. Features fusion design with modern cuts.' },
    { title: 'Modern Fusion Suit', tags: ['Fusion', 'Contemporary'], image: 'https://res.cloudinary.com/dh9uxczld/image/upload/v1763638853/IMG-20251120-WA0042_byg6lz.jpg', price: '1500', description: 'Contemporary fusion suit blending traditional and modern aesthetics. Ideal for casual gatherings and parties.' },
    { title: 'Western Dresses', tags: ['Western', 'Custom'], image: 'https://res.cloudinary.com/dh9uxczld/image/upload/v1763638854/IMG-20251120-WA0040_ws3gxa.jpg', price: '5000', description: 'Elegant western dresses custom tailored to your preferences. Available in various styles and sizes.' },
    { title: 'Party Wear Gown', tags: ['Western', 'Party'], image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRitQSpvymWr81yFRP3A11kqJEwDbee9dg5eg&s', price: '5000', description: 'Stunning party gown with elegant draping and sophisticated design. Perfect for evening events.' },
    { title: 'Ethnic Anarkali', tags: ['Ethnic', 'Casual'], image: 'https://res.cloudinary.com/dh9uxczld/image/upload/v1763638853/IMG-20251120-WA0041_khfzh9.jpg', price: '2000', description: 'Classic ethnic anarkali with comfortable fit and graceful silhouette. Great for casual celebrations.' },
    { title: 'Designer Blouse', tags: ['Blouse', 'Custom'], image: 'https://res.cloudinary.com/dh9uxczld/image/upload/v1763721449/designer-blouse_wfikgz.png', price: '1500', description: 'Custom designer blouse with intricate patterns and premium fabric. Pairs perfectly with any saree.' },
    { title: 'Bridal Dupatta', tags: ['Bridal', 'Accessory'], image: 'https://www.koskii.com/cdn/shop/files/koskii-maroon-zariwork-net-designer-dupatta-durm0033649_maroon1_1.jpg?v=1708685680', price: '2000', description: 'Beautiful bridal dupatta with exquisite zari and embroidery work. The perfect finishing touch for your bridal ensemble.' },
  ]

  const categories = ['All', 'Bridal', 'Ethnic', 'Traditional', 'Contemporary', 'Party', 'Casual']

  const filteredDesigns = activeCategory === 'All' 
    ? designs 
    : designs.filter(design => design.tags.some(tag => tag.toLowerCase() === activeCategory.toLowerCase()))

  const cardsPerView = 3

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
        
        <div className="mb-8 flex gap-2 justify-center flex-wrap pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category)
                setCurrentIndex(0)
              }}
              className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
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
                <div key={index} className="w-1/3 flex-shrink-0 px-4">
                  <div className="rounded-lg overflow-hidden bg-white border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer h-full">
                    <div className="relative w-full h-64">
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
            className="absolute left-0 top-1/3 -translate-y-1/2 bg-[#af0353] hover:bg-black text-[#D66B7F] w-10 h-10 rounded-full flex items-center justify-center transition-all z-10"
          >
            ❮
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => (prev + cardsPerView) % filteredDesigns.length)}
            className="absolute right-0 top-1/3 -translate-y-1/2 bg-[#af0353] hover:bg-black text-[#D66B7F] w-10 h-10 rounded-full flex items-center justify-center transition-all z-10"
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
            <div className="sticky top-0 bg-white flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold text-[#8B3A62]">{selectedDesign.title}</h2>
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
                href={`https://wa.me/919988776655?text=Hi! I'm interested in "${selectedDesign.title}". Could you provide more details or discuss customization options?`}
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

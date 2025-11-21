'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = ['all', 'bridal', 'ethnic', 'party', 'men', 'alterations', 'designer']

  const galleryItems = [
    { id: 1, category: 'bridal', title: 'Royal Bridal Lehenga', emoji: '👰' },
    { id: 2, category: 'ethnic', title: 'Traditional Saree Drape', emoji: '👗' },
    { id: 3, category: 'party', title: 'Evening Gown', emoji: '✨' },
    { id: 4, category: 'men', title: 'Sherwani Set', emoji: '👔' },
    { id: 5, category: 'bridal', title: 'Bridal Dupatta', emoji: '👰' },
    { id: 6, category: 'designer', title: 'Designer Fusion Wear', emoji: '🎨' },
    { id: 7, category: 'ethnic', title: 'Anarkali Suit', emoji: '👗' },
    { id: 8, category: 'alterations', title: 'Alteration Before-After', emoji: '📏' },
    { id: 9, category: 'party', title: 'Cocktail Dress', emoji: '✨' },
    { id: 10, category: 'bridal', title: 'Wedding Reception Wear', emoji: '👰' },
    { id: 11, category: 'men', title: 'Ethnic Kurta Pajama', emoji: '👔' },
    { id: 12, category: 'designer', title: 'Couture Collection', emoji: '🎨' },
  ]

  const filtered = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl text-gray-300">Explore our stunning collection of designs and creations</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors capitalize ${
                  selectedCategory === category
                    ? 'bg-[#D66B7F] text-white'
                    : 'bg-gray-100 text-[#8B3A62] hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'All Works' : category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
            {filtered.map((item, index) => (
              <div
                key={item.id}
                className={`relative rounded-lg overflow-hidden group cursor-pointer bg-gradient-to-br from-gray-200 to-gray-300 hover:shadow-2xl transition-all ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <div className="w-full h-full flex items-center justify-center hover:bg-gradient-to-br hover:from-[#D66B7F] hover:to-[#8B3A62] transition-all">
                  <div className="text-center">
                    <div className={`${index === 0 ? 'text-8xl' : 'text-6xl'} mb-2 group-hover:scale-110 transition-transform`}>
                      {item.emoji}
                    </div>
                    <p className="text-gray-700 font-semibold text-sm px-4 group-hover:text-white transition-colors">{item.title}</p>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#8B3A62]">Gallery Highlights</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Bridal Collection', count: '150+', desc: 'Stunning bridal designs' },
              { title: 'Ethnic Wear', count: '200+', desc: 'Traditional collections' },
              { title: 'Designer Pieces', count: '100+', desc: 'Exclusive creations' }
            ].map((highlight, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 text-center border border-gray-200">
                <div className="text-5xl mb-4 font-bold text-[#D66B7F]">{highlight.count}</div>
                <h3 className="text-xl font-bold text-[#8B3A62] mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

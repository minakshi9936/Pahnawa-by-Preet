'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useState } from 'react'
import Image from 'next/image'
import designsData from '@/public/data/designs.json'

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = ['all', 'bridal', 'ethnic', 'party', 'designer']

  const galleryItems = designsData.designs.map(design => ({
    id: design.id,
    category: design.category,
    title: design.title,
    image: design.image
  }))

  const filtered = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-b from-pink-900 to-pink-300 text-white py-8 sm:py-12 md:py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300">Explore our stunning collection of designs and creations</p>
        </div>
      </section>

      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-6 py-2 rounded-full font-semibold text-sm sm:text-base transition-colors capitalize ${
                  selectedCategory === category
                    ? 'bg-[#D66B7F] text-white'
                    : 'bg-gray-100 text-[#8B3A62] hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'All Works' : category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-[250px] sm:auto-rows-[300px]">
            {filtered.map((item, index) => (
              <div
                key={item.id}
                className={`relative rounded-lg overflow-hidden group cursor-pointer bg-gradient-to-br from-gray-200 to-gray-300 hover:shadow-2xl transition-all ${
                  index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                />
                
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center">
                  <p className="text-white font-semibold text-sm px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#8B3A62]">Gallery Highlights</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              { title: 'Bridal Collection', count: '150+', desc: 'Stunning bridal designs' },
              { title: 'Ethnic Wear', count: '200+', desc: 'Traditional collections' },
              { title: 'Designer Pieces', count: '100+', desc: 'Exclusive creations' }
            ].map((highlight, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 sm:p-8 text-center border border-gray-200">
                <div className="text-4xl sm:text-5xl mb-4 font-bold text-[#D66B7F]">{highlight.count}</div>
                <h3 className="text-lg sm:text-xl font-bold text-[#8B3A62] mb-2">{highlight.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{highlight.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

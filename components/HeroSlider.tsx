'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Slide {
  id: number
  title: string
  image: string
  href: string
}

const slides: Slide[] = [
  { id: 1, title: 'Bridal Collections', image: 'https://res.cloudinary.com/dh9uxczld/image/upload/v1763638854/IMG-20251120-WA0039_dr7jak.jpg', href: '/boutique' },
  { id: 2, title: 'Designer Lehengas', image: 'https://res.cloudinary.com/dh9uxczld/image/upload/v1763638853/IMG-20251120-WA0041_khfzh9.jpg', href: '/designers' },
  { id: 3, title: 'Custom Stitching', image: 'https://res.cloudinary.com/dh9uxczld/image/upload/v1763638854/IMG-20251120-WA0038_p7jgqz.jpg', href: '/services' },
  { id: 4, title: 'Ethnic Wear', image: 'https://res.cloudinary.com/dh9uxczld/image/upload/v1763638854/IMG-20251120-WA0040_ws3gxa.jpg', href: '/gallery' },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden group">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-[#D66B7F] hover:bg-[#8B3A62] text-white p-3 md:p-4 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-[#D66B7F] hover:bg-[#8B3A62] text-white p-3 md:p-4 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-[#D66B7F] w-8' : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

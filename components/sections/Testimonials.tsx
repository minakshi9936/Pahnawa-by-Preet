'use client'

import { useState, useEffect } from 'react'

export default function Testimonials() {
  const testimonials = [
    { name: 'Priya Sharma', rating: 5, text: 'Absolutely love my bridal lehenga! The attention to detail and perfect fit exceeded all my expectations. Highly recommended!' },
    { name: 'Anjali Verma', rating: 5, text: 'The designers understood my vision perfectly. My reception dress was exactly what I dreamed of. Thank you Pahnawa!' },
    { name: 'Neha Patel', rating: 5, text: 'Best tailoring service I\'ve ever experienced. Quick delivery, premium quality, and amazing customer service.' },
    { name: 'Isha Malhotra', rating: 5, text: 'The custom saree I ordered was absolutely exquisite. Every stitch was perfect and the colors matched exactly as envisioned. Worth every penny!' },
    { name: 'Divya Singh', rating: 5, text: 'Pahnawa transformed my wedding outfit vision into reality. The team\'s creativity and craftsmanship are unmatched. Stunning work!' },
    { name: 'Meera Desai', rating: 5, text: 'I was amazed by how they handled my rush order. The quality never compromised, delivery was on time, and customer service was exceptional.' },
    { name: 'Kavya Nair', rating: 5, text: 'My mehendi dress turned out to be the highlight of the event! Every guest asked where I got it. Thank you Pahnawa for making me feel special!' },
    { name: 'Ritika Joshi', rating: 5, text: 'Professional, talented, and incredibly supportive team. They helped me choose the perfect design and colors. Couldn\'t ask for better!' },
    { name: 'Soniya Chopra', rating: 5, text: 'The embroidery work on my lehenga was breathtaking. The attention to detail is truly remarkable. Highly satisfied with my purchase!' }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length])
    }
    return visible
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="section-title">Customer Testimonials</h2>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-8 hover:shadow-lg hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#D66B7F] text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-[#8B3A62]">- {testimonial.name}</p>
              </div>
            ))}
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-[#8B3A62] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#D66B7F] transition-colors"
            aria-label="Previous testimonials"
          >
            ❮
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-[#8B3A62] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#D66B7F] transition-colors"
            aria-label="Next testimonials"
          >
            ❯
          </button>

          <div className="flex justify-center gap-2 mt-12">
            {[...Array(Math.ceil(testimonials.length / 3))].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i * 3)}
                className={`h-2 rounded-full transition-all ${
                  i === Math.floor(currentIndex / 3)
                    ? 'bg-[#8B3A62] w-8'
                    : 'bg-gray-300 w-2'
                }`}
                aria-label={`Go to testimonial group ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

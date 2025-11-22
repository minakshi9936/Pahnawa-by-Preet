'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const whatsappNumber = '919569151037'
    const messageText = `Hello Pahnawa By Preets,

I would like to inquire about your services. Here are my details:

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service: ${formData.service}

Message: ${formData.message}`

    const encodedMessage = encodeURIComponent(messageText)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    window.open(whatsappUrl, '_blank')
    setFormData({ name: '', phone: '', email: '', service: '', message: '' })
  }

  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-b from-pink-900 to-pink-300 text-white py-8 sm:py-12 md:py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300">We&apos;d love to hear from you. Reach out anytime!</p>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#8B3A62] mb-6 sm:mb-8">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#8B3A62] mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D66B7F]"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#8B3A62] mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D66B7F]"
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#8B3A62] mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D66B7F]"
                    placeholder="Your email"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#8B3A62] mb-2">Service Interested In</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D66B7F]"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="bridal">Bridal Designing</option>
                    <option value="custom">Custom Tailoring</option>
                    <option value="alteration">Alterations</option>
                    <option value="consultation">Designer Consultation</option>
                    <option value="styling">Styling Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#8B3A62] mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D66B7F] resize-none"
                    placeholder="Tell us more about your requirements..."
                    rows={6}
                    required
                  />
                </div>

                <button type="submit" className="btn-primary w-full">Send Message</button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#8B3A62] mb-6 sm:mb-8">Contact Information</h2>

              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h3 className="font-bold text-[#8B3A62] mb-2 flex items-center text-sm sm:text-base">
                    <span className="text-xl sm:text-2xl mr-3">📍</span>
                    Location
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">Shop No 225 Sahara Plaza Patrakarpuram Gomti Nagar Lucknow 226010, Lucknow</p>
                </div>

                <div>
                  <h3 className="font-bold text-[#8B3A62] mb-2 flex items-center text-sm sm:text-base">
                    <span className="text-xl sm:text-2xl mr-3">📱</span>
                    Phone
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">+919569151037</p>
                  <p className="text-sm sm:text-base text-gray-600">+916306183542</p>
                </div>

                <div>
                  <h3 className="font-bold text-[#8B3A62] mb-2 flex items-center text-sm sm:text-base">
                    <span className="text-xl sm:text-2xl mr-3">📧</span>
                    Email
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 break-words">9918196565preetibagga@gmail.com</p>
                  
                </div>

                <div>
                  <h3 className="font-bold text-[#8B3A62] mb-2 flex items-center text-sm sm:text-base">
                    <span className="text-xl sm:text-2xl mr-3">🕐</span>
                    Working Hours
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">Monday - Sunday</p>
                  <p className="text-sm sm:text-base text-gray-600">10:00 AM - 8:00 PM</p>
                </div>

                <div className="bg-[#D66B7F] text-white rounded-lg p-4 sm:p-6 text-center">
                  <p className="font-semibold mb-2 text-sm sm:text-base">Special Hours</p>
                  <p className="text-xs sm:text-sm">Bridal Consultations Available on Weekends</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-[#8B3A62]">Map</h2>
          <div className="w-full rounded-lg overflow-hidden border border-gray-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113948.87253788297!2d80.7513878972656!3d26.811240399999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3f053249101%3A0x1481d7ed90c687cb!2sPahnawa%20By%20Preets!5e0!3m2!1sen!2sin!4v1763796512922!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

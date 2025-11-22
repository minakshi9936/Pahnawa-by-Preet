'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Bridal Designing',
      description: 'Create the wedding outfit of your dreams with our expert bridal designers. From traditional to contemporary designs, we craft every detail to perfection.',
      features: ['Custom design consultation', 'Premium fabric selection', 'Intricate embroidery', 'Multiple fittings', 'On-time delivery'],
      icon: '👰'
    },
    {
      id: 2,
      title: 'Custom Tailoring',
      description: 'Get garments tailored perfectly to your body measurements and style preferences. Our skilled tailors ensure impeccable craftsmanship.',
      features: ['Precise measurements', 'Pattern customization', 'Quality stitching', 'Comfortable fit', 'Various fabrics'],
      icon: '✂️'
    },
    {
      id: 3,
      title: 'Alteration Services',
      description: 'Give your favorite clothes a perfect fit with our professional alteration services. We handle all types of garments with care.',
      features: ['Hemming', 'Taking in/letting out', 'Repair work', 'Beading adjustments', 'Quick turnaround'],
      icon: '📏'
    },
    {
      id: 4,
      title: 'Premium Fabric Suggestions',
      description: 'Our experts guide you through our extensive fabric collection to choose the perfect material for your garment.',
      features: ['Fabric consultation', 'Quality assurance', 'International brands', 'Seasonal collections', 'Sustainable options'],
      icon: '🧵'
    },
    {
      id: 5,
      title: 'Styling Consultation',
      description: 'Get personalized styling advice from our fashion experts to enhance your wardrobe and find your unique style.',
      features: ['Personal consultation', 'Color analysis', 'Body type styling', 'Wardrobe planning', 'Fashion tips'],
      icon: '👨‍🎨'
    },
    {
      id: 6,
      title: 'Designer Collaboration',
      description: 'Work directly with our senior designers to create one-of-a-kind pieces that reflect your personality and vision.',
      features: ['Design consultation', 'Exclusive designs', 'Premium execution', 'VIP treatment', 'Unlimited revisions'],
      icon: '✨'
    }
  ]

  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-b from-pink-900 to-pink-300 text-white py-8 sm:py-12 md:py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300">Comprehensive fashion solutions tailored to your needs</p>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {services.map(service => (
              <div key={service.id} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-6 sm:p-8 md:p-10 hover:shadow-xl transition-shadow">
                <div className="text-4xl sm:text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#8B3A62] mb-4">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-[#8B3A62] mb-3 text-sm sm:text-base">What&apos;s Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm sm:text-base text-gray-600">
                        <span className="text-[#D66B7F] mr-3">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  className="btn-primary w-full text-sm sm:text-base"
                  onClick={() => {
                    const phoneNumber = "919569151037";
                    const message = `Hi! I'm interested in booking your ${service.title} service. Could you please provide me with more details and availability?`;
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, "_blank");
                  }}
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl">Service Process</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6 sm:space-y-8">
              {[
                { step: 'Step 1', title: 'Initial Consultation', desc: 'Meet with our design team to discuss your requirements and vision' },
                { step: 'Step 2', title: 'Design & Planning', desc: 'Our designers create sketches and plan the execution strategy' },
                { step: 'Step 3', title: 'Measurements & Fitting', desc: 'We take precise measurements and conduct initial fitting' },
                { step: 'Step 4', title: 'Execution', desc: 'Expert tailors craft your garment with meticulous attention to detail' },
                { step: 'Step 5', title: 'Trials & Adjustments', desc: 'Multiple fittings and adjustments for perfect fit' },
                { step: 'Step 6', title: 'Final Delivery', desc: 'Your finished garment delivered in perfect condition' }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 sm:gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#D66B7F] text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#8B3A62] mb-2">{item.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

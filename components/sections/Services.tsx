export default function Services() {
  const services = [
    {
      title: 'Custom Stitching',
      description: 'Bespoke tailoring tailored to your exact measurements and preferences',
      icon: '✂️'
    },
    {
      title: 'Bridal & Lehenga Designing',
      description: 'Exquisite bridal collections and designer lehengas for your special moments',
      icon: '👰'
    },
    {
      title: 'Alteration Services',
      description: 'Perfect fit adjustments for all your precious garments',
      icon: '📏'
    },
    {
      title: 'Party Wear Tailoring',
      description: 'Stunning party outfits crafted for every occasion',
      icon: '✨'
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="section-title text-2xl sm:text-3xl md:text-4xl">Our Exclusive Services</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="text-3xl sm:text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#8B3A62] mb-3">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

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
    <section className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="section-title">Our Exclusive Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-8 hover:shadow-lg hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-[#8B3A62] mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

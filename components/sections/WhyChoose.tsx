export default function WhyChoose() {
  const features = [
    { icon: '👨‍🎨', title: 'Professional Designers', desc: 'Experienced designers with expertise in traditional and contemporary styles' },
    { icon: '✨', title: 'Premium Quality', desc: 'Only finest fabrics and materials used for every creation' },
    { icon: '🚚', title: 'Fast Delivery', desc: 'Quick turnaround without compromising on quality' },
    { icon: '📏', title: 'Personalized Fit', desc: 'Custom measurements ensure perfect fit every time' }
  ]

  return (
    <section className="py-20 bg-white" id="WhyChoose">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="section-title">Why Choose Pahnawa</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-[#D66B7F] to-[#8B3A62] rounded-lg p-8 text-white hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-sm opacity-90">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

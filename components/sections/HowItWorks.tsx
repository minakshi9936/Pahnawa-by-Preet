export default function HowItWorks() {
  const steps = [
    { step: '1', title: 'Share Your Requirements', desc: 'Tell us your vision and style preferences' },
    { step: '2', title: 'Designer Consultation', desc: 'Meet with our expert designers' },
    { step: '3', title: 'Measurements', desc: 'Precise measurements for perfect fit' },
    { step: '4', title: 'Stitching & Trials', desc: 'Crafting with quality checks & trials' },
    { step: '5', title: 'Final Delivery', desc: 'Your perfect garment delivered' }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="section-title">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#D66B7F] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-[#8B3A62] mb-2 text-center">{item.title}</h3>
                <p className="text-gray-600 text-center text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

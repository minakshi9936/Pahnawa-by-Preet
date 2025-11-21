import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Pricing() {
  {/* const pricingPlans = [
    {
      name: 'Basic Package',
      price: '₹2,999',
      description: 'Perfect for simple tailoring needs',
      features: [
        'Simple custom tailoring',
        'Single fitting',
        'Basic fabric selection',
        'Standard turnaround time',
        'Phone support'
      ],
      icon: '👔'
    },
    {
      name: 'Premium Package',
      price: '₹8,999',
      description: 'Ideal for special occasions',
      features: [
        'Custom design creation',
        'Multiple fittings',
        'Premium fabric selection',
        'Designer consultation',
        'Priority delivery',
        'Email & phone support'
      ],
      icon: '✨',
      highlighted: true
    },
    {
      name: 'Designer Package',
      price: '₹18,999+',
      description: 'Ultimate luxury experience',
      features: [
        'Exclusive design creation',
        'Unlimited fittings',
        'Luxury fabric access',
        'Personal designer assigned',
        'VIP treatment',
        '24/7 priority support',
        'Unlimited revisions'
      ],
      icon: '👑'
    }
  ] */}

  const services = [
    { service: 'Custom Stitching (Per Garment)', price: '₹3,000 - ₹15,000' },
    { service: 'Bridal Lehenga Design', price: '₹25,000 - ₹75,000' },
    { service: 'Bridal Wear (Complete Set)', price: '₹30,000 - ₹100,000' },
    { service: 'Saree Blouse', price: '₹1,500 - ₹5,000' },
    { service: 'Suits & Kurtas', price: '₹2,500 - ₹8,000' },
    { service: 'Designer Consultation (Per Hour)', price: '₹999 - ₹2,999' },
    { service: 'Alterations', price: '₹500 - ₹2,000' },
    { service: 'Men\'s Ethnic Wear', price: '₹5,000 - ₹20,000' },
    { service: 'Premium Fabric Suggestion', price: 'Free' },
    { service: 'Rush Delivery (Extra)', price: '₹1,000 - ₹3,000' },
  ]

  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white text-center py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Transparent Pricing</h1>
          <p className="text-xl text-gray-300">Affordable luxury without hidden charges</p>
        </div>
      </section>

      {/* <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="section-title">Our Packages</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden transition-all ${
                  plan.highlighted
                    ? 'ring-2 ring-[#D66B7F] shadow-2xl scale-105'
                    : 'border border-gray-200'
                } bg-white`}
              >
                {plan.highlighted && (
                  <div className="bg-[#D66B7F] text-white py-2 text-center font-bold text-sm">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-5xl mb-4">{plan.icon}</div>
                  <h3 className="text-2xl font-bold text-[#8B3A62] mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  
                  <div className="mb-8">
                    <div className="text-4xl font-bold text-[#D66B7F]">{plan.price}</div>
                    <p className="text-gray-600 text-sm">+ applicable taxes</p>
                  </div>

                  <button className={plan.highlighted ? 'btn-primary w-full mb-8' : 'btn-outline w-full mb-8'}>
                    Choose Plan
                  </button>

                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#D66B7F] mr-3 mt-1">✓</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-20 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="section-title">Service-wise Pricing</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#8B3A62] text-white">
                  <th className="px-6 py-4 text-left font-semibold">Service</th>
                  <th className="px-6 py-4 text-left font-semibold">Pricing</th>
                </tr>
              </thead>
              <tbody>
                {services.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 text-gray-800">{item.service}</td>
                    <td className="px-6 py-4 text-[#D66B7F] font-semibold">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 bg-white rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-[#8B3A62] mb-4">📌 Pricing Notes</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-[#D66B7F] mr-3 font-bold">•</span>
                <span>All prices are indicative and may vary based on design complexity, fabric quality, and customization level</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D66B7F] mr-3 font-bold">•</span>
                <span>Bridal packages include multiple fittings and adjustments</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D66B7F] mr-3 font-bold">•</span>
                <span>Rush delivery charges apply for orders requiring faster turnaround</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D66B7F] mr-3 font-bold">•</span>
                <span>Fabric charges are separate from tailoring charges</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D66B7F] mr-3 font-bold">•</span>
                <span>Group orders and bulk inquiries get special discounts</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#8B3A62]">Payment & Booking Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1. Consultation', desc: 'Meet our designers and discuss your requirements' },
              { step: '2. Quote & Payment', desc: 'Receive detailed quote and make advance payment' },
              { step: '3. Creation & Delivery', desc: 'Your garment is created and delivered on time' }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-[#D66B7F] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step.split('.')[0]}
                </div>
                <h3 className="font-bold text-[#8B3A62] mb-2">{item.step}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="btn-primary">Get a Free Quote</button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

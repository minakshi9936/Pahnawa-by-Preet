import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Designers() {
  const designers = [
    {
      id: 1,
      name: 'Preet Sharma',
      role: 'Lead Designer & Founder',
      bio: 'With 15+ years of experience in boutique design, Preet brings creativity and precision to every creation.',
      expertise: ['Bridal Wear', 'Ethnic Design', 'Custom Tailoring'],
      avatar: '👩‍🎨'
    },
    {
      id: 2,
      name: 'Aisha Malik',
      role: 'Senior Bridal Designer',
      bio: 'Specializing in bridal collections, Aisha has created stunning pieces for hundreds of happy brides.',
      expertise: ['Bridal Design', 'Embroidery', 'Lehenga Design'],
      avatar: '👩‍🎨'
    },
    {
      id: 3,
      name: 'Rahul Singh',
      role: 'Men\'s Fashion Designer',
      bio: 'Expert in ethnic menswear, Rahul creates timeless designs that blend tradition with contemporary style.',
      expertise: ['Men\'s Ethnic', 'Sherwani Design', 'Fusion Wear'],
      avatar: '👨‍🎨'
    },
    {
      id: 4,
      name: 'Neha Gupta',
      role: 'Styling & Consultation Expert',
      bio: 'With an eye for detail and understanding of body types, Neha ensures every garment flatters perfectly.',
      expertise: ['Personal Styling', 'Consultation', 'Color Analysis'],
      avatar: '👩‍🎨'
    },
    {
      id: 5,
      name: 'Vikram Patel',
      role: 'Fabric & Material Specialist',
      bio: 'Passionate about sourcing premium fabrics, Vikram ensures quality in every piece we create.',
      expertise: ['Fabric Selection', 'Quality Control', 'Sustainability'],
      avatar: '👨‍🎨'
    },
    {
      id: 6,
      name: 'Divya Verma',
      role: 'Alterations & Fitting Specialist',
      bio: 'Precision is Divya\'s expertise. She ensures perfect fit for every garment that leaves our boutique.',
      expertise: ['Alterations', 'Precision Fitting', 'Quality Assurance'],
      avatar: '👩‍🎨'
    }
  ]

  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Meet Our Design Team</h1>
          <p className="text-xl text-gray-300">Talented designers dedicated to creating your perfect outfit</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designers.map(designer => (
              <div key={designer.id} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-[#D66B7F] to-[#8B3A62] h-48 flex items-center justify-center">
                  <div className="text-7xl">{designer.avatar}</div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#8B3A62] mb-1">{designer.name}</h3>
                  <p className="text-[#D66B7F] font-semibold mb-4">{designer.role}</p>
                  
                  <p className="text-gray-600 mb-6">{designer.bio}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-[#8B3A62] mb-3">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {designer.expertise.map((skill, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="btn-primary w-full">Book Appointment</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#8B3A62]">Why Work With Our Designers?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Experienced Professionals', desc: '10+ years average experience in fashion design' },
              { title: 'Creative Excellence', desc: 'Award-winning designers with innovative vision' },
              { title: 'Client-Centric Approach', desc: 'Your vision is our priority' },
              { title: 'Continuous Learning', desc: 'Updated with latest fashion trends and techniques' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">⭐</div>
                <h3 className="font-bold text-[#8B3A62] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

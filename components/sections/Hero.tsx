import HeroSlider from '@/components/HeroSlider'

export default function Hero() {
  return (
    <section className="relative w-full h-70 md:h-86 lg:h-screen bg-contain overflow-hidden">
      <HeroSlider />
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight text-center max-w-4xl">
          Your Partner in Exceptional <span className="text-[#af0353]">Experiences</span>
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 text-center max-w-3xl">
          Boutique, Stitching & Designing Services Crafted Uniquely for You
        </p>
        <button className="btn-primary">Book Appointment</button>
      </div>
    </section>
  )
}

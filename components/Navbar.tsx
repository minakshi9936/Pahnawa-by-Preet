'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[#af0353] border-b border-gray-200 sticky top-0 z-50 h-20">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/pahnawa-logo1.png"
              alt="Pahnawa By Preets"
              width={160}
              height={160}
              className="h-55 sm:h-25 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link href="/" className="text-white text-sm lg:text-base hover:text-black transition-colors">
              Home
            </Link>
            <Link href="/boutique" className="text-white text-sm lg:text-base hover:text-black transition-colors">
              Boutique
            </Link>
            <Link href="/services" className="text-white text-sm lg:text-base hover:text-black transition-colors">
              Services
            </Link>
          {/*  <Link href="/designers" className="text-white text-sm lg:text-base hover:text-black transition-colors">
              Designers
            </Link> */}
            <Link href="/pricing" className="text-white text-sm lg:text-base hover:text-black transition-colors">
              Pricing
            </Link>
            <Link href="/gallery" className="text-white text-sm lg:text-base hover:text-black transition-colors">
              Gallery
            </Link>
            <Link href="/contact" className="text-white text-sm lg:text-base hover:text-black transition-colors">
              Contact
            </Link>
          </div>

        {/* <div className="hidden md:flex items-center space-x-6">
            <button className="text-[#8B3A62] hover:text-[#D66B7F] transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="text-[#8B3A62] hover:text-[#D66B7F] transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
          </div> */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col space-y-1.5"
          >
            <span className="w-6 h-0.5 bg-white block"></span>
            <span className="w-6 h-0.5 bg-white block"></span>
            <span className="w-6 h-0.5 bg-white block"></span>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 bg-[#9a0242]">
            <Link href="/" className="block py-3 px-2 text-white hover:bg-[#7d0135] transition-colors text-sm sm:text-base">
              Home
            </Link>
            <Link href="/boutique" className="block py-3 px-2 text-white hover:bg-[#7d0135] transition-colors text-sm sm:text-base">
              Boutique
            </Link>
            <Link href="/services" className="block py-3 px-2 text-white hover:bg-[#7d0135] transition-colors text-sm sm:text-base">
              Services
            </Link>
           {/* <Link href="/designers" className="block py-3 px-2 text-white hover:bg-[#7d0135] transition-colors text-sm sm:text-base">
              Designers
            </Link> */}
            <Link href="/pricing" className="block py-3 px-2 text-white hover:bg-[#7d0135] transition-colors text-sm sm:text-base">
              Pricing
            </Link>
            <Link href="/gallery" className="block py-3 px-2 text-white hover:bg-[#7d0135] transition-colors text-sm sm:text-base">
              Gallery
            </Link>
            <Link href="/contact" className="block py-3 px-2 text-white hover:bg-[#7d0135] transition-colors text-sm sm:text-base">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

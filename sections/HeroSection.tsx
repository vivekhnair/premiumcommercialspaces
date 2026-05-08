'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt="Premium commercial office tower"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/70 to-charcoal/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="font-inter text-gold text-sm tracking-[0.3em] uppercase mb-6">
            Powered by Slabs and Beams Realty
          </p>

          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Premium Commercial
            <br />
            <span className="text-gold">Spaces</span>
          </h1>

          {/* Gold accent line */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-0.5 bg-gold" />
          </div>

          <p className="font-inter text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-10">
            Discover handpicked commercial real estate across India. Office spaces, retail shops,
            and showrooms with end-to-end advisory — designed for discerning investors.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="gold"
              size="lg"
              onClick={() => handleScroll('#properties')}
              className="font-semibold tracking-wide"
            >
              Explore Properties
            </Button>
            <Button
              variant="white-outline"
              size="lg"
              onClick={() => handleScroll('#contact')}
              className="font-semibold tracking-wide"
            >
              Book Site Visit
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="font-inter text-xs text-white/50 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-gold" />
        </motion.div>
      </motion.div>
    </section>
  )
}

'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Award, Clock, Users } from 'lucide-react'
import Button from '@/components/ui/Button'

const highlights = [
  { icon: Award, value: '15+', label: 'Years of Excellence' },
  { icon: Clock, value: '24/7', label: 'Client Support' },
  { icon: Users, value: '5000+', label: 'Happy Investors' },
]

export default function AboutSection() {
  return (
    <section className="section-padding bg-soft-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative h-[500px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                alt="Slabs and Beams Realty — Premium Commercial Building"
                fill
                loading="lazy"
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative gold border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/30 -z-10" />

            {/* Highlights strip */}
            <div className="absolute bottom-6 left-6 right-6 bg-charcoal/90 backdrop-blur-sm p-4 grid grid-cols-3 gap-4">
              {highlights.map((h) => {
                const Icon = h.icon
                return (
                  <div key={h.label} className="flex flex-col items-center text-center">
                    <Icon size={18} className="text-gold mb-1" />
                    <span className="font-playfair text-xl font-bold text-white">{h.value}</span>
                    <span className="font-inter text-xs text-white/50">{h.label}</span>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-inter text-gold text-xs tracking-[0.3em] uppercase mb-3">
              Our Story
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-dark-text mb-4">
              About Slabs and Beams Realty
            </h2>
            <div className="gold-line mb-6" />

            <p className="font-inter text-base text-dark-text/60 leading-relaxed mb-5">
              Founded on the principles of integrity, expertise, and client-first service, Slabs and
              Beams Realty has grown into one of India&apos;s most trusted commercial real estate
              advisory firms. We believe that the right commercial space is the foundation of every
              successful business.
            </p>
            <p className="font-inter text-base text-dark-text/60 leading-relaxed mb-5">
              Our team of seasoned professionals brings together decades of experience in commercial
              property transactions, legal advisory, and market analysis. From identifying
              high-growth corridors to negotiating the best terms — we do it all.
            </p>
            <p className="font-inter text-base text-dark-text/60 leading-relaxed mb-8">
              Through our digital-first platform &quot;Premium Commercial Spaces,&quot; we are
              democratizing access to institutional-grade commercial real estate for individual
              investors, businesses, and corporates alike.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {['Integrity First', 'Client-Centric', 'Data-Driven', 'Pan-India Reach'].map((val) => (
                <div key={val} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-gold flex-shrink-0" />
                  <span className="font-inter text-sm font-medium text-dark-text/70">{val}</span>
                </div>
              ))}
            </div>

            <Button
              variant="gold"
              size="lg"
              onClick={() => {
                const el = document.querySelector('#contact')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Work With Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

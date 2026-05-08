'use client'

import { motion } from 'framer-motion'
import { Train, Building2, TrendingUp, Wifi, Car, Globe } from 'lucide-react'

const locations = [
  {
    icon: Train,
    title: 'Metro Connectivity',
    description: 'Properties strategically located near metro stations and major transport hubs for maximum accessibility.',
    highlights: ['5-min metro access', 'Multi-modal connectivity', 'Airport proximity'],
  },
  {
    icon: Building2,
    title: 'Prime Business Districts',
    description: 'Located within established commercial corridors and emerging business parks with Fortune 500 neighbors.',
    highlights: ['Grade-A locations', 'Corporate neighbors', 'Prestigious addresses'],
  },
  {
    icon: TrendingUp,
    title: 'High-Growth Zones',
    description: 'Identified emerging corridors with strong appreciation potential and government-backed infrastructure.',
    highlights: ['Infrastructure investment', 'Appreciation zones', 'SEZ proximity'],
  },
  {
    icon: Wifi,
    title: 'Smart City Infrastructure',
    description: 'Technology-enabled buildings within smart city projects offering fiber connectivity and smart utilities.',
    highlights: ['Fiber broadband', 'Smart utilities', 'Digital infrastructure'],
  },
  {
    icon: Car,
    title: 'Road & Highway Access',
    description: 'Excellent NH and expressway connectivity for logistics, showrooms, and large-format retail operations.',
    highlights: ['NH frontage', 'Expressway access', 'Wide road networks'],
  },
  {
    icon: Globe,
    title: 'Pan-India Coverage',
    description: 'Properties across major metros and tier-2 cities including Mumbai, Delhi, Bangalore, Pune, Hyderabad.',
    highlights: ['8+ major cities', 'Tier-2 presence', 'All-India advisory'],
  },
]

export default function LocationSection() {
  return (
    <section className="section-padding bg-charcoal relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 40px,
            #C8A96B 40px,
            #C8A96B 41px
          ), repeating-linear-gradient(
            90deg,
            transparent,
            transparent 40px,
            #C8A96B 40px,
            #C8A96B 41px
          )`,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-inter text-gold text-xs tracking-[0.3em] uppercase mb-3">
            Location Advantage
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
            Strategically Positioned Properties
          </h2>
          <div className="flex justify-center mb-6">
            <div className="gold-line" />
          </div>
          <p className="font-inter text-base text-white/50 max-w-xl mx-auto">
            Every property in our portfolio is selected for its location advantages — ensuring
            maximum footfall, connectivity, and long-term value appreciation.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc, i) => {
            const Icon = loc.icon
            return (
              <motion.div
                key={loc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white/5 border border-white/10 p-6 hover:border-gold/40 hover:bg-white/8 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <Icon size={20} className="text-gold" />
                </div>
                <h3 className="font-playfair text-lg font-semibold text-white mb-2">
                  {loc.title}
                </h3>
                <p className="font-inter text-sm text-white/50 leading-relaxed mb-4">
                  {loc.description}
                </p>
                <ul className="space-y-1">
                  {loc.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-gold flex-shrink-0" />
                      <span className="font-inter text-xs text-gold/70">{h}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

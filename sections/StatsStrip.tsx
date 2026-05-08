'use client'

import { motion } from 'framer-motion'
import { MapPin, TrendingUp, CheckCircle, Handshake } from 'lucide-react'

const stats = [
  {
    icon: MapPin,
    value: '500+',
    label: 'Prime Commercial Locations',
  },
  {
    icon: TrendingUp,
    value: '₹200Cr+',
    label: 'High ROI Investment Opportunities',
  },
  {
    icon: CheckCircle,
    value: '1000+',
    label: 'Verified Property Listings',
  },
  {
    icon: Handshake,
    value: 'End-to-End',
    label: 'Assistance Guaranteed',
  },
]

export default function StatsStrip() {
  return (
    <section className="bg-navy py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-gold/40 transition-colors duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-gold/10 border border-gold/30 mb-4">
                  <Icon size={22} className="text-gold" />
                </div>
                <span className="font-playfair text-3xl font-bold text-white mb-2">
                  {stat.value}
                </span>
                <span className="font-inter text-sm text-white/60 leading-snug">{stat.label}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

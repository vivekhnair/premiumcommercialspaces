'use client'

import { motion } from 'framer-motion'
import { Home, Shield, BarChart2, Users, Eye, Zap } from 'lucide-react'

const features = [
  {
    icon: Home,
    title: 'End-to-End Property Assistance',
    description:
      'From property discovery to legal due diligence and final possession — we walk with you through every step of the journey.',
  },
  {
    icon: Shield,
    title: 'Verified Commercial Listings',
    description:
      'Every listing undergoes rigorous verification. RERA compliance, title checks, and physical inspection — guaranteed.',
  },
  {
    icon: BarChart2,
    title: 'Market Insights That Matter',
    description:
      'Data-driven analysis of market trends, rental yields, and appreciation potential to support every investment decision.',
  },
  {
    icon: Users,
    title: 'Personalized Advisory',
    description:
      'Dedicated advisors who understand your business goals, budget, and timeline. No cookie-cutter recommendations.',
  },
  {
    icon: Eye,
    title: 'Transparent Guidance',
    description:
      'Full transparency on pricing, legal status, and developer track record. What you see is exactly what you get.',
  },
  {
    icon: Zap,
    title: 'Technology-Driven Experience',
    description:
      'Virtual tours, digital documentation, and real-time portfolio tracking — modern tools for modern investors.',
  },
]

export default function WhyChooseSection() {
  return (
    <section className="section-padding bg-light-gray">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-inter text-gold text-xs tracking-[0.3em] uppercase mb-3">
            Our Advantage
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-dark-text mb-4">
            Why Choose Premium Commercial Spaces
          </h2>
          <div className="flex justify-center mb-6">
            <div className="gold-line" />
          </div>
          <p className="font-inter text-base text-dark-text/60 max-w-xl mx-auto">
            We combine decades of real estate expertise with cutting-edge technology to deliver
            an unmatched commercial property experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white p-8 border border-border-gray hover:border-gold/40 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gold/10 border border-gold/20 flex items-center justify-center mb-5 group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                  <Icon size={22} className="text-gold group-hover:text-charcoal transition-colors duration-300" />
                </div>
                <h3 className="font-playfair text-lg font-bold text-dark-text mb-3">
                  {feature.title}
                </h3>
                <p className="font-inter text-sm text-dark-text/60 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

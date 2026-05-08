'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, TrendingUp, Shield, PieChart } from 'lucide-react'
import Button from '@/components/ui/Button'

const metrics = [
  { label: 'Average ROI', value: 12, suffix: '%', prefix: '' },
  { label: 'Properties Transacted', value: 500, suffix: '+', prefix: '' },
  { label: 'Client Satisfaction', value: 98, suffix: '%', prefix: '' },
  { label: 'Investment Value', value: 200, suffix: 'Cr+', prefix: '₹' },
]

const features = [
  'Handpicked high-yield commercial assets',
  'RERA registered and legally verified',
  'Transparent pricing with no hidden costs',
  'Dedicated investment advisory team',
  'Post-purchase property management support',
  'Regular market performance reports',
]

function CountUp({ target, suffix, prefix }: { target: number; suffix: string; prefix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}

export default function InvestmentSection() {
  return (
    <section className="section-padding bg-soft-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-inter text-gold text-xs tracking-[0.3em] uppercase mb-3">
              Smart Investment
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-dark-text mb-4">
              Why Commercial Real Estate Is the Smartest Investment
            </h2>
            <div className="gold-line mb-6" />
            <p className="font-inter text-base text-dark-text/60 leading-relaxed mb-8">
              Commercial properties consistently outperform residential investments, offering
              higher rental yields, longer lease terms, and stronger appreciation. Our curated
              portfolio gives you access to premium assets at every budget level.
            </p>

            <ul className="space-y-3 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-gold flex-shrink-0 mt-0.5" />
                  <span className="font-inter text-sm text-dark-text/70">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              variant="gold"
              size="lg"
              onClick={() => {
                const el = document.querySelector('#contact')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Get Investment Consultation
            </Button>
          </motion.div>

          {/* Right: Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-6"
          >
            {metrics.map((metric, i) => {
              const icons = [TrendingUp, CheckCircle2, Shield, PieChart]
              const Icon = icons[i]
              return (
                <div
                  key={metric.label}
                  className="bg-navy p-6 flex flex-col items-center text-center border border-gold/10 hover:border-gold/30 transition-colors duration-300"
                >
                  <Icon size={24} className="text-gold mb-4" />
                  <span className="font-playfair text-3xl font-bold text-white mb-2">
                    <CountUp target={metric.value} suffix={metric.suffix} prefix={metric.prefix} />
                  </span>
                  <span className="font-inter text-xs text-white/60">{metric.label}</span>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

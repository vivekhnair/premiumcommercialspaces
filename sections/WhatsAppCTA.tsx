'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

interface WhatsAppCTAProps {
  title: string
  subtitle: string
  ctaText: string
}

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210'

export default function WhatsAppCTA({ title, subtitle, ctaText }: WhatsAppCTAProps) {
  return (
    <section className="bg-navy py-16">
      <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center">
              <MessageCircle size={28} className="text-[#25D366]" />
            </div>
          </div>

          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="font-inter text-sm md:text-base text-white/60 mb-8 max-w-xl mx-auto">
            {subtitle}
          </p>

          <a
            href={`https://wa.me/${whatsappNumber}?text=Hi%2C%20I'm%20interested%20in%20your%20commercial%20properties.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white font-inter font-semibold text-base px-8 py-4 hover:bg-[#20BA5C] transition-colors duration-300"
          >
            <MessageCircle size={20} />
            {ctaText}
          </a>
        </motion.div>
      </div>
    </section>
  )
}

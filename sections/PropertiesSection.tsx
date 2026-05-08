'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Eye, Download, DollarSign, Calendar, Phone } from 'lucide-react'
import Button from '@/components/ui/Button'

const properties = [
  {
    id: 'office',
    category: 'Office Spaces',
    title: 'Premium Office Spaces',
    description:
      'World-class office environments in prime business districts. Designed for productivity with modern amenities, flexible layouts, and prestigious addresses that elevate your brand.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    features: ['Grade A Buildings', 'Flexible Floor Plans', 'Ample Parking', '24/7 Security', 'Metro Connectivity'],
  },
  {
    id: 'retail',
    category: 'Retail Shops',
    title: 'Retail Shops',
    description:
      'High-footfall retail spaces in bustling commercial corridors and premium malls. Ideal for brand showcases, boutiques, and experiential retail destinations.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    features: ['High Footfall Areas', 'Prominent Frontage', 'Premium Malls', 'Street Level Units', 'F&B Ready Options'],
  },
  {
    id: 'showroom',
    category: 'Showrooms',
    title: 'Showrooms & Commercial Units',
    description:
      'Expansive showroom spaces perfect for automotive, luxury brands, and large-format retail. Corner visibility, double-height ceilings, and dedicated access points.',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80',
    features: ['Double-Height Ceilings', 'Corner Visibility', 'Drive-in Access', 'Large Format Spaces', 'Industrial Zones'],
  },
]

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210'

export default function PropertiesSection() {
  return (
    <section className="section-padding bg-light-gray">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-inter text-gold text-xs tracking-[0.3em] uppercase mb-3">
            Our Portfolio
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-dark-text mb-4">
            Property Categories
          </h2>
          <div className="flex justify-center mb-6">
            <div className="gold-line" />
          </div>
          <p className="font-inter text-base text-dark-text/60 max-w-xl mx-auto">
            Curated commercial real estate across three primary categories, each delivering
            unmatched quality and strategic value.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, i) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  loading="lazy"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-gold text-charcoal font-inter text-xs font-semibold px-3 py-1 tracking-wide uppercase">
                    {property.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-playfair text-xl font-bold text-dark-text mb-3">
                  {property.title}
                </h3>
                <p className="font-inter text-sm text-dark-text/60 leading-relaxed mb-4 flex-1">
                  {property.description}
                </p>

                {/* Features */}
                <ul className="mb-6 space-y-1">
                  {property.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gold flex-shrink-0" />
                      <span className="font-inter text-xs text-dark-text/70">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Buttons */}
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant="gold"
                    size="sm"
                    className="flex items-center justify-center gap-1.5 text-xs"
                    onClick={() => {}}
                  >
                    <Eye size={13} />
                    View Details
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center justify-center gap-1.5 text-xs"
                    onClick={() => {}}
                  >
                    <Download size={13} />
                    Brochure
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center justify-center gap-1.5 text-xs border border-border-gray"
                    onClick={() => {}}
                  >
                    <DollarSign size={13} />
                    Get Pricing
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center justify-center gap-1.5 text-xs border border-border-gray"
                    onClick={() => {}}
                  >
                    <Calendar size={13} />
                    Site Visit
                  </Button>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=Hi%2C%20I'm%20interested%20in%20${encodeURIComponent(property.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="col-span-2 flex items-center justify-center gap-1.5 text-xs bg-[#25D366] text-white px-4 py-2 font-inter font-medium hover:bg-[#20BA5C] transition-colors"
                  >
                    <Phone size={13} />
                    Talk to Advisor
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

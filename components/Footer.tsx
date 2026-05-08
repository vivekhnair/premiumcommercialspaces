import { Instagram, Linkedin, Facebook, Twitter, MessageCircle, MapPin, Phone, Mail } from 'lucide-react'

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="mb-4">
              <span className="font-playfair text-xl font-bold text-white">
                Premium Commercial
                <span className="text-gold">.</span>
              </span>
              <p className="font-inter text-xs text-gold/80 tracking-widest uppercase mt-1">
                Slabs and Beams Realty
              </p>
            </div>
            <p className="font-inter text-sm text-white/60 leading-relaxed">
              Your trusted partner in premium commercial real estate. We bring expertise, integrity,
              and technology to every transaction across India.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-white/50 hover:text-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-white/50 hover:text-gold transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="text-white/50 hover:text-gold transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="text-white/50 hover:text-gold transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-base font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Properties', 'Investment', 'Locations', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="font-inter text-sm text-white/60 hover:text-gold transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Properties */}
          <div>
            <h4 className="font-playfair text-base font-semibold text-white mb-4">Properties</h4>
            <ul className="space-y-2">
              {[
                'Premium Office Spaces',
                'Retail Shops',
                'Showrooms',
                'Commercial Units',
                'Business Parks',
                'Co-working Spaces',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#properties"
                    className="font-inter text-sm text-white/60 hover:text-gold transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair text-base font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={16} className="text-gold flex-shrink-0 mt-0.5" />
                <span className="font-inter text-sm text-white/60">
                  123 Business District, Commercial Hub, Mumbai, Maharashtra 400001
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="text-gold flex-shrink-0 mt-0.5" />
                <a href="tel:+919876543210" className="font-inter text-sm text-white/60 hover:text-gold transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="text-gold flex-shrink-0 mt-0.5" />
                <a href="mailto:info@premiumcommercialspaces.com" className="font-inter text-sm text-white/60 hover:text-gold transition-colors">
                  info@premiumcommercialspaces.com
                </a>
              </li>
            </ul>
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hi, I'm interested in commercial properties.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 bg-[#25D366] text-white px-4 py-2 text-sm font-inter font-medium hover:bg-[#20BA5C] transition-colors"
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-inter text-xs text-white/40">
              &copy; {new Date().getFullYear()} Premium Commercial Spaces. Powered by Slabs and Beams Realty. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="font-inter text-xs text-white/40 hover:text-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-inter text-xs text-white/40 hover:text-gold transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

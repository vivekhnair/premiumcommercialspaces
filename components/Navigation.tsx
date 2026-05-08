'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useScrolled } from '@/hooks/useScrolled'
import { cn } from '@/lib/utils'
import Button from '@/components/ui/Button'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Properties', href: '#properties' },
  { label: 'Investment', href: '#investment' },
  { label: 'Locations', href: '#locations' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const scrolled = useScrolled(50)
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-400',
        scrolled
          ? 'bg-charcoal/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
              className="flex flex-col"
            >
              <span className="font-playfair text-lg md:text-xl font-bold text-white tracking-wide leading-tight">
                Premium Commercial
                <span className="text-gold">.</span>
              </span>
              <span className="font-inter text-xs text-gold/80 tracking-widest uppercase">
                Slabs and Beams Realty
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className="font-inter text-sm text-white/80 hover:text-gold transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleNavClick('#contact')}
            >
              Book Site Visit
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-charcoal/98 border-t border-gold/20 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  className="font-inter text-base text-white/80 hover:text-gold transition-colors duration-200 py-2 border-b border-white/10"
                >
                  {link.label}
                </a>
              ))}
              <Button
                variant="gold"
                size="md"
                className="mt-2 w-full"
                onClick={() => handleNavClick('#contact')}
              >
                Book Site Visit
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

'use client'

import Link from 'next/link'
import { Leaf, ArrowUpRight, Mail, Phone, MapPin, Linkedin, Twitter, Youtube, Instagram } from 'lucide-react'

const footerLinks = {
  products: {
    title: 'Products',
    links: [
      { name: 'Flexible Panels', href: '/products/flexible-solar-panels' },
      { name: 'Portable Panels', href: '/products/portable-solar-panels' },
      { name: 'Rigid Panels', href: '/products/rigid-solar-panels' },
      { name: 'Anti-Shading Tech', href: '/products/anti-shading-panel' },
      { name: 'All Products', href: '/products' },
    ],
  },
  business: {
    title: 'Solutions',
    links: [
      { name: 'RV & Campervan', href: '/business/rv' },
      { name: 'Marine & Boats', href: '/business/marine' },
      { name: 'Balcony Solar', href: '/business/balcony' },
      { name: 'Outdoor & Camping', href: '/business/outdoor' },
      { name: 'Partner Program', href: '/business/partner' },
    ],
  },
  support: {
    title: 'Support',
    links: [
      { name: 'Warranty', href: '/support/warranty' },
      { name: 'Certifications', href: '/support/certifications' },
      { name: 'Custom Panels', href: '/support/custom-panel' },
      { name: 'FAQ', href: '/support/faq' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { name: 'Our Story', href: '/about/story' },
      { name: 'History', href: '/about/history' },
      { name: 'Blog', href: '/about/blog' },
      { name: 'News', href: '/about/news' },
      { name: 'Contact', href: '/contact' },
    ],
  },
}

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-[#1A2E1C] text-white">
      {/* Main Footer */}
      <div className="container py-24">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-serif text-white">Solarid</span>
                <p className="text-white/40 text-xs uppercase tracking-widest">Australia</p>
              </div>
            </Link>
            
            <p className="text-white/60 leading-relaxed mb-8 max-w-sm">
              Premium solar panels crafted with precision for the Australian market. 
              Flexible, portable, and rigid solutions that don&apos;t compromise on 
              quality or aesthetics.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <a href="mailto:info@solarid.com.au" className="flex items-center gap-3 text-white/60 hover:text-primary-light transition-colors group">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@solarid.com.au</span>
              </a>
              <a href="tel:+61280001234" className="flex items-center gap-3 text-white/60 hover:text-primary-light transition-colors group">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+61 2 8000 1234</span>
              </a>
              <div className="flex items-start gap-3 text-white/60">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">123 Solar Street, Sydney NSW 2000</span>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([key, section]) => (
                <div key={key}>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-6">
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="group flex items-center gap-1 text-sm text-white/60 hover:text-white transition-colors"
                        >
                          <span>{link.name}</span>
                          <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-white/10">
        <div className="container py-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h4 className="font-serif text-xl text-white mb-2">
                Stay updated with Solarid
              </h4>
              <p className="text-white/50 text-sm">
                Subscribe to our newsletter for the latest products, news and exclusive offers.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:bg-white/10 transition-all w-64"
              />
              <button className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-hover transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex flex-wrap items-center gap-6">
              <p className="text-white/40 text-sm">
                © {new Date().getFullYear()} Solarid Australia. All rights reserved.
              </p>
              <div className="flex items-center gap-4 text-xs text-white/30">
                <Link href="/privacy" className="hover:text-white/60 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-white/60 transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:bg-primary hover:text-white transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

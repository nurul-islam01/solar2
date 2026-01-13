'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Menu, X, ChevronDown, ArrowRight, Leaf } from 'lucide-react'
import MegaMenu from './MegaMenu'

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'Products', 
    href: '/products',
    hasMegaMenu: true,
  },
  { 
    name: 'New Release', 
    href: '/new-release',
    submenu: [
      { name: 'RV Solar Kits', href: '/new-release/rv-solar-kits' },
      { name: 'Balcony Solar Panels', href: '/new-release/balcony-solar-panels' },
      { name: 'Off-Grid Kits', href: '/new-release/off-grid-kits' },
      { name: 'Marine Solution', href: '/new-release/marine-solution' },
    ]
  },
  { 
    name: 'Business', 
    href: '/business',
    submenu: [
      { name: 'Outdoor', href: '/business/outdoor' },
      { name: 'RV', href: '/business/rv' },
      { name: 'Marine', href: '/business/marine' },
      { name: 'Balcony', href: '/business/balcony' },
      { name: 'Become a Partner', href: '/business/partner' },
    ]
  },
  { 
    name: 'Support', 
    href: '/support',
    submenu: [
      { name: 'Product Test', href: '/support/product-test' },
      { name: 'Warranty', href: '/support/warranty' },
      { name: 'Certifications', href: '/support/certifications' },
      { name: 'Custom Panel', href: '/support/custom-panel' },
      { name: 'FAQ', href: '/support/faq' },
    ]
  },
  { 
    name: 'About', 
    href: '/about',
    submenu: [
      { name: 'Our Story', href: '/about/story' },
      { name: 'Our History', href: '/about/history' },
      { name: 'Blog', href: '/about/blog' },
      { name: 'News', href: '/about/news' },
    ]
  },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [showMegaMenu, setShowMegaMenu] = useState(false)

  // For pages other than homepage, always use "scrolled" styling (dark text on light bg)
  const shouldUseDarkText = !isHomePage || isScrolled

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Main Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          shouldUseDarkText 
            ? 'bg-white/95 backdrop-blur-md shadow-soft py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <nav className="container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className={`relative w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden transition-all duration-500 ${
                shouldUseDarkText ? 'bg-primary' : 'bg-white/10 backdrop-blur-sm border border-white/20'
              }`}>
                <Leaf className="w-5 h-5 text-white transition-all duration-500 group-hover:rotate-12" />
              </div>
              <div className="flex flex-col">
                <span className={`text-lg font-serif tracking-tight transition-colors duration-500 ${
                  shouldUseDarkText ? 'text-text-primary' : 'text-white'
                }`}>
                  Solarid
                </span>
                <span className={`text-[9px] uppercase tracking-[0.15em] -mt-0.5 transition-colors duration-500 ${
                  shouldUseDarkText ? 'text-text-muted' : 'text-white/60'
                }`}>
                  Australia
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => {
                    if (item.hasMegaMenu) {
                      setShowMegaMenu(true)
                    } else if (item.submenu) {
                      setActiveDropdown(item.name)
                    }
                  }}
                  onMouseLeave={() => {
                    if (item.hasMegaMenu) {
                      setShowMegaMenu(false)
                    } else {
                      setActiveDropdown(null)
                    }
                  }}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      shouldUseDarkText
                        ? activeDropdown === item.name || (item.hasMegaMenu && showMegaMenu)
                          ? 'text-primary'
                          : 'text-text-secondary hover:text-primary'
                        : activeDropdown === item.name || (item.hasMegaMenu && showMegaMenu)
                          ? 'text-white'
                          : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {item.name}
                    {(item.submenu || item.hasMegaMenu) && (
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        activeDropdown === item.name || (item.hasMegaMenu && showMegaMenu) ? 'rotate-180' : ''
                      }`} />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.submenu && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 pt-3 w-56">
                      <div className="bg-white rounded-2xl shadow-strong border border-primary/5 py-2 overflow-hidden">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="flex items-center justify-between px-5 py-3 text-sm text-text-secondary hover:text-primary hover:bg-primary-lighter transition-all duration-300 group"
                          >
                            <span>{subItem.name}</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-6">
              <Link
                href="/contact"
                className={`group flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-500 ${
                  shouldUseDarkText
                    ? 'bg-primary text-white hover:bg-primary-hover'
                    : 'bg-white text-[#1A2E1C] hover:bg-primary-light'
                }`}
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className={`lg:hidden p-2.5 rounded-xl transition-colors ${
                shouldUseDarkText 
                  ? 'text-text-primary hover:bg-primary-light' 
                  : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-primary/5 shadow-strong animate-fade-in">
            <div className="container py-6">
              {navigation.map((item) => (
                <div key={item.name} className="border-b border-primary/5 last:border-0">
                  <Link
                    href={item.href}
                    className="block py-4 text-text-primary hover:text-primary font-medium transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="pl-4 pb-4">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block py-2.5 text-sm text-text-muted hover:text-primary transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-6">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-white rounded-xl font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get a Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Mega Menu */}
        {showMegaMenu && (
          <div
            className="absolute top-full left-0 right-0 pt-2"
            onMouseEnter={() => setShowMegaMenu(true)}
            onMouseLeave={() => setShowMegaMenu(false)}
          >
            <MegaMenu />
          </div>
        )}
      </header>
    </>
  )
}

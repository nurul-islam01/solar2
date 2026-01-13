'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Sparkles, Flame, Star } from 'lucide-react'

const productCategories = [
  {
    title: 'Flexible Panels',
    description: 'Ultra-lightweight, bendable solutions',
    href: '/products/flexible-solar-panels',
    image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=300&h=200&fit=crop',
    items: [
      { name: 'PA621 Series', badge: 'NEW', href: '/products/pa621-series' },
      { name: 'PA219 Series', badge: 'TOP', href: '/products/pa219-series' },
      { name: 'TF Series', badge: 'HOT', href: '/products/tf-series' },
    ]
  },
  {
    title: 'Portable Panels',
    description: 'Foldable, adventure-ready designs',
    href: '/products/portable-solar-panels',
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=300&h=200&fit=crop',
    items: [
      { name: 'BXF Plus Series', badge: 'NEW', href: '/products/bxf-plus-series' },
      { name: 'Hi-Power Series', badge: 'HOT', href: '/products/hi-power-series' },
      { name: 'Winner-Bag Series', href: '/products/winner-bag-series' },
      { name: 'SPC Series', href: '/products/spc-series' },
    ]
  },
  {
    title: 'Rigid Panels',
    description: 'Long-lasting, durable installations',
    href: '/products/rigid-solar-panels',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=300&h=200&fit=crop',
    items: [
      { name: 'SGM Series', href: '/products/sgm-series' },
      { name: 'DG Series', badge: 'NEW', href: '/products/dg-series' },
      { name: 'SGSP Series', href: '/products/sgsp-series' },
    ]
  },
]

const featuredProducts = [
  { 
    name: 'Anti-Shading Panel', 
    badge: 'NEW', 
    desc: 'Reliable power in shaded conditions',
    href: '/products/anti-shading-panel' 
  },
  { 
    name: 'TOPCon Panel', 
    badge: 'TOP', 
    desc: 'N-TYPE high efficiency technology',
    href: '/products/topcon-panel' 
  },
  { 
    name: '400W Solar Panel', 
    badge: 'HOT', 
    desc: 'High efficiency for maximum power',
    href: '/products/400w-solar-panel' 
  },
]

const getBadgeIcon = (badge: string) => {
  switch (badge) {
    case 'NEW': return Sparkles
    case 'HOT': return Flame
    case 'TOP': return Star
    default: return null
  }
}

export default function MegaMenu() {
  return (
    <div className="bg-white shadow-2xl border-b border-primary/5 animate-fade-in">
      <div className="container py-10">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Product Categories */}
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-3 gap-8">
              {productCategories.map((category) => (
                <div key={category.title}>
                  {/* Category Header with Image */}
                  <Link href={category.href} className="block group mb-5">
                    <div className="relative h-32 rounded-xl overflow-hidden mb-3">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E1C]/70 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <h3 className="font-serif text-white text-lg">{category.title}</h3>
                      </div>
                    </div>
                    <p className="text-xs text-text-muted">{category.description}</p>
                  </Link>
                  
                  {/* Category Items */}
                  <div className="space-y-1">
                    {category.items.map((item) => {
                      const BadgeIcon = item.badge ? getBadgeIcon(item.badge) : null
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="group flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-primary-lighter transition-all duration-300"
                        >
                          <span className="text-sm text-text-secondary group-hover:text-primary transition-colors">
                            {item.name}
                          </span>
                          {item.badge && BadgeIcon && (
                            <span className={`flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                              item.badge === 'NEW' ? 'bg-primary/10 text-primary' :
                              item.badge === 'HOT' ? 'bg-earth-olive/10 text-earth-olive' :
                              'bg-earth-brown/10 text-earth-brown'
                            }`}>
                              <BadgeIcon className="w-2.5 h-2.5" />
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Section */}
          <div className="lg:col-span-4 border-l border-primary/5 pl-8">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-5">
              Top Products
            </h4>
            <div className="space-y-3">
              {featuredProducts.map((product) => {
                const BadgeIcon = product.badge ? getBadgeIcon(product.badge) : null
                return (
                  <Link
                    key={product.name}
                    href={product.href}
                    className="group block p-4 rounded-xl border border-primary/5 hover:border-primary/20 hover:bg-primary-lighter transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-1">
                      <h5 className="font-medium text-text-primary group-hover:text-primary transition-colors">
                        {product.name}
                      </h5>
                      {product.badge && BadgeIcon && (
                        <span className={`flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                          product.badge === 'NEW' ? 'bg-primary/10 text-primary' :
                          product.badge === 'HOT' ? 'bg-earth-olive/10 text-earth-olive' :
                          'bg-earth-brown/10 text-earth-brown'
                        }`}>
                          <BadgeIcon className="w-2.5 h-2.5" />
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-text-muted">{product.desc}</p>
                  </Link>
                )
              })}
            </div>
            
            {/* View All Link */}
            <Link
              href="/products"
              className="group flex items-center gap-2 mt-6 text-primary font-medium text-sm"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

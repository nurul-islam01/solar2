import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Sparkles, Flame, Star, Filter, Grid3X3, LayoutList } from 'lucide-react'

const categories = [
  {
    slug: 'flexible-solar-panels',
    title: 'Flexible Panels',
    subtitle: 'Ultra-lightweight & bendable',
    description: 'Perfect for curved surfaces like RVs, boats, and custom installations. Our flexible panels bend up to 30° while maintaining peak efficiency.',
    image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=900&h=600&fit=crop',
    products: [
      { name: 'PA621 Series', badge: 'NEW', power: '180-220W', efficiency: '23.6%', href: '/products/pa621-series' },
      { name: 'PA219 Series', badge: 'TOP', power: '100-400W', efficiency: '24.4%', href: '/products/pa219-series' },
      { name: 'TF Series', badge: 'HOT', power: '50-200W', efficiency: '22.8%', href: '/products/tf-series' },
    ]
  },
  {
    slug: 'portable-solar-panels',
    title: 'Portable Panels',
    subtitle: 'Adventure-ready designs',
    description: 'Foldable, lightweight solar panels designed for outdoor enthusiasts. Easy to transport, quick to deploy, and built for durability.',
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=900&h=600&fit=crop',
    products: [
      { name: 'BXF Plus Series', badge: 'NEW', power: '100-400W', efficiency: '24.0%', href: '/products/bxf-plus-series' },
      { name: 'Hi-Power Series', badge: 'HOT', power: '200-400W', efficiency: '23.8%', href: '/products/hi-power-series' },
      { name: 'Winner-Bag Series', badge: null, power: '60-120W', efficiency: '22.5%', href: '/products/winner-bag-series' },
      { name: 'SPC Series', badge: null, power: '80-200W', efficiency: '22.0%', href: '/products/spc-series' },
    ]
  },
  {
    slug: 'rigid-solar-panels',
    title: 'Rigid Panels',
    subtitle: 'Built for permanence',
    description: 'Traditional monocrystalline and bifacial panels with exceptional longevity. Ideal for fixed rooftop, balcony, and off-grid installations.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=900&h=600&fit=crop',
    products: [
      { name: 'SGM Series', badge: null, power: '300-550W', efficiency: '21.5%', href: '/products/sgm-series' },
      { name: 'DG Series', badge: 'NEW', power: '400-600W', efficiency: '22.5%', href: '/products/dg-series' },
      { name: 'SGSP Series', badge: 'TOP', power: '180-400W', efficiency: '23.0%', href: '/products/sgsp-series' },
    ]
  },
]

const featuredProducts = [
  {
    name: 'Anti-Shading Panel',
    badge: 'NEW',
    description: 'Revolutionary cell-level shadow management for reliable power in shaded conditions.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop',
    href: '/products/anti-shading-panel',
  },
  {
    name: 'TOPCon Panel',
    badge: 'TOP',
    description: 'N-TYPE technology delivering industry-leading 24.4% efficiency.',
    image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600&h=400&fit=crop',
    href: '/products/topcon-panel',
  },
  {
    name: '400W Solar Panel',
    badge: 'HOT',
    description: 'High-efficiency panels perfect for residential and commercial applications.',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&h=400&fit=crop',
    href: '/products/400w-solar-panel',
  },
]

const getBadgeStyle = (badge: string | null) => {
  switch (badge) {
    case 'NEW': return 'bg-primary text-white'
    case 'HOT': return 'bg-earth-olive text-white'
    case 'TOP': return 'bg-earth-brown text-white'
    default: return ''
  }
}

const getBadgeIcon = (badge: string | null) => {
  switch (badge) {
    case 'NEW': return Sparkles
    case 'HOT': return Flame
    case 'TOP': return Star
    default: return null
  }
}

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-lighter via-background to-background" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[120px]" />
        
        <div className="container relative">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-primary" />
              <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">
                Our Collection
              </span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-text-primary mb-8 leading-[1.05]">
              Solar panels, <br />
              <span className="italic font-light text-primary">crafted with precision</span>
            </h1>
            
            <p className="text-xl text-text-secondary max-w-2xl leading-relaxed">
              Explore our comprehensive range of flexible, portable, and rigid solar panels. 
              Each product is engineered for Australian conditions with TÜV and UL certifications.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products Banner */}
      <section className="py-16 bg-[#1A2E1C]">
        <div className="container">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-primary-light text-xs tracking-widest uppercase mb-2 block">
                Featured Technology
              </span>
              <h2 className="font-serif text-3xl text-white">Top Products</h2>
            </div>
            <Link 
              href="/new-release" 
              className="hidden md:flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
            >
              <span>View New Releases</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => {
              const BadgeIcon = getBadgeIcon(product.badge)
              return (
                <Link key={product.name} href={product.href} className="group">
                  <div className="relative aspect-[3/2] rounded-2xl overflow-hidden mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E1C]/60 to-transparent" />
                    {product.badge && BadgeIcon && (
                      <span className={`absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${getBadgeStyle(product.badge)}`}>
                        <BadgeIcon className="w-3 h-3" />
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-xl text-white group-hover:text-primary-light transition-colors mb-2">
                    {product.name}
                  </h3>
                  <p className="text-white/60 text-sm">{product.description}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24">
        <div className="container">
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-16 pb-8 border-b border-primary/10">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-lighter text-primary text-sm font-medium">
                <Filter className="w-4 h-4" />
                All Categories
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-full text-text-muted hover:text-primary text-sm transition-colors">
                Flexible
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-full text-text-muted hover:text-primary text-sm transition-colors">
                Portable
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-full text-text-muted hover:text-primary text-sm transition-colors">
                Rigid
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg bg-primary-lighter text-primary">
                <Grid3X3 className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-lg text-text-muted hover:text-primary transition-colors">
                <LayoutList className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Category Sections */}
          <div className="space-y-32">
            {categories.map((category, index) => (
              <div key={category.slug} className={`grid lg:grid-cols-2 gap-16 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Category Image & Info */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Link href={`/products/${category.slug}`} className="group block">
                    <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-8">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E1C]/50 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <span className="text-primary-light text-xs tracking-widest uppercase">Category</span>
                        <h2 className="font-serif text-3xl md:text-4xl text-white mt-2">{category.title}</h2>
                      </div>
                    </div>
                  </Link>
                  <p className="text-lg text-text-secondary leading-relaxed mb-6">
                    {category.description}
                  </p>
                  <Link 
                    href={`/products/${category.slug}`}
                    className="group inline-flex items-center gap-2 text-primary font-medium"
                  >
                    <span>View All {category.title}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Products List */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <p className="text-xs text-text-muted uppercase tracking-widest mb-6">
                    {category.subtitle}
                  </p>
                  <div className="space-y-4">
                    {category.products.map((product) => {
                      const BadgeIcon = getBadgeIcon(product.badge)
                      return (
                        <Link 
                          key={product.name} 
                          href={product.href}
                          className="group flex items-center justify-between p-6 rounded-2xl border border-primary/5 hover:border-primary/20 hover:bg-primary-lighter transition-all duration-300"
                        >
                          <div className="flex items-center gap-4">
                            <div>
                              <div className="flex items-center gap-3 mb-1">
                                <h3 className="font-serif text-lg text-text-primary group-hover:text-primary transition-colors">
                                  {product.name}
                                </h3>
                                {product.badge && BadgeIcon && (
                                  <span className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold ${getBadgeStyle(product.badge)}`}>
                                    <BadgeIcon className="w-2.5 h-2.5" />
                                    {product.badge}
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center gap-4 text-sm text-text-muted">
                                <span>{product.power}</span>
                                <span className="w-1 h-1 rounded-full bg-primary/30" />
                                <span>{product.efficiency} efficiency</span>
                              </div>
                            </div>
                          </div>
                          <ArrowRight className="w-5 h-5 text-text-muted group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-lighter">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium tracking-widest text-sm uppercase mb-4 block">
              Custom Solutions
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-text-primary mb-6">
              Need a custom panel?
            </h2>
            <p className="text-lg text-text-secondary mb-10 max-w-xl mx-auto">
              We specialize in customizing solar panels for unique applications. 
              Share your requirements and our engineering team will design the perfect solution.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-full font-medium transition-all duration-500 hover:bg-primary-hover"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/support/custom-panel"
                className="inline-flex items-center gap-3 px-8 py-4 border border-primary/20 text-primary rounded-full font-medium transition-all duration-300 hover:bg-white"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Check, Shield, Zap, Award, Download, ChevronRight, Star } from 'lucide-react'

// This would normally come from a database or CMS
const getProductData = (slug: string) => {
  const products: Record<string, {
    name: string
    category: string
    tagline: string
    description: string
    image: string
    gallery: string[]
    specs: { label: string; value: string }[]
    features: string[]
    applications: string[]
    certifications: string[]
    badge?: string
  }> = {
    'pa621-series': {
      name: 'PA621 Series',
      category: 'Flexible Panels',
      tagline: 'Anti-Shading & Heat Insulation Technology',
      description: 'The PA621 Series represents our latest advancement in flexible solar panel technology. Featuring cell-level shadow management and advanced heat insulation, these panels deliver consistent power output even in challenging conditions. Perfect for RVs, boats, and curved installations.',
      image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=1200&h=800&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&h=400&fit=crop',
      ],
      specs: [
        { label: 'Power Output', value: '180-220W' },
        { label: 'Cell Efficiency', value: '23.6%' },
        { label: 'Weight', value: '3.3 kg/m²' },
        { label: 'Bend Angle', value: 'Up to 30°' },
        { label: 'Warranty', value: '10 Years' },
        { label: 'Dimensions', value: '1580 × 808 × 2.5mm' },
      ],
      features: [
        'Cell-level anti-shading technology',
        'Advanced heat insulation coating',
        'Ultra-lightweight construction',
        'Vibration-resistant design',
        'Marine-grade durability',
        'Quick-connect wiring',
      ],
      applications: ['RV & Campervan', 'Marine & Boats', 'Curved Roofs', 'Mobile Power'],
      certifications: ['TÜV Rheinland', 'CE', 'RoHS', 'IEC 61215'],
      badge: 'NEW',
    },
    'pa219-series': {
      name: 'PA219 Series',
      category: 'Flexible Panels',
      tagline: 'TÜV & CSA Certified High-Power Flexible',
      description: 'Our flagship flexible panel series, the PA219 delivers exceptional efficiency at just 3.3 kg/m². Fully certified with TÜV, UL, CE, RoHS, and REACH, these panels are the gold standard for custom voltage applications.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=800&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&h=400&fit=crop',
      ],
      specs: [
        { label: 'Power Output', value: '100-400W' },
        { label: 'Cell Efficiency', value: '24.4%' },
        { label: 'Weight', value: '3.3 kg/m²' },
        { label: 'Bend Angle', value: 'Up to 30°' },
        { label: 'Warranty', value: '10 Years' },
        { label: 'Dimensions', value: 'Custom Sizes Available' },
      ],
      features: [
        'Industry-leading 24.4% efficiency',
        'Custom voltage configurations',
        'TÜV & CSA certified',
        'Lightweight at 3.3 kg/m²',
        'Weather-resistant coating',
        'Easy installation',
      ],
      applications: ['RV & Campervan', 'Marine', 'Commercial', 'Custom Projects'],
      certifications: ['TÜV', 'UL', 'CE', 'RoHS', 'REACH', 'CSA'],
      badge: 'TOP',
    },
    'flexible-solar-panels': {
      name: 'Flexible Solar Panels',
      category: 'Category Overview',
      tagline: 'Ultra-lightweight, Bendable Solutions',
      description: 'Our flexible solar panel range combines cutting-edge technology with practical design. These panels can bend up to 30° while maintaining exceptional efficiency, making them perfect for curved surfaces on RVs, boats, and custom installations.',
      image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=1200&h=800&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&h=400&fit=crop',
      ],
      specs: [
        { label: 'Power Range', value: '50-400W' },
        { label: 'Max Efficiency', value: '24.4%' },
        { label: 'Weight Range', value: '2.5-4 kg/m²' },
        { label: 'Bend Angle', value: 'Up to 30°' },
        { label: 'Warranty', value: 'Up to 10 Years' },
        { label: 'Series Available', value: 'PA621, PA219, TF' },
      ],
      features: [
        'Multiple series options',
        'Custom sizes available',
        'Anti-shading technology',
        'Heat insulation options',
        'Marine-grade durability',
        'Easy installation',
      ],
      applications: ['RV & Campervan', 'Marine & Boats', 'Curved Roofs', 'Mobile Power', 'Custom Projects'],
      certifications: ['TÜV', 'UL', 'CE', 'RoHS', 'IEC 61215'],
    },
  }
  
  return products[slug] || products['pa621-series']
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProductData(slug)

  return (
    <>
      {/* Breadcrumb */}
      <section className="pt-28 pb-8">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm text-text-muted">
            <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`/products/${product.category.toLowerCase().replace(' ', '-')}`} className="hover:text-primary transition-colors">
              {product.category}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-text-primary">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Hero */}
      <section className="pb-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Product Image */}
            <div>
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                {product.badge && (
                  <span className={`absolute top-6 left-6 px-4 py-2 rounded-full text-sm font-medium ${
                    product.badge === 'NEW' ? 'bg-primary text-white' :
                    product.badge === 'HOT' ? 'bg-earth-olive text-white' :
                    'bg-earth-brown text-white'
                  }`}>
                    {product.badge}
                  </span>
                )}
              </div>
              
              {/* Gallery */}
              <div className="grid grid-cols-3 gap-4">
                {product.gallery.map((img, i) => (
                  <div key={i} className="relative aspect-[3/2] rounded-xl overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                    <Image
                      src={img}
                      alt={`${product.name} view ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <Link 
                href="/products" 
                className="inline-flex items-center gap-2 text-text-muted hover:text-primary text-sm mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Products
              </Link>

              <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
                {product.category}
              </p>
              
              <h1 className="font-serif text-4xl md:text-5xl text-text-primary mb-4">
                {product.name}
              </h1>
              
              <p className="text-xl text-text-secondary mb-8">
                {product.tagline}
              </p>

              <p className="text-text-muted leading-relaxed mb-10">
                {product.description}
              </p>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                {product.specs.slice(0, 4).map((spec) => (
                  <div key={spec.label} className="p-4 bg-primary-lighter rounded-xl">
                    <p className="text-xs text-text-muted uppercase tracking-wide mb-1">{spec.label}</p>
                    <p className="font-serif text-xl text-text-primary">{spec.value}</p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  href="/contact"
                  className="group flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-full font-medium transition-all duration-500 hover:bg-primary-hover"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <button className="flex items-center gap-3 px-8 py-4 border border-primary/20 text-primary rounded-full font-medium transition-all duration-300 hover:bg-primary-lighter">
                  <Download className="w-5 h-5" />
                  Download Datasheet
                </button>
              </div>

              {/* Certifications */}
              <div className="flex flex-wrap items-center gap-3 pt-8 border-t border-primary/10">
                <span className="text-xs text-text-muted uppercase tracking-wide">Certified by:</span>
                {product.certifications.map((cert) => (
                  <span 
                    key={cert} 
                    className="px-3 py-1 bg-primary-lighter text-primary text-xs font-medium rounded-full"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Specs */}
      <section className="py-24 bg-[#1A2E1C]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Features */}
            <div>
              <span className="text-primary-light text-xs tracking-widest uppercase mb-4 block">
                Why Choose This Panel
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-10">
                Key Features
              </h2>
              <div className="space-y-4">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white/80 pt-1">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Full Specs */}
            <div>
              <span className="text-primary-light text-xs tracking-widest uppercase mb-4 block">
                Technical Data
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-10">
                Specifications
              </h2>
              <div className="space-y-1">
                {product.specs.map((spec, i) => (
                  <div 
                    key={spec.label} 
                    className={`flex items-center justify-between p-5 rounded-xl ${i % 2 === 0 ? 'bg-white/5' : ''}`}
                  >
                    <span className="text-white/60">{spec.label}</span>
                    <span className="text-white font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium tracking-widest text-sm uppercase mb-4 block">
              Perfect For
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-text-primary">
              Ideal Applications
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {product.applications.map((app) => (
              <div key={app} className="group p-8 bg-primary-lighter rounded-2xl text-center hover:bg-primary transition-all duration-500 cursor-pointer">
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-white flex items-center justify-center group-hover:bg-primary-light transition-colors">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-lg text-text-primary group-hover:text-white transition-colors">
                  {app}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-primary-lighter">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="font-medium text-text-primary">10-Year Warranty</h4>
                <p className="text-sm text-text-muted">Comprehensive coverage</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                <Award className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="font-medium text-text-primary">TÜV Certified</h4>
                <p className="text-sm text-text-muted">International standards</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                <Star className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="font-medium text-text-primary">Premium Quality</h4>
                <p className="text-sm text-text-muted">18+ years experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products / CTA */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl text-text-primary mb-6">
              Interested in {product.name}?
            </h2>
            <p className="text-lg text-text-secondary mb-10">
              Contact our team for pricing, availability, and custom configurations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-full font-medium text-lg transition-all duration-500 hover:bg-primary-hover"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-3 px-10 py-5 border border-primary/20 text-primary rounded-full font-medium text-lg transition-all duration-300 hover:bg-primary-lighter"
              >
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

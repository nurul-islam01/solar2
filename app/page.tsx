import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Leaf, Sun, Zap, Shield, Award, ChevronRight, ChevronDown, Check, Play } from 'lucide-react'

// Product category data
const productCategories = [
  {
    title: 'Flexible Solar Panels',
    subtitle: 'Lightweight, Flexible, 10 Year Warranty',
    image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600&h=400&fit=crop',
    href: '/products/flexible-solar-panels',
  },
  {
    title: 'Portable Solar Panels',
    subtitle: 'Lightweight, Portable, Efficiency up to 24.40%',
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=600&h=400&fit=crop',
    href: '/products/portable-solar-panels',
  },
  {
    title: 'Rigid Solar Panels',
    subtitle: 'Long-Lasting, 10 Year Warranty, 25 Year Service Life',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop',
    href: '/products/rigid-solar-panels',
  },
  {
    title: 'Solar Power Systems',
    subtitle: 'Energy-Saving, Complete & Customized Solutions',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&h=400&fit=crop',
    href: '/business',
  },
]

// Featured products data
const featuredProducts = [
  {
    name: 'PA621 Lightweight Solar Panels',
    badge: 'NEW',
    tagline: 'Anti-Shading and Heat Insulation Technology',
    description: 'Vibration-resistant, heat-dissipating lightweight RV solar panel with cell-level shadow management for improved performance even in partial shade.',
    image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=600&fit=crop',
    specs: ['180-220W', '23.6% Efficiency', '3.3 kg/m²'],
    href: '/products/pa621-series',
  },
  {
    name: 'BXF-Plus Portable Solar Panel',
    badge: 'NEW',
    tagline: 'Integrated Laminate Design, 50% Lighter',
    description: 'Impact-resistant, lightweight integrated portable solar panel with foldable design. More flexible and bendable for outdoor adventures.',
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=800&h=600&fit=crop',
    specs: ['100-400W', '24.0% Efficiency', 'Foldable'],
    href: '/products/bxf-plus-series',
  },
  {
    name: 'PA219 High-Power Flexible Solar Panel',
    badge: 'TOP',
    tagline: 'TÜV & CSA Certified, 3.3 kg/m²',
    description: 'Beyond rooftops - TÜV certified flexible solar panel. Best for custom voltage applications with industry-leading efficiency ratings.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop',
    specs: ['100-400W', '24.4% Efficiency', 'TÜV Certified'],
    href: '/products/pa219-series',
  },
]

// Top solar panels
const topPanels = [
  {
    name: 'Anti-Shading Solar Panel',
    badge: 'NEW',
    description: 'Anti-shading solar panel for reliable shaded power',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop',
    href: '/products/anti-shading-panel',
  },
  {
    name: 'TOPCon Solar Panel',
    badge: 'TOP',
    description: 'N-TYPE Topcon solar panel high efficiency',
    image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=400&h=300&fit=crop',
    href: '/products/topcon-panel',
  },
  {
    name: '400 Watt Solar Panel',
    badge: 'HOT',
    description: 'High efficiency 400W solar panel for power',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400&h=300&fit=crop',
    href: '/products/400w-solar-panel',
  },
  {
    name: '200 Watt Solar Panel',
    badge: 'HOT',
    description: 'Best off-grid solar panel 200W for efficiency',
    image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=400&h=300&fit=crop',
    href: '/products/200w-solar-panel',
  },
]

// Application scenarios
const scenarios = [
  {
    title: 'Outdoor',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500&h=600&fit=crop',
    href: '/business/outdoor',
  },
  {
    title: 'RV & Campervan',
    image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=500&h=600&fit=crop',
    href: '/business/rv',
  },
  {
    title: 'Marine',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&h=600&fit=crop',
    href: '/business/marine',
  },
  {
    title: 'Balcony',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=600&fit=crop',
    href: '/business/balcony',
  },
]

// Blog posts
const blogPosts = [
  {
    title: '2382x1134mm Solar Module: The Golden Size',
    date: 'January 13, 2026',
    excerpt: 'In the rapidly evolving solar photovoltaic industry, module dimensions play a crucial role in overall system efficiency...',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&h=350&fit=crop',
    href: '/about/blog/solar-module-golden-size',
  },
  {
    title: 'Solar Virtual Fencing: Redefining Boundaries',
    date: 'January 6, 2026',
    excerpt: 'For decades, fencing meant one thing: wire, posts, and manual labor. If you wanted to protect your assets...',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=500&h=350&fit=crop',
    href: '/about/blog/solar-virtual-fencing',
  },
  {
    title: 'How Many Solar Panels Do I Need for My RV?',
    date: 'January 4, 2026',
    excerpt: 'If you have ever asked yourself how many solar panels do I need for my RV, you are not alone...',
    image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=500&h=350&fit=crop',
    href: '/about/blog/rv-solar-panels-guide',
  },
  {
    title: '2026 RV Solar Compliance Guide for OEMs',
    date: 'December 30, 2025',
    excerpt: 'As the global Recreational Vehicle (RV) market transitions into a "High-Voltage Era" in 2025...',
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=500&h=350&fit=crop',
    href: '/about/blog/rv-solar-compliance',
  },
]

// FAQ data
const faqs = [
  {
    question: 'What does Solarid do? What are Solarid\'s areas of expertise?',
    answer: 'Solarid is a Solar Customizer for Australian SMEs with 18 years of industry experience, specializing in providing non-standard PV modules and off-grid solar solutions. We excel at customizing solar panels for voltage, size, output power, and special functions based on unique client requirements.',
  },
  {
    question: 'What types of solar modules does Solarid offer?',
    answer: 'We offer three main categories: Flexible solar panels (ideal for curved surfaces like RVs and boats), Portable solar panels (designed for outdoor mobility and camping), and Rigid solar panels (suitable for permanent installations like balconies and rooftops). All modules integrate our leading anti-shading technology.',
  },
  {
    question: 'What warranties and quality standards do your solar panels offer?',
    answer: 'Flexible PV modules come with up to 10-year warranty, portable modules 5 years, and rigid modules offer up to 25 years service life. All products comply with IEC, TÜV, CSA, CE, RoHS, and UL standards, ensuring excellent performance, safety, and durability.',
  },
  {
    question: 'Can we customize the solar panel dimensions and voltage?',
    answer: 'Yes! We can customize both physical dimensions and electrical characteristics. Voltage ranges can be adjusted through cell arrangement, and dimensions can be modified based on space constraints. Customization options include cell layout, wiring, and mechanical properties.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section with Multiple Slides */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&h=1080&fit=crop"
            alt="Solar panels at golden hour"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2E1C]/95 via-[#1A2E1C]/70 to-transparent" />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-32">
            {/* Text Content */}
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[1px] bg-primary-light" />
                <span className="text-primary-light text-sm font-medium tracking-[0.2em] uppercase">
                  Solar Customizer for Australia
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6 font-serif">
                Manufacturer of Custom, Flexible & Portable Panels
              </h1>
              
              <p className="text-xl text-white/70 mb-10 leading-relaxed">
                For OEM/ODM & Distributors. Trusted by 2000+ SMEs with CE/ROHS/UL/TÜV certified solutions.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/products"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#1A2E1C] rounded-full font-medium transition-all duration-500 hover:bg-primary-light"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/support/custom-panel"
                  className="group inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white rounded-full font-medium transition-all duration-300 hover:bg-white/10"
                >
                  <span>Custom Solar Panels</span>
                </Link>
              </div>
            </div>

            {/* Hero Product Highlight */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=600&fit=crop"
                    alt="PA219 Flexible Solar Panels"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E1C]/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-medium rounded-full mb-3">
                      FEATURED
                    </span>
                    <h3 className="text-2xl font-serif text-white mb-2">PA219 Flexible Solar Panels</h3>
                    <p className="text-white/80 text-sm">Pioneering Flexible Solar: TÜV, UL, CE, RoHS, And REACH Certified.</p>
                  </div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -right-6 top-8 bg-white p-5 rounded-2xl shadow-xl">
                  <p className="text-3xl font-serif text-primary">24.4%</p>
                  <p className="text-xs text-text-muted">Peak Efficiency</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5 text-white/50" />
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((category) => (
              <Link key={category.title} href={category.href} className="group">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E1C]/80 via-[#1A2E1C]/20 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="font-serif text-xl text-white mb-1">{category.title}</h3>
                    <p className="text-white/70 text-sm">{category.subtitle}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 bg-background-secondary">
        <div className="container">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.name} 
              className={`grid lg:grid-cols-2 gap-16 items-center mb-24 last:mb-0 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Link href={product.href} className="group block">
                  <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {product.badge && (
                      <span className={`absolute top-6 left-6 px-4 py-2 rounded-full text-sm font-medium ${
                        product.badge === 'NEW' ? 'bg-primary text-white' :
                        product.badge === 'TOP' ? 'bg-earth-brown text-white' :
                        'bg-earth-olive text-white'
                      }`}>
                        {product.badge}
                      </span>
                    )}
                  </div>
                </Link>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h2 className="font-serif text-3xl md:text-4xl text-text-primary mb-4">
                  {product.name}
                </h2>
                <p className="text-primary font-medium mb-4">{product.tagline}</p>
                <p className="text-text-secondary text-lg leading-relaxed mb-8">
                  {product.description}
                </p>
                
                {/* Specs */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {product.specs.map((spec) => (
                    <span key={spec} className="px-4 py-2 bg-primary-lighter text-primary text-sm font-medium rounded-full">
                      {spec}
                    </span>
                  ))}
                </div>

                <Link
                  href={product.href}
                  className="group inline-flex items-center gap-2 text-primary font-medium"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Anti-Shading Technology Section */}
      <section className="py-24 bg-[#1A2E1C] overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary-light text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
                Featured Technology
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
                Shade? No Challenge!
              </h2>
              <p className="text-xl text-white/70 mb-6">
                Boost Efficiency for Commercial Installations
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                Solarid&apos;s Cell-level Shadow Management Technology offers tailored solutions to 
                optimize power output in shaded conditions, perfect for rooftops, RVs, and public sites.
                No more power plummets in shade.
              </p>
              
              <div className="space-y-4 mb-10">
                {[
                  'Cell-level anti-shading technology',
                  'Up to 70% shade tolerance',
                  'Consistent power in partial shade',
                  'Bypass diodes for maximum efficiency',
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-white/80">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products/anti-shading-panel"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#1A2E1C] rounded-full font-medium transition-all duration-500 hover:bg-primary-light"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/support/product-test"
                  className="group inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white rounded-full font-medium transition-all duration-300 hover:bg-white/10"
                >
                  <Play className="w-5 h-5" />
                  <span>See It In Action</span>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square rounded-[2rem] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=800&fit=crop"
                  alt="Anti-shading solar technology"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -left-8 bottom-12 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
                <p className="font-serif text-2xl text-primary mb-1">70%</p>
                <p className="text-text-muted text-sm">Shade Tolerance - More Power, Less Worry</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Solar Panels Grid */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
            <div>
              <span className="text-primary font-medium tracking-widest text-sm uppercase mb-4 block">
                Top Products
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-text-primary">
                Top Solar Panels
              </h2>
            </div>
            <Link 
              href="/products" 
              className="group inline-flex items-center gap-2 text-primary font-medium"
            >
              <span>View All Products</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topPanels.map((panel) => (
              <Link key={panel.name} href={panel.href} className="group">
                <div className="bg-white rounded-2xl overflow-hidden hover:shadow-strong transition-all duration-500">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={panel.image}
                      alt={panel.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {panel.badge && (
                      <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${
                        panel.badge === 'NEW' ? 'bg-primary text-white' :
                        panel.badge === 'TOP' ? 'bg-earth-brown text-white' :
                        'bg-earth-olive text-white'
                      }`}>
                        {panel.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-lg text-text-primary group-hover:text-primary transition-colors mb-2">
                      {panel.name}
                    </h3>
                    <p className="text-text-muted text-sm">{panel.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '50,000', suffix: 'm²', label: 'Factory Area' },
              { value: '2008', suffix: '', label: 'Manufacturer Since' },
              { value: '100', suffix: '+', label: 'Patent Certifications' },
              { value: '400', suffix: '+', label: 'Employees' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-4xl md:text-5xl text-white mb-2">
                  {stat.value}<span className="text-primary-light">{stat.suffix}</span>
                </p>
                <p className="text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Scenarios */}
      <section className="py-24 bg-background-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-primary font-medium tracking-widest text-sm uppercase mb-4 block">
              Business Scenarios
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-text-primary mb-4">
              Application Scenarios
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Our solar panels are designed for diverse applications, from outdoor adventures to marine environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scenarios.map((scenario) => (
              <Link key={scenario.title} href={scenario.href} className="group">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src={scenario.image}
                    alt={scenario.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E1C]/80 via-[#1A2E1C]/20 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="font-serif text-2xl text-white mb-2">{scenario.title}</h3>
                    <div className="flex items-center gap-2 text-white/70 text-sm group-hover:text-primary-light transition-colors">
                      <span>Explore</span>
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Partner CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/business/partner"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-full font-medium transition-all duration-500 hover:bg-primary-hover"
            >
              <span>Become Our Partner</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* About / Company Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-medium tracking-widest text-sm uppercase mb-4 block">
                About Solarid
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-text-primary mb-6">
                Solar Customizer for SMEs
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Since 2008, Solarid has been a leading solar panel manufacturer with integrated R&D, 
                production, sales, and service capabilities. Trusted by 2000+ SMEs with CE/ROHS/UL/TÜV 
                certified solutions.
              </p>
              <p className="text-text-muted leading-relaxed mb-8">
                We specialize in providing non-standard PV modules and off-grid solar solutions for 
                global B2B clients, including retailers, wholesalers, project developers, and large 
                e-commerce platforms.
              </p>

              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-primary font-medium"
              >
                <span>Explore Solarid</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=400&h=500&fit=crop"
                    alt="Solar manufacturing"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=400&fit=crop"
                    alt="Solar panels"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=400&h=400&fit=crop"
                    alt="Solar technology"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400&h=500&fit=crop"
                    alt="Solar installation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-background-secondary">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
            <div>
              <span className="text-primary font-medium tracking-widest text-sm uppercase mb-4 block">
                Start Your Solar Life
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-text-primary">
                Latest From Our Blog
              </h2>
            </div>
            <Link 
              href="/about/blog" 
              className="group inline-flex items-center gap-2 text-primary font-medium"
            >
              <span>View All Articles</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogPosts.map((post) => (
              <Link key={post.title} href={post.href} className="group">
                <div className="bg-white rounded-2xl overflow-hidden hover:shadow-strong transition-all duration-500">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-primary text-sm mb-2">{post.date}</p>
                    <h3 className="font-serif text-lg text-text-primary group-hover:text-primary transition-colors mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-text-muted text-sm line-clamp-2">{post.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary font-medium tracking-widest text-sm uppercase mb-4 block">
                FAQ
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-text-primary">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details 
                  key={index} 
                  className="group bg-background rounded-2xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="font-medium text-text-primary pr-8">{faq.question}</h3>
                    <ChevronDown className="w-5 h-5 text-primary flex-shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-text-muted leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/support/faq"
                className="group inline-flex items-center gap-2 text-primary font-medium"
              >
                <span>View All FAQs</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1920&h=600&fit=crop"
            alt="Solar landscape"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#1A2E1C]/85" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
              Ready to Start Your Solar Journey?
            </h2>
            <p className="text-xl text-white/70 mb-10">
              Contact our team for custom quotes, technical consultation, or partnership opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-[#1A2E1C] rounded-full font-medium text-lg transition-all duration-500 hover:bg-primary-light"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/support/custom-panel"
                className="inline-flex items-center gap-3 px-10 py-5 border border-white/30 text-white rounded-full font-medium text-lg transition-all duration-300 hover:bg-white/10"
              >
                Custom Solar Panel
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Bar */}
      <section className="py-12 bg-background border-t border-primary/5">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-text-muted text-sm">Certified by leading international organizations</p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {['TÜV Rheinland', 'UL Listed', 'CE', 'RoHS', 'IEC 61215', 'ISO 9001'].map((cert) => (
                <span key={cert} className="text-text-muted/60 font-medium hover:text-primary transition-colors cursor-default">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

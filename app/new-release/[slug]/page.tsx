import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronRight, ArrowRight, Check, Package, Zap, Shield, Clock } from 'lucide-react'
import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'
import { ProductCard } from '@/components/ui/Card'

const releases = {
  'rv-solar-kits': {
    title: 'RV Solar Kits',
    subtitle: 'Complete Power Solutions for Your RV Adventures',
    description: 'Our RV Solar Kits provide everything you need to power your recreational vehicle with clean, renewable energy. Designed for easy installation and reliable performance on the road.',
    image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=1920&h=800&fit=crop',
    features: [
      'Complete all-in-one package',
      'Easy DIY installation',
      'Off-grid capable',
      'Expandable system',
      'Pre-wired components',
      'Includes mounting hardware',
    ],
    whatsIncluded: [
      { name: 'Flexible Solar Panels', description: 'High-efficiency panels designed for curved RV roofs' },
      { name: 'MPPT Charge Controller', description: 'Smart charging technology for maximum power harvest' },
      { name: 'Mounting Kit', description: 'Complete hardware for secure installation' },
      { name: 'Wiring & Connectors', description: 'Pre-made cables for easy connection' },
      { name: 'Installation Guide', description: 'Step-by-step instructions' },
    ],
    kits: [
      { name: '200W RV Kit', power: '200W', description: 'Perfect for weekend warriors', price: 'Starting from $599' },
      { name: '400W RV Kit', power: '400W', description: 'Ideal for extended trips', price: 'Starting from $999' },
      { name: '800W RV Kit', power: '800W', description: 'Full-time RV living', price: 'Starting from $1,799' },
    ],
  },
  'balcony-solar-panels': {
    title: 'Balcony Solar Panels',
    subtitle: 'Urban Solar Energy for Apartment Living',
    description: 'Plug-and-play solar panels designed specifically for balcony installations. Generate your own clean energy without the need for roof access or complex installations.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=800&fit=crop',
    features: [
      'No roof access required',
      'Plug & play installation',
      'Apartment friendly',
      'No permits needed (check local regulations)',
      'Compact design',
      'Grid-tie ready',
    ],
    whatsIncluded: [
      { name: 'Balcony Solar Panel', description: 'Optimized for vertical mounting' },
      { name: 'Micro Inverter', description: 'Grid-tie ready power conversion' },
      { name: 'Mounting Brackets', description: 'Secure balcony rail mounting' },
      { name: 'Power Cable', description: 'Standard outlet connection' },
      { name: 'Monitoring App', description: 'Track your energy production' },
    ],
    kits: [
      { name: '400W Balcony Kit', power: '400W', description: 'Single panel setup', price: 'Starting from $499' },
      { name: '800W Balcony Kit', power: '800W', description: 'Dual panel setup', price: 'Starting from $899' },
    ],
  },
  'off-grid-kits': {
    title: 'Off-Grid Solar Kits',
    subtitle: 'Energy Independence for Remote Living',
    description: 'Complete off-grid solar systems for cabins, tiny homes, and remote locations. Everything you need for true energy independence, including battery storage.',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1920&h=800&fit=crop',
    features: [
      'Complete standalone system',
      'Battery storage included',
      'No grid connection needed',
      'Expandable design',
      'All-weather operation',
      '24/7 power supply',
    ],
    whatsIncluded: [
      { name: 'Solar Panels', description: 'High-efficiency panels for maximum output' },
      { name: 'Battery Bank', description: 'LiFePO4 batteries for reliable storage' },
      { name: 'Inverter/Charger', description: 'Pure sine wave power conversion' },
      { name: 'Charge Controller', description: 'MPPT technology for optimal charging' },
      { name: 'Mounting System', description: 'Ground or roof mount options' },
      { name: 'Complete Wiring Kit', description: 'All cables and protection devices' },
    ],
    kits: [
      { name: '2kW Off-Grid Kit', power: '2kW', description: 'Small cabin or shed', price: 'Starting from $3,999' },
      { name: '5kW Off-Grid Kit', power: '5kW', description: 'Tiny home or cabin', price: 'Starting from $7,999' },
      { name: '10kW Off-Grid Kit', power: '10kW', description: 'Full-size home', price: 'Starting from $14,999' },
    ],
  },
  'marine-solution': {
    title: 'Marine Solar Solutions',
    subtitle: 'Power for Life on the Water',
    description: 'Saltwater-resistant solar panels and complete power systems designed specifically for marine environments. Keep your boat powered with reliable solar energy.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&h=800&fit=crop',
    features: [
      'Salt-spray resistant',
      'Marine-grade materials',
      'Waterproof design',
      'Anti-slip surface option',
      'Flexible for curved hulls',
      'Corrosion resistant',
    ],
    whatsIncluded: [
      { name: 'Marine Solar Panels', description: 'Salt-resistant flexible panels' },
      { name: 'Marine Charge Controller', description: 'Waterproof MPPT controller' },
      { name: 'Marine Mounting Kit', description: 'Stainless steel hardware' },
      { name: 'Marine-Grade Wiring', description: 'Tinned copper cables' },
      { name: 'Waterproof Connectors', description: 'MC4 marine connectors' },
    ],
    kits: [
      { name: '200W Marine Kit', power: '200W', description: 'Small boats & dinghies', price: 'Starting from $699' },
      { name: '400W Marine Kit', power: '400W', description: 'Medium sailboats', price: 'Starting from $1,299' },
      { name: '800W Marine Kit', power: '800W', description: 'Large yachts', price: 'Starting from $2,499' },
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(releases).map((slug) => ({ slug }))
}

export default async function NewReleasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const release = releases[slug as keyof typeof releases]
  
  if (!release) return notFound()

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={release.image}
            alt={release.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40" />
        </div>
        <div className="container relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/80 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/new-release" className="hover:text-white transition-colors">New Release</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{release.title}</span>
          </nav>
          <span className="inline-block px-4 py-2 bg-primary text-white text-sm font-semibold rounded-full mb-4">
            NEW RELEASE
          </span>
          <h1 className="text-display-2 md:text-display-1 font-heading font-bold text-white mb-4">
            {release.title}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-8">
            {release.subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
              Get a Quote
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      {/* Description & Features */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-heading-2 font-heading font-bold text-text-primary mb-6">
                Overview
              </h2>
              <p className="text-body-lg text-text-secondary mb-8">
                {release.description}
              </p>
              <ul className="space-y-4">
                {release.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary-light rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-text-primary">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background-secondary p-6 rounded-xl text-center">
                <Package className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-text-primary mb-1">Complete Kit</h3>
                <p className="text-sm text-text-muted">Everything included</p>
              </div>
              <div className="bg-background-secondary p-6 rounded-xl text-center">
                <Zap className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-text-primary mb-1">Easy Install</h3>
                <p className="text-sm text-text-muted">DIY friendly</p>
              </div>
              <div className="bg-background-secondary p-6 rounded-xl text-center">
                <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-text-primary mb-1">Warranty</h3>
                <p className="text-sm text-text-muted">Protected purchase</p>
              </div>
              <div className="bg-background-secondary p-6 rounded-xl text-center">
                <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-text-primary mb-1">Fast Shipping</h3>
                <p className="text-sm text-text-muted">Australia-wide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section bg-background-secondary">
        <div className="container">
          <SectionHeading
            subtitle="Package Contents"
            title="What&apos;s Included"
            description="Every kit comes complete with everything you need for installation."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {release.whatsIncluded.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-soft">
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center text-primary font-bold text-xl mb-4">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-text-primary mb-2">{item.name}</h3>
                <p className="text-sm text-text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Kits */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            subtitle="Choose Your Kit"
            title="Available Configurations"
            description="Select the kit size that best matches your power requirements."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {release.kits.map((kit, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-primary hover:shadow-card transition-all">
                <div className="text-center mb-6">
                  <span className="inline-block px-4 py-1 bg-primary-light text-primary text-sm font-semibold rounded-full mb-4">
                    {kit.power}
                  </span>
                  <h3 className="text-xl font-heading font-bold text-text-primary mb-2">{kit.name}</h3>
                  <p className="text-text-muted">{kit.description}</p>
                </div>
                <div className="text-center pt-6 border-t border-gray-100">
                  <p className="text-primary font-semibold mb-4">{kit.price}</p>
                  <Button href="/contact" fullWidth variant="outline">
                    Request Quote
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container text-center">
          <h2 className="text-heading-2 font-heading font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Contact our team for a personalized quote and expert advice on choosing the right kit for your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="white" icon={<ArrowRight className="w-5 h-5" />}>
              Get a Quote
            </Button>
            <Button href="/support/faq" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              View FAQ
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

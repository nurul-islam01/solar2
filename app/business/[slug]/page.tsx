import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronRight, ArrowRight, Check, Sun, Battery, Shield, Zap } from 'lucide-react'
import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'
import { ProductCard, TestimonialCard } from '@/components/ui/Card'

const scenarios = {
  outdoor: {
    title: 'Outdoor Solar Solutions',
    subtitle: 'Power Your Adventures',
    description: 'Portable and durable solar panels designed for camping, hiking, and outdoor events. Stay powered in the wilderness with reliable solar energy.',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1920&h=800&fit=crop',
    challenges: [
      'Limited access to power outlets',
      'Need for lightweight, portable equipment',
      'Variable weather conditions',
      'Multiple device charging needs',
    ],
    solutions: [
      'Compact folding solar panels that pack small',
      'Rugged, weather-resistant construction',
      'High-efficiency cells for faster charging',
      'Multiple output ports for various devices',
    ],
    products: [
      { slug: 'hi-power-series', name: 'Hi-Power Series', description: 'High-power portable panels', image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=600&h=400&fit=crop', badge: 'HOT' as const },
      { slug: 'bxf-plus-series', name: 'BXF Plus Series', description: 'Lightweight integrated panels', image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=600&h=400&fit=crop', badge: 'NEW' as const },
      { slug: 'spc-series', name: 'SPC Series', description: 'Solar blanket for hikers', image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=600&h=400&fit=crop' },
    ],
    testimonial: {
      quote: 'The portable panels kept our phones and GPS charged throughout our 2-week camping trip in the Outback. Absolutely essential gear.',
      author: 'James Miller',
      role: 'Adventure Tour Operator',
    },
  },
  rv: {
    title: 'RV Solar Solutions',
    subtitle: 'Freedom on the Road',
    description: 'Complete solar power systems designed specifically for recreational vehicles. Enjoy true energy independence wherever your travels take you.',
    image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=1920&h=800&fit=crop',
    challenges: [
      'Limited roof space',
      'Need for lightweight panels',
      'Vibration and movement stress',
      'Shading from AC units and vents',
    ],
    solutions: [
      'Flexible panels that conform to curved roofs',
      'Ultra-lightweight at 3.3 kg/m²',
      'Vibration-resistant construction',
      'Anti-shading technology for consistent output',
    ],
    products: [
      { slug: 'pa621-series', name: 'PA621 Series', description: 'Lightweight RV panels', image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600&h=400&fit=crop', badge: 'NEW' as const },
      { slug: 'pa219-series', name: 'PA219 Series', description: 'High-power flexible panels', image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600&h=400&fit=crop', badge: 'TOP' as const },
      { slug: 'tf-series', name: 'TF Series', description: 'Walkable flexible panels', image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600&h=400&fit=crop', badge: 'HOT' as const },
    ],
    testimonial: {
      quote: 'After installing Solarid panels on our fleet, we\'ve seen a significant reduction in generator usage. Our customers love the quiet, clean power.',
      author: 'Sarah Chen',
      role: 'RV Rental Fleet Manager',
    },
  },
  marine: {
    title: 'Marine Solar Solutions',
    subtitle: 'Power for Life on the Water',
    description: 'Saltwater-resistant solar panels engineered for the demanding marine environment. Keep your vessel powered reliably in any sea conditions.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&h=800&fit=crop',
    challenges: [
      'Saltwater corrosion',
      'Limited deck space',
      'Constant movement and flexing',
      'Water exposure and humidity',
    ],
    solutions: [
      'Marine-grade materials and coatings',
      'Flexible panels for curved surfaces',
      'Waterproof construction rated IP67+',
      'Stainless steel mounting hardware',
    ],
    products: [
      { slug: 'pa219-series', name: 'PA219 Series', description: 'TÜV certified marine panels', image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600&h=400&fit=crop', badge: 'TOP' as const },
      { slug: 'tf-series', name: 'TF Series', description: 'Walkable deck panels', image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600&h=400&fit=crop', badge: 'HOT' as const },
      { slug: 'sgsp-series', name: 'SGSP Series', description: 'High-efficiency rigid panels', image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&h=400&fit=crop' },
    ],
    testimonial: {
      quote: 'These panels have survived three sailing seasons with zero degradation. The salt resistance is genuinely impressive.',
      author: 'Captain Mark Williams',
      role: 'Charter Yacht Owner',
    },
  },
  balcony: {
    title: 'Balcony Solar Solutions',
    subtitle: 'Urban Energy Independence',
    description: 'Plug-and-play solar panels designed for apartment balconies. Generate your own clean energy without needing roof access or major installations.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=800&fit=crop',
    challenges: [
      'No roof access available',
      'Limited installation options',
      'Rental property restrictions',
      'Small available space',
    ],
    solutions: [
      'Balcony rail mounting systems',
      'Plug-and-play grid-tie inverters',
      'Compact, aesthetic panel designs',
      'No permits required in most areas',
    ],
    products: [
      { slug: '200-watt-solar-panel', name: '200W Panel', description: 'Compact balcony panels', image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600&h=400&fit=crop', badge: 'HOT' as const },
      { slug: 'sgm-series', name: 'SGM Series', description: 'Certified rigid panels', image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&h=400&fit=crop' },
    ],
    testimonial: {
      quote: 'Finally, a solar option for renters! My balcony setup generates enough to offset my daytime electricity usage.',
      author: 'Emma Thompson',
      role: 'Apartment Resident, Melbourne',
    },
  },
  partner: {
    title: 'Become a Partner',
    subtitle: 'Grow Your Business With Solarid',
    description: 'Join our network of authorized distributors, resellers, and installation partners. Access exclusive benefits, competitive pricing, and comprehensive support.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=800&fit=crop',
    challenges: [],
    solutions: [],
    products: [],
    testimonial: {
      quote: 'Partnering with Solarid has been transformative for our business. The product quality and support are unmatched.',
      author: 'David Lee',
      role: 'Solar Installer, Brisbane',
    },
    isPartnerPage: true,
    partnerBenefits: [
      { icon: 'pricing', title: 'Competitive Pricing', description: 'Wholesale pricing with volume-based discounts for all products.' },
      { icon: 'support', title: 'Dedicated Support', description: 'Priority access to our technical and sales support teams.' },
      { icon: 'training', title: 'Training Programs', description: 'Comprehensive product training and certification courses.' },
      { icon: 'marketing', title: 'Marketing Materials', description: 'Co-branded marketing resources and sales collateral.' },
      { icon: 'leads', title: 'Lead Sharing', description: 'Access to customer leads in your service area.' },
      { icon: 'warranty', title: 'Extended Warranty', description: 'Special warranty programs for partner installations.' },
    ],
    partnerTiers: [
      { name: 'Authorized Reseller', description: 'For retailers and online sellers', minOrder: '$5,000/year' },
      { name: 'Premium Partner', description: 'For installers and system integrators', minOrder: '$25,000/year' },
      { name: 'Master Distributor', description: 'For regional distributors', minOrder: '$100,000/year' },
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(scenarios).map((slug) => ({ slug }))
}

export default async function BusinessScenarioPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const scenario = scenarios[slug as keyof typeof scenarios]
  
  if (!scenario) return notFound()

  const isPartnerPage = 'isPartnerPage' in scenario && scenario.isPartnerPage

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={scenario.image}
            alt={scenario.title}
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
            <Link href="/business" className="hover:text-white transition-colors">Business</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{scenario.title}</span>
          </nav>
          <h1 className="text-display-2 md:text-display-1 font-heading font-bold text-white mb-4">
            {scenario.title}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-8">
            {scenario.subtitle}
          </p>
          <Button href="/contact" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
            {isPartnerPage ? 'Apply Now' : 'Get a Quote'}
          </Button>
        </div>
      </section>

      {/* Description */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-body-lg text-text-secondary">
              {scenario.description}
            </p>
          </div>
        </div>
      </section>

      {isPartnerPage ? (
        <>
          {/* Partner Benefits */}
          <section className="section bg-background-secondary">
            <div className="container">
              <SectionHeading
                subtitle="Partner Benefits"
                title="Why Partner With Solarid"
                description="Join a growing network of successful solar professionals."
              />
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {scenario.partnerBenefits?.map((benefit, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-soft">
                    <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center text-primary mb-4">
                      {benefit.icon === 'pricing' && <Sun className="w-6 h-6" />}
                      {benefit.icon === 'support' && <Battery className="w-6 h-6" />}
                      {benefit.icon === 'training' && <Shield className="w-6 h-6" />}
                      {benefit.icon === 'marketing' && <Zap className="w-6 h-6" />}
                      {benefit.icon === 'leads' && <Sun className="w-6 h-6" />}
                      {benefit.icon === 'warranty' && <Shield className="w-6 h-6" />}
                    </div>
                    <h3 className="font-semibold text-text-primary mb-2">{benefit.title}</h3>
                    <p className="text-sm text-text-muted">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Partner Tiers */}
          <section className="section bg-white">
            <div className="container">
              <SectionHeading
                subtitle="Partnership Levels"
                title="Choose Your Partner Tier"
              />
              <div className="grid md:grid-cols-3 gap-6">
                {scenario.partnerTiers?.map((tier, index) => (
                  <div key={index} className="border border-gray-200 rounded-2xl p-6 hover:border-primary hover:shadow-card transition-all text-center">
                    <h3 className="text-xl font-heading font-bold text-text-primary mb-2">{tier.name}</h3>
                    <p className="text-text-muted mb-4">{tier.description}</p>
                    <p className="text-primary font-semibold">Min. Order: {tier.minOrder}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          {/* Challenges & Solutions */}
          <section className="section bg-background-secondary">
            <div className="container">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-heading-3 font-heading font-bold text-text-primary mb-6">
                    Common Challenges
                  </h2>
                  <ul className="space-y-4">
                    {scenario.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-red-500 text-sm">✕</span>
                        </div>
                        <span className="text-text-secondary">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-heading-3 font-heading font-bold text-text-primary mb-6">
                    Our Solutions
                  </h2>
                  <ul className="space-y-4">
                    {scenario.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-text-secondary">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Recommended Products */}
          {scenario.products.length > 0 && (
            <section className="section bg-white">
              <div className="container">
                <SectionHeading
                  subtitle="Recommended Products"
                  title="Best Solutions for This Application"
                />
                <div className="grid md:grid-cols-3 gap-6">
                  {scenario.products.map((product) => (
                    <ProductCard
                      key={product.slug}
                      title={product.name}
                      description={product.description}
                      image={product.image}
                      href={`/products/${product.slug}`}
                      badge={product.badge}
                    />
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      )}

      {/* Testimonial */}
      <section className="section bg-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <TestimonialCard {...scenario.testimonial} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background-secondary">
        <div className="container text-center">
          <h2 className="text-heading-2 font-heading font-bold text-text-primary mb-4">
            {isPartnerPage ? 'Ready to Become a Partner?' : 'Ready to Get Started?'}
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
            {isPartnerPage 
              ? 'Apply now to join our partner network and start growing your solar business.'
              : 'Contact our team for a personalized quote and expert advice.'}
          </p>
          <Button href="/contact" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
            {isPartnerPage ? 'Apply Now' : 'Get a Quote'}
          </Button>
        </div>
      </section>
    </>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, ArrowRight, Users, Handshake, Globe, Award } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { FeatureCard } from '@/components/ui/Card'

export const metadata = {
  title: 'Business Solutions & Scenarios - Solarid Australia',
  description: 'Explore solar solutions for different business scenarios including outdoor, RV, marine, and balcony applications. Become a Solarid partner.',
}

const scenarios = [
  {
    title: 'Outdoor',
    description: 'Solar solutions for outdoor adventures, camping, and emergency power needs.',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&h=600&fit=crop',
    href: '/business/outdoor',
  },
  {
    title: 'RV',
    description: 'Complete solar power systems for recreational vehicles and campervans.',
    image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800&h=600&fit=crop',
    href: '/business/rv',
  },
  {
    title: 'Marine',
    description: 'Saltwater-resistant solar panels designed for boats and marine vessels.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
    href: '/business/marine',
  },
  {
    title: 'Balcony',
    description: 'Urban solar solutions for apartment balconies and small spaces.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    href: '/business/balcony',
  },
]

const partnerBenefits = [
  {
    icon: <Users className="w-7 h-7" />,
    title: 'Dedicated Support',
    description: 'Access to our expert team for technical assistance and sales support.',
  },
  {
    icon: <Handshake className="w-7 h-7" />,
    title: 'Partner Pricing',
    description: 'Competitive wholesale pricing and volume discounts for partners.',
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: 'Marketing Support',
    description: 'Co-branded materials and marketing resources to grow your business.',
  },
  {
    icon: <Award className="w-7 h-7" />,
    title: 'Training Program',
    description: 'Comprehensive product training and certification programs.',
  },
]

export default function BusinessPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary-light/30 via-white to-white overflow-hidden">
        <div className="container">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-text-muted mb-6">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-text-primary">Business</span>
            </nav>
            <h1 className="text-display-2 md:text-display-1 font-heading font-bold text-text-primary mb-6">
              Business <span className="text-primary">Solutions</span>
            </h1>
            <p className="text-body-lg text-text-secondary max-w-2xl">
              Solarid provides tailored solar solutions for various business scenarios. 
              Whether you&apos;re an RV manufacturer, marine outfitter, or retailer, we have the products and support you need.
            </p>
          </div>
        </div>
      </section>

      {/* Scenarios Grid */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            subtitle="Application Scenarios"
            title="Solar Solutions by Industry"
            description="Explore our specialized solar solutions designed for specific applications and industries."
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            {scenarios.map((scenario) => (
              <Link
                key={scenario.title}
                href={scenario.href}
                className="group relative h-80 rounded-2xl overflow-hidden shadow-card hover:shadow-strong transition-all duration-300"
              >
                <Image
                  src={scenario.image}
                  alt={scenario.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">{scenario.title}</h3>
                  <p className="text-white/80 mb-4">{scenario.description}</p>
                  <span className="inline-flex items-center gap-2 text-primary-light font-medium group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="section bg-background-secondary">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium uppercase tracking-wide text-sm">Partnership</span>
              <h2 className="text-heading-1 font-heading font-bold text-text-primary mt-2 mb-6">
                Become a Solarid Partner
              </h2>
              <p className="text-body-lg text-text-secondary mb-8">
                Join our growing network of partners and resellers. We offer comprehensive support, 
                competitive pricing, and high-quality products to help you succeed in the solar industry.
              </p>
              <Button href="/business/partner" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                Partner With Us
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {partnerBenefits.map((benefit) => (
                <FeatureCard
                  key={benefit.title}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container text-center">
          <h2 className="text-heading-2 font-heading font-bold text-white mb-4">
            Ready to Explore Business Opportunities?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Contact our business development team to discuss partnership opportunities and bulk orders.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="white" icon={<ArrowRight className="w-5 h-5" />}>
              Contact Sales
            </Button>
            <Button href="/business/partner" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Partnership Info
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

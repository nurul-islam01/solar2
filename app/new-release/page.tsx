import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, ArrowRight, Sparkles } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

export const metadata = {
  title: 'New Release Solar Solutions - Solarid Australia',
  description: 'Discover our latest solar panel solutions including RV solar kits, balcony solar panels, off-grid kits, and marine solar systems.',
}

const releases = [
  {
    title: 'RV Solar Kits',
    description: 'Complete solar power systems designed specifically for RVs and campervans. Everything you need to power your adventures.',
    image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800&h=600&fit=crop',
    href: '/new-release/rv-solar-kits',
    features: ['Easy installation', 'All-in-one package', 'Off-grid capable'],
  },
  {
    title: 'Balcony Solar Panels',
    description: 'Urban energy solutions for apartment dwellers. Plug-and-play solar panels designed for balcony installations.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    href: '/new-release/balcony-solar-panels',
    features: ['Apartment friendly', 'No permits required', 'Plug & play'],
  },
  {
    title: 'Off-Grid Kits',
    description: 'Complete off-grid solar solutions for cabins, tiny homes, and remote locations. Energy independence made simple.',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&h=600&fit=crop',
    href: '/new-release/off-grid-kits',
    features: ['Complete system', 'Battery included', 'Expandable'],
  },
  {
    title: 'Marine Solar Solution',
    description: 'Saltwater-resistant solar panels and systems designed for boats, yachts, and marine vessels.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
    href: '/new-release/marine-solution',
    features: ['Salt-resistant', 'Marine-grade', 'Waterproof'],
  },
]

export default function NewReleasePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary-light/30 via-white to-white overflow-hidden">
        <div className="container">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-text-muted mb-6">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-text-primary">New Release</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-primary" />
              <span className="text-primary font-semibold uppercase tracking-wide">Latest Innovations</span>
            </div>
            <h1 className="text-display-2 md:text-display-1 font-heading font-bold text-text-primary mb-6">
              New Release <span className="text-primary">Solutions</span>
            </h1>
            <p className="text-body-lg text-text-secondary max-w-2xl">
              Explore our latest solar innovations designed for specific applications. 
              Complete kits and systems that make going solar easier than ever.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {releases.map((release, index) => (
              <Link
                key={release.title}
                href={release.href}
                className="group bg-white rounded-2xl shadow-card hover:shadow-strong overflow-hidden transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={release.image}
                    alt={release.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-white text-sm font-semibold rounded-full">
                      NEW
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-heading font-bold text-text-primary group-hover:text-primary transition-colors mb-3">
                    {release.title}
                  </h2>
                  <p className="text-text-secondary mb-4">{release.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {release.features.map((feature) => (
                      <span key={feature} className="px-3 py-1 bg-primary-light text-primary text-sm rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-background-secondary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-heading-2 font-heading font-bold text-text-primary mb-4">
              Can&apos;t Find What You Need?
            </h2>
            <p className="text-body-lg text-text-secondary mb-8">
              We offer custom solar solutions tailored to your specific requirements. 
              Contact our team to discuss your project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/support/custom-panel" icon={<ArrowRight className="w-5 h-5" />}>
                Custom Solutions
              </Button>
              <Button href="/contact" variant="outline">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

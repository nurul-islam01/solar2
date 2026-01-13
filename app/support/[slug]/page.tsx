import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronRight, ArrowRight, Check, Download, Shield, Award, FileText, Mail } from 'lucide-react'
import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'
import Accordion from '@/components/ui/Accordion'

const supportPages = {
  'product-test': {
    title: 'Product Testing',
    subtitle: 'Quality You Can Trust',
    description: 'Every Solarid panel undergoes rigorous testing to ensure reliable performance in real-world conditions.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&h=600&fit=crop',
    content: {
      tests: [
        { name: 'Electroluminescence (EL) Testing', description: 'Detects micro-cracks and cell defects invisible to the naked eye.' },
        { name: 'Flash Testing', description: 'Measures actual power output under standard test conditions (STC).' },
        { name: 'Thermal Cycling', description: 'Simulates temperature variations from -40°C to +85°C.' },
        { name: 'Humidity Freeze', description: 'Tests resistance to humidity and freezing conditions.' },
        { name: 'Salt Mist Corrosion', description: 'Validates durability in marine and coastal environments.' },
        { name: 'Mechanical Load', description: 'Tests structural integrity under wind and snow loads.' },
        { name: 'Hail Impact', description: 'Simulates hailstone impact at various velocities.' },
        { name: 'UV Exposure', description: 'Accelerated UV aging to verify long-term performance.' },
      ],
    },
  },
  'warranty': {
    title: 'Warranty Information',
    subtitle: 'Protected for the Long Term',
    description: 'Our comprehensive warranty program ensures your investment is protected for years to come.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&h=600&fit=crop',
    content: {
      warranties: [
        { type: 'Flexible Panels', product: 'Up to 10 Years', performance: '90% at 10 years' },
        { type: 'Rigid Panels', product: 'Up to 12 Years', performance: '85% at 25 years' },
        { type: 'Portable Panels', product: 'Up to 5 Years', performance: '90% at 5 years' },
      ],
      coverage: [
        'Manufacturing defects in materials and workmanship',
        'Power output degradation beyond guaranteed levels',
        'Delamination and cell damage under normal use',
        'Electrical connection failures',
      ],
      exclusions: [
        'Physical damage from misuse or accidents',
        'Improper installation not following guidelines',
        'Modifications or unauthorized repairs',
        'Damage from extreme weather beyond design limits',
      ],
    },
  },
  'certifications': {
    title: 'Certifications & Downloads',
    subtitle: 'Internationally Certified Quality',
    description: 'Access our certification documents and technical datasheets for all product lines.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&h=600&fit=crop',
    content: {
      certifications: [
        { name: 'TÜV Rheinland', description: 'German certification for product safety and quality', icon: 'tuv' },
        { name: 'UL (Underwriters Laboratories)', description: 'US safety certification', icon: 'ul' },
        { name: 'CE Marking', description: 'European conformity certification', icon: 'ce' },
        { name: 'IEC 61215', description: 'Crystalline silicon terrestrial photovoltaic modules', icon: 'iec' },
        { name: 'IEC 61730', description: 'Photovoltaic module safety qualification', icon: 'iec' },
        { name: 'RoHS Compliance', description: 'Restriction of hazardous substances', icon: 'rohs' },
        { name: 'REACH Compliance', description: 'Chemical safety regulation', icon: 'reach' },
        { name: 'ISO 9001', description: 'Quality management system', icon: 'iso' },
        { name: 'ISO 14001', description: 'Environmental management system', icon: 'iso' },
      ],
    },
  },
  'custom-panel': {
    title: 'Custom Panel Request',
    subtitle: 'Tailored Solar Solutions',
    description: 'We specialize in custom solar panel manufacturing to meet your unique requirements.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&h=600&fit=crop',
    content: {
      customOptions: [
        { option: 'Custom Dimensions', description: 'Panels sized to fit your specific space requirements' },
        { option: 'Custom Voltage', description: 'Voltage configurations optimized for your system' },
        { option: 'Custom Connectors', description: 'Compatible connectors for your equipment' },
        { option: 'Custom Lamination', description: 'Specialized materials for unique applications' },
        { option: 'Custom Branding', description: 'OEM/ODM options with your branding' },
        { option: 'Custom Packaging', description: 'Packaging solutions for retail or distribution' },
      ],
      process: [
        { step: 1, title: 'Consultation', description: 'Discuss your requirements with our engineering team' },
        { step: 2, title: 'Design', description: 'We create a custom design based on your specifications' },
        { step: 3, title: 'Prototype', description: 'Sample production for testing and approval' },
        { step: 4, title: 'Production', description: 'Full-scale manufacturing of your custom panels' },
        { step: 5, title: 'Delivery', description: 'Quality-checked products delivered to your location' },
      ],
    },
  },
  'faq': {
    title: 'Frequently Asked Questions',
    subtitle: 'Quick Answers to Common Questions',
    description: 'Find answers to the most commonly asked questions about our products and services.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&h=600&fit=crop',
    content: {
      categories: [
        {
          name: 'General Questions',
          faqs: [
            { question: 'What does Solarid specialize in?', answer: 'Solarid specializes in high-quality solar panels for flexible, portable, and rigid applications. We serve RV, marine, balcony, and outdoor markets with both standard and custom solutions.' },
            { question: 'Where are Solarid products manufactured?', answer: 'Our products are manufactured in state-of-the-art facilities in Shenzhen, China, and Indonesia, with strict quality control meeting international standards.' },
            { question: 'Do you ship to Australia?', answer: 'Yes! We have a dedicated Australia distribution center in Sydney, offering fast shipping across all states and territories.' },
          ],
        },
        {
          name: 'Product Questions',
          faqs: [
            { question: 'What is the difference between flexible and rigid panels?', answer: 'Flexible panels can bend up to 30° and are lightweight (3-4 kg/m²), ideal for curved surfaces like RV roofs and boats. Rigid panels are more durable for permanent installations with longer warranties.' },
            { question: 'How efficient are your solar panels?', answer: 'Our panels range from 20% to 24.4% efficiency, with our TOPCon panels offering the highest efficiency using N-type cell technology.' },
            { question: 'What is anti-shading technology?', answer: 'Anti-shading technology uses cell-level shadow management with bypass diodes to maintain power output even when parts of the panel are shaded.' },
          ],
        },
        {
          name: 'Warranty & Support',
          faqs: [
            { question: 'What warranty do you offer?', answer: 'We offer up to 10 years product warranty on flexible panels, 12 years on rigid panels, and 5 years on portable panels, with performance guarantees up to 25 years.' },
            { question: 'How do I make a warranty claim?', answer: 'Contact our support team with your order number and photos of the issue. We\'ll guide you through the claims process and arrange replacement if covered.' },
            { question: 'Do you offer technical support?', answer: 'Yes, we provide comprehensive technical support including installation guidance, system design assistance, and troubleshooting help.' },
          ],
        },
        {
          name: 'Ordering & Shipping',
          faqs: [
            { question: 'What is the minimum order quantity?', answer: 'For standard products, there\'s no minimum order. For custom panels, minimum orders typically start at 100 pieces depending on specifications.' },
            { question: 'How long does shipping take?', answer: 'Standard Australian orders ship within 2-5 business days. International orders take 7-14 business days depending on destination.' },
            { question: 'Do you offer bulk discounts?', answer: 'Yes, we offer volume-based discounts for bulk orders. Contact our sales team for a customized quote.' },
          ],
        },
      ],
    },
  },
}

export function generateStaticParams() {
  return Object.keys(supportPages).map((slug) => ({ slug }))
}

export default async function SupportDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = supportPages[slug as keyof typeof supportPages]
  
  if (!page) return notFound()

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={page.image}
            alt={page.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/50" />
        </div>
        <div className="container relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/80 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/support" className="hover:text-white transition-colors">Support</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{page.title}</span>
          </nav>
          <h1 className="text-display-2 md:text-display-1 font-heading font-bold text-white mb-4">
            {page.title}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            {page.subtitle}
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container">
          <p className="text-body-lg text-text-secondary max-w-3xl">
            {page.description}
          </p>
        </div>
      </section>

      {/* Content based on page type */}
      {slug === 'product-test' && 'tests' in page.content && (
        <section className="section bg-background-secondary">
          <div className="container">
            <SectionHeading
              subtitle="Quality Assurance"
              title="Our Testing Procedures"
              description="Every panel is tested to meet or exceed international standards."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {page.content.tests.map((test, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-soft">
                  <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center text-primary font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">{test.name}</h3>
                  <p className="text-sm text-text-muted">{test.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {slug === 'warranty' && 'warranties' in page.content && (
        <>
          <section className="section bg-white">
            <div className="container">
              <SectionHeading
                subtitle="Coverage"
                title="Warranty by Product Type"
              />
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {page.content.warranties.map((warranty, index) => (
                  <div key={index} className="bg-background-secondary p-6 rounded-xl text-center">
                    <h3 className="font-semibold text-text-primary mb-4">{warranty.type}</h3>
                    <p className="text-3xl font-bold text-primary mb-2">{warranty.product}</p>
                    <p className="text-sm text-text-muted">Product Warranty</p>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-sm text-text-secondary">{warranty.performance}</p>
                      <p className="text-xs text-text-muted">Performance Guarantee</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-text-primary mb-4 flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" /> What&apos;s Covered
                  </h3>
                  <ul className="space-y-3">
                    {'coverage' in page.content && page.content.coverage.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-text-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-red-500" /> Exclusions
                  </h3>
                  <ul className="space-y-3">
                    {'exclusions' in page.content && page.content.exclusions.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-text-secondary">
                        <span className="text-red-500">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {slug === 'certifications' && 'certifications' in page.content && (
        <section className="section bg-white">
          <div className="container">
            <SectionHeading
              subtitle="Standards"
              title="Our Certifications"
              description="All certifications are available for download."
            />
            <div className="grid md:grid-cols-3 gap-6">
              {page.content.certifications.map((cert, index) => (
                <div key={index} className="bg-background-secondary p-6 rounded-xl hover:shadow-card transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <Award className="w-10 h-10 text-primary" />
                    <button className="text-primary hover:text-primary-hover">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">{cert.name}</h3>
                  <p className="text-sm text-text-muted">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {slug === 'custom-panel' && 'customOptions' in page.content && (
        <>
          <section className="section bg-white">
            <div className="container">
              <SectionHeading
                subtitle="Customization"
                title="What We Can Customize"
              />
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {page.content.customOptions.map((item, index) => (
                  <div key={index} className="bg-background-secondary p-6 rounded-xl">
                    <h3 className="font-semibold text-text-primary mb-2">{item.option}</h3>
                    <p className="text-sm text-text-muted">{item.description}</p>
                  </div>
                ))}
              </div>

              <SectionHeading
                subtitle="Process"
                title="How Custom Orders Work"
              />
              <div className="relative">
                <div className="absolute top-8 left-8 right-8 h-0.5 bg-primary-light hidden md:block" />
                <div className="grid md:grid-cols-5 gap-6">
                  {'process' in page.content && page.content.process.map((step) => (
                    <div key={step.step} className="relative text-center">
                      <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">
                        {step.step}
                      </div>
                      <h3 className="font-semibold text-text-primary mb-2">{step.title}</h3>
                      <p className="text-sm text-text-muted">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-primary">
            <div className="container text-center">
              <h2 className="text-heading-2 font-heading font-bold text-white mb-4">
                Ready to Start Your Custom Project?
              </h2>
              <p className="text-white/90 mb-8">
                Contact our engineering team to discuss your requirements.
              </p>
              <Button href="/contact" variant="white" icon={<Mail className="w-5 h-5" />}>
                Request Custom Quote
              </Button>
            </div>
          </section>
        </>
      )}

      {slug === 'faq' && 'categories' in page.content && (
        <section className="section bg-white">
          <div className="container max-w-4xl">
            {page.content.categories.map((category, catIndex) => (
              <div key={catIndex} className="mb-12 last:mb-0">
                <h2 className="text-heading-3 font-heading font-bold text-text-primary mb-6">
                  {category.name}
                </h2>
                <Accordion
                  items={category.faqs.map((faq) => ({
                    title: faq.question,
                    content: faq.answer,
                  }))}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      {slug !== 'custom-panel' && (
        <section className="py-16 bg-background-secondary">
          <div className="container text-center">
            <h2 className="text-heading-3 font-heading font-bold text-text-primary mb-4">
              Still Have Questions?
            </h2>
            <p className="text-text-secondary mb-8">
              Our support team is here to help you.
            </p>
            <Button href="/contact" icon={<ArrowRight className="w-5 h-5" />}>
              Contact Support
            </Button>
          </div>
        </section>
      )}
    </>
  )
}

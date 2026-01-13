import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, ArrowRight, FileText, Shield, Award, Wrench, HelpCircle, Phone } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

export const metadata = {
  title: 'Support Center - Solarid Australia',
  description: 'Get support for your Solarid solar panels. Access product testing info, warranty details, certifications, custom panel requests, and FAQs.',
}

const supportCards = [
  {
    title: 'Product Test',
    description: 'View our comprehensive product testing procedures and quality assurance processes.',
    icon: FileText,
    href: '/support/product-test',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Warranty',
    description: 'Learn about our industry-leading warranty coverage and claims process.',
    icon: Shield,
    href: '/support/warranty',
    color: 'bg-green-100 text-green-600',
  },
  {
    title: 'Certifications',
    description: 'Access our TÜV, UL, CE, and other certification documents and downloads.',
    icon: Award,
    href: '/support/certifications',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    title: 'Custom Panel',
    description: 'Request a custom solar panel tailored to your specific requirements.',
    icon: Wrench,
    href: '/support/custom-panel',
    color: 'bg-orange-100 text-orange-600',
  },
  {
    title: 'FAQ',
    description: 'Find answers to frequently asked questions about our products and services.',
    icon: HelpCircle,
    href: '/support/faq',
    color: 'bg-teal-100 text-teal-600',
  },
]

export default function SupportPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary-light/30 via-white to-white overflow-hidden">
        <div className="container">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-text-muted mb-6">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-text-primary">Support</span>
            </nav>
            <h1 className="text-display-2 md:text-display-1 font-heading font-bold text-text-primary mb-6">
              Support <span className="text-primary">Center</span>
            </h1>
            <p className="text-body-lg text-text-secondary max-w-2xl">
              We&apos;re here to help you get the most from your Solarid products. 
              Find documentation, warranty information, and answers to common questions.
            </p>
          </div>
        </div>
      </section>

      {/* Support Cards */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group p-6 bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className={`w-14 h-14 ${card.color} rounded-xl flex items-center justify-center mb-4`}>
                  <card.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-heading font-bold text-text-primary group-hover:text-primary transition-colors mb-2">
                  {card.title}
                </h3>
                <p className="text-text-muted mb-4">{card.description}</p>
                <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="section bg-background-secondary">
        <div className="container">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-heading-2 font-heading font-bold text-text-primary mb-4">
                  Need Direct Support?
                </h2>
                <p className="text-text-secondary mb-6">
                  Our support team is available to help with technical questions, 
                  warranty claims, and any other inquiries you may have.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href="/contact" icon={<Phone className="w-5 h-5" />}>
                    Contact Support
                  </Button>
                  <Button href="/support/faq" variant="outline">
                    View FAQ
                  </Button>
                </div>
              </div>
              <div className="bg-background-secondary rounded-xl p-6">
                <h3 className="font-semibold text-text-primary mb-4">Support Hours</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM AEST</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">10:00 AM - 2:00 PM AEST</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-text-muted">
                    Email: support@solarid.com.au<br />
                    Phone: +61 XXX XXX XXX
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

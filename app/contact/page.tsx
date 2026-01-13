import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, MapPin, Clock, ArrowUpRight, MessageCircle, Send, Linkedin, Youtube, Instagram } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'info@solarid.com.au',
    href: 'mailto:info@solarid.com.au',
    description: 'We reply within 24 hours',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+61 2 8000 1234',
    href: 'tel:+61280001234',
    description: 'Mon-Fri 9am-6pm AEST',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: '123 Solar Street, Sydney NSW 2000',
    href: 'https://maps.google.com',
    description: 'Showroom by appointment',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Monday - Friday',
    href: null,
    description: '9:00 AM - 6:00 PM AEST',
  },
]

const quickLinks = [
  { name: 'Request a Quote', href: '/contact', icon: MessageCircle },
  { name: 'Custom Panel Inquiry', href: '/support/custom-panel', icon: ArrowUpRight },
  { name: 'Warranty Support', href: '/support/warranty', icon: ArrowUpRight },
  { name: 'Partner Program', href: '/business/partner', icon: ArrowUpRight },
]

export default function ContactPage() {
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
                Get In Touch
              </span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-text-primary mb-8 leading-[1.05]">
              Let&apos;s start a <br />
              <span className="italic font-light text-primary">conversation</span>
            </h1>
            
            <p className="text-xl text-text-secondary max-w-2xl leading-relaxed">
              Whether you&apos;re looking for a quote, have technical questions, or want to 
              explore partnership opportunities, our team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info) => (
              <div key={info.label} className="group p-8 bg-white rounded-2xl border border-primary/5 hover:border-primary/20 hover:shadow-strong transition-all duration-500">
                <div className="w-14 h-14 rounded-xl bg-primary-lighter flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-500">
                  <info.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <p className="text-xs text-text-muted uppercase tracking-widest mb-2">{info.label}</p>
                {info.href ? (
                  <a href={info.href} className="block font-serif text-xl text-text-primary hover:text-primary transition-colors mb-2">
                    {info.value}
                  </a>
                ) : (
                  <p className="font-serif text-xl text-text-primary mb-2">{info.value}</p>
                )}
                <p className="text-sm text-text-muted">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <span className="text-primary font-medium tracking-widest text-sm uppercase mb-4 block">
                Send A Message
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-text-primary mb-10">
                How can we help you today?
              </h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      className="w-full px-5 py-4 bg-white border border-primary/10 rounded-xl text-text-primary placeholder-text-muted/50 transition-all duration-300 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary-light"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-5 py-4 bg-white border border-primary/10 rounded-xl text-text-primary placeholder-text-muted/50 transition-all duration-300 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary-light"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+61 4XX XXX XXX"
                      className="w-full px-5 py-4 bg-white border border-primary/10 rounded-xl text-text-primary placeholder-text-muted/50 transition-all duration-300 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary-light"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Company"
                      className="w-full px-5 py-4 bg-white border border-primary/10 rounded-xl text-text-primary placeholder-text-muted/50 transition-all duration-300 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary-light"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Inquiry Type *
                  </label>
                  <select 
                    className="w-full px-5 py-4 bg-white border border-primary/10 rounded-xl text-text-primary transition-all duration-300 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary-light appearance-none cursor-pointer"
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="quote">Request a Quote</option>
                    <option value="custom">Custom Panel Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="support">Technical Support</option>
                    <option value="warranty">Warranty Claim</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Your Message *
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your project or inquiry..."
                    className="w-full px-5 py-4 bg-white border border-primary/10 rounded-xl text-text-primary placeholder-text-muted/50 transition-all duration-300 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary-light resize-none"
                    required
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    className="mt-1 w-5 h-5 rounded border-primary/20 text-primary focus:ring-primary"
                    required
                  />
                  <label htmlFor="privacy" className="text-sm text-text-muted">
                    I agree to the{' '}
                    <Link href="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>{' '}
                    and consent to being contacted regarding my inquiry.
                  </label>
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-full font-medium text-lg transition-all duration-500 hover:bg-primary-hover hover:shadow-glow"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5">
              {/* Map/Image */}
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-10">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
                  alt="Solarid Office"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E1C]/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-serif text-xl mb-1">Sydney Office</p>
                  <p className="text-white/70 text-sm">123 Solar Street, Sydney NSW</p>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-primary-lighter p-8 rounded-2xl mb-10">
                <h3 className="font-serif text-xl text-text-primary mb-6">Quick Links</h3>
                <div className="space-y-3">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="group flex items-center justify-between p-4 bg-white rounded-xl hover:shadow-soft transition-all duration-300"
                    >
                      <span className="text-text-secondary group-hover:text-primary transition-colors">
                        {link.name}
                      </span>
                      <link.icon className="w-5 h-5 text-text-muted group-hover:text-primary transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div className="p-8 border border-primary/10 rounded-2xl">
                <h3 className="font-serif text-xl text-text-primary mb-4">Follow Us</h3>
                <p className="text-text-muted text-sm mb-6">
                  Stay connected for the latest news, products, and solar tips.
                </p>
                <div className="flex gap-3">
                  {[
                    { icon: Linkedin, href: '#' },
                    { icon: Youtube, href: '#' },
                    { icon: Instagram, href: '#' },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      className="w-12 h-12 rounded-xl bg-primary-lighter flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Banner */}
      <section className="py-16 bg-[#1A2E1C]">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h2 className="font-serif text-3xl text-white mb-2">
                Have questions?
              </h2>
              <p className="text-white/60">
                Check our FAQ section for quick answers to common questions.
              </p>
            </div>
            <Link
              href="/support/faq"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#1A2E1C] rounded-full font-medium transition-all duration-500 hover:bg-primary-light"
            >
              <span>View FAQ</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

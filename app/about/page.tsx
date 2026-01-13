import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Leaf, Award, Users, Globe, ChevronRight, Calendar, ArrowUpRight } from 'lucide-react'

const milestones = [
  { year: '2008', title: 'Founded', description: 'Solarid was established with a vision for premium solar solutions.' },
  { year: '2012', title: 'First Flexible Panel', description: 'Launched our first flexible solar panel series.' },
  { year: '2016', title: 'Global Expansion', description: 'Expanded to serve customers across 30+ countries.' },
  { year: '2020', title: 'TÜV Certification', description: 'Achieved full TÜV certification for all product lines.' },
  { year: '2024', title: 'Australia Launch', description: 'Official launch of Solarid Australia operations.' },
]

const values = [
  {
    icon: Leaf,
    title: 'Sustainability First',
    description: 'Every decision we make considers environmental impact. From production to packaging, sustainability guides our path.',
  },
  {
    icon: Award,
    title: 'Uncompromising Quality',
    description: 'We never cut corners. Every panel undergoes rigorous testing to meet international certification standards.',
  },
  {
    icon: Users,
    title: 'Customer Partnership',
    description: 'We view our customers as partners. Your success is our success, and we\'re committed to long-term relationships.',
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'With operations spanning continents, we bring global expertise to local markets.',
  },
]

const stats = [
  { value: '18+', label: 'Years Experience' },
  { value: '2000+', label: 'Global Partners' },
  { value: '50+', label: 'Countries Served' },
  { value: '400+', label: 'Team Members' },
]

const latestPosts = [
  {
    title: '2382x1134mm Solar Module: The Golden Size',
    date: 'January 13, 2026',
    excerpt: 'In the rapidly evolving solar photovoltaic industry, module dimensions play a crucial role...',
    href: '/about/blog/solar-module-golden-size',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop',
  },
  {
    title: 'Solar Virtual Fencing: Redefining Boundaries',
    date: 'January 6, 2026',
    excerpt: 'For decades, fencing meant one thing: wire, posts, and manual labor...',
    href: '/about/blog/solar-virtual-fencing',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400&h=300&fit=crop',
  },
  {
    title: 'How Many Solar Panels Do I Need for My RV?',
    date: 'January 4, 2026',
    excerpt: 'If you have ever asked yourself how many solar panels do I need for my RV...',
    href: '/about/blog/rv-solar-panels-guide',
    image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=400&h=300&fit=crop',
  },
]

export default function AboutPage() {
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
                Our Story
              </span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-text-primary mb-8 leading-[1.05]">
              Crafting solar <br />
              <span className="italic font-light text-primary">excellence since 2008</span>
            </h1>
            
            <p className="text-xl text-text-secondary max-w-2xl leading-relaxed">
              For over 18 years, we&apos;ve been pioneers in solar panel innovation. 
              Our journey from a small manufacturer to a global leader reflects our 
              commitment to quality, sustainability, and customer success.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-[#1A2E1C]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-4xl md:text-5xl text-primary-light mb-2">{stat.value}</p>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&h=1000&fit=crop"
                  alt="Solar technology innovation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-2xl shadow-xl max-w-xs">
                <Leaf className="w-8 h-8 text-white mb-4" />
                <p className="text-white font-serif text-lg leading-relaxed">
                  "Empowering a sustainable future through innovative solar solutions."
                </p>
              </div>
            </div>

            <div>
              <span className="text-primary font-medium tracking-widest text-sm uppercase mb-4 block">
                Our Mission
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-text-primary mb-8 leading-tight">
                Making premium solar <br />
                <span className="italic">accessible to all</span>
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                We believe that high-quality solar panels shouldn&apos;t be a luxury. 
                Our mission is to deliver world-class solar solutions that combine 
                exceptional performance with thoughtful design, making renewable 
                energy accessible to businesses and individuals alike.
              </p>
              <p className="text-text-muted leading-relaxed mb-10">
                From flexible panels that curve with your RV&apos;s roofline to portable 
                solutions for outdoor adventures, every product we create reflects our 
                commitment to innovation, sustainability, and customer satisfaction.
              </p>
              <Link 
                href="/about/story"
                className="group inline-flex items-center gap-2 text-primary font-medium"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-primary-lighter">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium tracking-widest text-sm uppercase mb-4 block">
              What We Stand For
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-text-primary">
              Our Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-8 rounded-2xl hover:shadow-strong transition-all duration-500">
                <div className="w-14 h-14 rounded-xl bg-primary-lighter flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl text-text-primary mb-4">{value.title}</h3>
                <p className="text-text-muted leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium tracking-widest text-sm uppercase mb-4 block">
              Our Journey
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-text-primary">
              Key Milestones
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-primary/20" />
              
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative flex gap-8 mb-12 last:mb-0">
                  {/* Year Marker */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className={`flex-1 pt-3 pb-8 ${index !== milestones.length - 1 ? 'border-b border-primary/10' : ''}`}>
                    <span className="text-primary font-serif text-xl mb-2 block">{milestone.year}</span>
                    <h3 className="font-serif text-2xl text-text-primary mb-2">{milestone.title}</h3>
                    <p className="text-text-muted">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog/News Section */}
      <section className="py-24 bg-[#1A2E1C]">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div>
              <span className="text-primary-light font-medium tracking-widest text-sm uppercase mb-4 block">
                Latest Updates
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-white">
                From Our Blog
              </h2>
            </div>
            <Link 
              href="/about/blog"
              className="group inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <span>View All Posts</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <Link key={post.title} href={post.href} className="group">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-primary-light text-sm mb-2">{post.date}</p>
                <h3 className="font-serif text-xl text-white group-hover:text-primary-light transition-colors mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-white/60 text-sm line-clamp-2">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { title: 'Our Story', href: '/about/story' },
              { title: 'Our History', href: '/about/history' },
              { title: 'Blog', href: '/about/blog' },
              { title: 'News', href: '/about/news' },
            ].map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="group flex items-center justify-between p-6 bg-primary-lighter rounded-xl hover:bg-primary transition-all duration-500"
              >
                <span className="font-serif text-lg text-text-primary group-hover:text-white transition-colors">
                  {link.title}
                </span>
                <ChevronRight className="w-5 h-5 text-text-muted group-hover:text-white transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary-lighter">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl text-text-primary mb-6">
              Ready to partner with us?
            </h2>
            <p className="text-lg text-text-secondary mb-10 max-w-xl mx-auto">
              Whether you&apos;re a distributor, installer, or project developer, 
              we&apos;d love to explore how we can work together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/business/partner"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-full font-medium text-lg transition-all duration-500 hover:bg-primary-hover"
              >
                <span>Become a Partner</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 border border-primary/20 text-primary rounded-full font-medium text-lg transition-all duration-300 hover:bg-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

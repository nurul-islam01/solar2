import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronRight, ArrowRight, Calendar } from 'lucide-react'
import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'
import { BlogCard } from '@/components/ui/Card'

const aboutPages = {
  story: {
    title: 'Our Story',
    subtitle: 'From Vision to Global Impact',
    description: 'How a passion for renewable energy grew into a worldwide solar solution provider.',
    image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1920&h=800&fit=crop',
    content: {
      intro: 'Solarid was founded in 2008 with a simple but powerful vision: to make high-quality solar power accessible to everyone, everywhere. What started as a small team of passionate engineers has grown into a global company serving customers in over 50 countries.',
      sections: [
        {
          title: 'The Beginning',
          content: 'Our founders recognized early on that the future of energy lies in solar power. Starting in a small workshop in Shenzhen, China, we began developing flexible solar panels that could be used in applications where traditional rigid panels couldn\'t go – on curved RV roofs, boat decks, and portable camping gear.',
        },
        {
          title: 'Innovation & Growth',
          content: 'Through continuous research and development, we pioneered several breakthrough technologies including our anti-shading cell technology and ultra-lightweight flexible panels weighing just 3.3 kg/m². These innovations opened up new markets and applications, from marine vessels to balcony solar installations.',
        },
        {
          title: 'Global Expansion',
          content: 'Today, Solarid operates manufacturing facilities in Shenzhen and Indonesia, with a workforce of over 400 employees. We\'ve built partnerships with 2000+ distributors, retailers, and installers worldwide, including a dedicated Australian distribution network.',
        },
        {
          title: 'Looking Forward',
          content: 'As we continue to grow, our commitment remains the same: delivering premium solar solutions with exceptional quality and customer service. We\'re investing in next-generation solar technologies and expanding our product range to meet the evolving needs of the renewable energy market.',
        },
      ],
    },
  },
  history: {
    title: 'Our History',
    subtitle: 'A Timeline of Innovation',
    description: 'Key milestones in our journey to becoming a global solar leader.',
    image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=1920&h=800&fit=crop',
    content: {
      timeline: [
        { year: '2008', title: 'Company Founded', description: 'Solarid established in Shenzhen, China, focusing on flexible solar panel development.' },
        { year: '2010', title: 'First Product Launch', description: 'Launched our first line of flexible solar panels for RV applications.' },
        { year: '2012', title: 'TÜV Certification', description: 'Achieved TÜV Rheinland certification, opening European markets.' },
        { year: '2014', title: 'Marine Line Launch', description: 'Introduced saltwater-resistant solar panels for marine applications.' },
        { year: '2016', title: 'Factory Expansion', description: 'Opened second manufacturing facility with 50,000m² production area.' },
        { year: '2018', title: 'Indonesia Plant', description: 'Established manufacturing operations in Indonesia for increased capacity.' },
        { year: '2020', title: 'Anti-Shading Tech', description: 'Launched revolutionary anti-shading cell technology.' },
        { year: '2022', title: 'Australian Operations', description: 'Opened dedicated Australian distribution center in Sydney.' },
        { year: '2024', title: 'TOPCon Panels', description: 'Introduced N-type TOPCon technology with 24.4% efficiency.' },
        { year: '2025', title: 'Balcony Solar', description: 'Launched plug-and-play balcony solar solutions for urban markets.' },
      ],
    },
  },
  blog: {
    title: 'Blog',
    subtitle: 'Solar Insights & Guides',
    description: 'Expert articles on solar technology, installation tips, and industry trends.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&h=800&fit=crop',
    content: {
      posts: [
        {
          slug: 'how-many-solar-panels-rv',
          title: 'How Many Solar Panels Do I Need for My RV?',
          excerpt: 'A comprehensive guide to calculating your RV solar power requirements based on your energy usage.',
          image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800&h=450&fit=crop',
          date: 'January 4, 2026',
          category: 'RV Solar',
        },
        {
          slug: '2026-rv-solar-compliance',
          title: '2026 RV Solar Compliance Guide for OEMs',
          excerpt: 'Everything manufacturers need to know about the new solar regulations coming into effect.',
          image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=450&fit=crop',
          date: 'December 30, 2025',
          category: 'Industry News',
        },
        {
          slug: 'best-flexible-panels-curved-roofs',
          title: 'Best Lightweight Flexible Solar Panels for Curved RV Roofs',
          excerpt: 'Discover the top flexible panels designed for curved surfaces and their key features.',
          image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=450&fit=crop',
          date: 'December 25, 2025',
          category: 'Product Guide',
        },
        {
          slug: 'solar-setup-running-ac-offgrid',
          title: 'Best RV Solar Setup for Running AC Off-Grid',
          excerpt: 'Learn how to size your solar system to power air conditioning in your RV.',
          image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=800&h=450&fit=crop',
          date: 'December 20, 2025',
          category: 'Installation Guide',
        },
        {
          slug: 'anti-shading-technology-explained',
          title: 'Anti-Shading Technology: How It Works',
          excerpt: 'An in-depth look at cell-level shadow management and why it matters for your solar system.',
          image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=450&fit=crop',
          date: 'December 15, 2025',
          category: 'Technology',
        },
        {
          slug: 'balcony-solar-beginners-guide',
          title: 'Balcony Solar: A Beginner\'s Guide for Renters',
          excerpt: 'How apartment dwellers can generate their own solar power without roof access.',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop',
          date: 'December 10, 2025',
          category: 'Getting Started',
        },
      ],
    },
  },
  news: {
    title: 'News',
    subtitle: 'Company Updates & Announcements',
    description: 'Stay informed about Solarid product launches, partnerships, and industry news.',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&h=800&fit=crop',
    content: {
      posts: [
        {
          slug: 'solarid-launches-2026-product-line',
          title: 'Solarid Launches 2026 Product Line with Enhanced Efficiency',
          excerpt: 'Introducing our most efficient panels yet, featuring next-generation N-type TOPCon cells.',
          image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=450&fit=crop',
          date: 'January 10, 2026',
          category: 'Product Launch',
        },
        {
          slug: 'partnership-australian-rv-association',
          title: 'Solarid Partners with Australian RV Association',
          excerpt: 'New partnership to promote solar adoption in the Australian recreational vehicle industry.',
          image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800&h=450&fit=crop',
          date: 'January 5, 2026',
          category: 'Partnership',
        },
        {
          slug: 'sydney-warehouse-expansion',
          title: 'Solarid Expands Sydney Distribution Center',
          excerpt: 'Increased warehouse capacity to better serve growing Australian demand.',
          image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=450&fit=crop',
          date: 'December 28, 2025',
          category: 'Company News',
        },
        {
          slug: 'tuv-certification-pa621-series',
          title: 'PA621 Series Receives TÜV Certification',
          excerpt: 'Our latest lightweight flexible panel series achieves prestigious TÜV certification.',
          image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=450&fit=crop',
          date: 'December 20, 2025',
          category: 'Certification',
        },
      ],
    },
  },
}

export function generateStaticParams() {
  return Object.keys(aboutPages).map((slug) => ({ slug }))
}

export default async function AboutDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = aboutPages[slug as keyof typeof aboutPages]
  
  if (!page) return notFound()

  const isBlogOrNews = slug === 'blog' || slug === 'news'

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
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
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
      {slug === 'story' && 'intro' in page.content && (
        <section className="section bg-white">
          <div className="container max-w-4xl">
            <p className="text-body-lg text-text-secondary mb-12">
              {page.content.intro}
            </p>
            {'sections' in page.content && page.content.sections.map((section, index) => (
              <div key={index} className="mb-12 last:mb-0">
                <h2 className="text-heading-3 font-heading font-bold text-text-primary mb-4">
                  {section.title}
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {slug === 'history' && 'timeline' in page.content && (
        <section className="section bg-white">
          <div className="container max-w-4xl">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-light" />
              
              {page.content.timeline.map((item, index) => (
                <div key={index} className="relative flex gap-8 mb-12 last:mb-0">
                  {/* Year marker */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                      {item.year.slice(2)}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pt-3">
                    <span className="text-primary font-semibold">{item.year}</span>
                    <h3 className="text-xl font-heading font-bold text-text-primary mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {isBlogOrNews && 'posts' in page.content && (
        <section className="section bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {page.content.posts.map((post) => (
                <BlogCard
                  key={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  image={post.image}
                  href={`/about/${slug}/${post.slug}`}
                  date={post.date}
                  category={post.category}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-background-secondary">
        <div className="container text-center">
          <h2 className="text-heading-3 font-heading font-bold text-text-primary mb-4">
            {isBlogOrNews ? 'Want to Stay Updated?' : 'Ready to Work With Us?'}
          </h2>
          <p className="text-text-secondary mb-8">
            {isBlogOrNews 
              ? 'Subscribe to our newsletter for the latest updates and insights.'
              : 'Contact our team to discuss your solar needs.'}
          </p>
          <Button href="/contact" icon={<ArrowRight className="w-5 h-5" />}>
            {isBlogOrNews ? 'Contact Us' : 'Get in Touch'}
          </Button>
        </div>
      </section>
    </>
  )
}

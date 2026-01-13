import { ReactNode } from 'react'
import { clsx } from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Leaf } from 'lucide-react'

interface CardProps {
  children: ReactNode
  className?: string
  href?: string
  hover?: boolean
}

export function Card({ children, className, href, hover = true }: CardProps) {
  const classes = clsx(
    'bg-white rounded-3xl overflow-hidden border border-primary/5',
    hover && 'transition-all duration-500 hover:shadow-strong hover:-translate-y-1 hover:border-primary/10',
    className
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return <div className={classes}>{children}</div>
}

interface ProductCardProps {
  title: string
  description?: string
  image: string
  href: string
  badge?: 'NEW' | 'HOT' | 'TOP'
  price?: string
}

export function ProductCard({ title, description, image, href, badge, price }: ProductCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-5">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {badge && (
          <span className={clsx(
            'absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold',
            badge === 'NEW' && 'bg-primary text-white',
            badge === 'HOT' && 'bg-earth-olive text-white',
            badge === 'TOP' && 'bg-earth-brown text-white'
          )}>
            {badge}
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E1C]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <h3 className="font-serif text-xl text-text-primary group-hover:text-primary transition-colors mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-text-muted text-sm line-clamp-2 mb-3">{description}</p>
      )}
      {price && (
        <p className="text-primary font-medium">{price}</p>
      )}
      <span className="inline-flex items-center gap-2 text-primary text-sm font-medium mt-2 group-hover:gap-3 transition-all">
        Learn more <ArrowRight className="w-4 h-4" />
      </span>
    </Link>
  )
}

interface FeatureCardProps {
  title: string
  description: string
  icon: ReactNode
  href?: string
}

export function FeatureCard({ title, description, icon, href }: FeatureCardProps) {
  const content = (
    <>
      <div className="w-14 h-14 bg-primary-light rounded-2xl flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-500">
        {icon}
      </div>
      <h3 className="font-serif text-xl text-text-primary mb-3">{title}</h3>
      <p className="text-text-muted leading-relaxed">{description}</p>
    </>
  )

  if (href) {
    return (
      <Link href={href} className="group block p-8 bg-white rounded-3xl border border-primary/5 hover:border-primary/20 hover:shadow-medium transition-all duration-500">
        {content}
      </Link>
    )
  }

  return (
    <div className="group p-8 bg-white rounded-3xl border border-primary/5">
      {content}
    </div>
  )
}

interface BlogCardProps {
  title: string
  excerpt: string
  image: string
  href: string
  date: string
  category?: string
}

export function BlogCard({ title, excerpt, image, href, date, category }: BlogCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-5">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {category && (
          <span className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-primary">
            {category}
          </span>
        )}
      </div>
      <div className="flex items-center gap-3 text-sm text-text-muted mb-3">
        <Leaf className="w-4 h-4 text-primary" />
        <span>{date}</span>
      </div>
      <h3 className="font-serif text-xl text-text-primary group-hover:text-primary transition-colors mb-3 line-clamp-2">
        {title}
      </h3>
      <p className="text-text-muted text-sm line-clamp-2">{excerpt}</p>
    </Link>
  )
}

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  image?: string
}

export function TestimonialCard({ quote, author, role, image }: TestimonialCardProps) {
  return (
    <div className="p-8 bg-white rounded-3xl border border-primary/5">
      <Leaf className="w-8 h-8 text-primary/20 mb-6" />
      <p className="text-lg text-text-primary italic mb-6 leading-relaxed">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center gap-4">
        {image ? (
          <Image
            src={image}
            alt={author}
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center">
            <span className="text-primary font-serif font-medium text-lg">{author[0]}</span>
          </div>
        )}
        <div>
          <h4 className="font-medium text-text-primary">{author}</h4>
          <p className="text-sm text-text-muted">{role}</p>
        </div>
      </div>
    </div>
  )
}

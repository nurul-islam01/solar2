import { ReactNode } from 'react'
import { clsx } from 'clsx'
import { Leaf } from 'lucide-react'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  description?: string
  align?: 'left' | 'center' | 'right'
  badge?: string
  showLeaf?: boolean
  children?: ReactNode
  className?: string
  light?: boolean
}

export default function SectionHeading({
  title,
  subtitle,
  description,
  align = 'center',
  badge,
  showLeaf = false,
  children,
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div 
      className={clsx(
        'max-w-3xl mb-16 md:mb-20',
        align === 'center' && 'mx-auto text-center',
        align === 'right' && 'ml-auto text-right',
        className
      )}
    >
      {badge && (
        <span className={clsx(
          'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6',
          light ? 'bg-white/10 text-white' : 'bg-primary-light text-primary'
        )}>
          {showLeaf && <Leaf className="w-4 h-4" />}
          {badge}
        </span>
      )}
      {subtitle && (
        <p className={clsx(
          'font-medium mb-4 flex items-center gap-2',
          align === 'center' && 'justify-center',
          light ? 'text-white/80' : 'text-primary'
        )}>
          {showLeaf && !badge && <Leaf className="w-4 h-4" />}
          {subtitle}
        </p>
      )}
      <h2 className={clsx(
        'font-serif text-4xl md:text-5xl leading-tight',
        light ? 'text-white' : 'text-text-primary'
      )}>
        {title}
      </h2>
      {description && (
        <p className={clsx(
          'mt-6 text-xl leading-relaxed',
          align === 'center' && 'max-w-2xl mx-auto',
          light ? 'text-white/80' : 'text-text-secondary'
        )}>
          {description}
        </p>
      )}
      {children}
    </div>
  )
}

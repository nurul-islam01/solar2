import { ReactNode } from 'react'
import { clsx } from 'clsx'

type BadgeVariant = 'new' | 'hot' | 'top' | 'default' | 'success' | 'warning' | 'error'
type BadgeSize = 'sm' | 'md' | 'lg'

interface BadgeProps {
  children: ReactNode
  variant?: BadgeVariant
  size?: BadgeSize
  className?: string
}

const variantClasses: Record<BadgeVariant, string> = {
  new: 'bg-primary-light text-primary',
  hot: 'bg-red-100 text-red-600',
  top: 'bg-blue-100 text-blue-600',
  default: 'bg-gray-100 text-gray-600',
  success: 'bg-green-100 text-green-600',
  warning: 'bg-yellow-100 text-yellow-700',
  error: 'bg-red-100 text-red-600',
}

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-xs',
  lg: 'px-3 py-1 text-sm',
}

export default function Badge({ 
  children, 
  variant = 'default', 
  size = 'md',
  className 
}: BadgeProps) {
  return (
    <span 
      className={clsx(
        'inline-flex items-center rounded-full font-semibold uppercase tracking-wide',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </span>
  )
}

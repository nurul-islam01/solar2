import { ButtonHTMLAttributes, ReactNode } from 'react'
import { clsx } from 'clsx'
import Link from 'next/link'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'eco' | 'white'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  children: ReactNode
  fullWidth?: boolean
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-white hover:bg-primary-hover shadow-soft hover:shadow-glow',
  secondary: 'bg-primary-light text-primary hover:bg-primary hover:text-white border border-primary/10',
  outline: 'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white',
  ghost: 'bg-transparent text-text-primary hover:text-primary hover:bg-primary-light/50',
  eco: 'bg-gradient-to-r from-primary to-earth-olive text-white hover:shadow-glow',
  white: 'bg-white text-[#1A2E1C] hover:bg-primary-light shadow-soft',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-7 py-3.5 text-base',
  lg: 'px-9 py-4.5 text-lg',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  fullWidth = false,
  icon,
  iconPosition = 'right',
  className,
  disabled,
  ...props
}: ButtonProps) {
  const classes = clsx(
    'inline-flex items-center justify-center font-medium rounded-full transition-all duration-500 cursor-pointer relative overflow-hidden group',
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && 'w-full',
    disabled && 'opacity-50 cursor-not-allowed',
    className
  )

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="mr-2.5 transition-transform duration-300 group-hover:-translate-x-0.5">{icon}</span>
      )}
      <span className="relative z-10">{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="ml-2.5 transition-transform duration-300 group-hover:translate-x-1">{icon}</span>
      )}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <button className={classes} disabled={disabled} {...props}>
      {content}
    </button>
  )
}

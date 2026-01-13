'use client'

import { useEffect, useState, useRef } from 'react'

interface StatItemProps {
  value: number
  suffix?: string
  prefix?: string
  label: string
  duration?: number
}

function StatItem({ value, suffix = '', prefix = '', label, duration = 2000 }: StatItemProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let start = 0
    const end = value
    const incrementTime = Math.ceil(duration / end)
    
    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start >= end) {
        clearInterval(timer)
        setCount(end)
      }
    }, incrementTime)

    return () => clearInterval(timer)
  }, [isVisible, value, duration])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="text-text-muted text-sm uppercase tracking-wide">{label}</div>
    </div>
  )
}

interface StatsProps {
  stats: StatItemProps[]
  className?: string
}

export default function Stats({ stats, className }: StatsProps) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 ${className}`}>
      {stats.map((stat, index) => (
        <StatItem key={index} {...stat} />
      ))}
    </div>
  )
}

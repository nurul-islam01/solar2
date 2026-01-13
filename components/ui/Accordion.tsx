'use client'

import { useState, ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'
import { clsx } from 'clsx'

interface AccordionItemProps {
  title: string
  children: ReactNode
  isOpen?: boolean
  onToggle?: () => void
}

export function AccordionItem({ title, children, isOpen = false, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full flex items-center justify-between py-5 text-left focus:outline-none group"
        onClick={onToggle}
      >
        <span className={clsx(
          'font-medium text-lg transition-colors',
          isOpen ? 'text-primary' : 'text-text-primary group-hover:text-primary'
        )}>
          {title}
        </span>
        <ChevronDown 
          className={clsx(
            'w-5 h-5 text-text-muted transition-transform duration-300',
            isOpen && 'rotate-180 text-primary'
          )} 
        />
      </button>
      <div 
        className={clsx(
          'overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        )}
      >
        <div className="text-text-secondary leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
}

interface AccordionProps {
  items: { title: string; content: ReactNode }[]
  allowMultiple?: boolean
  className?: string
}

export default function Accordion({ items, allowMultiple = false, className }: AccordionProps) {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenItems(prev => 
        prev.includes(index) 
          ? prev.filter(i => i !== index) 
          : [...prev, index]
      )
    } else {
      setOpenItems(prev => 
        prev.includes(index) ? [] : [index]
      )
    }
  }

  return (
    <div className={clsx('bg-white rounded-xl shadow-card p-6', className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openItems.includes(index)}
          onToggle={() => toggleItem(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  )
}

import { cn } from '@/lib/utils'
import { title } from 'process'
import React from 'react'

type Props = {
    title: string
    className?: string
}

export default function PageTitle({}: Props) {
  return (
      <div className={cn('text-2xl font-semibold')}>{title}</div>
  )
}
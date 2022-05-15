import NextLink from 'next/link'
import { memo, ReactNode } from 'react'

export const Link = memo(
  ({
    children,
    href = '#',
    prefetch = false,
    classes = [],
  }: {
    children: ReactNode
    href?: string
    prefetch?: boolean
    classes?: string[]
  }): JSX.Element => {
    const className = [
      'block',
      'text-white',
      'hover:underline',
      'py-2',
      'font-semibold',
      ...classes,
    ].join(' ')

    return (
      <NextLink href={href} prefetch={prefetch}>
        <a className={className}>{children}</a>
      </NextLink>
    )
  }
)

Link.displayName = 'Link'

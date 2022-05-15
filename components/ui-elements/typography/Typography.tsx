import { memo, ReactNode } from 'react'
import { Map, VariantSetting } from './settings'

export const Typography = memo(
  ({
    children,
    variant = 'body1',
    classes = [],
  }: {
    children: ReactNode
    variant?:
      | 'h1'
      | 'h2'
      | 'h3'
      | 'h4'
      | 'h5'
      | 'h6'
      | 'subtitle1'
      | 'subtitle2'
      | 'body1'
      | 'body2'
    classes?: string[]
  }): JSX.Element => {
    const variants = VariantSetting.filter(
      (map: Map) => map.key === variant
    ).map((map: Map) => map.class)
    const className = [...variants[0], ...classes].join(' ')

    return (
      <div>
        <span className={className}>{children}</span>
      </div>
    )
  }
)

Typography.displayName = 'Typography'

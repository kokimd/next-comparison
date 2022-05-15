import { memo, ReactNode } from 'react'
import { Map, ColorSetting, SizeSetting } from './settings'

export const Button = memo(
  ({
    children,
    type = 'submit',
    color = 'default',
    size = 'small',
    fullWidth = false,
    disabled = false,
    classes = [],
    onClick,
  }: {
    children: ReactNode
    type?: 'submit' | 'button' | 'reset'
    color?: 'default' | 'primary' | 'secondary' | 'danger'
    size?: 'large' | 'medium' | 'small'
    fullWidth?: boolean
    disabled?: boolean
    classes?: string[]
    onClick?: () => void
  }): JSX.Element => {
    const colors = ColorSetting.filter((map: Map) => map.key === color).map(
      (map: Map) => map.class
    )

    const sizes = SizeSetting.filter((map: Map) => map.key === size).map(
      (map: Map) => map.class
    )

    const className = [
      'inline-flex',
      'justify-center',
      'rounded-md',
      'border',
      'font-semibold',
      fullWidth && 'w-full',
      disabled && 'opacity-50 cursor-not-allowed',
      ...colors[0],
      ...sizes[0],
      ...classes,
    ].join(' ')

    return (
      <button className={className} onClick={onClick} type={type}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

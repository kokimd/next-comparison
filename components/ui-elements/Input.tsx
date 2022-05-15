import { memo } from 'react'

export const Input = memo(
  ({
    value,
    placeholder,
    type = 'text',
    name,
    onChange,
    fullWidth = false,
    classes = [],
  }: {
    value: string | number
    type?: string
    name: string
    placeholder: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    fullWidth?: boolean
    classes?: string[]
  }): JSX.Element => {
    const className = [
      'w-full',
      'py-2 px-2',
      'border-gray-300',
      'block',
      'rounded-md',
      'text-gray-500',
      'bg-gray-300',
      'bg-opacity-25',
      ...classes,
    ].join(' ')

    return (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={className}
        placeholder={placeholder}
      />
    )
  }
)

Input.displayName = 'Input'

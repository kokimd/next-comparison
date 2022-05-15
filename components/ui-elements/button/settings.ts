type Map = {
  key: string
  class: string[]
}

const ColorSetting: Map[] = [
  {
    key: 'primary',
    class: [
      'text-white',
      'bg-indigo-600',
      'hover:bg-indigo-700',
      'focus:ring-indigo-500',
      'border-transparent',
    ],
  },
  {
    key: 'secondary',
    class: [
      'text-white',
      'bg-teal-600',
      'hover:bg-teal-700',
      'focus:ring-teal-500',
      'border-transparent',
    ],
  },
  {
    key: 'default',
    class: [
      'text-gray-700',
      'bg-white',
      'hover:bg-gray-100',
      'focus:ring-indigo-500',
      'border-gray-300',
    ],
  },
  {
    key: 'danger',
    class: [
      'text-white',
      'bg-red-600',
      'hover:bg-red-700',
      'focus:ring-red-500',
      'border-transparent',
      'danger-button',
    ],
  },
]

const SizeSetting: Map[] = [
  { key: 'small', class: ['py-2', 'px-4', 'text-sm'] },
  { key: 'medium', class: ['py-4', 'px-6', 'text-base'] },
  { key: 'large', class: ['py-4', 'px-8', 'text-lg'] },
]

export { type Map, ColorSetting, SizeSetting }

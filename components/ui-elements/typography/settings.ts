type Map = {
  key: string
  class: string[]
}

const VariantSetting: Map[] = [
  { key: 'h1', class: ['text-gray-900', 'text-6xl', 'font-bold'] },
  { key: 'h2', class: ['text-gray-900', 'text-5xl', 'font-bold'] },
  { key: 'h3', class: ['text-gray-900', 'text-4xl', 'font-semibold'] },
  { key: 'h4', class: ['text-gray-900', 'text-2xl', 'font-semibold'] },
  { key: 'h5', class: ['text-gray-900', 'text-xl', 'font-semibold'] },
  { key: 'h6', class: ['text-gray-900', 'text-lg', 'font-semibold'] },
  { key: 'subtitle1', class: ['prose', 'font-semibold'] },
  { key: 'subtitle2', class: ['prose', 'prose-sm', 'font-semibold'] },
  { key: 'body1', class: ['prose'] },
  { key: 'body2', class: ['prose', 'prose-sm'] },
]

export { type Map, VariantSetting }

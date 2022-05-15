import { Link } from '../../ui-elements/Link'

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-teal-500">
      <nav className="container  mx-auto flex w-full flex-wrap items-center justify-between p-6">
        <div>
          <Link href="/" classes={['font-bold', 'text-3xl']}>
            Next.js
          </Link>
        </div>
        <div className="ml-auto flex gap-12">
          <Link href="/">SSG + CSF</Link>
          <Link href="/ssr">SSR</Link>
          <Link href="/ssg">SSG</Link>
          <Link href="/isr">ISR</Link>
          <Link href="/isr/on_demand_isr">OnDemandISR + CSF</Link>
        </div>
      </nav>
    </header>
  )
}

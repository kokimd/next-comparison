import Head from 'next/head'
import { Button } from '../../ui-elements/button/Button'
import { Header } from './Header'

type Props = {
  title: string
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-sans">
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main className="to relative flex w-screen flex-1 flex-col items-center justify-center">
        {children}
      </main>
      <Button
        classes={['absolute', 'top-36 right-40']}
        onClick={() => location.reload()}
        color={'primary'}
      >
        Reload
      </Button>
    </div>
  )
}

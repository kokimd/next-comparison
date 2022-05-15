import '../styles/globals.css'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useEffect } from 'react'
import useStore from '../store'

export function reportWebVitals(metric: NextWebVitalsMetric) {
  switch (metric.name) {
    case 'FCP':
      localStorage.setItem('FCP', String(Math.round(metric.value * 10) / 10))
      break
    case 'LCP':
      localStorage.setItem('LCP', String(Math.round(metric.value * 10) / 10))
      break
    case 'TTFB':
      localStorage.setItem('TTFB', String(Math.round(metric.value * 10) / 10))
      break
    case 'Next.js-hydration':
      localStorage.setItem(
        'HydrationStart',
        String(Math.round(metric.startTime * 10) / 10)
      )
      localStorage.setItem(
        'HydrationEnd',
        String(Math.round((metric.startTime + metric.value) * 10) / 10)
      )

      break
    default:
      break
  }
}

// React Queryの設定
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  const updateWebVitals = useStore((state) => state.updateWebVitals)

  useEffect(() => {
    const webVitals = {
      FCP: localStorage.getItem('FCP'),
      LCP: localStorage.getItem('LCP'),
      TTFB: localStorage.getItem('TTFB'),
      Hydration: {
        start: localStorage.getItem('HydrationStart'),
        end: localStorage.getItem('HydrationEnd'),
      },
    }
    updateWebVitals(webVitals)
  }, [updateWebVitals])

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
export default MyApp

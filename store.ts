import create from 'zustand'

export type WebVitals = {
  FCP: string | null
  LCP: string | null
  TTFB: string | null
  Hydration: {
    start: string | null
    end: string | null
  }
}

type State = {
  webVitals: WebVitals
  updateWebVitals: (payload: WebVitals) => void
  resetWebVitals: () => void
}

const useStore = create<State>((set, _) => ({
  webVitals: {
    FCP: '',
    LCP: '',
    TTFB: '',
    Hydration: {
      start: '',
      end: '',
    },
  },
  updateWebVitals: (payload) =>
    set({
      webVitals: {
        FCP: payload.FCP,
        LCP: payload.LCP,
        TTFB: payload.TTFB,
        Hydration: {
          start: payload.Hydration.start,
          end: payload.Hydration.end,
        },
      },
    }),
  resetWebVitals: () =>
    set({
      webVitals: {
        FCP: '',
        LCP: '',
        TTFB: '',
        Hydration: {
          start: '',
          end: '',
        },
      },
    }),
}))

export default useStore

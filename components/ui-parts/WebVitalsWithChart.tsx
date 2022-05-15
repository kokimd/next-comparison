import { FC, memo, useState } from 'react'
import useStore from '../../store'
import { BarChart } from '../ui-elements/BarChart'
import { Button } from '../ui-elements/button/Button'
import { Modal } from '../ui-elements/Modal'
import { Typography } from '../ui-elements/typography/Typography'

export const WebVitalsWithChart: FC = memo(() => {
  const [isOpen, setIsOpen] = useState(false)

  const webVitals = useStore((state) => state.webVitals)
  const { FCP, LCP, TTFB, Hydration } = webVitals

  return (
    <>
      <div className="flex gap-12">
        <Typography variant={'h4'}>TTFB : {TTFB}</Typography>
        <Typography variant={'h4'}>FCP : {FCP}</Typography>
        <Typography variant={'h4'}>LCP : {LCP}</Typography>
        <Typography variant={'h4'}>
          HydrationStart : {Hydration.start}
        </Typography>
        <Typography variant={'h4'}>HydrationEnd : {Hydration.end}</Typography>
      </div>
      <Button
        color={'secondary'}
        classes={['mt-8']}
        onClick={() => setIsOpen(true)}
      >
        グラフで見る
      </Button>
      <Modal modalIsOpen={isOpen} closeModal={() => setIsOpen(false)}>
        <BarChart webVitals={webVitals} />
      </Modal>
    </>
  )
})

WebVitalsWithChart.displayName = 'WebVitalsWithChart'

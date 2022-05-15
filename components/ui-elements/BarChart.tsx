import { FC, memo } from 'react'
import { WebVitals } from '../../store'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from 'chart.js'

type Props = {
  webVitals: WebVitals
}

export const BarChart: FC<Props> = memo(({ webVitals }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
  )
  const { TTFB, FCP, LCP, Hydration } = webVitals

  const labels = ['TTFB', 'FCP', 'LCP', 'HydrationStart', 'HydrationEnd']
  const graphData = {
    labels: labels,
    datasets: [
      {
        label: 'WebVitals',
        data: [TTFB, FCP, LCP, Hydration.start, Hydration.end],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(255, 159, 64, 0.8)',
          'rgba(255, 205, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(153, 102, 255, 0.8)',
          'rgba(201, 203, 207, 0.8)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
        ],
        borderWidth: 1,
      },
    ],
  }

  const options = {
    maintainAspectRatio: false,
  }
  return <Bar data={graphData} width={200} height={400} options={options} />
})

BarChart.displayName = 'BarChart'

import { NextPage } from 'next'
import { useQueryTasks } from '../hooks/useQueryTasks'
import { Typography } from '../components/ui-elements/typography/Typography'
import { Card } from '../components/ui-parts/Card'
import { Layout } from '../components/ui-parts/layout/Layout'
import { WebVitalsWithChart } from '../components/ui-parts/WebVitalsWithChart'
import { TaskFormWithModal } from '../components/ui-parts/TaskFormWithModal'

const Home: NextPage = () => {
  const { data: tasks } = useQueryTasks()

  return (
    <Layout title="SSG + CSF">
      <Typography variant="h1" classes={['block', 'py-16', 'text-pink-400']}>
        SSG + React Query
      </Typography>
      <WebVitalsWithChart />
      <TaskFormWithModal />
      <div className="container mt-12 flex flex-wrap">
        {tasks?.map((task) => (
          <Card
            key={task.id}
            id={task.id}
            title={task.title}
            content={task.content}
          />
        ))}
      </div>
    </Layout>
  )
}

export default Home

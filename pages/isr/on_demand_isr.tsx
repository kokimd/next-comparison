import { GetStaticProps, NextPage } from 'next'
import { Typography } from '../../components/ui-elements/typography/Typography'
import { Card } from '../../components/ui-parts/revalidation/Card'
import { Layout } from '../../components/ui-parts/layout/Layout'
import { TaskFormWithModal } from '../../components/ui-parts/revalidation/TaskFormWithModal'
import { WebVitalsWithChart } from '../../components/ui-parts/WebVitalsWithChart'
import { useQueryTasks } from '../../hooks/useQueryTasks'
import { getTasks } from '../../libs/fetcher'
import { Task } from '../../utils/types'

export const getStaticProps: GetStaticProps = async () => {
  const { data: initialTasks } = await getTasks()

  return {
    props: {
      initialTasks,
    },
  }
}

type StaticProps = {
  initialTasks: Task[]
}

const OnDemandISR: NextPage<StaticProps> = ({ initialTasks }) => {
  const { data: tasks } = useQueryTasks(initialTasks)

  return (
    <Layout title="On Demand ISR + CSF">
      <Typography variant="h1" classes={['block', 'py-16', 'text-pink-400']}>
        On Demand ISR + React Query
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

export default OnDemandISR

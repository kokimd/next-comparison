import { GetStaticProps, NextPage } from 'next'
import { Typography } from '../../components/ui-elements/typography/Typography'
import { Card } from '../../components/ui-parts/Card'
import { Layout } from '../../components/ui-parts/layout/Layout'
import { TaskFormWithModal } from '../../components/ui-parts/TaskFormWithModal'
import { WebVitalsWithChart } from '../../components/ui-parts/WebVitalsWithChart'
import { getTasks } from '../../libs/fetcher'
import { Task } from '../../utils/types'

export const getStaticProps: GetStaticProps = async () => {
  const { data: tasks } = await getTasks()

  return {
    props: {
      tasks,
    },
    revalidate: 5,
  }
}

type StaticProps = {
  tasks: Task[]
}

const Isr: NextPage<StaticProps> = ({ tasks }) => {
  return (
    <Layout title="SSG + ISR">
      <Typography variant="h1" classes={['block', 'py-16', 'text-pink-400']}>
        ISR
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

export default Isr

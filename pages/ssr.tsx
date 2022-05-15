import { GetServerSideProps, NextPage } from 'next'
import { Typography } from '../components/ui-elements/typography/Typography'
import { Card } from '../components/ui-parts/Card'
import { Layout } from '../components/ui-parts/layout/Layout'
import { TaskFormWithModal } from '../components/ui-parts/TaskFormWithModal'
import { WebVitalsWithChart } from '../components/ui-parts/WebVitalsWithChart'
import { getTasks } from '../libs/fetcher'
import { Task } from '../utils/types'

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: tasks } = await getTasks()
  console.log('getServerSideProps in SSR Page')
  return {
    props: { tasks },
  }
}

type StaticProps = {
  tasks: Task[]
}

const Ssg: NextPage<StaticProps> = ({ tasks }) => {
  return (
    <Layout title="SSR">
      <Typography variant="h1" classes={['block', 'py-16', 'text-blue-600']}>
        SSR
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

export default Ssg

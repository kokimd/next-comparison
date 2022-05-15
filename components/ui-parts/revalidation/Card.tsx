import Image from 'next/image'
import { FC, memo } from 'react'
import { useMutationTask } from '../../../hooks/useMutationTask'
import { Button } from '../../ui-elements/button/Button'
import { Typography } from '../../ui-elements/typography/Typography'

type Props = {
  id: number
  title: string
  content: string
}
export const Card: FC<Props> = memo(({ id, title, content }) => {
  const { deleteMutationTaskWithRevalidation } = useMutationTask()

  return (
    <div className="p-4 md:w-1/3">
      <div className="relative h-full overflow-hidden rounded-lg border-2 border-gray-200 shadow-md">
        <div className="relative h-80 ">
          <Image src="/assets/dog.jpg" layout="fill" alt="blog" />
        </div>
        <div className="p-6 pb-12">
          <Typography variant="h4">{title}</Typography>
          <Typography classes={['block mt-4']}>{content}</Typography>
          <Button
            color={'danger'}
            classes={['float-right']}
            onClick={() => deleteMutationTaskWithRevalidation.mutate(id)}
          >
            削除
          </Button>
        </div>
      </div>
    </div>
  )
})

Card.displayName = 'Card'

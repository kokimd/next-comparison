import { ChangeEvent, FC } from 'react'
import { useMutationTask } from '../../hooks/useMutationTask'
import { CreateTask } from '../../utils/types'
import { Button } from '../ui-elements/button/Button'
import { Input } from '../ui-elements/Input'

type Props = {
  newTask: CreateTask
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  reset: () => void
  setIsOpen: any
}

export const TaskForm: FC<Props> = ({
  newTask,
  onChange,
  reset,
  setIsOpen,
}) => {
  const { createMutationTask } = useMutationTask()

  const handleOnSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    createMutationTask.mutate(newTask)
    reset()
    setIsOpen(false)
  }
  return (
    <form
      onSubmit={handleOnSubmit}
      className="mx-auto flex w-full flex-col gap-12 p-12 pb-4 text-center"
    >
      <div>
        <Input
          value={newTask.title}
          name={'title'}
          placeholder={'Title'}
          onChange={onChange}
        />
      </div>
      <div>
        <Input
          value={newTask.content}
          name={'content'}
          placeholder={'Content'}
          onChange={onChange}
        />
      </div>
      <div>
        <Button color={'secondary'} size={'small'}>
          追加する
        </Button>
      </div>
    </form>
  )
}

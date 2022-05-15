import { FC, memo, useState } from 'react'
import { CreateTask } from '../../../utils/types'
import { Button } from '../../ui-elements/button/Button'
import { Modal } from '../../ui-elements/Modal'
import { TaskForm } from './TaskForm'

export const TaskFormWithModal: FC = memo(() => {
  const [isOpen, setIsOpen] = useState(false)
  const [newTask, setNewTask] = useState<CreateTask>({
    title: '',
    content: '',
  })

  const resetTaskData = () => {
    setNewTask({ title: '', content: '' })
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value })
  }
  return (
    <>
      <Button
        color={'primary'}
        size={'medium'}
        classes={['mt-12']}
        onClick={() => setIsOpen(true)}
      >
        データを追加する
      </Button>
      <Modal modalIsOpen={isOpen} closeModal={() => setIsOpen(false)}>
        <TaskForm
          newTask={newTask}
          onChange={handleOnChange}
          reset={resetTaskData}
          setIsOpen={setIsOpen}
        />
      </Modal>
    </>
  )
})

TaskFormWithModal.displayName = 'TaskFormWithModal'

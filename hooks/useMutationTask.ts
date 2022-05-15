import { useMutation, useQueryClient } from 'react-query'
import { supabase } from '../libs/supabase'
import { revalidationTask } from '../utils/revalidation'
import { CreateTask, Task } from '../utils/types'

export const useMutationTask = () => {
  const queryClient = useQueryClient()
  const getPreviousTask = () => {
    return queryClient.getQueryData<Task[]>('tasks')
  }

  const createMutationTask = useMutation(
    async (task: CreateTask) => {
      const { data, error } = await supabase.from('tasks').insert(task)
      if (error) throw new Error(error.message)
      return data
    },
    {
      onSuccess: (res) => {
        const previousTask = getPreviousTask()
        if (previousTask)
          queryClient.setQueryData('tasks', [...previousTask, res[0]])
      },
      onError: (err) => {
        alert(err)
      },
    }
  )

  const createMutationTaskWithRevalidation = useMutation(
    async (task: CreateTask) => {
      const { data, error } = await supabase.from('tasks').insert(task)
      if (error) throw new Error(error.message)
      return data
    },
    {
      onSuccess: (res) => {
        revalidationTask()
        const previousTask = getPreviousTask()
        if (previousTask)
          queryClient.setQueryData('tasks', [...previousTask, res[0]])
      },
      onError: (err) => {
        alert(err)
      },
    }
  )

  const deleteMutationTask = useMutation(
    async (id: number) => {
      const { data, error } = await supabase.from('tasks').delete().eq('id', id)
      if (error) throw new Error(error.message)
      return data
    },
    {
      onSuccess: (_, variable) => {
        const previousTask = getPreviousTask()
        if (previousTask)
          queryClient.setQueryData(
            'tasks',
            previousTask.filter((task) => task.id !== variable)
          )
      },
      onError: (err) => {
        alert(err)
      },
    }
  )

  const deleteMutationTaskWithRevalidation = useMutation(
    async (id: number) => {
      const { data, error } = await supabase.from('tasks').delete().eq('id', id)
      if (error) throw new Error(error.message)
      return data
    },
    {
      onSuccess: (_, variable) => {
        revalidationTask()
        const previousTask = getPreviousTask()
        if (previousTask)
          queryClient.setQueryData(
            'tasks',
            previousTask.filter((task) => task.id !== variable)
          )
      },
      onError: (err) => {
        alert(err)
      },
    }
  )

  return {
    createMutationTask,
    deleteMutationTask,
    createMutationTaskWithRevalidation,
    deleteMutationTaskWithRevalidation,
  }
}

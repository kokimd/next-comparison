import { useQuery } from 'react-query'
import { supabase } from '../libs/supabase'
import { Task } from '../utils/types'

export const useQueryTasks = (initialData?: Task[]) => {
  const getTasks = async () => {
    const { data, error } = await supabase
      .from('tasks')
      .select('*')
      .order('created_at', { ascending: true })

    if (error) throw new Error(error.message)
    return data
  }

  return useQuery<Task[], Error>({
    queryKey: 'tasks',
    queryFn: getTasks,
    initialData: initialData,
  })
}

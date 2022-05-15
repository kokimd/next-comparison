export type Task = {
  id: number
  title: string
  content: string
}

export type CreateTask = Omit<Task, 'id'>

import TodoItem from "@/components/TodoItem"
import { Todo } from "@/components/TodoItem/types"
import { API_URL } from "@/utils/constants"
import { useEffect, useState } from "react"

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    fetch(`${API_URL}`)
      .then((res) => res.json())
      .then((data) => {
        setTodos(data)
      })
  }, [])

  const todoList = todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} />
  ))

  return (
    <div>
      {todoList}
    </div>
  )
}

export default Todos

import TodoItem from "@/components/TodoItem";
import { Todo } from "@/components/TodoItem/types";
import { API_URL } from "@/utils/constants";
import { useEffect, useState } from "react";
import CreateItem from "@/components/TodoItem/NewTodoItem";

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch(`${API_URL}`)
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);

  const handleTodoEdit = (id: string, name: string, status: string) => {
    fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        status: status,
      }),
    })
      .then((response) => response.json())
      .then((updatedTodo) => {
        const updatedTodos = todos.map((todo) =>
          todo.id === updatedTodo.id ? updatedTodo : todo
        );
        setTodos(updatedTodos);
      })
      .catch((error) => {
        console.error("Error updating todo:", error);
      });
  };


  

  const todoList = todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} onEdit={handleTodoEdit} />
  ));

  

  return (
    <div>
      {todoList}
      <CreateItem />
    </div>
  );
};

export default Todos;

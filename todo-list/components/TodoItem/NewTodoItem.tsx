import TodoItem from "@/components/TodoItem";
import { Todo } from "@/components/TodoItem/types";
import { API_URL } from "@/utils/constants";
import { useEffect, useState } from "react";

const CreateItem = () => {
  
  const[name , setName] = useState('')
  const[status, setStatus] = useState('')
  const [addButton, setAddButton] = useState<boolean>(false);

  const handleTodoAdd = () => {
    const newTodo = {
      name: name,
      status: status
    };
  
    fetch(`${API_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  
    setName('');
    setStatus('');
  };

  return (
    <div className="flex items-center gap-2 px-6 py-3 border border-gray-50">
      <button
        className="h-8 w-14 bg-indigo-500 rounded-md text-white"
        onClick={() => setAddButton(!addButton)}
      >
        Add
      </button>
      {addButton && (
        <div>
          <input
            className="h-8 w-44 border border-gray-500 rounded-md"
            placeholder="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="h-8 w-44 border border-gray-500 rounded-md"
            placeholder="status"
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
          <button
            className="h-8 w-20 rounded-md bg-orange-500 px-2 py-1 text-white "
            onClick={handleTodoAdd}
          >
            Save
          </button>
          <button
            className="h-8 w-20 rounded-md bg-orange-500 px-2 py-1 text-white"
            onClick={() => setAddButton(false)}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default CreateItem;

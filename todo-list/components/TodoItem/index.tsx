import { useState, useEffect } from "react";
import { Todo } from "./types";

interface TodoProps {
  todo: Todo;
  onEdit: (id: string, name: string, status: string) => any;
}

const TodoItem = (props: TodoProps) => {
  const {
    todo: { name, status, id },
    onEdit,
  } = props;
  const [edit, setEdit] = useState<boolean>(false);

  const [editName, setEditName] = useState<string>(name);

  const [editStatus, setEditStatus] = useState<string>(status);

  const handleClickSave = () => {
    onEdit(id, editName, editStatus);
    setEdit(false);
  };

  return (
    <div>
      <div className="flex items-center gap-2 px-6 py-3 border border-gray-50">
        <span>{name}</span>
        <span>||</span>
        <span>{status}</span>
        <button
          onClick={() => setEdit(true)}
          className="h-8 w-14 bg-indigo-500 rounded-md text-white"
        >
          Edit
        </button>
      </div>

      {edit && (
        <div className="flex items-center gap-2 px-6 py-3 border border-gray-50">
          <input
            onChange={(e) => setEditName(e.target.value)}
            defaultValue={name}
            type="text"
            className="h-8 w-44 border border-gray-500 rounded-md"
          />
          <input
            onChange={(e) => setEditStatus(e.target.value)}
            defaultValue={status}
            type="text"
            className="h-8 w-44 border border-gray-500 rounded-md"
          />
          <button
            onClick={() => setEdit(false)}
            className="h-8 w-20 rounded-md bg-orange-500 px-2 py-1 text-white"
          >
            Cancel
          </button>
          <button
            onClick={handleClickSave}
            className="h-8 w-20 rounded-md bg-orange-500 px-2 py-1 text-white"
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;




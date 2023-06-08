import React from "react";

const TodoItem = ({ completed, id, title, toggleTodo, deleteTodo }) => {
  return (
    <li className="text-gray-300 font-bold text-lg my-2">
      <div className="flex justify-between items-center bg-[#505c6e79] p-2 rounded-md">
        <label htmlFor={id}>
          <input
            id={id}
            type="checkbox"
            onChange={(e) => toggleTodo(id, e.target.checked)}
            checked={completed}
            className="mr-2 h-5 w-5"
          />
          {title}
        </label>
        <button
          onClick={() => deleteTodo(id)}
          className="border-2 border-red-400 text-red-400 ml-4 py-1 px-4 rounded-md bg-[#b6515152] hover:bg-[#b651519c]"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;

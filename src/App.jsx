import { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });

    setNewItem("");
  };

  return (
    <div className="h-screen w-full max-w-[600px] mx-auto p-4">
      {/* new item form */}
      <form action="" onSubmit={handleSubmit} className="w-full flex flex-col">
        {/* form-row */}
        <div className="flex flex-col text-gray-300">
          <label htmlFor="item" className="text-2xl">
            New Item
          </label>
          <input
            type="text"
            id="item"
            className="p-1 rounded-md border-[1px] border-[#5ebae2] bg-[#016595] font-bold"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        </div>
        <button className="my-2 border-2 border-[#3e84a4] rounded-md py-1 text-[#3e84a4] text-l font-bold bg-[#3e84a42a] hover:bg-[#3e84a467]">
          Add
        </button>
      </form>

      <h1 className="text-gray-300 text-4xl my-2 font-bold">Todo List</h1>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id} className="text-gray-300 font-bold text-lg my-2">
              <label htmlFor="">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  className="mr-2 h-5 w-5"
                />
                {todo.title}
              </label>
              <button className="border-2 border-red-400 text-red-400 ml-4 py-1 px-4 rounded-md bg-[#b6515152] hover:bg-[#b651519c]">
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;

import React, { useState } from "react";

const Form = ({ addTodo }) => {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(newItem);

    setNewItem("");
  };
  return (
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
  );
};

export default Form;

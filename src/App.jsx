function App() {
  return (
    <>
      <div className="h-screen w-full  p-4">
        {/* new item form */}
        <form action="" className="max-w-[600px] w-full mx-auto flex flex-col">
          {/* form-row */}
          <div className="flex flex-col text-gray-300">
            <label htmlFor="item" className="text-2xl">
              New Item
            </label>
            <input
              type="text"
              id="item"
              className="p-1 rounded-md border-[1px] border-[#5ebae2] bg-[#016595] font-bold"
            />
          </div>
          <button className="my-2 border-2 border-[#3e84a4] rounded-md py-1 text-[#3e84a4] text-l font-bold bg-[#3e84a42a] hover:bg-[#3e84a467]">
            Add
          </button>
        </form>
      </div>
    </>
  );
}

export default App;

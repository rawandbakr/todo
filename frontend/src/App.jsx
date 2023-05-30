import Nav from "./components/Nav";
import Todos from "./pages/todos";
function App() {

  return (
    <div>
      <Nav />
      <form
        className=" flex flex-row justify-center items-center pt-4 gap-1 ">
        <textarea
          className="w-3/4 rounded-2xl outline-none pl-2 pt-1 outl"
          rows="4"
          placeholder="write your todo"
        />
        <button className="bg-white text-black p-3 rounded-2xl hover:bg-blue-200 ">
          Add
        </button>
      </form>
      <Todos data={"cvfds"} />
      </div>
  )
};

export default App;

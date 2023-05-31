import { useState } from "react";
import Nav from "./components/Nav"

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  };

  return (
    <div className="">
      <Nav/>

      <div className="flex flex-row justify-center items-center gap-2 pt-4">
        <input
          className=" rounded-2xl w-3/5 h-9 outline-none p-4 "
          type="text"
          name="todo"
          value={todo}
          placeholder="Create a new todo"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button
            className="bg-green-300 rounded-xl p-2 border-solid border-green-100 border-[1px] hover:bg-green-400 active:bg-green-500"
           onClick={addTodo}>
          Add
        </button>
      </div>
      <br/>
      {todos?.length > 0 ? (
        <ul>
          {todos.map((todo, index) => (
            <div key={index} className=" flex flex-row justify-center">
              <div className="flex flex-row p-2 w-4/5 items-center justify-between bg-white m-2 border-2 border-solid border-teal-500 rounded-2xl">
                <div className="m-2">
                  <p>{todo}</p>
                </div>
                <div className="flex flex-col gap-2 md:flex-row items-center">
                  <button
                    onClick={() => {
                      deleteTodo(todo);
                    }}
                    className="bg-red-300 rounded-xl p-2 border-solid border-red-100 border-[1px] hover:bg-red-400 active:bg-red-500">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </ul>
      ) : (
        <div className="flex flex-row-row justify-center items-center pt-4">
          <p className=" text-3xl">No task found</p>
        </div>
      )}
    </div>
  );
};
export default App;

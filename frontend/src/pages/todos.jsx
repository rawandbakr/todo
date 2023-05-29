import { data } from "autoprefixer";
import React, { useState } from "react";

export default function todos(props) {

  const [done, setDone] = useState(false);
  function handelDone() {
    setDone(!done);
  }
  return (
    <div className=" flex flex-row">
      <div className="flex flex-row p-2 w-full justify-between bg-white m-2 border-2 border-solid border-teal-500 rounded-2xl ">
        <div className="m-2">
          <p className={`${done && `line-through`}`}>
            {props.data}
          </p>
        </div>
        <div className="flex flex-col gap-2 md:flex-row">
          <button
            onClick={handelDone}
            className={`${
              done
                ? `bg-orange-300 rounded-xl p-4 border-solid border-orange-100 border-[1px] hover:bg-orange-400 active:bg-orange-500`
                : `bg-green-300 rounded-xl p-4 border-solid border-green-100 border-[1px] hover:bg-green-400 active:bg-green-500`
            }`}>
            {done ? "Undone" : "Done"}
          </button>
          <button className="bg-blue-300 rounded-xl p-4 border-solid border-blue-100 border-[1px] hover:bg-blue-400 active:bg-blue-500">
            Edit
          </button>
          <button className="bg-red-300 rounded-xl p-4 border-solid border-red-100 border-[1px] hover:bg-red-400 active:bg-red-500">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

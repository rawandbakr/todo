import React from "react";

export default function todos() {
  return (
    <div className="flex flex-row items-center justify-center p-2 bg-white m-2 border-2 border-solid border-teal-500 rounded-2xl">
       <div className="m-2 w-5/6 justify-between">
        <p>
          Veniam aute proident fugiat excepteur labore consequat nulla duis non
          exercitation consectetur eiusmod esse veniam. Nisi pariatur Lorem
          occaecat irure ullamco reprehenderit.
          Veniam aute proident fugiat excepteur labore consequat nulla duis non
          exercitation consectetur eiusmod esse veniam. Nisi pariatur Lorem
          occaecat irure ullamco reprehenderit.
          Veniam aute proident fugiat excepteur labore consequat nulla duis non
          exercitation consectetur eiusmod esse veniam. Nisi pariatur Lorem
          occaecat irure ullamco reprehenderit.
        </p>
      </div>
      <div className="flex flex-col gap-2 md:flex-row">
          <button className="bg-green-300 rounded-xl p-4 border-solid border-green-100 border-[1px] hover:bg-green-400 active:bg-green-500">Done</button>
          <button className="bg-blue-300 rounded-xl p-4 border-solid border-blue-100 border-[1px] hover:bg-blue-400 active:bg-blue-500">Edit</button>
          <button className="bg-red-300 rounded-xl p-4 border-solid border-red-100 border-[1px] hover:bg-red-400 active:bg-red-500">Delete</button>
        </div>
    </div>
  );
}

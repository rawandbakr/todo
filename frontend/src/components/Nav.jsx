import {FiSettings,FiPlus ,FiLogOut} from 'react-icons/fi'

export default function nav() {
  return (
    <nav className="bg-white h-24 flex flex-row items-center justify-around p-4 font-semibold ">
      <h1>My todo</h1>
      <ul className="flex flex-row gap-2">
        <li>
          <button 
            className='flex flex-row items-center gap-1 p-2 border-2 border-green-200 rounded-xl
             hover:bg-green-300 active:bg-green-400 
             focus:outline-none focus:ring-green-100'>
            new todo <FiPlus />
          </button>
        </li>
        <li>
          <button
          className='flex flex-row items-center justify-center gap-1 p-2 border-2 border-blue-200 rounded-xl
          hover:bg-blue-300 active:bg-blue-400 
          focus:outline-none focus:ring-blue-100'>
          Setting <FiSettings />
          </button>
        </li>
        <li>
          <button
          className=' flex flex-row items-center justify-center gap-1 p-2 border-2 border-red-200 rounded-xl
          hover:bg-red-300 active:bg-red-400 
          focus:outline-none focus:ring-red-100'>
          LogOut <FiLogOut />
          </button>
        </li>
      </ul>
    </nav>
  );
}

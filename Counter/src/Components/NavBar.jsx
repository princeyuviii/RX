import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav>
      <ul className="flex justify-between bg-black text-white ">
        <h2 className='ml-4 text-2xl px-4 py-2 '>Logo</h2>
        <div className=' flex gap-2 items-center px-4'>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          
        </div>
      </ul>
    </nav>
  );
}


import Link from 'next/link';
import React from 'react';

function Nav() {
  return (
    <nav className='flex justify-center flex-col items-center p-4 bg-gray-600'>
      <h1 className='text-white text-2xl font-bold'>Todo App</h1>
      <Link href='/'>Home</Link>
      <Link href='/add-todo'>New Todo</Link>
    </nav>
  );
}

export default Nav;

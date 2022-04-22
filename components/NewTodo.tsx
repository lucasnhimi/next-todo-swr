import { useState } from 'react';
import useSWR, { mutate } from 'swr';
import axios from '../serivces/httpService';

function NewTodo() {
  const [description, setDescription] = useState('');
  const { data } = useSWR('/api/todo');

  const handleClick = async () => {
    try {
      mutate('/api/todo', [...data, { description: description }], false);
      await axios.post('/api/todo', { description });
      // await fetch('/api/todo', {
      //   method: 'POST',
      //   body: JSON.stringify(description),
      // });
      setDescription('');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className='flex justify-center mt-10'>
        <div className='bg-gray-50 p-8 rounded-lg'>
          <h1 className='text-center mb-4'>Write Todo List</h1>
          <div className='flex space-x-2 p-2 bg-white rounded-md'>
            <input
              value={description}
              onChange={(e) => setDescription(e.currentTarget.value)}
              type='text'
              placeholder='Write here...'
              className='w-full outline-none'
            />
            <button
              className='bg-green-500 px-2 py-1 rounded-md text-white font-semibold'
              onClick={() => handleClick()}
            >
              send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewTodo;

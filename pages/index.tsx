import { GetServerSideProps } from 'next';
import { getAllTodos, Todo } from '../lib/db';
import NewTodo from '../components/NewTodo';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import Nav from '../components/Nav';

// export const getServerSideProps: GetServerSideProps = async () => {
//   const todos = await getAllTodos();
//   return {
//     props: {
//       todos,
//     },
//   };
// };

// interface PostProps {
//   todos: Todo[];
// }

const Home = () => {
  // const [todos, setTodos] = useState<Todo[]>();
  // useEffect(() => {
  //   const loadData = async () => {
  //     const response = await fetch('http://localhost:3000/api/todos');
  //     const data = await response.json();
  //     setTodos(data);
  //   };
  //   loadData();
  // }, []);

  const { data: todos } = useSWR<Todo[]>('/api/todo');

  if (!todos) {
    return <h1>carregando...</h1>;
  }

  return (
    <div className='h-screen bg-gray-500'>
      <Nav />
      <div>
        <NewTodo />
        <div>
          {todos?.map((item, index) => (
            <div key={item.id} className='flex justify-center'>
              <div className=' relative justify-center mt-6'>
                <div className='absolute flex top-0 right-0 p-3 space-x-1'>
                  <span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
                      />
                    </svg>
                  </span>
                  <span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                      />
                    </svg>
                  </span>
                </div>
                <span className='absolute -left-3 -top-3 bg-green-500 flex justify-center items-center rounded-full w-8 h-8 text-gray-50 font-bold'>
                  {index + 1}
                </span>
                <p className='bg-white px-12 py-8 rounded-lg w-80'>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

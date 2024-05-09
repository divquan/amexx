import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
const page = () => {
  return (
    <>
      <div>
        <div className='flex justify-between'>
          <div className='p-2 h-max w-max grid place-content-center bg-muted rounded-full aspect-square cursor-pointer'>
            <FaChevronLeft size={16} />
          </div>
          <Link href={'/login'}>
            <Button variant={'secondary'}>Log In</Button>
          </Link>
        </div>
      </div>
      <div className='pt-12 pl-3'>
        <h2 className='text-lg md:text-xl lg:text-2xl font-bold'>
          Sign up for an account
        </h2>
        <div className='flex flex-col items-stretch justify-between gap-3 '>
          <div>
            <label>First Name</label>
            <input
              type='text'
              className='w-full border border-gray-300 rounded-xl h-10 md:h-12 px-3 focus:outline outline-gray-500'
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type='text'
              className='w-full border border-gray-300 rounded-xl h-10 md:h-12 px-3 focus:outline outline-gray-500'
            />
          </div>
          <div>
            <label>Phone Number</label>
            <input
              type='tel'
              placeholder='+233 0000000'
              className='w-full border border-gray-300 rounded-xl h-10 md:h-12 px-3 focus:outline outline-gray-500'
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type='email'
              placeholder='example@example.com'
              className='w-full border border-gray-300 rounded-xl h-10 md:h-12 px-3 focus:outline outline-gray-500'
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type='text'
              className='w-full border border-gray-300 rounded-xl h-10 md:h-12 px-3 focus:outline outline-gray-500'
            />
          </div>
          <Button className='mt-8'>Log in</Button>
        </div>
      </div>
    </>
  );
};

export default page;

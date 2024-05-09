import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
const page = () => {
  return (
    <div className=''>
      <div>
        <div className='flex justify-between'>
          <div className='p-2 h-max w-max grid place-content-center bg-muted rounded-full aspect-square cursor-pointer'>
            <FaChevronLeft size={16} />
          </div>
          <Link href={'/signup'}>
            <Button variant={'secondary'}>Signup</Button>
          </Link>
        </div>
      </div>
      <div className='max-w-xl pt-12 pl-3 '>
        <h2 className='text-lg md:text-xl lg:text-2xl font-bold'>
          Log into your account
        </h2>
        <div className='flex flex-col items-stretch gap-6 mt-8 '>
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
          <Button>Log in</Button>
        </div>
      </div>
    </div>
  );
};

export default page;

import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Form from './_form';
import { account } from '@/lib/appwrite';

const Page = async () => {
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
        <Form />
      </div>
    </>
  );
};

export default Page;

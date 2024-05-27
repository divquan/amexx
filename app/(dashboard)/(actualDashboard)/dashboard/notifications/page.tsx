'use client';
import { Button } from '@/components/ui/button';
import React from 'react';

const page = () => {
  return (
    <div className='w-full max-w-2xl px-3 md:mx-[8%]'>
      <Header name='Notifications' />
      <div className='relative'>
        <input
          className='w-full h-12 border border-[#D6D6D6] rounded-[35px] placeholder:text-[#828282] pl-10 '
          placeholder='Search for notification'
        />
        <SearchNormal1
          color='#828282'
          size={18}
          className='absolute left-2 top-1/2 -translate-y-1/2 ml-2 font-bold'
        />
      </div>
    </div>
  );
};

export default page;

import { useRouter } from 'next/navigation';
import { ArrowLeft2, SearchNormal1 } from 'iconsax-react';
const Header: React.FC<{ name: string }> = ({ name }) => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div className='flex gap-3 items-center '>
      <Button
        variant={'ghost'}
        className=' rounded-full h-12 w-12 p-0'
        onClick={handleBack}>
        <ArrowLeft2 variant='Linear' size={22} />
      </Button>
      <div>
        <span className='text-xl font-bold'>{name}</span>
      </div>
    </div>
  );
};

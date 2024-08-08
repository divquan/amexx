import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import consult1 from '@/public/images/consult1.png';
import consult2 from '@/public/images/consult2.png';
import { BiCaretLeft } from 'react-icons/bi';
import { FaCaretLeft } from 'react-icons/fa6';
import { PiCaretLeft } from 'react-icons/pi';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Teacher } from 'iconsax-react';
import Link from 'next/link';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=' h-screen flex w-screen gap-4 p-4 items-center flex-col md:flex-row'>
      <div className=' flex-1 rounded-md w-full h-full border border-gray-300 p-10 pr-4 flex flex-col justify-between'>
        <div className='flex flex-col gap-3'>
          <div>
            <Button className='aspect-square rounded-md'></Button>
          </div>
          <div>
            <h1 className='text-3xl'>
              Get Started With <span className='text-secondary'>American </span>
              Express Travel Consult
            </h1>
            <p className='text-muted-foreground'>
              Answers a few questions and let’s get your started right away
            </p>
          </div>
        </div>
        <div className='relative hidden md:block'>
          <Image
            src={consult1.src}
            height={consult1.height}
            width={consult1.width}
            alt='consult image '
            className='w-[65%]'
            priority
          />
          <Image
            src={consult2.src}
            height={consult2.height}
            width={consult2.width}
            alt=''
            priority
            className='absolute right-7 top-3 w-[35%]'
          />
        </div>
      </div>
      <div className=' flex-1 rounded-md w-full h-full flex flex-col gap-3 p-2 md:p-8 '>
        {children}
      </div>
    </div>
  );
};

export default layout;

import { Button } from '@/components/ui/button';
import { ArrowDown2, Notification, Sms } from 'iconsax-react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className='flex items-center justify-center p-3 md:p-4 '>
      <div className='max-w-6xl flex justify-between w-full items-center'>
        <div>Logo</div>
        <div className=' flex gap-1'>
          <Button variant={'ghost'} className=' rounded-full h-12 w-12 p-0'>
            <Sms size={22} />
          </Button>
          <Link href='/dashbaord/notifications'>
            <Button variant={'ghost'} className=' rounded-full h-12 w-12 p-0'>
              <Notification size={22} />
            </Button>
          </Link>
          <div className='flex gap-2 rounded-lg p-1'>
            <div className='h-11 w-11 bg-gray-300 rounded-full'></div>
            <div className='flex flex-col'>
              <span>John Doe</span>
              <div className='flex items-center gap-1'>
                <div className='h-2 w-2 rounded-full bg-green-500'></div>
                <span>Active</span>
              </div>
            </div>
            <Button variant={'ghost'} className=' rounded-full h-12 w-12 p-0'>
              <ArrowDown2 size={22} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

'use client';
import { Button } from '@/components/ui/button';
import { account } from '@/lib/appwrite';
import { AppwriteException } from 'appwrite';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();

  const router = useRouter();

  useEffect(() => {
    const fetch = async () => {
      try {
        console.log('fetching....');
        const result = await account.get();
        console.log('lll', result);
      } catch (e: any) {
        if (e.type === 'general_unauthorized_scope') {
          console.error('Error getting user session: ', e.type);
          toast.error(
            'You are not authorized to view this page. Please login first'
          );
          router.push('/login?redirect=/dashboard&error=unauthorized');
        }
        toast.error('Something went wrong. Plese log in again. ', {
          action: (
            <Link href={'/login'}>
              <Button>Login</Button>
            </Link>
          ),
        });
      }
    };
    fetch();
  }, []);
  return (
    <div className='flex items-center justify-center h-screen w-screen'>
      <div className='border-2 border-black h-64 w-72  relative'>
        <div className='h-10 w-10 rounded-full border border-black absolute top-0 left-1/2 -translate-x-1/2'></div>
        <div className='h-10 w-10 rounded-full border border-black absolute bottom-0 right-0 '></div>
        <div className='h-10 w-10 rounded-full border border-black absolute bottom-0 left-0 '></div>
        <div className='h-5 w-64 border border-black rotate-45 translate-x-11'></div>
        <div className='h-5 w-64 border border-black rotate-180 translate-y-54'></div>
        <div className='h-5 w-64 border border-black rotate-45 translate-x-11'></div>
      </div>
    </div>
  );
};

export default Page;

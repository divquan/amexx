'use client';
import React, { useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { account } from '@/lib/appwrite';
import { ID } from 'appwrite';
import { Loader2 } from 'lucide-react';
import { validateKeys } from '@/lib/utils';

const Page = () => {
  const [userInput, setUserInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const invaildKeys = validateKeys(userInput);
    if (invaildKeys.length <= 0) {
      console.log('These fields are required: ', invaildKeys);
      return;
    }
    try {
      const res = await account.create(
        ID.unique(2),
        userInput.email,
        userInput.password
      );
      console.log(res, userInput.password);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

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
      <form className='pt-12 pl-3 ' onSubmit={handleSumbit}>
        <h2 className='text-lg md:text-xl lg:text-2xl font-bold'>
          Sign up for an account
        </h2>
        <div className='flex flex-col items-stretch justify-between gap-3 '>
          <div>
            <label>First Name</label>
            <input
              value={userInput.firstName}
              id='firstName'
              onChange={onChange}
              type='text'
              className='w-full border border-gray-300 rounded-xl h-10 md:h-12 px-3 focus:outline outline-gray-500'
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              onChange={onChange}
              type='text'
              id='lastName'
              className='w-full border border-gray-300 rounded-xl h-10 md:h-12 px-3 focus:outline outline-gray-500'
            />
          </div>
          <div>
            <label>Phone Number</label>
            <input
              type='tel'
              onChange={onChange}
              id='phoneNumber'
              placeholder='+233 0000000'
              className='w-full border border-gray-300 rounded-xl h-10 md:h-12 px-3 focus:outline outline-gray-500'
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type='email'
              onChange={onChange}
              id='email'
              placeholder='example@example.com'
              className='w-full border border-gray-300 rounded-xl h-10 md:h-12 px-3 focus:outline outline-gray-500'
            />
          </div>

          <div>
            <label>Password</label>
            <input
              onChange={onChange}
              id='password'
              type='text'
              className='w-full border border-gray-300 rounded-xl h-10 md:h-12 px-3 focus:outline outline-gray-500'
            />
          </div>
          <Button className='mt-8' disabled={loading}>
            <span>Log in</span>
            {loading && <Loader2 className='animate-spin ' />}
          </Button>
        </div>
      </form>
    </>
  );
};

export default Page;

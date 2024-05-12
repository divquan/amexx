'use client';

import { account } from '@/lib/appwrite';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

import React, { useEffect } from 'react';
import { toast } from 'sonner';

const Page = () => {
  const [state, setState] = React.useState({ loading: true, verified: false });
  const [error, setError] = React.useState('');
  const router = useRouter();
  const urlParams = new URLSearchParams(window.location.search);
  const secret = urlParams.get('secret') || '';
  const userId = urlParams.get('userId') || '';

  useEffect(() => {
    const promise = account.updateVerification(userId, secret);

    promise.then(
      function (response) {
        console.log(response);
        setState({ loading: false, verified: true });
        router.push('/dashboard');
      },
      function (error) {
        console.log(error);
        setState({ loading: false, verified: false });
        toast.error("Couldn't verify", { style: { backgroundColor: 'red' } });
        setError("Couldn't verify email");
      }
    );
  }, []);
  return (
    <div className='text-center'>
      {state.loading && (
        <div className='flex items-center justify-center'>
          <svg
            className='animate-spin h-5 w-5 mr-3'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'>
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='4'></circle>
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 0112 4.536v3.382l4.646 4.646-1.415 1.415L12 9.768l-3.231 3.231-1.415-1.415L9.618 8.918V5.464c-3.182.49-5.648 3.138-5.648 6.327z'></path>
          </svg>
          <span>Verifying your account</span>
        </div>
      )}
      {state.verified && (
        <span className='text-green-500'>Account has been verified</span>
      )}
      {error && error}
    </div>
  );
};

export default Page;

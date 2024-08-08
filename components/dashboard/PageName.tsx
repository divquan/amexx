'use client';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { ArrowLeft2 } from 'iconsax-react';

const PageName: React.FC<{ name: string }> = ({ name }) => {
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

export default PageName;

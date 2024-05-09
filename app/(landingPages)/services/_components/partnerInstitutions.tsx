import { partnerImages } from '@/Constants/appData';
import Image from 'next/image';
import React from 'react';

const PartnerInstitutions = () => {
  return (
    <>
      <div className='flex gap-4 overflow-x-hidden h-[90px] '>
        {partnerImages.map((item, index) => {
          return (
            <Image
              src={item.src}
              height={item.height}
              width={item.width}
              alt='dfs'
              key={index}
              className='w-1/2 md:w-1/4 object-contain'
            />
          );
        })}
      </div>
    </>
  );
};

export default PartnerInstitutions;

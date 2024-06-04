'use client';
import PageName from '@/components/dashboard/PageName';
import React, { useState } from 'react';
import { formData } from '../formData';
import { Button } from '@/components/ui/button';
import Input from '@/components/dashboard/input';

type detailType = {
  industries: string;
  pastJobsAndCompanies: string;
  anythingElse: string;
};
const Page = () => {
  const [details, setDetails] = useState<detailType>({
    industries: '',
    pastJobsAndCompanies: '',
    anythingElse: '',
  });

  const handleChange = (name: keyof detailType, value: string) => {
    const val = value || '';
    setDetails((prevDetails) => ({ ...prevDetails, [name]: val }));
  };
  return (
    <div className='w-full flex px-3 md:px-[8%] flex-col gap-5'>
      <PageName name='Request New Service' />
      <div className='flex flex-col md:flex-row justify-between '>
        <div className='max-w-[516px] w-full flex flex-col gap-12'>
          <div className='flex flex-col gap-6'>
            <h1>Now, tell us about your past work experience</h1>
            <div>
              <label className='text-gray-700'>Industries</label>
              <Input
                placeholder='Industries'
                value={details.industries}
                onChange={(e) => handleChange('industries', e.target.value)}
              />
            </div>
            <div>
              <label className='text-gray-700'>
                Past Job Titles & Companies
              </label>
              <Input
                placeholder='Past Job Titles & Companies'
                value={details.pastJobsAndCompanies}
                onChange={(e) =>
                  handleChange('pastJobsAndCompanies', e.target.value)
                }
              />
            </div>
            <div>
              <label className='text-gray-700'>
                Anything else about your work?
              </label>
              <Input
                placeholder='Anything about your work?'
                value={details.anythingElse}
                onChange={(e) => handleChange('anythingElse', e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className='max-w-sm border shadow-lg p-3 border-gray-300 rounded-[16px] flex flex-col h-fit gap-3'>
          <p>Click to proceed once you are done fillling the necessary forms</p>
          <div className='flex flex-col'>
            <Button>Proceed</Button>
            <Button variant='outline'>Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

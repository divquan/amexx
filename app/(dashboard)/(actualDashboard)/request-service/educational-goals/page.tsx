'use client';
import PageName from '@/components/dashboard/PageName';
import React, { useState } from 'react';
import { formData } from '../formData';
import { Button } from '@/components/ui/button';
import Input from '@/components/dashboard/input';

type detailType = {
  degreeType: string;
  areaOfStudy: string;
  university: string;
  gpa: string;
  certification: string;
};
const Page = () => {
  const [details, setDetails] = useState<detailType>({
    degreeType: '',
    areaOfStudy: '',
    university: '',
    gpa: '',
    certification: '',
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
            <h1>Tell us more about your current educational goals</h1>
            <div>
              <label className='text-gray-700'>Degree Type</label>
              <Input
                placeholder='Degree Type'
                value={details.degreeType}
                onChange={(e) => handleChange('degreeType', e.target.value)}
              />
            </div>
            <div>
              <label className='text-gray-700'>Area of Study </label>
              <Input
                placeholder='Area of Study'
                value={details.areaOfStudy}
                onChange={(e) => handleChange('areaOfStudy', e.target.value)}
              />
            </div>
            <div>
              <label className='text-gray-700'>University </label>
              <Input
                placeholder='University'
                value={details.university}
                onChange={(e) => handleChange('university', e.target.value)}
              />
            </div>
            <div>
              <label className='text-gray-700'>GPA or Academic Standing </label>
              <Input
                placeholder='GPA or Academic Standing'
                value={details.gpa}
                onChange={(e) => handleChange('gpa', e.target.value)}
              />
            </div>{' '}
            <div>
              <label className='text-gray-700'>
                Certifications & Other Degrees{' '}
              </label>
              <Input
                placeholder='Certifications & Other Degrees'
                value={details.certification}
                onChange={(e) => handleChange('certification', e.target.value)}
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

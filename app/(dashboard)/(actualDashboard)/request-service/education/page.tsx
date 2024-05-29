'use client';
import PageName from '@/components/dashboard/PageName';
import React, { useState } from 'react';
import { formData } from '../formData';
import { Button } from '@/components/ui/button';

type detailType = {
  areaOfStudy: string;
  desiredSchoolAndProgram: string;
  anythingElse: string;
};
const Page = () => {
  const [details, setDetails] = useState<detailType>({
    areaOfStudy: '',
    desiredSchoolAndProgram: '',
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
          <div>
            <h1>Tell us more about your current educational goals</h1>
            <div>
              <label>Area of Study</label>
              <Input
                placeholder='Area of Study'
                value={details.areaOfStudy}
                onChange={(e) => handleChange('areaOfStudy', e.target.value)}
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

const Input = ({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
}) => {
  return (
    <input
      value={value}
      onChange={onChange}
      className='w-full h-12 border border-[#D6D6D6] rounded-[35px] placeholder:text-[#828282] pl-10 '
      placeholder={placeholder || ''}
    />
  );
};

import React from 'react';

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
export default Input;

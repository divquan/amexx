import MessageSidebar from '@/components/dashboard/MessageSidebar';
import React from 'react';

const page = () => {
  return (
    <div className='flex overflow-hidden gap-4 message-area-height'>
      <MessageSidebar />
      <div className='bg-blue-100 flex-1'></div>
    </div>
  );
};

export default page;

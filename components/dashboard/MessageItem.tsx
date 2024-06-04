import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const MessageItem = (item: {}) => {
  const user = { name: 'Di Qu', url: '' };
  return (
    <div className='flex gap-4 cursor-pointer hover:bg-gray-100 p-2'>
      <Avatar className=''>
        {user?.url && <AvatarImage src='https://github.com/shadcn.png' />}{' '}
        <AvatarFallback className=''>
          {user?.name.split(' ')[0].charAt(0) +
            ' ' +
            user?.name.split(' ')[1].charAt(1)}
        </AvatarFallback>
      </Avatar>
      <div>
        <span>Jennifer Markus</span>
        <p className='text-[12px] text-gray-600'>
          Hey! Did you finish the Hi-FI wireframes for flora app design?
        </p>
        <span className='text-[11px] text-gray-500'>Today | 03:00pm</span>
      </div>
    </div>
  );
};

export default MessageItem;

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


const MessageAreaHeader = () => {
    const user = {
        url: "", name: "Gith Hkld"
    }
    return <div>
        <div className='flex items-center  gap-2 border-b border-gray-200 p-3'>

            <Avatar className=''>
                {<AvatarImage src='https://github.com/shadcn.png' />}{' '}
                <AvatarFallback className='bg-green-200'>
                    {user.name.split(' ')[0].charAt(0) +
                        ' ' +
                        user.name.split(' ')[1].charAt(1)}
                </AvatarFallback>
            </Avatar>
            <span>
                {user.name}
            </span>
        </div>
    </div>
}

export default MessageAreaHeader;
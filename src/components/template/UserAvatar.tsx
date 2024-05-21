import Link from 'next/link';
import { useAuth } from '@/data/hook/useAuth';

export const UserAvatar = () => {
  const { user } = useAuth();

  console.log({ image: user?.imageUrl });

  return (
    <Link href={'/profile'}>
      <img
        fetchPriority={'auto'}
        src={user?.imageUrl !== '' ? user?.imageUrl : '/images/avatar.svg'}
        alt={'Avatar do usuario'}
        className={`h-10 w-10 rounded-full cursor-pointer ml-3`}
      />
    </Link>
  );
};

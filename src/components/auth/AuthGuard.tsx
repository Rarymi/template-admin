import Image from 'next/image';
import { useAuth } from '@/data/hook/useAuth';
import { useRouter } from 'next/router';

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const route = useRouter();
  const { isLoading, user } = useAuth();
  const renderContent = () => {
    return <>{children}</>;
  };

  const renderIsLoading = () => {
    return (
      <div className={`flex items-center justify-center h-screen`}>
        <Image
          fetchPriority={'auto'}
          src={'/loading.gif'}
          alt={'loading'}
          height={200}
          width={200}
        />
      </div>
    );
  };

  if (!isLoading && user?.email) {
    return renderContent();
  } else if (isLoading) {
    return renderIsLoading();
  } else {
    route.push('/authentication');
    return null;
  }
};

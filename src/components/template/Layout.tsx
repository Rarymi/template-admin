import { Sidebar } from '@/components/template/Sidebar';
import { Topbar } from '@/components/template/Topbar';
import { Content } from '@/components/template/Content';
import { useAppData } from '@/data/hook/useAppData';
import { AuthGuard } from '@/components/auth/AuthGuard';

interface ILayout {
  title: string;
  subtitle: string;
  children?: any;
}

export const Layout = ({ title, subtitle, children }: ILayout) => {
  const { theme } = useAppData();

  return (
    <AuthGuard>
      <div className={`${theme} flex h-screen w-screen`}>
        <Sidebar />
        <div
          className={`flex flex-col w-full p-7  bg-gray-300 dark:bg-gray-800`}
        >
          <Topbar title={title} subtitle={subtitle} />
          <Content>{children}</Content>
        </div>
      </div>
    </AuthGuard>
  );
};

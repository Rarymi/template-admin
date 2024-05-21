import { Title } from '@/components/template/Title';
import { ButtonHandleTheme } from '@/components/template/ButtonHandleTheme';
import { UserAvatar } from '@/components/template/UserAvatar';
import { ChangeLanguage } from '@/components/template/ChangeLanguage';

interface ITopbar {
  title: string;
  subtitle: string;
}

export const Topbar = ({ title, subtitle }: ITopbar) => {
  return (
    <div className={`flex`}>
      <Title title={title} subtitle={subtitle} />
      <div className={`flex flex-grow justify-end items-center`}>
        <ChangeLanguage />
        <ButtonHandleTheme />
        <UserAvatar />
      </div>
    </div>
  );
};

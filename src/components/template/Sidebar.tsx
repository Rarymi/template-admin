import { MenuItem } from '@/components/template/MenuItem';
import { HomeIcon } from '@/components/icons/HomeIcon';
import { SettingsIcon } from '@/components/icons/SettingsIcon';
import { Logo } from '@/components/template/Logo';
import { LogoutIcon } from '@/components/icons/LogoutIcon';
import { NotificationIcon } from '@/components/icons/NotificationIcon';
import { useAuth } from '@/data/hook/useAuth';
import { useTranslation } from 'react-i18next';

export const Sidebar = () => {
  const { t } = useTranslation();
  const { logout } = useAuth();

  return (
    <aside
      className={`flex flex-col 
    bg-gray-200 text-gray-700
    dark:bg-gray-900 dark:text-gray-200
    `}
    >
      <div
        className={` flex flex-col  items-center justify-center 
        bg-gradient-to-r from-indigo-500 to-purple-800  h-20 w-24`}
      >
        <Logo />
      </div>
      <ul className={`flex-grow`}>
        <MenuItem url={'/'} text={t('app.sidebar.home')} icon={HomeIcon} />
        <MenuItem
          url={'/notifications'}
          text={t('app.sidebar.notification')}
          icon={NotificationIcon}
        />
        <MenuItem
          url={'/settings'}
          text={t('app.sidebar.settings')}
          icon={SettingsIcon}
        />
      </ul>
      <ul className={``}>
        <MenuItem
          text={t('app.sidebar.logout')}
          icon={LogoutIcon}
          handleLogout={logout}
          className={`text-red-600 hover:bg-red-500 hover:text-white
          dark:hover:bg-red-500 dark:hover:text-white
          `}
        />
      </ul>
    </aside>
  );
};

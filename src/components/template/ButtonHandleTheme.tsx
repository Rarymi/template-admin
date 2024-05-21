import { useAppData } from '@/data/hook/useAppData';
import { LightModeIcon } from '@/components/icons/LightModeIcon';
import { DarkModeIcon } from '@/components/icons/DarkModeIcon';
import { useTranslation } from 'react-i18next';

export const ButtonHandleTheme = () => {
  const { t } = useTranslation();
  const { handleTheme, theme } = useAppData();

  return (
    <>
      {theme === 'dark' ? (
        <div
          onClick={handleTheme}
          className={` hidden sm:flex items-center cursor-pointer
          bg-gradient-to-r from-yellow-300 to-yellow-600 
          w-14 lg:w-20 h-8 p-1 rounded-full
          `}
        >
          <div className={`bg-white text-yellow-600 rounded-full w-4 h-4`}>
            {LightModeIcon}
          </div>
          <div
            className={`
                hidden lg:flex items-center ml-2
                text-white
            `}
          >
            <span className="text-xs">{t('app.theme.light')}</span>
          </div>
        </div>
      ) : (
        <div
          onClick={handleTheme}
          className={`hidden sm:flex items-center justify-end
          cursor-pointer
          bg-gradient-to-r from-indigo-800 to-purple-950
          w-14 lg:w-20 h-8 p-1 rounded-full
          `}
        >
          <div
            className={`
                hidden lg:flex items-center mr-2
                text-gray-300
            `}
          >
            <span className="text-xs">{t('app.theme.dark')}</span>
          </div>
          <div className={`bg-white text-indigo-950 rounded-full w-4 h-4`}>
            {DarkModeIcon}
          </div>
        </div>
      )}
    </>
  );
};

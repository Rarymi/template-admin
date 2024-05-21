import { Inter } from 'next/font/google';
import { Layout } from '@/components/template/Layout';
import { useAppData } from '@/data/hook/useAppData';
import { useTranslation } from 'react-i18next';

const inter = Inter({ subsets: ['latin'] });

export default function Notifications() {
  const { t } = useTranslation();
  const { theme, handleTheme } = useAppData();

  return (
    <Layout
      title={t('app.title.notification')}
      subtitle={t('app.subtitle.notification')}
    >
      {theme}
    </Layout>
  );
}

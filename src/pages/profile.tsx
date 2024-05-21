import { Inter } from 'next/font/google';
import { Layout } from '@/components/template/Layout';
import { useAppData } from '@/data/hook/useAppData';
import { useTranslation } from 'react-i18next';

const inter = Inter({ subsets: ['latin'] });

export default function Profile() {
  const { theme } = useAppData();
  const { t } = useTranslation();
  return (
    <Layout title={t('app.title.profile')} subtitle={t('app.subtitle.profile')}>
      <h1>{t('app.content.profile')}</h1>
      {theme}
    </Layout>
  );
}

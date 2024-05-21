import { Inter } from 'next/font/google';
import { Layout } from '@/components/template/Layout';
import { useTranslation } from 'react-i18next';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { t } = useTranslation();

  return (
    <Layout title={t('app.title.home')} subtitle={t('app.subtitle.home')}>
      <h1>{t('app.content.home')}</h1>
    </Layout>
  );
}

import { Inter } from 'next/font/google';
import { Layout } from '@/components/template/Layout';
import { useTranslation } from 'react-i18next';

const inter = Inter({ subsets: ['latin'] });

export default function Settings() {
  const { t } = useTranslation();

  return (
    <Layout
      title={t('app.title.settings')}
      subtitle={t('app.subtitle.settings')}
    >
      <h1>{t('app.content.settings')}</h1>
    </Layout>
  );
}

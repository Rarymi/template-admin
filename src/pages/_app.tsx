import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { AppProvider } from '@/data/context/AppContext';
import { AuthProvider } from '@/data/context/AuthContext';
import '../i18n/i18n';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </AuthProvider>
  );
}

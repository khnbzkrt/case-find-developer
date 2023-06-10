'use client';
import '@/styles/reset.css';
import '@/styles/globals.css';

import { Provider } from 'react-redux';
import { appStore } from '@/redux/store';
import { nunito } from '../../../public/fonts';

export const metadata = {
  title: 'Find Developer',
  description: 'Find your developer',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function SocialMediaLayout({ children }) {
  return (
    <html lang="en" className={nunito.className}>
      <body>
        <Provider store={appStore}>{children}</Provider>
      </body>
    </html>
  );
}

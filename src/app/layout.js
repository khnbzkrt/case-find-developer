'use client';
import '@/styles/reset.css';
import '@/styles/fonts.css';
import '@/styles/globals.css';

export const metadata = {
  title: 'Find Developer',
  description: 'Find your developer',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

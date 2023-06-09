import localFont from 'next/font/local';

export const myFont = localFont({
  src: [
    {
      path: './MarkPro.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './MarkPro-Italic.otf',
      weight: '400',
      style: 'italic',
    },
  ],
});

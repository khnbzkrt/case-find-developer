import localFont from 'next/font/local';

export const myFont = localFont({
  src: [
    {
      path: './MarkPro-Heavy.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './MarkPro-Bold.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './MarkPro-Book.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './MarkPro-Medium.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './MarkPro.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './MarkPro-Light.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './MarkPro-ExtraLight.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './MarkPro-Thin.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './MarkPro-Italic.otf',
      weight: '400',
      style: 'italic',
    },
  ],
});

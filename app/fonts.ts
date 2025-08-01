import localFont from 'next/font/local';

// Define the AvertaStd font family
export const avertaStd = localFont({
  src: [
    {
      path: '../public/fonts/AvertaStd-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/AvertaStd-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/AvertaStd-Semibold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/AvertaStd-Light.ttf',
      weight: '300',
      style: 'normal',
    }
  ],
  variable: '--font-averta',
  display: 'swap'
});

// Define the Lato font family
export const lato = localFont({
  src: [
    {
      path: '../public/fonts/Lato-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/Lato-ThinItalic.ttf',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../public/fonts/Lato-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Lato-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/fonts/Lato-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Lato-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/Lato-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Lato-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../public/fonts/Lato-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../public/fonts/Lato-BlackItalic.ttf',
      weight: '900',
      style: 'italic',
    }
  ],
  variable: '--font-lato',
  display: 'swap'
});

// Define the Times New Roman font family
export const timesNewRoman = localFont({
  src: [
    {
      path: '../public/fonts/Times New Roman.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Times New Roman Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Times New Roman Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/Times New Roman Bold Italic.ttf',
      weight: '700',
      style: 'italic',
    }
  ],
  variable: '--font-times-new-roman',
  display: 'swap'
});

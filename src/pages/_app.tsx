import type { AppProps } from 'next/app';
import { GlobalStyles } from '@/styles/GlobalStyles';

import light from '@/themes/light';

import { ThemeProvider } from 'styled-components';
import { useEffect } from 'react';
// import { AnimatePresence } from 'framer-motion';

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (document) {
      console.log(`body scroll left`);
      // document.body.scrollLeft = 0;
      document.scrollingElement.scrollLeft = 0;
    }
  }, [Component]);

  return (
    <>
      <ThemeProvider theme={light}>
        {/* <AnimatePresence exitBeforeEnter initial={false}> */}
        <Component {...pageProps} />
        {/* </AnimatePresence> */}

        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

import type { AppProps } from 'next/app';
import { GlobalStyles } from '@/styles/GlobalStyles';

import light from '@/themes/light';

import { ThemeProvider } from 'styled-components';
// import { AnimatePresence } from 'framer-motion';

export default function MyApp({ Component, pageProps }: AppProps) {
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

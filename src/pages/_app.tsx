import 'bootstrap/dist/css/bootstrap.min.css';
import '@styles/styles.scss';
import NextPageWithLayout from '@custom-types/NextPageWithLayout';

import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import SSRProvider from 'react-bootstrap/SSRProvider';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  // SSR provider is needed for react bootstrap
  return <SSRProvider>{getLayout(<Component {...pageProps} />)}</SSRProvider>;
}

// TODO this seems like a nasty type error
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default appWithTranslation(MyApp);

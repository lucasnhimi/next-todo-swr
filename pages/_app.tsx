import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import axios from '../serivces/httpService';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{ fetcher: (url: string) => axios(url).then((r) => r.data) }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;

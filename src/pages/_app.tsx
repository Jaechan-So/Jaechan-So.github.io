import type { AppProps } from 'next/app';

import { themeClass } from '@/styles/theme.css';

import '@/styles/global.css';
import 'the-new-css-reset/css/reset.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={themeClass}>
      <Component {...pageProps} />
    </div>
  );
};

export default App;

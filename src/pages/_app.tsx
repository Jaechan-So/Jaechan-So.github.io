import type { AppProps } from 'next/app';

import { DefaultHead } from '@/components/common/DefaultHead';
import { themeClass } from '@/styles/theme.css';

import '@/styles/global.css';
import 'the-new-css-reset/css/reset.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultHead />
      <div className={themeClass}>
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default App;

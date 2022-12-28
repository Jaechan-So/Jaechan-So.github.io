import Head from 'next/head';

import OpenGraphImage from '~/public/jaechan-so-github-io-og-image.png';

const DefaultHead = () => (
  <Head>
    <title>Jaechan-So.github.io</title>
    <meta
      name="description"
      content="Hi! My name is Jaechan So. I'm currently working as a Software Engineer in South Korea."
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:title" content="Jaechan-So.github.io" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://jaechan-so.github.io/" />
    <meta property="og:image" content={OpenGraphImage.src} />
  </Head>
);

export default DefaultHead;

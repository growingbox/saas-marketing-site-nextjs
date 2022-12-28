import React from 'react';
import {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

export default () => {
  return (
    <Html
      className="h-full scroll-smooth antialiased [font-feature-settings:'ss01']"
    >
      <Head>
      </Head>
      <body className="flex h-full flex-col">
        <Main/>
        <NextScript />
      </body>
    </Html>      
  );
};
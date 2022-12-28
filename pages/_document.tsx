import React from 'react';
import {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

import i18nextConfig from '../next-i18next.config'


const kefu = `<script>
  (function (w, d, n, a, j) {
    w[n] = w[n] || function () {
      (w[n].a = w[n].a || []).push(arguments);
    };
    j = d.createElement('script');
    j.async = true;
    j.src ='https://qiyukf.com/script/5aa80179d55f23917824ab28a4ef102d.js';
    d.body.appendChild(j);
  })(window, document, 'ysf');
</script>`;

export default (props) => {
  const currentLocale = props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale

  return (
    <Html
      lang={currentLocale}
      className="h-full scroll-smooth antialiased [font-feature-settings:'ss01']"
    >
      <Head>
      </Head>
      <body className="flex h-full flex-col">
        <Main/>
        <NextScript />
        <div dangerouslySetInnerHTML={{__html: kefu }} />
      </body>
    </Html>
  );
};
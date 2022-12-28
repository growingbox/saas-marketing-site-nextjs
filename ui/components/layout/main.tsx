import clsx from 'clsx';
import React, { useState } from 'react';
import Head from 'next/head';
import { Header } from './header';
import { Footer } from './footer';
import { useTranslation } from 'next-i18next';


export type LayoutProps = React.PropsWithChildren<{
  title?: string;
  hideHeader?: boolean;
  hideFooter?: boolean;
  hideFullBleed?: boolean;
  styles?: {
    container?: string;
  };
}>;


const Layout = ({ 
  hideHeader,
  hideFooter,
  children
}: LayoutProps) => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('title')}</title>
      </Head>
      {!hideHeader && <Header />}
      <main>
        <div className={clsx(
            'min-h-full py-16 md:mx-4',
            // https://www.joshwcomeau.com/css/full-bleed/
            // !hideFullBleed && cssstyles.layoutMain,
            // styles?.container,
          )}>
          {children}
        </div>
      </main>
      {!hideFooter && <Footer />}
    </>
  );
};

export default Layout;

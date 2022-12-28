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
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();
  // const [api, contextHolder] = notification.useNotification();

  return (
    <>
      <Head>
        <title>{t('title')}</title>
      </Head>
      {!hideHeader && <Header collapsed={collapsed} setCollapsed={setCollapsed} />}
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

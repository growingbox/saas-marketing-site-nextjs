import '../styles/main.css'

import React from 'react';
import { UserProvider } from '@authok/nextjs-authok/client';
import { trpcClient } from '../utils/trpc-client';

import { appWithTranslation } from 'next-i18next'
import { ThemeProvider as NextThemesProvider } from 'next-themes';

const App = ({ Component, pageProps }) => {
  // If you've used `withAuth`, pageProps.user can pre-populate the hook
  // if you haven't used `withAuth`, pageProps.user is undefined so the hook
  // fetches the user from the API routes
  const { user } = pageProps;

  return (
    <UserProvider user={user}>
      <NextThemesProvider attribute='class'>
        <Component {...pageProps} />
      </NextThemesProvider>
    </UserProvider>
  );
};

export default appWithTranslation(
  trpcClient.withTRPC(App)
);

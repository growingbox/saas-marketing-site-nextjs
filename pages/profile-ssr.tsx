import React from 'react';
import { withPageAuthRequired } from '@authok/nextjs-authok';
import { UserProfile } from '@authok/nextjs-authok/client';

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Layout from '../ui/components/layout/main';

type ProfileProps = { user: UserProfile };

export default function Profile({ user }: ProfileProps): React.ReactElement {
  const { t } = useTranslation('profile');

  return (
    <Layout>
      <h1>{t('profile')}</h1>
      <h4>{t('profile')}(服务端渲染, SSR)</h4>
      <pre data-testid="profile">{JSON.stringify(user, null, 2)}</pre>
    </Layout>
  );
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps({ locale, locales }) {
    console.log('ctx: ', locale, locales);

    return { 
      props: {
        ...(await serverSideTranslations(locale, [
          'profile'
        ]))
      }
    };
  }
});

import * as React from 'react';
import Layout from '../../../components/layout/main';

import SignInForm from './components/signin-form';

export function SignInPage(): JSX.Element {
  const [allowAnonymous, setAllowAnonymous] = React.useState(false);
  React.useEffect(() => {
    if (new URL(location.href).searchParams.get('allowAnonymous') === 'true') {
      setAllowAnonymous(true);
    }
  }, []);
  return (
    <Layout
      title="登录"
      styles={{
        container: `mx-2 md:mx-0 py-0`,
      }}
      hideFooter
      hideHeader
    >
      <SignInForm
        title="登录"
      />
    </Layout>
  );
}

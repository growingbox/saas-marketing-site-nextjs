import { GetStaticProps } from 'next';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  console.log('locale: ', locale)
  // const buildDate = new Date().toISOString();

  return {
    props: {
      // We need a fixed date to fix SSR hydration mismatch error.
      // buildDate,
      ...(await serverSideTranslations(locale || "zh-CN", [
        'common'
      ])),
    },
    revalidate: process.env.NODE_ENV !== 'production' ? 20 : 1 * 24 * 60 * 60,
  };
};

export { HomePage as default } from '../ui/pages';
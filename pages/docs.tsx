import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async ({
  params,
}) => {
  return {
    props: {
    },
    revalidate: 3600,
  };
};

export { DocsHome as default } from '../ui/pages';
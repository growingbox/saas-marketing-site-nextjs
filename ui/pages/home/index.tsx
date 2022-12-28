import Head from 'next/head'
import React from 'react';

import Layout from '../../components/layout/main';
import { PrimaryFeatures } from './components/PrimaryFeatures';
import { Hero } from './components/Hero';
import { SecondaryFeatures } from './components/SecondaryFeatures';
import { CallToAction } from './components/CallToAction';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Faqs } from './components/Faq';
import { useTranslation } from "next-i18next";

export function HomePage(): JSX.Element {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('title')} />
        <meta name="keywords" content={t('keywords')} />
        <link rel="icon" href={`${process.env.STATIC_URL || ''}/favicon.ico`} />
      </Head>
      <Hero />
      <PrimaryFeatures />
      <SecondaryFeatures />
      <CallToAction />
      <Testimonials />
      <Pricing />
      <Faqs />
    </Layout>
  );
}
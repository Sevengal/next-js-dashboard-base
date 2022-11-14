import PrimaryLayout from '@layouts/primary/PrimaryLayout';
import type NextPageWithLayout from '@custom-types/NextPageWithLayout';

import type { ReactElement } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const HomePage: NextPageWithLayout = () => {
  const { t } = useTranslation(['home']);
  return <p>{t('header.title')}</p>;
};

export async function getStaticProps({ locale }: Record<string, string>) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
      // Will be passed to the page component as props
    },
  };
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default HomePage;

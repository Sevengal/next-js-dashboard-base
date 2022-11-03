import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import PrimaryLayout from '../layouts/primary/PrimaryLayout';

const HomePage: NextPageWithLayout = () => {
  return <p>hello world</p>;
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

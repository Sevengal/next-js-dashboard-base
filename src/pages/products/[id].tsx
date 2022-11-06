import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import PrimaryLayout from '../../layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from '../_app';

const ProductPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { productId } = router.query;

  return <div>Product page for product with id: {productId}</div>;
};

export default ProductPage;

ProductPage.getLayout = (page: ReactElement) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

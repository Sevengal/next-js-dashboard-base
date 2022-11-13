import { NextPageWithLayout } from '../_app';
import React, { ReactElement, useEffect } from 'react';

import PrimaryLayout from '../../layouts/primary/PrimaryLayout';
import ProductService, {
  ProductResponse,
} from '../../lib/services/api/ProductService';

import ProductCard from '../../common/components/ProductCard/ProductCard';
import styles from './ProductPage.module.scss';
import { Container } from 'react-bootstrap';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface ProductsPageProps {
  products?: ProductResponse;
}

export const getStaticProps = async ({ locale }: Record<string, string>) => {
  const products = await ProductService.getProducts();

  return {
    props: {
      products: products,
      ...(await serverSideTranslations(locale, ['home', 'products'])),
    },
  };
};

const ProductsPage: NextPageWithLayout<ProductsPageProps> = ({ products }) => {
  useEffect(() => {
    (async () => {
      // const products = await ProductService.getProducts();
      // console.log(products);
    })();
  });

  return (
    <Container className={styles['products-page']}>
      <div className={styles['products-page__products-row']}>
        {/* indien products null is gaat dit mogelijk fout*/}
        {products?.products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  );
};

export default ProductsPage;

ProductsPage.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

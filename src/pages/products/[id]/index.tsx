import React, { ReactElement } from 'react';
import PrimaryLayout from '../../../layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from '../../_app';
import { Container } from 'react-bootstrap';
import styles from '../ProductPage.module.scss';
import ProductCard from '../../../common/components/ProductCard/ProductCard';
import { Product } from '../../../lib/services/api/ProductService';

import ProductService from '../../../lib/services/api/ProductService';

interface ProductPageProps {
  products?: Product[];
}

export async function getStaticPaths() {
  // When this is true (in preview environments) don't
  // prerender any static pages
  // (faster builds, but slower initial page load)
  // if (process.env.SKIP_BUILD_STATIC_GENERATION) {
  //   return {
  //     paths: [],
  //     fallback: 'blocking',
  //   }
  // }

  // Call an external API endpoint to get products
  const products = await ProductService.getProducts();

  // Get the paths we want to prerender based on posts
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)
  const paths = products?.products?.map((product) => ({
    params: { id: String(product.id) },
  }));

  // { fallback: false } means other routes should 404
  return { paths, fallback: false };
}

export const getStaticProps = async ({
  params,
}: {
  params: {
    id?: string;
  };
}) => {
  const id = params.id;

  const product = id ? await ProductService.getProduct(id) : [];

  return {
    props: {
      products: [product],
    },
  };
};

const ProductPage: NextPageWithLayout<ProductPageProps> = ({ products }) => {
  console.log('sate', products);
  return (
    <Container className={styles['products-page']}>
      <div className={styles['products-page__products-row']}>
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  );
};

export default ProductPage;

ProductPage.getLayout = (page: ReactElement) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

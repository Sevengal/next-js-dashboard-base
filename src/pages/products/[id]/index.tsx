import PrimaryLayout from '@layouts/primary/PrimaryLayout';
import NextPageWithLayout from '@custom-types/NextPageWithLayout';
import ProductCard from '@features/product/ProductCard/ProductCard';
import Product from '@custom-types/product/Product';
import ProductService from '@services/api/ProductService';
import styles from '../ProductPage.module.scss';

import React, { ReactElement } from 'react';
import { Container } from 'react-bootstrap';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface ProductPageProps {
  products?: Product[];
}

interface StaticPathsParams {
  locales: string[];
}

/*
 * GET PATHS TO PRE RENDER AS STATIC PAGES
 */
export async function getStaticPaths({ locales }: StaticPathsParams) {
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
  const paths = products?.products
    .map((product) =>
      locales.map((locale) => ({
        params: { id: String(product.id) },
        locale,
      }))
    ) // flat to avoid nested array
    .flat();

  // { fallback: false } means other routes should 404
  return { paths, fallback: false };
}

export const getStaticProps = async ({
  params,
  locale,
}: {
  params: {
    id?: string;
  };
  locale: string;
}) => {
  const id = params.id;

  const product = id ? await ProductService.getProduct(id) : [];

  return {
    props: {
      products: [product],
      ...(await serverSideTranslations(locale, ['home', 'products'])),
    },
  };
};

const ProductPage: NextPageWithLayout<ProductPageProps> = ({ products }) => {
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

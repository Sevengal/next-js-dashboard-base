import { NextPageWithLayout } from '../_app';
import React, { ReactElement, useEffect } from 'react';
import PrimaryLayout from '../../layouts/primary/PrimaryLayout';
import ProductService, {
  ProductResponse,
} from '../../lib/services/api/ProductService';

interface ProductPageProps {
  products?: ProductResponse;
}

const ProductsPage: NextPageWithLayout<ProductPageProps> = ({ products }) => {
  useEffect(() => {
    (async () => {
      const products = await ProductService.getProducts();
      console.log(products);
    })();
  });

  return (
    <div>
      {products?.products?.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
};

export default ProductsPage;

ProductsPage.getLayout = (page: ReactElement) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export const getStaticProps = async () => {
  const products = await ProductService.getProducts();

  return {
    props: {
      products: products,
    },
  };
};

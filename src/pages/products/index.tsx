import { NextPageWithLayout } from '../_app';
import React, { ReactElement } from 'react';
import PrimaryLayout from '../../layouts/primary/PrimaryLayout';

const ProductsPage: NextPageWithLayout = () => {
  // const [products, setProducts] = useState();
  //
  // useEffect(() => {
  //   return setProducts([{hello: 'dawd'}]);
  // }, []);

  return <div>Products page</div>;
};

export default ProductsPage;

ProductsPage.getLayout = (page: ReactElement) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

import Product from '@custom-types/product/Product';
import Image from 'next/image';
import styles from './PorductCard.module.scss';
import { NAVIGATION_ROUTES } from '@constants/navigation-routes';
import Link from 'next/link';
import useAppSelector from '@hooks/redux/use-app-selector';

import { selectCount } from '@stores/counter/CounterSelectors';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const count = useAppSelector(selectCount);

  return (
    <div className={styles['product-card']}>
      count: {count}
      <Link href={NAVIGATION_ROUTES.product.getPath(product.id)}>
        <div className={styles['product-card__image-container']}>
          <Image
            className={styles['product-card__image']}
            alt="product-image"
            src={product.thumbnail}
            fill
          />
        </div>
        <div className={styles['product-card__detail-container']}>
          <h2 className={styles['product-card__title']}>{product.title}</h2>
          <p>{product.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;

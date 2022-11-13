import { Product } from '../../../lib/services/api/ProductService';
import Image from 'next/image';
import styles from './PorductCard.module.scss';
import { NAVIGATION_ROUTES } from '../../../lib/constants/navigation-routes';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className={styles['product-card']}>
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

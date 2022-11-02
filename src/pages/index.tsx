import PrimaryLayout from '../layouts/primary/PrimaryLayout';
import styles from './index.module.scss';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <section className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

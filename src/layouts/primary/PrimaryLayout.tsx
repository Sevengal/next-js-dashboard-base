import Head from 'next/head';
import styles from './PrimaryLayout.module.scss';
import React from 'react';
import Header from '../../components/ui/header/Header';
import Footer from '../../components/ui/footer/Footer';

interface PrimaryLayoutProps {
  children: React.ReactNode;
}

const PrimaryLayout = ({ children }: PrimaryLayoutProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>Primary Layout Example</title>
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default PrimaryLayout;

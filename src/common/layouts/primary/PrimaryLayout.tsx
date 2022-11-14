import Head from 'next/head';
import styles from './PrimaryLayout.module.scss';
import React from 'react';
import Header from '../../components/ui/header/Header';
import Footer from '../../components/ui/footer/Footer';
import { getNavigationRoutes } from '@constants/navigation-routes';
import NavigationBar from '@components/ui/navigation-bar/NavigationBar';
import { NavigationRouteRenderLocation } from '@custom-types/navigation-routes/NavigationRouteRenderLocation';

interface PrimaryLayoutProps {
  children: React.ReactNode;
}

const PrimaryLayout = ({ children }: PrimaryLayoutProps): JSX.Element => {
  const routes = getNavigationRoutes(
    NavigationRouteRenderLocation.NAVIGATION_BAR
  );

  return (
    <>
      <Head>
        <title>Primary Layout Example</title>
      </Head>
      <NavigationBar routes={routes} />
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default PrimaryLayout;

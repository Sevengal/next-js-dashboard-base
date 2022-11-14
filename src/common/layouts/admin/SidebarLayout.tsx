import Head from 'next/head';
import React, { ReactNode } from 'react';

import styles from './PrimaryLayout.module.css';
import NavigationBar from '@components/ui/navigation-bar/NavigationBar';
import { getNavigationRoutes } from '@constants/navigation-routes';
import { NavigationRouteRenderLocation } from '@custom-types/navigation-routes/NavigationRouteRenderLocation';

export interface IPrimaryLayout {
  children: ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  const routes = getNavigationRoutes(
    NavigationRouteRenderLocation.ADMIN_NAVIGATION_BAR
  );

  return (
    <>
      <Head>
        <title>Primary Layout Example</title>
      </Head>
      <NavigationBar routes={routes} />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default PrimaryLayout;

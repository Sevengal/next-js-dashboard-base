export enum NAVIGATION_ROUTE_RENDER_LOCATION {
  NONE = 'none',
  NAVIGATION_BAR = 'navigationBar',
}

export interface NavigationRoute {
  name: string;
  getPath: (id?: string | number) => string;
  renderLocations: NAVIGATION_ROUTE_RENDER_LOCATION[];
}

/*
 * getPath with id parameter is only used if the renderLocations property is set to NAVIGATION_ROUTE_RENDER_LOCATION.NONE
 */
export const NAVIGATION_ROUTES: Record<string, NavigationRoute> = {
  home: {
    name: 'home',
    getPath: () => '/',
    renderLocations: [NAVIGATION_ROUTE_RENDER_LOCATION.NAVIGATION_BAR],
  },
  products: {
    name: 'products',
    getPath: () => '/products',
    renderLocations: [NAVIGATION_ROUTE_RENDER_LOCATION.NAVIGATION_BAR],
  },
  product: {
    name: 'product',
    getPath: (id) => `/products/${id}`,
    renderLocations: [NAVIGATION_ROUTE_RENDER_LOCATION.NONE],
  },
};

// Mind that the return value is a SHALLOW CLONE
export const getNavigationRoutes = (
  renderLocation: NAVIGATION_ROUTE_RENDER_LOCATION
): NavigationRoute[] =>
  Object.values(NAVIGATION_ROUTES).filter((navigationRoute) =>
    navigationRoute.renderLocations.includes(renderLocation)
  );

export enum NavigationRouteRenderLocation {
  NONE = 'none',
  NAVIGATION_BAR = 'navigationBar',
}

export interface NavigationRoute {
  name: string;
  getPath: (id?: string | number) => string;
  renderLocations: NavigationRouteRenderLocation[];
}

/*
 * getPath with id parameter is only used if the renderLocations property is set to NAVIGATION_ROUTE_RENDER_LOCATION.NONE
 */
export const NAVIGATION_ROUTES: Record<string, NavigationRoute> = {
  home: {
    name: 'home',
    getPath: () => '/',
    renderLocations: [NavigationRouteRenderLocation.NAVIGATION_BAR],
  },
  products: {
    name: 'products',
    getPath: () => '/products',
    renderLocations: [NavigationRouteRenderLocation.NAVIGATION_BAR],
  },
  product: {
    name: 'product',
    getPath: (id) => `/products/${id}`,
    renderLocations: [NavigationRouteRenderLocation.NONE],
  },
};

// Mind that the return value is a SHALLOW CLONE
export const getNavigationRoutes = (
  renderLocation: NavigationRouteRenderLocation
): NavigationRoute[] =>
  Object.values(NAVIGATION_ROUTES).filter((navigationRoute) =>
    navigationRoute.renderLocations.includes(renderLocation)
  );

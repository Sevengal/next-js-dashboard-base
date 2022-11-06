export enum NAVIGATION_ROUTE_RENDER_LOCATION {
  NONE = 'none',
  NAVIGATION_BAR = 'navigationBar',
}

export interface NavigationRoute {
  name: string;
  getPath: (id?: string) => string;
  renderLocations: NAVIGATION_ROUTE_RENDER_LOCATION[];
}

/*
 * getPath with id parameter is only used if the renderLocations property is set to NAVIGATION_ROUTE_RENDER_LOCATION.NONE
 */
export const NAVIGATION_ROUTES: NavigationRoute[] = [
  {
    name: 'home',
    getPath: () => '/',
    renderLocations: [NAVIGATION_ROUTE_RENDER_LOCATION.NAVIGATION_BAR],
  },
  {
    name: 'products',
    getPath: () => '/products',
    renderLocations: [NAVIGATION_ROUTE_RENDER_LOCATION.NAVIGATION_BAR],
  },
  {
    name: 'product',
    getPath: (id) => `/products/${id}`,
    renderLocations: [NAVIGATION_ROUTE_RENDER_LOCATION.NONE],
  },
];

// Mind that the return value is a SHALLOW CLONE
export const getNavigationRoutes = (
  renderLocation: NAVIGATION_ROUTE_RENDER_LOCATION
): NavigationRoute[] =>
  NAVIGATION_ROUTES.filter((navigationRoute) =>
    navigationRoute.renderLocations.includes(renderLocation)
  );

import NavigationRoute from '@custom-types/navigation-routes/NavigationRoute';
import { NavigationRouteRenderLocation } from '@custom-types/navigation-routes/NavigationRouteRenderLocation';
/*
 * getPath with id parameter is only used if the renderLocations property is set to NAVIGATION_ROUTE_RENDER_LOCATION.NONE
 */
export const NAVIGATION_ROUTES: Record<string, NavigationRoute> = {
  product: {
    name: 'product',
    getPath: (id) => `/products${id ? `/${id}` : ''}`,
    renderLocations: [],
  },
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
};

// Mind that the return value is a SHALLOW CLONE
export const getNavigationRoutes = (
  renderLocation: NavigationRouteRenderLocation
): NavigationRoute[] =>
  Object.values(NAVIGATION_ROUTES).filter((navigationRoute) =>
    navigationRoute.renderLocations.includes(renderLocation)
  );

import { NavigationRouteRenderLocation } from '@custom-types/navigation-routes/NavigationRouteRenderLocation';

interface NavigationRoute {
  name: string;
  getPath: (id?: string | number) => string;
  renderLocations: NavigationRouteRenderLocation[];
}

export default NavigationRoute;

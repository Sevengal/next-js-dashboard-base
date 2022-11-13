import {
  getNavigationRoutes,
  NavigationRouteRenderLocation,
} from '@constants/navigation-routes';
import LanguageSwitcher from '@components/ui/language-switcher/LanguageSwitcher';

import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';

const NavigationBar = (): JSX.Element => {
  return (
    <Container fluid>
      <Container>
        <Navbar>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {getNavigationRoutes(
                NavigationRouteRenderLocation.NAVIGATION_BAR
              ).map((navigationRoute) => (
                <Link
                  className="nav-link"
                  key={navigationRoute.name}
                  href={navigationRoute.getPath()}
                >
                  {navigationRoute.name}
                </Link>
              ))}
              <LanguageSwitcher />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </Container>
  );
};

export default NavigationBar;

import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';

import {
  getNavigationRoutes,
  NAVIGATION_ROUTE_RENDER_LOCATION,
} from '../../../lib/constants/navigation-routes';
import LanguageSwitcher from '../language-switcher/LanguageSwitcher';

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
                NAVIGATION_ROUTE_RENDER_LOCATION.NAVIGATION_BAR
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

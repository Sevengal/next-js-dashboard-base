import { NAVIGATION_ROUTES } from '@constants/navigation-routes';
import LanguageSwitcher from '@components/ui/language-switcher/LanguageSwitcher';

import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';
import NavigationRoute from '@custom-types/navigation-routes/NavigationRoute';

interface NavigationBarProps {
  routes: NavigationRoute[];
}

const NavigationBar = ({ routes }: NavigationBarProps): JSX.Element => {
  return (
    <Container fluid>
      <Container>
        <Navbar>
          <Navbar.Brand as={Link} href={NAVIGATION_ROUTES.home.getPath()}>
            LOGO
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {routes.map((navigationRoute) => (
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

import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';
import {
  getNavigationRoutes,
  NAVIGATION_ROUTE_RENDER_LOCATION,
} from '../../../lib/constants/navigation-routes';

interface NavBarProps {
  test?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NavigationBar = ({ test }: NavBarProps): JSX.Element => {
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
              {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">*/}
              {/*  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
              {/*  <NavDropdown.Item href="#action/3.2">*/}
              {/*    NL*/}
              {/*  </NavDropdown.Item>*/}
              {/*  <NavDropdown.Item href="#action/3.3">*/}
              {/*    EN*/}
              {/*  </NavDropdown.Item>*/}
              {/*  <NavDropdown.Divider />*/}
              {/*</NavDropdown>*/}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </Container>
  );
};

export default NavigationBar;

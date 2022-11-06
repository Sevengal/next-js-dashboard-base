import { Container, Row, Col } from 'react-bootstrap';

import NavigationBar from '../navigation-bar/NavigationBar';
import styles from './Header.module.scss';

const Header = (): JSX.Element => {
  return (
    <>
      <NavigationBar />
      <Container fluid className={styles.hero}>
        <Row>
          <Col lg={12}>test header</Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;

import styles from './Footer.module.scss';

import { Container, Row, Col } from 'react-bootstrap';

const Footer = (): JSX.Element => {
  return (
    <Container fluid className={styles.footer}>
      <Container>
        <Row>
          <Col>1</Col>
          <Col>2</Col>
          <Col>3</Col>
        </Row>
      </Container>
    </Container>
  );
};
export default Footer;

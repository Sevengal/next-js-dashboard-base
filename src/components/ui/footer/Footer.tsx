import { Container, Row, Col } from 'react-bootstrap';
import styles from './Footer.module.scss';

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

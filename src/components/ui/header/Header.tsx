import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'next-i18next';

import NavigationBar from '../navigation-bar/NavigationBar';
import styles from './Header.module.scss';

const Header = (): JSX.Element => {
  const { t } = useTranslation('home');

  return (
    <>
      <NavigationBar />
      <Container fluid className={styles.hero}>
        <Row className="justify-content-center h-100">
          <Col className="text-center">
            <p className={styles.hero__title}>{t('header.title')}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;

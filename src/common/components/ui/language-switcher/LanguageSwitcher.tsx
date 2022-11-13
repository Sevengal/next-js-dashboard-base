import styles from './LanguageSwitcher.module.scss';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { Dropdown } from 'react-bootstrap';

function LocaleSwitcher() {
  const router = useRouter();

  const { locales, locale: activeLocale, pathname, query, asPath } = router;

  const unselectedLocales = locales?.filter(
    (locale) => locale !== activeLocale
  );

  return (
    <>
      <Dropdown className={styles['language-switcher']}>
        <Dropdown.Toggle
          variant="link"
          id="languageSwitcher"
          className={styles['language-switcher__toggle']}
        >
          {}
        </Dropdown.Toggle>

        <Dropdown.Menu className={styles['language-switcher__menu']}>
          {unselectedLocales?.map((locale) => (
            <div
              className={styles['language-switcher__menu-option']}
              key={`locale-${locale}`}
            >
              <Link
                className={styles['language-switcher__link']}
                href={{ pathname, query }}
                as={asPath}
                locale={locale}
              >
                {locale}
              </Link>
            </div>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default LocaleSwitcher;

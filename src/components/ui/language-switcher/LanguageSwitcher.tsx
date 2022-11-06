import Link from 'next/link';
import { useRouter } from 'next/router';
import { Dropdown } from 'react-bootstrap';

import styles from './LanguageSwitcher.module.scss';

function LocaleSwitcher() {
  const router = useRouter();

  const { locales, locale: activeLocale, pathname, query, asPath } = router;

  const unselectedLocales = locales?.filter(
    (locale) => locale !== activeLocale
  );

  return (
    <Dropdown className={styles['language-switcher']}>
      <Dropdown.Toggle id="languageSwitcher">Dropdown Button</Dropdown.Toggle>

      <Dropdown.Menu className={styles['language-switcher__options']}>
        {unselectedLocales?.map((locale) => (
          <div
            key={`locale-${locale}`}
            className={styles['language-switcher__option']}
          >
            <Link href={{ pathname, query }} as={asPath} locale={locale}>
              {locale}
            </Link>
          </div>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LocaleSwitcher;

import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
// sections
import { NotFoundView } from 'src/sections/error';

// ----------------------------------------------------------------------

export default function NotFoundPage() {
  const {t} = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('label.404_page_not_found')}</title>
      </Helmet>

      <NotFoundView />
    </>
  );
}

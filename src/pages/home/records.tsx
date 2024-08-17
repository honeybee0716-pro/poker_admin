import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
// sections
import RecordsView from 'src/sections/records/view';

// ----------------------------------------------------------------------

export default function Page() {
  const {t} = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('label.pokerking_admin:_records')}</title>
      </Helmet>

      <RecordsView />
    </>
  );
}

import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
// sections
import UsersView from 'src/sections/users/view';

// ----------------------------------------------------------------------

export default function Page() {
  const {t} = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('label.pokerking_admin:_users')}</title>
      </Helmet>

      <UsersView />
    </>
  );
}

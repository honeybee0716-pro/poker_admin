import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

// sections
import { LoginView } from 'src/sections/auth';

// ----------------------------------------------------------------------

export default function LoginPage() {
  const {t} = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('label.login')}</title>
      </Helmet>

      <LoginView />
    </>
  );
}

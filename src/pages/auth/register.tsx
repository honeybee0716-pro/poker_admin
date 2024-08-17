import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
// sections
import { RegisterView } from 'src/sections/auth';

// ----------------------------------------------------------------------

export default function RegisterPage() {
  const {t} = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('label.register')}</title>
      </Helmet>

      <RegisterView />
    </>
  );
}

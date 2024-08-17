import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
// sections
import BalanceView from 'src/sections/balance/view';

// ----------------------------------------------------------------------

export default function Page() {
  const {t} = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('label.pokerKing_admin:_balance')}</title>
      </Helmet>

      <BalanceView />
    </>
  );
}

import { useTranslation } from 'react-i18next';
import { useIpQuery } from './requests/queries';

function Home() {
  const { t } = useTranslation();
  const { data, isLoading, error } = useIpQuery(true);
  return (
    <>
      <h1>{t('home_title')}</h1>
      {!isLoading && !error && <p>{t('your_ip', { ip: data?.ip })}</p>}
      {error && <p>{error.message}</p>}
    </>
  );
}

export default Home;

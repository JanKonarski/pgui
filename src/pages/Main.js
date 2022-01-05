import { useTranslation } from 'react-i18next';

export default function Main() {
  const {t, i18n} = useTranslation();

  return (
    <p>{t('welcome')}</p>
  );
}

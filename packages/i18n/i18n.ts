import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { kr, en } from './locales';

i18next
  .use(initReactI18next)
  .init({
    resources: { kr, en },
    fallbackLng: 'kr',
    interpolation: {
      escapeValue: false, // React에서는 기본적으로 안전하므로, XSS 공격을 방지하기 위해 이 옵션이 필요하지 않습니다.
    }
  });

export default i18next;

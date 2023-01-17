import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
    fallbackLng: 'en',
    lng: 'en',
    resources: {
      en: {
        translations: require('./i18n/locales/en/translations.json')
      },
      fr: {
        translations: require('./i18n/locales/fr/translations.json')
      }
    },
    ns: ['translations'],
    defaultNS: 'translations'
  });
  
  i18next.languages = ['en', 'fr'];
  
  export default i18next;
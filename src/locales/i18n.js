import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationEn from './lang/en.json'
import translationJa from './lang/ja.json'

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    // we init with resources
    resources: {
      en: {
        translations: translationEn
      },
      ja: {
        translations: translationJa
      },
    },
    fallbackLng: 'ja',
    debug: false,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ','
    },

    react: {
      wait: true
    }
  })

export default i18n

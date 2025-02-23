import i18n from "i18next"
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from "react-i18next"

// Languages
import it from '@app/languages/it.json'
import en from '@app/languages/en.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['it', 'en'],
    resources: {
      en: {
        translation: en
      },
      it: {
        translation: it
      }
    },
    fallbackLng: 'en',
    debug: true,
    keySeparator: '.',
    detection: {
      order: ['querystring', 'localStorage', 'cookie'],
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
    },
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

export default i18n
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import * as translationEn from './locales/en/translation.json'
import * as translationFr from './locales/pl/translation.json'
import * as translationUa from './locales/ua/translation.json'
import * as translationRu from './locales/ru/translation.json'

const availableLanguages = ["en", "pl", "ua", "ru"];
const options = {
  order: [
    "querystring",
    "cookie",
    "localStorage",
    "navigator",
    "htmlTag",
    "path",
    "subdomain",
  ],

  lookupQuerystring: "lng",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  caches: ["localStorage", "cookie"],
  excludeCacheFor: ["cimode"],
  cookieMinutes: 10,
  cookieDomain: "myDomain",

  htmlTag: document.documentElement,
  checkWhitelist: true,
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,
    supportedLngs: availableLanguages,
    detection: options,
    lng: "en",
    resources: {
      en: {
        translation: translationEn,
      },
      pl: {
        translation: translationFr,
      },
      ua: {
        translation: translationUa,
      },
      ru: {
        translation: translationRu,
      },
    },
    ns: ["translation"],
    defaultNS: "translation",
  });

i18n.languages = ["en", "pl", "ua", "ru"];

export default i18n;

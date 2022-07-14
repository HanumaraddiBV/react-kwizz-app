import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import { TRANSLATIONS_EN } from "./en/translation";
import { TRANSLATIONS_SP } from "./spanish/translation";
import { TRANSLATIONS_AR } from "./Arabic/translation";

i18n
  .use(LanguageDetector)

  .use(initReactI18next)

  .init({
    resources: {
      en: { translation: TRANSLATIONS_EN },
      sp: { translation: TRANSLATIONS_SP },
      ar: { translation: TRANSLATIONS_AR },
    },
    fallbackLng: "en",

    debug: true,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

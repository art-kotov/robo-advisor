import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  ar: {
    translation: {
      "Welcome to React": "مرحبًا بك في React",
      EN: "arabic",
    },
  },
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
      EN: "english",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "arab",
    fallbackLng: "arab",
    keySeparator: ".", // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;

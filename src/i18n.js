// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector";

// import translationEn from "./Local/en.json";
// import translationAR from "./Local/ar.json";

// const i18nConfig = {
//   locales: ['en', 'ar'],
//   defaultLocale: 'ar',
//   prefixDefault: false,
// };

// module.exports = i18nConfig;

// const resources = {
//   en: {
//     translation: translationEn
//   },
//   ar: {
//     translation: translationAR
//   },
// };

// i18n
//   .use(LanguageDetector)
//   .use(initReactI18next) 
//   .init({
//     resources,
//     lng: "en", 

//     interpolation: {
//       escapeValue: false 
//     }, 
//     react:{
//         useSuspense: false,
//     }
//   });

//   export default i18n;
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEn from './Local/en.json';
import translationAR from './Local/ar.json';

// Config object for i18n
const i18nConfig = {
  locales: ['en', 'ar'],
  defaultLocale: 'ar',
  prefixDefault: false,
};

// Use ES Module export syntax for the config
export { i18nConfig };

const resources = {
  en: {
    translation: translationEn
  },
  ar: {
    translation: translationAR
  },
};

// Initialize i18n
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ar',  // Set the default language to Arabic (ar)
    interpolation: {
      escapeValue: false,  // React already escapes the values
    },
    react: {
      useSuspense: false,  // Disable Suspense (optional based on your preference)
    },
  });

// Export the i18n instance
export default i18n;

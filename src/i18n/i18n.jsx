import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uzTranslation from "./uz.json";
import enTranslation from "./en.json";
import ruTranslation from "./ru.json"; // Rus tilini import qilish

const resources = {
  uz: { translation: uzTranslation },
  en: { translation: enTranslation },
  ru: { translation: ruTranslation }, // Rus tilini qo‘shish
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "uz", // Standart til
    fallbackLng: "uz",
    interpolation: { escapeValue: false },
  });

export default i18n;

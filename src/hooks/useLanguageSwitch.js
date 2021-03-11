import {useState} from 'react';
import { useTranslation } from "react-i18next";

const useSwitchLanguage = (initialValues) => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(initialValues);

  const handleSwitchLanguage = () => {
    if (currentLang === "en") {
      i18n.changeLanguage("de");
      setCurrentLang("de");
    } else if (currentLang === "de") {
      i18n.changeLanguage("en");
      setCurrentLang("en");
    }
  };

  
  return {
    handleSwitchLanguage,
    currentLang,
  };
}
export default useSwitchLanguage;
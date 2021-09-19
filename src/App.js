import { useState } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { lightTheme, darkTheme, GlobalStyles } from "./Theme.js";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    detection: {
      order: ["htmlTag", "localStorage", "path", "subdomain"],
    },

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
    react: {
      useSuspense: false,
    },
  });

function App() {
  const [theme, setTheme] = useState("light");
  const { t } = useTranslation();
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} t={t} />
    </ThemeProvider>
  );
}

export default App;

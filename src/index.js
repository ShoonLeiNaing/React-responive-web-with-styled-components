import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// function App() {
//   const { t } = useTranslation();

//   return <h2>{t("welcome_text")}</h2>;
// }

// append app to dom

const LoadingText = <h2>Loading</h2>;
ReactDOM.render(
  <Suspense fallback={LoadingText}>
    <App />
  </Suspense>,
  document.getElementById("root")
);

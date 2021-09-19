import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { lightTheme, darkTheme, GlobalStyles } from "./Theme.js";

// const Container = styled.div`
//   height: 100vh;
//   background-color: pink;
// `;

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    console.log("kk");
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} />
    </ThemeProvider>
  );
}

export default App;

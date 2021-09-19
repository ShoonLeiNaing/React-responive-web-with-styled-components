import React, { useState } from "react";
import styled from "styled-components";
import { darkTheme, lightTheme } from "../../Theme";
import { FcLandscape, FcNightLandscape } from "react-icons/fc";
import i18next from "i18next";

const Container = styled.div`
  height: 50px;
  width: 100vw;
  padding: 10px 0px;
  background-color: ${(props) =>
    props.theme === "light" ? lightTheme.color1 : darkTheme.color1};
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 16px;
  transition: all 0.4s;
`;
const Menu = styled.ul`
  display: flex;
  align-items: center;
  text-decoration: none;
  list-style-type: none;
  cursor: pointer;
`;
const MenuItem = styled.li`
  text-decoration: none;
  padding: 0 20px;
  margin: 0 5px;
`;
const IconDiv = styled.div`
  height: 40px;
  width: 40px;
  background-color: ${(props) =>
    props.theme === "light" ? lightTheme.color2 : darkTheme.color2};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  transition: all 0.4s;

  svg {
    font-size: 30px;
    padding-top: 3px;
  }
`;
const RightDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LanguageDiv = styled.div`
  padding: 3px 8px;
  border: ${(props) =>
    props.theme === "light"
      ? `1px solid ${lightTheme.color2}`
      : `1px solid ${darkTheme.color2}`};
  float: right;
  height: fit-content;
  border-radius: 3px;
  margin: 0 20px;
  cursor: pointer;
`;

export const Navbar = ({ theme, toggleTheme }) => {
  const [language, setLanguage] = useState("myan");
  const changeLang = () => {
    if (language === "en") {
      setLanguage("myan");
    } else {
      setLanguage("en");
    }
    i18next.changeLanguage(language);
  };
  return (
    <Container theme={theme}>
      <h1>MEMEs</h1>
      {/* <Menu>
        <MenuItem>Home</MenuItem>
        <MenuItem>Category</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Contact</MenuItem>
      </Menu> */}
      {/* <Button text="Join Now" type="outline" link="#" /> */}
      <RightDiv>
        <LanguageDiv theme={theme} onClick={changeLang}>
          {language}
        </LanguageDiv>
        <IconDiv theme={theme} onClick={toggleTheme}>
          {theme === "light" ? <FcNightLandscape /> : <FcLandscape />}
        </IconDiv>
      </RightDiv>
    </Container>
  );
};

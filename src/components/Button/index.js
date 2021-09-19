import React from "react";
import styled from "styled-components";
import { darkTheme, lightTheme } from "../../Theme";

const MyButton = styled.button`
  font-family: "Urbanist", sans-serif;
  border: 2px solid transparent;
  border-radius: 8px;
  background-color: ${(props) =>
    props.theme === "light" ? lightTheme.color1 : darkTheme.color1};
  color: ${(props) =>
    props.theme === "light" ? lightTheme.color2 : darkTheme.color2};
  padding: 10px 15px;
  font-size: 18px;
  font-weight: 550;
  margin-top: 20px;
  transition: all 0.3s;

  &:hover {
    background-color: ${(props) =>
      props.theme === "light" ? lightTheme.color2 : darkTheme.color2};
    color: ${(props) =>
      props.theme === "light" ? lightTheme.color1 : darkTheme.color1};
    border: ${(props) =>
      props.theme === "light"
        ? `2px solid ${lightTheme.color1}`
        : `2px solid ${darkTheme.color1}`};
  }
`;

export const Button = ({ theme, text }) => {
  return <MyButton theme={theme}>{text}</MyButton>;
};

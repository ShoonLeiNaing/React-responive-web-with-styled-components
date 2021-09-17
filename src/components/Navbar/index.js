import React from "react";
import styled from "styled-components";
import { darkTheme, lightTheme } from "../../Theme";
import { FcLandscape, FcNightLandscape } from "react-icons/fc";
import { Button } from "../Button";
// import Button from "./Navbar";

const Container = styled.div`
  height: 50px;
  padding: 10px 80px;
  background-color: ${(props) =>
    props.theme === "light" ? lightTheme.color1 : darkTheme.color1};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
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

  svg {
    font-size: 30px;
    padding-top: 3px;
  }
`;

export const Navbar = ({ theme, toggleTheme }) => {
  return (
    <Container theme={theme}>
      <h1>MEMEs</h1>
      <Menu>
        <MenuItem>Home</MenuItem>
        <MenuItem>Category</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Contact</MenuItem>
      </Menu>
      {/* <Button text="Join Now" type="outline" link="#" /> */}
      <IconDiv theme={theme} onClick={toggleTheme}>
        {theme === "light" ? <FcNightLandscape /> : <FcLandscape />}
      </IconDiv>
    </Container>
  );
};

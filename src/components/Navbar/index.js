import React from "react";
import styled from "styled-components";
// import Button from "./Navbar";

const Container = styled.div`
  height: 50px;
  padding: 10px 80px;
  background-color: #345b63;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  color: #d4ecdd;
`;
const Logo = styled.h1`
  color: #d4ecdd;
`;
const Menu = styled.ul`
  display: flex;
  align-items: center;
  text-decoration: none;
  list-style-type: none;
`;
const MenuItem = styled.li`
  text-decoration: none;
  padding: 0 20px;
  margin: 0 5px;
`;
const Button = styled.button`
  padding: 10px 17px;
  background-color: #d4ecdd;
  color: #345b63;
  border-radius: 5px;
  border: none;
  font-weight: bold;
`;

export const Navbar = () => {
  return (
    <Container>
      <Logo>MEMEs</Logo>
      <Menu>
        <MenuItem>Home</MenuItem>
        <MenuItem>Category</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Contact</MenuItem>
      </Menu>
      <Button>Join Now</Button>
    </Container>
  );
};

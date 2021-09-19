import React from "react";
import styled from "styled-components";
import { darkTheme, lightTheme } from "../../Theme";
import { Button } from "../Button";
import img1 from "./tom1.jpeg";
import img2 from "./tom2.jpg";

const Wrapper = styled.div`
  height: 80vh;
  color: ${(props) =>
    props.theme === "light" ? lightTheme.color1 : darkTheme.color1};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.4s;
`;

const Image = styled.img`
  height: 250px;
  width: 250px;
  margin: 30px 0;
`;

export const Hero = ({ theme }) => {
  return (
    <Wrapper theme={theme}>
      <Image src={theme === "light" ? img1 : img2}></Image>
      <h1 style={{ textAlign: "center" }}>Memes I can relate to</h1>
      <Button theme={theme} text="See more" />
    </Wrapper>
  );
};

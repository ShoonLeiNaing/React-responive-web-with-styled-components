import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  color1: "#1B435D", //text color
  color2: "#D5EEFF",
  color3: "#FF895D",
  color4: "#78BBE6",
};

export const darkTheme = {
  color1: "#D4ECDD",
  color2: "#112031",
  color3: "#152D35",
  color4: "#345B63",
};

export const GlobalStyles = createGlobalStyle`
    body{
        color:${(props) => props.theme.color2};
        background-color: ${(props) => props.theme.color2};
    }
`;

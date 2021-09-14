import React from "react";
import styled from "styled-components";

const MyButton = styled.button`
  padding: 10px 17px;
  background-color: ${(props) =>
    props.type === "outline" ? "#345b63" : "#d4ecdd"};
  color: ${(props) => (props.type == "outline" ? "#d4ecdd" : "#345b63")};
  border-radius: 5px;
  border: ${(props) =>
    props.type == "outline" ? "1px solid #d4ecdd" : "none"};
  text-decoration: none;
  transition: all 0.4s;

  &:hover {
    background-color: ${(props) =>
      props.type === "outline" ? "#d4ecdd" : "#345b63"};
    color: ${(props) => (props.type === "outline" ? "#345b63" : "#d4ecdd")};
    border: ${(props) =>
      props.type == "outline" ? "none" : "1px solid #d4ecdd"};
  }
`;

//new component with override styles
const DarkButton = styled(MyButton)`
  background-color: #152d35;
  color: #d4ecdd;
  text-decoration: none;
`;

export const Button = ({ text, type, color, link }) => {
  return color == "dark" ? (
    <DarkButton as="a" href={link} type={type}>
      {text}
    </DarkButton>
  ) : (
    <MyButton as="a" href={link} type={type}>
      {text}
    </MyButton>
  );
};

import React from "react";
import styled from "styled-components";

const MyButton = styled.button`
  padding: 10px 17px;
  background-color: ${(props) =>
    props.type == "outline" ? "#345b63" : "#d4ecdd"};
  color: ${(props) => (props.type == "outline" ? "#d4ecdd" : "#345b63")};
  border-radius: 5px;
  border: ${(props) =>
    props.type == "outline" ? "1px solid #d4ecdd" : "none"};
  font-weight: bold;
`;

//new component with override styles
const DarkButton = styled(MyButton)`
  background-color: #152d35;
  color: #d4ecdd;
`;

export const Button = ({ text, type, color }) => {
  return color == "dark" ? (
    <DarkButton type={type}>{text}</DarkButton>
  ) : (
    <MyButton type={type}>{text}</MyButton>
  );
};

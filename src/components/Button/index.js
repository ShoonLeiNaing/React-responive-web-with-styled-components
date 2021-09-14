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

export const Button = ({ text, type }) => {
  return <MyButton type={type}>{text}</MyButton>;
};

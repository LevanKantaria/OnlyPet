import React from "react";
import styled from "styled-components";

interface ButtonProps {
  label: string;
  width?: string;
  onClick: () => void;
  children?: React.ReactNode;
}
const CustomButton = styled.button`
  height: 54px;
  padding: 12px 40px;
  background-color: #134c5f;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 18px;
  font-family: "Josefin Sans", sans-serif;
  box-shadow: 0px 15px 55px -10px rgba(0, 0, 0, 0.15);
  cursor: pointer;

  :hover {
    animation: hover 0.1s ease-in forwards;
  }

 

`;

const Button = (props: ButtonProps) => {
  return <CustomButton onClick={props.onClick}>{props.label}</CustomButton>;
};

export default Button;

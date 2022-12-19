import React from "react";
import styled from "styled-components";

interface FeatureProps {
  label: string;
  icon: string;
  onClick?: () => void;
}
const Wrapper = styled.div`
  /* background-color: #134c5f90; */
  width: 350px;
  height: 100px;
  border-radius: 10px;
  margin-top: 50px;
  box-shadow: 0px 15px 55px -10px rgba(0, 0, 0, 0.15);
  text-align: center;
  padding: 10px 0px 0px;
  font-size: 20px;
  font-family: "Autour One", cursive;
  position: relative;
  cursor: pointer;

  :hover {
    animation: hover 0.1s ease-in forwards;
  }

  @media (max-width: 1024px) {
    width: 80vw;
  }

  @keyframes hover {
    0% {
      transform: scale(1);
      box-shadow: 0px 15px 55px -10px rgba(0, 0, 0, 0.15);

    }

    100% {
      transform: scale(1.05);
      box-shadow: 0px 15px 20px 2px rgba(0, 0, 0, 0.15);
    }
  }
`;

const ImageBox = styled.div`
  position: relative;
  top: -50px;
`;

const Label = styled.div`
  position: relative;
  top: -38px;
`;

const FeatureCard = (props: FeatureProps) => {
  return (
    <Wrapper onClick={props.onClick}>
      <ImageBox>
        <img src={props.icon} alt="decoration" />
      </ImageBox>
      <Label>{props.label}</Label>
    </Wrapper>
  );
};

export default FeatureCard;

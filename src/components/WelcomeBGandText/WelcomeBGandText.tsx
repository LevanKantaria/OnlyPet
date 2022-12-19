import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";

const Wrapper = styled.div`
  position: relative;  
  width: 100%;
  height: 700px;
  background-color: #fdc732;
  background-image: url("https://petsocial.org/wp-content/uploads/2021/09/pet-shop-06.png");
  background-size: cover;
  background-position: 70%;
  background-repeat: no-repeat;
  overflow: hidden;
  @media (max-width: 1024px) {
        height: 1200px;
        background-position: 54%;
  }
`;

const TextAndPaws = styled.div`
  width: 80%;
  max-width: 1000px;
  margin: auto;
  position: relative;
  padding: 2% 0;
  display: flex;
  justify-content: space-between;
  display: flex;
    @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const TextBox = styled.div`
  width: 55%;
  padding-top: 5vw;
  @media (max-width: 1024px) {
        width: 80%;
  }
`;

const Title = styled.h1`
  padding: 0px 0px 10px;
  font-size: 52px;
  text-align: left;
  font-family: "Autour One", cursive;
`;

const ButtonBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`;

const Paragraph = styled.p`
  font-size: 22px;
  text-align: left;
  font-family: "Josefin Sans", sans-serif;
`;

const PawBox = styled.div`
  width: 800px;
  height: 700px;
  position: relative;
  
  top: -35px;
  background-repeat: no-repeat;
  
  background-image: url("https://petsocial.org/wp-content/uploads/2021/09/paws.png");
  @media (max-width: 1024px) {
    background-size:400px;
    top: 35px;
  }
  
`;

const WelcomeBGandText = () => {
  const clickHandler = () => {
    console.log("Joining Now...");
  };
  return (
    <Wrapper>
      <TextAndPaws>
        <TextBox>
          <Title>Everything for your pets in One place</Title>
          <Paragraph>
            OnlyPets is a one-stop project that helps you deal with anything
            that might be related to our little friends. Buying, selling,
            breeding, booking clinics , you name it! We have got you covered
          </Paragraph>
          <ButtonBox>
            <Button label="Join Now for Free" onClick={clickHandler}></Button>
          </ButtonBox>
        </TextBox>
        <PawBox></PawBox>
      </TextAndPaws>
    </Wrapper>
  );
};

export default WelcomeBGandText;

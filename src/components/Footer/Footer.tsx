import React from "react";
import styled from "styled-components";

const BackgroundImage = styled.div`
  position: absolute;

  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSI4MCUiIHZpZXdCb3g9IjAgMCAxMjgwIDE0MCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmZmZmIj48cGF0aCBkPSJNMCAxNDBoMTI4MEM1NzMuMDggMTQwIDAgMCAwIDB6Ii8+PC9nPjwvc3ZnPg==");
  height: 350px;
  background-color: #afd4da61;
  width: 100%;
  background-size: 100% 100%;
  transform: rotateX(180deg);
  z-index: -1;
  @media (max-width: 1024px) {
    transform: rotateX(180deg);
  }
`;

const FooterContent = styled.div`
  display: flex;

  justify-content: space-around;
  z-index: 1;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FooterColumn = styled.div`
  margin-top: 55px;

  text-align: left;
  max-width: 250px;
`;
const Heading = styled.h3`
  font-size: 25px;
  font-family: "Autour One", cursive;
`;
const Paragraph = styled.p`
  font-size: 22px;
  text-align: left;
  font-family: "Josefin Sans", sans-serif;
  color: #25474d;
  cursor: pointer;
`;

const FooterExtension = styled.div`
  position: absolute;
  bottom: 0px;
  height: 577px;
  width: 100%;
  background-color: #afd4da61;
  width: 100%;
  background-size: 100% 100%;
  transform: rotateX(180deg);
  z-index: -1;
  display: none;
  @media (max-width: 1024px) {
    display:block;
    transform: rotateX(180deg);
  }
`;

const EmptyWrapper = styled.div`
    position: relative;
`

const Footer = () => {
  return (
    <EmptyWrapper>
      <BackgroundImage />
      <FooterContent>
        <FooterColumn>
          <Heading>OnlyPets</Heading>
          <Paragraph>
            We are a small team of pet lovers makeing this world a better place
            for pets
          </Paragraph>
        </FooterColumn>
        <FooterColumn>
          <Heading>Contacts</Heading>
          <Paragraph>support@OnlyPets.com</Paragraph>
          <Paragraph>Facebook</Paragraph>
          <Paragraph>Instagram</Paragraph>
        </FooterColumn>
        <FooterColumn />
        <FooterColumn>
          <Heading>Custoomer Service</Heading>
          <Paragraph>Home</Paragraph>
          <Paragraph>About</Paragraph>
          <Paragraph>FAQ</Paragraph>
          <Paragraph>Privacy Policy</Paragraph>
        </FooterColumn>
      </FooterContent>
      <FooterExtension />
    </EmptyWrapper>
  );
};

export default Footer;

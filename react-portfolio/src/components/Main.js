import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// components
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";

const Container = styled.div`
  padding: 2rem;
`;
const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Contact = styled.div`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 3rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;
const Main = () => {
  return (
    <MainContainer>
      <Container>
        <PowerButton />
        <LogoComponent />
        <SocialIcons />

        <Contact>
          <a
            style={{ color: "inherit" }}
            href="mailto:mavropoulos_th@outlook.com"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Say Hi...</h3>
          </a>
        </Contact>
        <Contact>
          <a
            style={{ color: "inherit" }}
            href="mailto:mavropoulos_th@outlook.com"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Say Hi...</h3>
          </a>
        </Contact>
      </Container>
    </MainContainer>
  );
};

export default Main;

import React from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { darkTheme } from "./Themes";

import astronaut from "../assets/Images/spaceman.png";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  overflow: hidden;
`;

const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  img {
    width: 100%;
    height: auto;
  }
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <LogoComponent theme="light" />
      <SocialIcons theme="voop" />
      <PowerButton />

      <Box>
        <ParticleComponent theme="dark" />

        <Spaceman>
          <img src={astronaut} alt="astronaut" />
        </Spaceman>
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;

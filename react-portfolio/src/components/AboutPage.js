import React from "react";
import { keyframes, ThemeProvider } from "styled-components";
import styled from "styled-components";
import { darkTheme } from "./Themes";
import { motion } from "framer-motion";

import astronaut from "../assets/Images/spaceman.png";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  overflow: hidden;
`;

const float = keyframes`
0%{transform:translateY(-10px)}
50%{transform:translateY(15px) translateX(15px)}
100%{transform:translateY(-10px)}

`;
const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;

const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem +1vw);
  backdrop-filter: blur(4px);
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
`;
const SpacemanImg = styled(motion.img)``;

const MotionContainer = {
  hidden: { opacity: 0, width: "0px" },
  show: {
    opacity: 1,
    width: "100%",
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};
const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};
const AboutPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <LogoComponent theme="light" />
      <SocialIcons theme="voop" />
      <PowerButton />

      <Box
        variants={MotionContainer}
        initial="hidden"
        animate="show"
        exit={{
          opacity: 0,
          transition: { duration: 0.5 },
        }}
      >
        <ParticleComponent theme="dark" />

        <Spaceman>
          <SpacemanImg variants={Item} src={astronaut} alt="astronaut" />
        </Spaceman>
        <Main variants={Item}>
          I'm a front-end developer located in Greece. I love to create simple
          yet beautiful websites with great user experience.
          <br />
          <br /> I'm interested in the whole frontend stack Like trying new
          things and building great projects. I love to code, design, read
          books, travel and explore.
          <br />
          <br /> I believe everything is an Art when you put your consciousness
          in it. You can connect with me via social links.
        </Main>
        <BigTitle text="ABOUT" top="10rem" left="5rem" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;

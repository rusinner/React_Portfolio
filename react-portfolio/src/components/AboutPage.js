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
  @media screen and (max-width: 768px) {
    top: 7%;
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
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
  @media screen and (max-width: 768px) {
    height: 50vh;
    left: calc(3rem + 5vw);
  }
`;
const SpacemanImg = styled(motion.img)``;

const MotionContainer = {
  hidden: { opacity: 0, y: "100vh" },
  show: {
    opacity: 1,
    y: "0",

    transition: {
      delayChildren: 1.5,
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};
const Item = {
  hidden: {
    scale: 0,
    x: "110vh",
    y: "130vh",
  },
  show: {
    scale: 1,
    x: "0",
    y: "0",
    transition: {
      type: "spring",
      duration: 2.2,
    },
  },
};
const Text = {
  hidden: {
    scale: 0,
    x: "10vh",
    y: "-50vh",
  },
  show: {
    scale: 1,
    x: "0",
    y: "0",
    transition: {
      type: "spring",
      duration: 5.2,
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

        <Main variants={Text}>
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
        <Spaceman>
          <SpacemanImg variants={Item} src={astronaut} alt="astronaut" />
        </Spaceman>
        <BigTitle text="ABOUT" top="10rem" left="5rem" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
